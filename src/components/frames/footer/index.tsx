import React, { useState, useEffect } from "react";
import { defaultTheme } from "../../../styles/default";
import {
  Grid2,
  TextField,
  Button,
  Alert,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { FooterContainer } from "./style";
import { Container } from "../../../styles/global";
import { z } from "zod";
import { mailService } from "../../../service/mailService";
import ReCAPTCHA from "react-google-recaptcha";
import { generateMathProblem } from "../../../utils/captcha";

// Create the schema
const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => {
      if (val.length !== 11) return false;
      if (!/^[1-9]{2}9[0-9]{8}$/.test(val)) return false;
      return true;
    }, "Telefone inválido. Digite um número celular válido com DDD"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<z.ZodError | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState({ question: "", answer: "" });
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    setCaptcha(generateMathProblem());
  }, []);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const validate = () => {
    try {
      formSchema.parse(formData);
      setErrors(null);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error);
        setStatus("error");
      }
      return false;
    }
  };

  const clearFieldError = (field: keyof typeof formData) => {
    if (errors) {
      const newErrors = errors.errors.filter((err) => err.path[0] !== field);
      if (newErrors.length === 0) {
        setErrors(null);
      } else {
        setErrors(new z.ZodError(newErrors));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (userAnswer !== captcha.answer) {
      setStatus("error");
      setErrors(
        new z.ZodError([
          {
            code: "custom",
            path: ["captcha"],
            message: "A resposta está incorreta. Tente novamente.",
          },
        ])
      );
      setCaptcha(generateMathProblem());
      setUserAnswer("");
      return;
    }

    setStatus("loading");

    try {
      const formattedData = {
        ...formData,
        phone: formatPhone(formData.phone), // Send formatted phone number
        time: new Date().toLocaleString("pt-BR"), // Add timestamp
        year: new Date().getFullYear().toString(), // Add year for template
        captchaToken, // Add captcha token to the data
      };

      await mailService.sendEmail(formattedData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setUserAnswer("");
      setCaptcha(generateMathProblem());
      setStatus("success");
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("error");
    }
  };

  return (
    <FooterContainer id="contact">
      <Container h1Color={defaultTheme["blue-500"]}>
        <h1>Contato</h1>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={4} sx={{ width: "100%", m: 0 }}>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <TextField
                fullWidth
                label="Nome ✱"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (e.target.value) clearFieldError("name");
                }}
                error={!!errors?.errors.find((err) => err.path[0] === "name")}
                helperText={
                  errors?.errors.find((err) => err.path[0] === "name")?.message
                }
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <TextField
                fullWidth
                label="Email ✱"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (e.target.value) clearFieldError("email");
                }}
                error={!!errors?.errors.find((err) => err.path[0] === "email")}
                helperText={
                  errors?.errors.find((err) => err.path[0] === "email")?.message
                }
              />
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 4 }}>
              <TextField
                fullWidth
                label="Telefone"
                value={formatPhone(formData.phone)}
                onChange={(e) => {
                  const newPhone = e.target.value.replace(/\D/g, "");
                  setFormData({ ...formData, phone: newPhone });
                  if (newPhone) clearFieldError("phone");
                }}
                error={!!errors?.errors.find((err) => err.path[0] === "phone")}
                helperText={
                  errors?.errors.find((err) => err.path[0] === "phone")?.message
                }
                slotProps={{
                  input: {
                    inputProps: {
                      inputMode: "numeric",
                    },
                  },
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Mensagem ✱"
                multiline
                rows={6}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (e.target.value) clearFieldError("message");
                }}
                error={
                  !!errors?.errors.find((err) => err.path[0] === "message")
                }
                helperText={
                  errors?.errors.find((err) => err.path[0] === "message")
                    ?.message
                }
              />
            </Grid2>

            <Grid2 container spacing={2} sx={{ mt: 2, width: "100%" }}>
              <Grid2 size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  label={`Verificação: ${captcha.question}`}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  error={
                    !!errors?.errors.find((err) => err.path[0] === "captcha")
                  }
                  helperText={
                    errors?.errors.find((err) => err.path[0] === "captcha")
                      ?.message ||
                    "Digite o resultado da soma para verificar que você é humano"
                  }
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 8 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={status === "loading"}
                  sx={{
                    py: 2,
                    height: "56px",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    width: "100%",
                  }}
                >
                  {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                </Button>

                {status === "success" && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    ✔️ Mensagem enviada com sucesso!
                  </Alert>
                )}

                {status === "error" && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    <Box>
                      ❌ Ocorreu um erro ao enviar sua mensagem. Por favor,
                      tente novamente.
                    </Box>
                  </Alert>
                )}
              </Grid2>
            </Grid2>
          </Grid2>
        </form>
      </Container>
      <Box
        sx={{
          bgcolor: defaultTheme.whiteGhost,
          py: 3,
          borderTop: `1px solid ${defaultTheme["gray-700"]}`,
          boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
          position: "absolute",
          width: "100%",
          bottom: 0,
          left: 0,
        }}
      >
        <Container>
          <Grid2
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid2>
              <Typography
                variant="body2"
                sx={{
                  color: defaultTheme["gray-400"],
                  fontSize: "0.9rem",
                  fontWeight: 400,
                }}
              >
                © {new Date().getFullYear()} Mais Prevenção. Todos os direitos
                reservados.
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant="body2"
                sx={{
                  color: defaultTheme["gray-400"],
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                Desenvolvido por{" "}
                <Link
                  href="https://www.linkedin.com/in/samuel-adriano-tomimatu-26aa6b185/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: defaultTheme["gray-300"],
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: defaultTheme["blue-500"],
                      textDecoration: "none",
                    },
                  }}
                >
                  Samuel Tomimatu
                </Link>
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </FooterContainer>
  );
}
