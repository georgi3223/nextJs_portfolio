import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer/Footer";

import { Main } from "next/document";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </main>


  );
}
