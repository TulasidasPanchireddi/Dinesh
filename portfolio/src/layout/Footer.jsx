import { Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">

      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold">
              Tulasidas Panchireddi
            </h3>

            <p className="text-xs text-muted-foreground">
              Python Full Stack Developer
            </p>
          </div>

          {/* Center Links */}
          <div className="flex gap-4 text-xs text-muted-foreground">

            <a href="#about" className="hover:text-primary transition">
              About
            </a>

            <a href="#projects" className="hover:text-primary transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-primary transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-3">

            <a
              href="https://github.com/TulasidasPanchireddi?tab=repositories"
              target="_blank"
              className="p-1.5 rounded-full glass hover:scale-110 hover:text-primary transition"
            >
              <Github size={16}/>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="p-1.5 rounded-full glass hover:scale-110 hover:text-primary transition"
            >
              <Linkedin size={16}/>
            </a>

            <a
              href="#"
              className="p-1.5 rounded-full glass hover:scale-110 hover:text-primary transition"
            >
              <ArrowUp size={16}/>
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Tulasidas Panchireddi. All rights reserved.
        </div>

      </div>

    </footer>
  );
};