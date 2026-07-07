import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid2,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PlaceIcon from "@mui/icons-material/Place";
import SendIcon from "@mui/icons-material/Send";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { z } from "zod";

import { mailService } from "../../../service/mailService";
import { defaultTheme } from "../../../styles/default";
import { Container } from "../../../styles/global";
import { generateMathProblem } from "../../../utils/captcha";
import { FooterContainer } from "./style";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => {
      if (val.length !== 11) return false;
      return /^[1-9]{2}9[0-9]{8}$/.test(val);
    }, "Telefone inválido. Digite um número celular válido com DDD"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

const contactCards = [
  {
    icon: <PlaceIcon />,
    title: "Atendimento",
    text: "Zona Leste de SP, rede parceira e serviço in company.",
    color: defaultTheme["green-300"],
  },
  {
    icon: <PhoneInTalkIcon />,
    title: "Resposta consultiva",
    text: "Analisamos a necessidade antes de indicar a solução.",
    color: defaultTheme["yellow-300"],
  },
  {
    icon: <VerifiedUserIcon />,
    title: "Conformidade",
    text: "Apoio técnico para saúde, segurança e documentação.",
    color: defaultTheme["red-500"],
  },
];

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
  const [captcha, setCaptcha] = useState({ question: "", answer: "" });
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    setCaptcha(generateMathProblem());
  }, []);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const getError = (field: string) =>
    errors?.errors.find((err) => err.path[0] === field)?.message;

  const clearFieldError = (field: keyof typeof formData | "captcha") => {
    if (!errors) return;

    const newErrors = errors.errors.filter((err) => err.path[0] !== field);
    setErrors(newErrors.length ? new z.ZodError(newErrors) : null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (userAnswer.trim() !== captcha.answer) {
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
      await mailService.sendEmail({
        ...formData,
        phone: formatPhone(formData.phone),
        time: new Date().toLocaleString("pt-BR"),
        year: new Date().getFullYear().toString(),
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setUserAnswer("");
      setCaptcha(generateMathProblem());
      setErrors(null);
      setStatus("success");
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("error");
    }
  };

  return (
    <FooterContainer id="contact">
      <Container>
        <Grid2 container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5} sx={{ height: "100%" }}>
              <Typography
                sx={{
                  color: defaultTheme["green-700"],
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                }}
              >
                Contato
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: defaultTheme["blue-700"],
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.08,
                }}
              >
                Vamos entender o que sua empresa precisa prevenir.
              </Typography>
              <Typography
                sx={{
                  color: defaultTheme["gray-600"],
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                Envie uma mensagem com sua necessidade. A equipe da Mais
                Prevenção retorna com uma orientação inicial e o melhor caminho
                para sua operação.
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 1 }}>
                {contactCards.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      alignItems: "flex-start",
                      bgcolor: defaultTheme.white,
                      border: `1px solid ${defaultTheme["gray-100"]}`,
                      borderRadius: 2,
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2,
                        bgcolor: item.color,
                        color: defaultTheme["blue-800"],
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: defaultTheme["blue-700"],
                          fontWeight: 900,
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: defaultTheme["gray-500"],
                          fontWeight: 600,
                          mt: 0.4,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: defaultTheme.white,
                borderRadius: 2,
                p: { xs: 2.5, md: 3 },
                border: `1px solid ${defaultTheme["gray-100"]}`,
                boxShadow: "0 24px 60px rgba(16, 42, 67, 0.12)",
              }}
            >
              <Grid2 container spacing={2.2}>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Nome"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (e.target.value) clearFieldError("name");
                    }}
                    error={!!getError("name")}
                    helperText={getError("name")}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (e.target.value) clearFieldError("email");
                    }}
                    error={!!getError("email")}
                    helperText={getError("email")}
                  />
                </Grid2>

                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Telefone celular"
                    value={formatPhone(formData.phone)}
                    onChange={(e) => {
                      const newPhone = e.target.value.replace(/\D/g, "");
                      setFormData({ ...formData, phone: newPhone });
                      if (newPhone) clearFieldError("phone");
                    }}
                    error={!!getError("phone")}
                    helperText={getError("phone") || "Use DDD + celular"}
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
                    label="Mensagem"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (e.target.value) clearFieldError("message");
                    }}
                    error={!!getError("message")}
                    helperText={getError("message")}
                  />
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 5 }}>
                  <TextField
                    fullWidth
                    label={`Verificação: ${captcha.question}`}
                    value={userAnswer}
                    onChange={(e) => {
                      setUserAnswer(e.target.value);
                      if (e.target.value) clearFieldError("captcha");
                    }}
                    error={!!getError("captcha")}
                    helperText={
                      getError("captcha") ||
                      "Digite o resultado para liberar o envio"
                    }
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 7 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={status === "loading"}
                    endIcon={<SendIcon />}
                    sx={{
                      height: "56px",
                      bgcolor: defaultTheme["blue-500"],
                      "&:hover": { bgcolor: defaultTheme["blue-700"] },
                    }}
                  >
                    {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </Grid2>

                {status === "success" && (
                  <Grid2 size={{ xs: 12 }}>
                    <Alert
                      icon={<MarkEmailReadIcon />}
                      severity="success"
                      sx={{ borderRadius: 2 }}
                    >
                      Mensagem enviada com sucesso.
                    </Alert>
                  </Grid2>
                )}

                {status === "error" && !getError("captcha") && (
                  <Grid2 size={{ xs: 12 }}>
                    <Alert severity="error" sx={{ borderRadius: 2 }}>
                      Não foi possível enviar sua mensagem agora. Revise os
                      campos ou tente novamente em instantes.
                    </Alert>
                  </Grid2>
                )}
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>

      <Box
        sx={{
          bgcolor: defaultTheme["blue-800"],
          mt: 5,
          py: 3,
          borderTop: `5px solid ${defaultTheme["green-300"]}`,
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
                  color: "rgba(255,255,255,0.76)",
                  fontWeight: 600,
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
                  color: "rgba(255,255,255,0.76)",
                  fontWeight: 600,
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
                    color: defaultTheme["yellow-300"],
                    textDecoration: "none",
                    fontWeight: 800,
                    "&:hover": {
                      color: defaultTheme.white,
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
