import Card from "../components/Card";

// Card details
const cards = [
  {
    title: "Password generator",
    description: "JavaScript application for generating secure passwords.",
    liveUrl: "https://anisha-sapkota.github.io/password-generator/",
    githubUrl: "https://github.com/anisha-sapkota/password-generator",
  },
  {
    title: "Workday scheduler",
    description: "Calendar app for scheduling your workday.",
    liveUrl: "https://anisha-sapkota.github.io/work-day-scheduler/",
    githubUrl: "https://github.com/anisha-sapkota/work-day-scheduler",
  },
  {
    title: "Weather dashboard",
    description: "Weather dashboard application created using OpenWeather API.",
    liveUrl: "https://anisha-sapkota.github.io/weather-dashboard/",
    githubUrl: "https://github.com/anisha-sapkota/weather-dashboard",
  },
  {
    title: "JavaScript quiz",
    description: "Javascript fundamentals quiz game.",
    liveUrl: "https://anisha-sapkota.github.io/javascript-fundamentals-quiz/",
    githubUrl: "https://github.com/anisha-sapkota/javascript-fundamentals-quiz",
  },
  {
    title: "Employee tracker",
    description: "Nodejs application to manage company's employee database.",
    liveUrl: "https://watch.screencastify.com/v/ckwdFMT05DYO7Gr0KSdk",
    githubUrl: "https://github.com/anisha-sapkota/employee-tracker",
  },
  {
    title: "E-commerce backend",
    description:
      "Backend APIs for e-commerce site using express and sequelize.",
    liveUrl: "https://watch.screencastify.com/v/26W6vF37ZrkoI4gRCa5H",
    githubUrl: "https://github.com/anisha-sapkota/ecommerce-backend",
  },
];

export default function Portfolio() {
  return (
    <div className="container grid md:grid-cols-2 gap-2 mx-auto my-2 max-w-7xl px-2 sm:px-6 lg:px-8">
      {/* loop through cards array and render Card for each */}
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          liveUrl={card.liveUrl}
          githubUrl={card.githubUrl}
        />
      ))}
    </div>
  );
}
