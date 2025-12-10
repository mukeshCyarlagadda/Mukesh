import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const projects = [
    {
      title: "Fine-tuning Vision Transformer for Leaf Disease Detection",
      category: "Computer Vision & Deep Learning",
      description:
        "Fine-tuned a Vision Transformer (ViT) model on the PlantVillage dataset of 18,000+ tomato leaf images for multi-class disease classification.",
      details: [
        "Dataset: 18,000+ tomato leaf images from PlantVillage",
        "Model: Vision Transformer (ViT)",
        "Approach: Transfer learning with custom augmentation techniques",
        "Accuracy: 96.3% (outperforming traditional CNN approaches)",
        "Key Innovation: Custom augmentation for improved generalization",
      ],
      technologies: [
        "PyTorch",
        "Computer Vision",
        "Deep Learning",
        "Transfer Learning",
      ],
      impact:
        "Outperformed traditional CNN approaches in plant disease detection, demonstrating the effectiveness of Vision Transformers for agricultural AI applications.",
    },
    {
      title: "RAG-Enhanced Q/A System",
      category: "Generative AI & NLP",
      description:
        "Built a retrieval-augmented generation (RAG) system using LangChain and OpenAI embeddings for intelligent document search and question answering.",
      details: [
        "Architecture: Vector store with semantic search capabilities",
        "Embeddings: OpenAI embedding model for semantic understanding",
        "Framework: LangChain for orchestration",
        "Indexing: Efficient vector store indexing for fast retrieval",
        "Accuracy Improvement: 87% over baseline methods",
      ],
      technologies: [
        "LangChain",
        "OpenAI",
        "RAG",
        "Vector Databases",
        "Semantic Search",
      ],
      impact:
        "Improved query response accuracy by 87% by combining retrieval with generation, enabling more accurate and contextually relevant answers.",
    },
    {
      title: "Multi-Agent Framework For Restaurant Scoring",
      category: "Multi-Agent Systems",
      description:
        "Developed an AutoGen-based multi-agent system that processes restaurant reviews through sequential inter-agent communication to generate food and service scoring metrics.",
      details: [
        "Framework: AutoGen for multi-agent orchestration",
        "Agents: Specialized agents for sentiment analysis and rating generation",
        "Communication: Sequential inter-agent dialogue for collaborative analysis",
        "Input: Restaurant review texts",
        "Output: Structured food and service scores with confidence metrics",
      ],
      technologies: [
        "AutoGen",
        "Multi-Agent Systems",
        "NLP",
        "Sentiment Analysis",
      ],
      impact:
        "Enabled automated restaurant quality assessment through multi-agent collaboration, reducing manual review analysis time while maintaining high accuracy.",
    },
    {
      title: "Business Intelligence Assistant",
      category: "Generative AI & Data Analytics",
      description:
        "Developed a multi-cloud Business Intelligence Assistant using Streamlit, LangChain, and Python for natural-language database queries across multiple cloud platforms.",
      details: [
        "Platforms: Snowflake, Amazon S3, Google Cloud Storage, and other databases",
        "Interface: Streamlit for user-friendly web interface",
        "Query Engine: Natural language to SQL conversion with validation",
        "Visualization: Dynamic charts using Plotly and Matplotlib",
        "Output: PDF/HTML reports with embedded insights",
        "Workflow: DAG-based orchestration for query processing",
      ],
      technologies: [
        "Streamlit",
        "LangChain",
        "Python",
        "SQL",
        "Snowflake",
        "AWS",
        "GCP",
        "Plotly",
      ],
      impact:
        "Enabled business users to query databases using natural language, democratizing data access and reducing dependency on data engineers.",
    },
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  // Get unique technologies
  const allTechs = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort();

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Projects & Case Studies
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              A selection of academic and notable projects showcasing expertise
              in AI, machine learning, and data engineering
            </p>
          </div>
        </section>

        {/* Projects Accordion */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
                >
                  {/* Project Header Bar */}
                  <button
                    onClick={() => toggleProject(idx)}
                    className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 hover:bg-secondary/5 transition-colors text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                        {project.category}
                      </span>
                      <h2 className="text-xl font-bold text-foreground break-words">
                        {project.title}
                      </h2>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                        expandedProject === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expandable Content */}
                  {expandedProject === idx && (
                    <div className="border-t border-border px-6 md:px-8 py-8 bg-gradient-to-r from-primary/5 to-secondary/5 animate-slide-up">
                      <div className="grid gap-8 md:grid-cols-2">
                        {/* Description & Details */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-2 font-semibold text-foreground">
                              Overview
                            </h3>
                            <p className="text-muted-foreground">
                              {project.description}
                            </p>
                          </div>

                          <div>
                            <h3 className="mb-3 font-semibold text-foreground">
                              Technical Details
                            </h3>
                            <ul className="space-y-2">
                              {project.details.map((detail, i) => (
                                <li
                                  key={i}
                                  className="flex gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="text-primary">•</span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Technologies & Impact */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-3 font-semibold text-foreground">
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-lg bg-white/50 dark:bg-secondary/10 p-4 border border-secondary/30">
                            <h3 className="mb-2 font-semibold text-foreground">
                              Business Impact
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {project.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Context */}
        <section className="bg-secondary/5 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Project Development Approach
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1</span>
                    <span>Problem definition and requirements gathering</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2</span>
                    <span>Data exploration and preprocessing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3</span>
                    <span>Model selection and architecture design</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">4</span>
                    <span>Training, validation, and hyperparameter tuning</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">5</span>
                    <span>Evaluation and performance metrics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">6</span>
                    <span>Deployment and production monitoring</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Key Competencies Demonstrated
                </h2>
                <div className="space-y-3">
                  {[
                    "Advanced Machine Learning Architecture Design",
                    "Computer Vision & Deep Learning",
                    "Generative AI & LLM Applications",
                    "Multi-Agent System Development",
                    "Data Pipeline & ETL Engineering",
                    "Cloud Platform Integration",
                    "Production ML Deployment",
                    "Cross-Domain Problem Solving",
                  ].map((competency) => (
                    <div
                      key={competency}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {competency}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
