import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import Header from "./components/main/HeaderBar/Header";
import Hero from "./components/main/HeroSection/Hero";
import Software from "./components/main/SoftwareSection/Software";
import Work from "./components/main/WorkSection/Work";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <Header />
      <div className="app-container">
        <Hero />
        <Software />
        <Work />
      </div>
    </MantineProvider>
  );
}

export default App;
