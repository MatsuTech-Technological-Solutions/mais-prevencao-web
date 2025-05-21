import { Box } from "@mui/material";
import { Header } from "../../components/header";
import { HomeCarousel } from "../../components/frames/homeCarousel";
import { About } from "../../components/frames/about";
import { Services } from "../../components/frames/services";
import { Footer } from "../../components/frames/footer";

export function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <HomeCarousel />
      <About />
      <Services />
      <Footer />
    </Box>
  );
}
