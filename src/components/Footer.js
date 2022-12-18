import { GoMarkGithub } from "react-icons/go";

export default function Footer() {
  return (
    <div className="footer mx-auto w-full bg-gray-800">
      <div className="relative flex h-16 items-center justify-center">
        <a href="https://github.com/anisha-sapkota">
          <GoMarkGithub className="block h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
}
