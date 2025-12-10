import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(469) 468-2791",
      href: "tel:+14694682791",
    },
    {
      icon: Mail,
      label: "Email",
      value: "mukeshchandra4409@gmail.com",
      href: "mailto:mukeshchandra4409@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Texas, USA",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Let's discuss your AI and machine learning needs. I'm always
              interested in hearing about new projects and opportunities.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {/* Contact Info */}
              <div className="space-y-6 md:col-span-1">
                <h2 className="text-2xl font-bold text-foreground">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={idx}
                        href={info.href}
                        className="group flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4 hover:border-primary/50 transition-colors"
                      >
                        <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {info.label}
                          </p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <p className="mb-4 font-semibold text-foreground">
                    Connect On Social
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-border bg-card hover:bg-primary hover:text-primary-foreground text-foreground transition-colors"
                          aria-label={link.name}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability */}
                <div className="rounded-lg bg-secondary/10 border border-secondary/30 p-4">
                  <p className="text-sm font-medium text-secondary mb-1">
                    Availability
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Open to discussing AI/ML projects, consulting, and
                    collaboration opportunities
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 md:col-span-2"
              >
                <h2 className="text-2xl font-bold text-foreground">
                  Send Me a Message
                </h2>

                {isSubmitted && (
                  <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-800">
                    <p className="font-medium">Message sent successfully!</p>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary/5 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "What types of projects are you interested in?",
                  a: "I'm interested in AI/ML projects, particularly in healthcare, fintech, and enterprise automation. I'm also open to consulting and knowledge-sharing opportunities.",
                },
                {
                  q: "What's your typical response time?",
                  a: "I aim to respond to inquiries within 24-48 hours. For urgent matters, please mention that in your message.",
                },
                {
                  q: "Do you offer consulting services?",
                  a: "Yes, I offer consulting for AI/ML strategy, architecture, and implementation. Let me know your specific needs.",
                },
                {
                  q: "Are you open to full-time opportunities?",
                  a: "I'm currently employed but open to discussing interesting opportunities. Please reach out with details about your needs.",
                },
                {
                  q: "Can you help with existing ML projects?",
                  a: "Absolutely! I can provide technical guidance, code review, architecture improvements, and performance optimization.",
                },
                {
                  q: "What's your experience with cloud platforms?",
                  a: "I have extensive experience with AWS, Google Cloud Platform, and Microsoft Azure, including deployment and optimization.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-2 font-semibold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
