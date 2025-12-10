import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-2 font-bold text-foreground">
              Mukesh Yarlagadda
            </h3>
            <p className="text-sm text-muted-foreground">
              AI Engineer specializing in Machine Learning, Deep Learning, and
              Generative AI solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+14694682791"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (469) 468-2791
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:mukeshchandra4409@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  mukeshchandra4409@gmail.com
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Mukesh Yarlagadda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
