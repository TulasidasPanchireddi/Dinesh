export const About = () => {
  const skills = [
    "Python",
    "Django",
    "React",
    "JavaScript",
    "SQL",
    "Tailwind CSS",
    "Node.js",
    "Git",
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Title */}
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Highly motivated and detail-oriented Computer Science postgraduate
            seeking an entry-level Python Developer role to apply my skills in
            Python, Django, and modern web technologies to build scalable and
            efficient web applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="animate-slide-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Python Full Stack Developer
            </h3>

            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              I am passionate about building modern and responsive web
              applications. I enjoy solving problems and creating efficient
              backend systems along with engaging user interfaces.
            </p>

            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              My technical skills include Python, Django, React, JavaScript,
              SQL, and modern frontend frameworks. I focus on writing clean,
              maintainable, and scalable code while delivering great user
              experiences.
            </p>

            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              I also gained practical industry exposure through my React JS
              internship at 
              <span className="font-medium text-foreground"> Robowaves</span>,
              where I developed responsive user interfaces and strengthened my
              frontend development skills using modern web technologies.
            </p>

            <p className="text-muted-foreground text-sm md:text-base">
              I continuously explore new technologies and improve my
              development skills to build impactful digital solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 animate-slide-right">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass rounded-xl px-5 py-4 text-center text-sm md:text-base font-medium
                hover:bg-primary/10 hover:text-primary
                hover:scale-105 hover:-translate-y-1
                transition-all duration-300 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};