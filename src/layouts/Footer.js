import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

// function for Footer component
export default function Footer() {
  return (
    <div className="footer mx-auto w-full bg-gray-800">
      <div className="h-16 flex items-center justify-center space-x-4">
        <a
          target="_blank"
          href="https://github.com/anisha-sapkota"
          rel="noreferrer"
        >
          <GoMarkGithub className="block h-6 w-6 text-white" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/anisha-sapkota-b48ba525a/"
          rel="noreferrer"
        >
          <FaLinkedin className="block h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
}
