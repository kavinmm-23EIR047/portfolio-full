import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaGithub } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    title: "AI-POWERED-STUDENT-ASSESSMENT-TEST-WITH-CHATBOT",
    description: "AI based assement project in hackthon.",
    img: "/images/project1.png",
    github: "https://github.com/kavinmm-23EIR047/AI-POWERED-STUDENT-ASSESSMENT-TEST-WITH-CHATBOT",
  },
  {
    id: 2,
    title: "Completed a Internship in Prodigy InfoTech",
    description: "A various projects in this one month internship",
    img: "/images/project3.png",
    github: "https://github.com/kavinmm-23EIR047/Prodigy-InfoTech",
  },
  {
    id: 3,
    title: "Completed a Internship in codsoft",
    description: "A various projects in this one month internship",
    img: "/images/project2.jpg",
    github: "https://github.com/kavinmm-23EIR047/Codsoft",
  },
  {
    id: 4,
    title: "food-order-website",
    description: "A food-order-website in my college activity",
    img: "/images/project4.png",
    github: "https://github.com/kavinmm-23EIR047/food-order-website",
  },
  {
    id: 5,
    title: "Completed a Internship in codeclause",
    description: "A various projects in this one month internship",
    img: "/images/project5.jpg",
    github: "https://github.com/kavinmm-23EIR047/CodeClause-Internship",
  },
  
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">My Work</h2>
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[70%] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1.3, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          modules={[Pagination, Autoplay]}
          className="relative"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="relative">
              <div className="bg-gray-800 p-5 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md w-full text-sm font-medium hover:bg-blue-600"
                  >
                    <FaGithub className="text-lg" /> View on GitHub
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;