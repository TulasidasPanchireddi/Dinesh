import { ArrowRight, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI Enhanced Database Query Assistant",
      description:
        "Built an intelligent assistant using Django that converts natural language queries into SQL using GroqAI and LangChain, integrated with an MSSQL database.",
      image: "/projects/ai-database.png",
      tags: ["Django", "MSSQL", "LangChain", "GroqAI"],
      github: "https://github.com/TulasidasPanchireddi/AI_Enhnaced_Database_Query_Assistant",
      link: "#",
    },
    {
      title: "Bank Management System",
      description:
        "Developed a secure banking application using Python and Django with authentication, hashed PIN security, account management, and transaction handling using ORM.",
      image: "/projects/bank-system.png",
      tags: ["Python", "Django"],
      github: "https://github.com/yourusername/bank-management-system",
      link: "#",
    },
    {
      title: "Trello Clone",
      description:
        "Developed a real-time task management application using React with drag-and-drop functionality, routing, authentication, and dynamic state management.",
      image: "/projects/trello-clone.png",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/geethamurthy595/Trello-Project",
      link: "#",
    },
    {
      title: "ShopperStack E-commerce",
      description:
        "Built an e-commerce web application using React with product listing, cart management, authentication, and REST API integration.",
      image: "/projects/shopperstack.png",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/GeethaMurthy-Software-Solutions/Shoppers-Stack",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-72 md:w-96 h-72 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-52 md:w-64 h-52 md:h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-14 md:mb-16">
          <span className="text-secondary-foreground text-xs sm:text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}make an impact.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground animate-fade-in animation-delay-200">
            Following projects showcase my skills and experience through real-world
            examples of my work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 bg-white/10 backdrop-blur rounded-full hover:bg-primary transition"
                  >
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 bg-white/10 backdrop-blur rounded-full hover:bg-primary transition"
                  >
                    <Github size={18} />
                  </a>

                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};