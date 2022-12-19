import { GoMarkGithub } from "react-icons/go";
import { MdPageview } from "react-icons/md";

// function for Card component
export default function Card(props) {
  return (
    <div className="w-full p-4 text-center bg-gray-800 text-white border rounded-lg shadow-md sm:p-8">
      <h2 className="mb-2 text-3xl font-bold">{props.title}</h2>
      <p>{props.description}</p>
      <div className="flex items-center justify-center space-x-4">
        <a href={props.liveUrl} target="_blank" rel="noreferrer">
          <MdPageview className="opacity-30 hover:opacity-100" size={45} />
        </a>
        <a href={props.githubUrl} target="_blank" rel="noreferrer">
          <GoMarkGithub className="opacity-30 hover:opacity-100" size={35} />
        </a>
      </div>
    </div>
  );
}
