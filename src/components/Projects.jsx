const Projects = () => {
  const projects = [
    {
      name: "DevMall",
      description:
        "A curated website fetching career/job pages from major tech companies, showcasing real-time opportunities.",
      link: "https://github.com/Sayaniiii08/Dev-Mall",
    },
    {
      name: "Wellify",
      description:
        "A health & wellness platform with interactive animations, dark/light mode toggle, and IoT sensor integration.",
      link: "https://github.com/Sayaniiii08/wellify-health",
    },
    // Add more projects here if needed
  ];

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec] dark:from-[#0f172a] dark:to-[#1e293b] transition-all duration-500">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Projects
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {projects.map(({ name, description, link }, index) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group block p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer no-underline"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
            <p className="mt-4 text-sm text-purple-600 group-hover:text-purple-800 transition-colors">
              View on GitHub &rarr;
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
