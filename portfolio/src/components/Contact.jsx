import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage("✅ Message sent successfully!");
        reset();
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setSuccessMessage("❌ Failed to send message!");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("❌ Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-20 px-5 bg-gray-950 text-white">
      <motion.h2 className="text-4xl font-bold text-center mb-10 text-blue-400">
        Get in Touch
      </motion.h2>

      <motion.div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-xl">
        {successMessage && <p className="mb-4 text-green-400 text-center">{successMessage}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="w-full p-3 bg-gray-700 text-white rounded-md" />
          <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="w-full p-3 bg-gray-700 text-white rounded-md" />
          <textarea {...register("message", { required: true })} placeholder="Your Message" className="w-full p-3 bg-gray-700 text-white rounded-md h-32" />
          
          <motion.button type="submit" className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md">
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
