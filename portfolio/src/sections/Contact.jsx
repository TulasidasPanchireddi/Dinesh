import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/mojkjyeq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24">

      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT FORM */}
          <div className="glass rounded-2xl p-8
          transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10
          animate-fade-in">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="text-sm text-muted-foreground">Name</label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name..."
                  required
                  className="w-full mt-2 p-3 rounded-lg bg-transparent border border-border
                  focus:border-primary transition"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">Email</label>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full mt-2 p-3 rounded-lg bg-transparent border border-border
                  focus:border-primary transition"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground">Message</label>

                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="w-full mt-2 p-3 rounded-lg bg-transparent border border-border
                  focus:border-primary transition"
                />
              </div>

              {/* Animated Button */}
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-full
                flex items-center justify-center gap-2
                hover:scale-105 hover:shadow-lg hover:shadow-primary/30
                transition-all duration-300"
              >
                Send Message
                <Send size={18}/>
              </button>

              {success && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 p-3 rounded-lg animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

            </form>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* CONTACT INFO */}
            <div className="glass rounded-2xl p-8
            transition-all duration-500
            hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
            animate-fade-in">

              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div className="flex gap-4 items-center group">
                  <Mail className="text-primary group-hover:scale-110 transition"/>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>panchireddi01@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <Phone className="text-primary group-hover:scale-110 transition"/>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>+91 7093193866</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <MapPin className="text-primary group-hover:scale-110 transition"/>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>Moosapet,Hyderabad</p>
                  </div>
                </div>

              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="glass rounded-2xl p-8
            transition-all duration-500
            hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
            animate-fade-in">

              <div className="flex items-center gap-2 mb-3">

                {/* blinking dot */}
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

                <p className="font-medium">Currently Available</p>

              </div>

              <p className="text-muted-foreground">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time developer or freelance consultant,
                let's talk!
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};