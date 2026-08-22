import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/sandesh567-pixel",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sandesh-tiwari-b16a5a337/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:sdhtw567@gmail.com",
    label: "Email",
  },
];

const Footer = () => (
  <footer className="py-12 bg-card border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
        <div>
          <a
            href="#"
            className="text-2xl font-display font-bold gradient-text"
          >
            Sandesh.
          </a>

          <p className="text-muted-foreground text-sm mt-2">
            IT Support, Networking & Web Development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center md:justify-end gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Sandesh Tiwari. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
