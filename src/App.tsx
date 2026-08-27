import { MantineProvider } from "@mantine/core";
import Header from "./components/main/HeaderBar/Header";
import Hero from "./components/main/HeroSection/Hero";
import Software from "./components/main/SoftwareSection/Software";
import Work from "./components/main/WorkSection/Work";
import DevPortfolio from "./components/main/DevPortfolioSection/DevPortfolio";
import About from "./components/main/AboutSection/About";
import Footer from "./components/main/FooterBar/Footer";

import "./App.css";

function App() {

  return (
    <MantineProvider>
      <Header />
      <div className="app-container">
        <Hero />
        <Software />
        <Work />
        <DevPortfolio />
        <About />
      </div>
      <Footer />
    </MantineProvider>
    
  );
}

export default App;
