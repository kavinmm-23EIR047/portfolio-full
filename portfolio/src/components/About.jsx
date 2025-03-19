import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="/images/about.jpg" 
            alt="Profile" 
            className="rounded-xl shadow-lg w-72 md:w-96"
          />
        </motion.div>

        {/* Right Side - About Text */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-lg mb-4">
  I’m <span className="text-blue-400 font-semibold">Kavin M M</span>, an aspiring <span className="text-blue-400 font-semibold">Software Development Engineer</span> and <span className="text-blue-400 font-semibold">Electronics & Industrial Automation Engineer</span>, currently pursuing a BE in Electronics and Instrumentation Engineering (EIE). As the founder of <span className="text-blue-400 font-semibold">AK WebFlair Technologies</span> and a dedicated <span className="text-blue-400 font-semibold">freelancer</span>, I work on diverse projects that blend technology, automation, and innovation.
</p>
<p className="text-gray-300 text-lg mb-4">
  With a strong passion for software development and AI, I have successfully completed four online web development internships and participated in a national-level software hackathon at Amrita University. My technical expertise includes Java, Python, MERN stack, Figma, Photoshop, and Premiere Pro.
</p>
<p className="text-gray-300 text-lg">
  I am committed to bridging the gap between software and industrial automation, leveraging my skills to develop cutting-edge applications that drive efficiency and innovation.
</p>



        </motion.div>

      </div>
    </section>
  );
};

export default About;
