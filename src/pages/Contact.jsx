import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="scroll-mt-24 border-t border-gray-300 dark:border-gray-700 py-12 px-4">
    <h3 className="text-2xl font-semibold mb-4">Contact</h3>
    <ul className="space-y-2 text-gray-800 dark:text-gray-200">
      <li className="flex items-center gap-2">
        <FaEnvelope className="text-blue-500" />
        <a href="mailto:changdreamdev@gmail.com" className="hover:underline">changdreamdev@gmail.com</a>
      </li>
      <li className="flex items-center gap-2">
        <FaPhone className="text-blue-500" />
        <span>+1 315 640 4076</span>
      </li>
      <li className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-blue-500" />
        <span>Cluj-Napoca, Romania</span>
      </li>
      <li className="flex items-center gap-2">
        <FaGithub className="text-blue-500" />
        <a href="https://github.com/ChangDreamDev" className="hover:underline">@ChangDreamDev</a>
      </li>
    </ul>
  </section>
);

export default Contact;