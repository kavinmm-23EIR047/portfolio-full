import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaVideo } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode size={50} className="text-blue-400" />,
    title: "Web Design",
    description: "Modern and responsive websites.",
  },
  {
    id: 2,
    icon: <FaMobileAlt size={50} className="text-green-400" />,
    title: "App Development",
    description: "Cross-platform mobile applications.",
  },
  {
    id: 3,
    icon: <FaPaintBrush size={50} className="text-yellow-400" />,
    title: "Graphic Design",
    description: "Logos, banners, and branding.",
  },
  {
    id: 4,
    icon: <FaVideo size={50} className="text-red-400" />,
    title: "Video Editing",
    description: "Professional video editing services.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Services
      </motion.h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          550: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="w-full max-w-6xl mx-auto"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Fix: Moves Below */}
      <div className="mt-8 flex justify-center">
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Services;
