// File: src/pages/About.jsx
import React from "react";
import profilePhoto from "../assets/profile.jpg"; // Add your photo to /public or /src/assets

const About = () => (
  <section
    id="about"
    className="scroll-mt-24 border-t border-gray-300 dark:border-gray-700 py-12"
  >
    <div className="flex flex-col md:flex-row items-center gap-8 px-4">
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={profilePhoto}
          alt="Chang Chen"
          className="rounded-2xl shadow-lg w-48 h-48 object-cover border-4 border-blue-500"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I’m Chang Chen, a seasoned Full-stack Developer and Technical Lead with over a decade of experience crafting powerful web applications. My expertise lies in JavaScript ecosystems, scalable frontend architectures, and intuitive user interface design.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I have extensive experience building both responsive web apps and cross-platform hybrid mobile apps using frameworks like React Native and Ionic. I'm particularly passionate about creating seamless user experiences across devices and delivering maintainable, high-quality codebases.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          My toolkit includes React, Vue, Angular, Node.js, and other modern technologies. I'm always pushing boundaries and enjoy working in collaborative, fast-paced environments.
        </p>
      </div>
    </div>
  </section>
);

export default About;