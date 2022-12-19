import avatar from "../assets/images/avatar.jpeg";

export default function About() {
  return (
    <div className="container mx-auto my-2 max-w-7xl px-2 sm:px-6 lg:px-8">
      <h2 className="text-4xl mb-2 font-bold">About Me</h2>
      <img
        className="rounded-full mb-2"
        height={150}
        width={150}
        src={avatar}
        alt="Anisha avatar"
      />
      <p>
        Hi all, I am Anisha Sapkota, self motivated aspiring full stack web
        developer who loves to learn and explore new ideas and technologies.
      </p>
      <br />
      <p>
        Looking for a role in an established IT company with the opportunity to
        learn and grow by working with the latest technologies, and on
        challenging and diverse projects.
      </p>
      <br />
      <p>
        Apart from coding, I love reading, travelling and writing journal. If I
        had to describe myself in few words, it would be - family person and
        photography enthusiastic.
      </p>
    </div>
  );
}
