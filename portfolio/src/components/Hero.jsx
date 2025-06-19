import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
      {/* Animated Text */}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        I'm a{" "}
        <span className="text-blue-400">
          <Typewriter
            words={[
              "Creative Designer",
              "Web Developer",
              "App Developer",
              "Graphic Designer",
              "Video Editor",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-300 text-sm md:text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        I am a passionate creative designer with expertise in Web, App, Graphic Design, and Video Editing.
      </motion.p>

   {/* CTA Buttons */}
<div className="mt-6 flex gap-4">
  <a href="/kavinresumeintern.pdf" download target="_blank" rel="noopener noreferrer">
    <motion.button
      className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-lg font-semibold transition-transform"
      whileHover={{ scale: 1.1 }}
    >
      Resume
    </motion.button>
  </a>

        {/* Contact Us Button with Scroll */}
        <motion.button
          className="px-6 py-2 bg-gray-500 hover:bg-green-600 rounded text-lg font-semibold transition-transform"
          whileHover={{ scale: 1.1 }}
          onClick={scrollToContact}
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
