import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SpotlightHeading from "./Spotlight";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 "
    >
      <img
        src="/prof.jpg" // Replace with your image path in public/
        alt="Shri's Profile"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-md object-cover mb-4 "
      />
      <SpotlightHeading />
      <p className="text-lg sm:text-xl text-center text-gray-700 dark:text-muted-foreground mb-2 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        I'm Shrinivasan
      </p>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        Aspiring Data Scientist | ML Enthusiast
      </p>
      <a
        href="/Shrinivasan resume (2).pdf "
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
      <div className="flex gap-6 mt-6 text-3xl text-gray-700 dark:text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <a
          href="https://github.com/ShrinivasanT"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:hover:text-blue-200 hover:text-blue-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:shrinivasanthevar@gmail.com"
          className="dark:hover:text-blue-200 hover:text-blue-600 transition"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/shrinivasan-thevar-428108295/"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:hover:text-blue-200 hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/shrinivasan_._thevar/"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:hover:text-blue-200 hover:text-blue-600 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Hero;
