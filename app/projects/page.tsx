import React from "react";

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      imageUrl: "/images/project1.jpg",
      projectUrl: "https://example1.com",
    },
    {
      id: 2,
      name: "Project 2",
      imageUrl: "/images/project2.jpg",
      projectUrl: "https://example2.com",
    },
    {
      id: 3,
      name: "Project 3",
      imageUrl: "/images/project3.jpg",
      projectUrl: "https://example3.com",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden bg-white rounded-lg shadow-lg group transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <h1>Hello World</h1>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-60 object-cover rounded-t-lg transition-all duration-500 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.name}
                  </h3>
                </div>
              </a>
              <div className="absolute inset-0 bg-black opacity-0 transition-all duration-300 group-hover:opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
