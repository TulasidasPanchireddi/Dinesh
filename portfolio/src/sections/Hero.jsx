import { Button } from "@/components/Button";
import { ArrowRight,ChevronDown,Github, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState,useEffect } from "react";

const skills = [
  "Python",
  "Django",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "SQL",
  "Node.js",
  "Git"
];


const roles = [
  "Python Full Stack Developer",
  "Front-End Developer"
];

export const Hero = () =>{
      const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);
    return( 
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img src="/projects/neonbackground.jpg" alt="bg" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i)=>{
               return(
                 <div
                 key={i}
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor:"#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    

                }}
                />
               )
            })}
        </div>

        {/* content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16 mt-10 lg:mt-0">
                {/* left column - Text content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span key={roleIndex} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary transition-all duration-500">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse "/>
                            {roles[roleIndex]}
                        </span>
                    </div>
                    {/* headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Hi, I'm <span className="text-primary glow-text">TulasiDas</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">I am a Python Full Stack Developer passionate about building scalable backend systems with Django and creating modern, interactive user interfaces using React.
</p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5"/> 
                            </Button> 
                            <AnimatedBorderButton/>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me:</span>
                        {[
                            {icon:Github,href:"https://github.com/"},
                            {icon:Linkedin,href:"https://www.linkedin.com/in/panchireddi-tulasidas-2546a0270/"},
                           
                        ].map((social,idx)=>(
                            <a  target="_blank"  rel="noopener noreferrer" key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/projects/profile.png" alt="err" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                            {/* floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/* stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">RoboWaves</div>
                                <div className="text-xl text-muted-foreground">Intenship Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                <div className="relative overflow-hidden">
                   <div className="flex animate-marquee">
                    { [...skills,...skills].map((skill,idx)=>(
                    <div key={idx} className="flex-shrink-0 px-8 py-4">
                       <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"> {skill}</span>
                        </div>
                   ))}</div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
)}