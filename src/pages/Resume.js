import resume from "../assets/documents/anisha-resume.pdf";

export default function Resume() {
  return (
    <div className="container mx-auto my-2 max-w-7xl px-2 sm:px-6 lg:px-8">
      <h2 className="text-4xl mb-2 font-bold">Resume</h2>
      <h3 className="text-2xl mb-2 font-bold">Education</h3>
      <p>
        The Coding Boot Camp @ The University of Sydney <br />
        <span className="text-xs italic">July 2022 - Jan 2023</span>
      </p>
      <p>
        Bachelor of Business Studies @ Oxford College, Butwal, Nepal <br />
        <span className="text-xs italic">2013 - 2017</span>
      </p>
      <br />
      <h3 className="text-2xl mb-2 font-bold">Technical skills</h3>
      <ul className="list-disc list-inside">
        <li>Front-end: HTML, CSS, JavaScript, jQuery, React</li>
        <li>Back-end: Node.js, Express</li>
        <li>Database technologies - MySQL, MongoDB</li>
        <li>ORM/ODM - Sequelize, Mongoose</li>
        <li>Deployment - Git, Heroku</li>
      </ul>
      <br />
      <h3 className="text-2xl mb-2 font-bold">Soft skills</h3>
      <ul className="list-disc list-inside">
        <li>Self-motivated and takes initiative</li>
        <li>Quick learner</li>
        <li>Team player</li>
      </ul>
      <br />
      <h3 className="text-2xl mb-2 font-bold">Hobbies</h3>
      <ul className="list-disc list-inside">
        <li>Reading</li>
        <li>Travelling</li>
        <li>Writing journal</li>
      </ul>
      <br />
      <a
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md max-w-fit px-5 py-2.5"
        href={resume}
        download="anisha-resume"
      >
        Download
      </a>
    </div>
  );
}
