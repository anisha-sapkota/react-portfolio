import { GoMarkGithub } from "react-icons/go";

export default function Footer() {
  return (
    <div className="footer mx-auto w-full bg-gray-800">
      <div className="h-16 flex items-center justify-center">
        <a
          target="_blank"
          href="https://github.com/anisha-sapkota"
          rel="noreferrer"
        >
          <GoMarkGithub className="block h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
}
