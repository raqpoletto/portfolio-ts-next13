import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Raquel's Portfolio</title>
      </Head>

      {/* <h1 className="text-red-500">Let's have fun coding! Yey 😜</h1> */}

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
