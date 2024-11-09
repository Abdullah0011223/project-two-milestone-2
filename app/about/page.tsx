import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
          {/* Left Column: Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Zt1m_y6rwAPieK4imfrYk4rQUWYLjE3Ssu158Xy5JLOqBwlUraRtjgW0E5BgPHt2Lxc&usqp=CAU" // Add your image here
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full mx-auto lg:mx-0 border-4 border-indigo-600 shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-center lg:text-left text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              I am a passionate web developer with a strong foundation in frontend technologies like React, TypeScript, and JavaScript. My aim is to create web applications that are not only functional but also user-friendly and visually appealing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With experience in both frontend and backend development, I am capable of building full-stack applications using Node.js, Express, and MongoDB. I am constantly learning and keeping up with new web technologies to improve my skills.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>HTML, CSS, JavaScript</li>
              <li>React & TypeScript</li>
              <li>Node.js & Express</li>
              <li>MongoDB & PostgreSQL</li>
              <li>Git & GitHub</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
