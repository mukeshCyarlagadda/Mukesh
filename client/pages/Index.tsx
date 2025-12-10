import { Link } from "react-router-dom";
import { ArrowRight, Code, Brain, Zap, Award } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Index() {
  const skills = {
    "Programming & ML": [
      "Python",
      "R",
      "SQL",
      "SAS",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face",
    ],
    "AI & Frameworks": [
      "LangChain",
      "spaCy",
      "NLTK",
      "LangGraph",
      "AutoGen",
      "crewAI",
      "LLM Agents",
      "RAG Systems",
    ],
    "Cloud & Data": [
      "AWS",
      "GCP",
      "Azure",
      "Kubernetes",
      "MySQL",
      "MongoDB",
      "Snowflake",
      "BigQuery",
    ],
    "Tools & Methods": [
      "MLOps",
      "Tableau",
      "Power BI",
      "Jira",
      "Docker",
      "CI/CD",
      "A/B Testing",
      "Statistical Analysis",
    ],
  };

  const experiences = [
    {
      title: "AI Engineer",
      company: "Tensorlinks Inc",
      period: "April 2024 – Present",
      location: "TX",
      highlights: [
        "Architected production-ready conversational AI system serving 500+ dental clinics",
        "Built multi-modal voice assistant using OpenAI GPT-4 Realtime API with 95% completion rate",
        "Deployed scalable microservices on GCP with Kubernetes, achieving 99.5% uptime",
      ],
    },
    {
      title: "ML Engineer",
      company: "Cognizant Technology Solutions",
      period: "Jan 2019 – Jul 2022",
      location: "India",
      highlights: [
        "Developed credit risk assessment models improving loan approval accuracy by 8%",
        "Built fraud detection system reducing false positives by 15%",
        "Created automated ETL pipelines processing daily transaction data",
      ],
    },
    {
      title: "Data Analyst",
      company: "Prathibha Biotech Pvt Ltd",
      period: "Aug 2017 – Nov 2018",
      location: "India",
      highlights: [
        "Analyzed fertilizer production data improving quality control reducing defects by 6%",
        "Developed predictive models for seasonal demand forecasting achieving 72% accuracy",
        "Created automated reporting pipelines reducing manual data prep time by 35%",
      ],
    },
  ];

  const projects = [
    {
      title: "Fine-tuning Vision Transformer for Leaf Disease Detection",
      description:
        "Fine-tuned Vision Transformer model on 18,000+ tomato leaf images achieving 96.3% accuracy, outperforming traditional CNN approaches.",
      tags: ["Computer Vision", "PyTorch", "Deep Learning"],
    },
    {
      title: "RAG-Enhanced Q/A System",
      description:
        "Built document retrieval system using LangChain and OpenAI embeddings with vector store indexing, improving query accuracy by 87%.",
      tags: ["LLM", "RAG", "LangChain", "AI"],
    },
    {
      title: "Multi-Agent Restaurant Scoring Framework",
      description:
        "Developed AutoGen-based multi-agent system processing reviews through sequential inter-agent communication for sentiment analysis.",
      tags: ["Multi-Agent", "AutoGen", "NLP"],
    },
    {
      title: "Business Intelligence Assistant",
      description:
        "Created multi-cloud BI assistant connecting to Snowflake, S3, GCS with natural-language queries and automated report generation.",
      tags: ["LLM", "Streamlit", "Data Analytics", "SQL"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="animate-slide-up space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Welcome to my portfolio
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                AI Engineer & Machine Learning Specialist
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                6+ years of progressive experience specializing in healthcare,
                banking/insurance, and manufacturing domains. Expert in machine
                learning, deep learning, and generative AI solutions.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-medium text-primary hover:bg-primary/5 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  About Me
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm an AI Engineer with a passion for solving complex
                    business problems through machine learning and artificial
                    intelligence. With 6+ years of experience across healthcare,
                    financial services, and manufacturing, I've developed a deep
                    expertise in building production-ready AI systems.
                  </p>
                  <p>
                    My specialization includes healthcare AI automation,
                    particularly administrative workflow optimization for
                    hospitals and dental clinics while ensuring regulatory
                    compliance (HIPAA). I'm proficient in Python, R, and
                    advanced ML frameworks including PyTorch, TensorFlow, and
                    Hugging Face.
                  </p>
                  <p>
                    I excel at designing and implementing generative AI
                    solutions, including RAG systems, multi-agent frameworks,
                    and automated document processing. I'm skilled in
                    cloud-native ML deployments (GCP, AWS, Azure) and MLOps
                    practices for managing complex data pipelines.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-6">
                  <Code className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold text-foreground">
                    Technical Expertise
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Python, R, SQL, PyTorch, TensorFlow, and advanced ML
                    frameworks
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <Brain className="mb-3 h-8 w-8 text-secondary" />
                  <h3 className="mb-2 font-semibold text-foreground">
                    AI Specialization
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Generative AI, LLMs, RAG systems, multi-agent frameworks
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <Zap className="mb-3 h-8 w-8 text-accent" />
                  <h3 className="mb-2 font-semibold text-foreground">
                    Cloud & MLOps
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    GCP, AWS, Azure, Kubernetes, Docker, CI/CD pipelines
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-3 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">6+</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Years Experience
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Progressive experience across multiple domains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-secondary/5 py-20 md:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border bg-card p-6 md:p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="mb-4 flex flex-col justify-between md:flex-row md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-muted-foreground text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
              >
                View Full Experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
              Skills & Technologies
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <h3 className="mb-4 font-semibold text-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
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

        {/* Projects Section */}
        <section className="bg-secondary/5 py-20 md:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
              Academic & Notable Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
                >
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/90 to-secondary/90 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
              Let's discuss how I can help bring your AI and machine learning
              projects to life
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-8 py-3 font-medium text-primary hover:bg-white transition-colors"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
