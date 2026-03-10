export const Experience = () => {

  const experiences = [
    {
      role: "React JS Intern",
      company: "Robowaves",
      duration: "26 Jan 2026 – Present",
      description:
        "Worked as a React JS intern where I developed responsive user interfaces, built reusable components, and gained hands-on experience with modern web development using React. I also worked with backend technologies like Node.js and integrated REST APIs to build dynamic full-stack applications.",
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "REST APIs",
        "Frontend Development"
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 blur-3xl rounded-full"/>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-highlight/5 blur-3xl rounded-full"/>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm tracking-wider uppercase text-secondary-foreground animate-fade-in">
            My Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Professional
            <span className="italic font-serif text-white"> Experience</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My professional experience includes working with modern web technologies
            to build responsive applications and gain practical industry exposure.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl p-8 mb-8 animate-fade-in
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
              hover:border hover:border-primary/30"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">

                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>

                  <p className="text-primary font-medium group-hover:scale-105 transition-transform">
                    {exp.company}
                  </p>
                </div>

                <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary
                    transition-all duration-300
                    hover:bg-primary hover:text-white hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};