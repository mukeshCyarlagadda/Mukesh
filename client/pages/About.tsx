import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const education = [
    {
      degree: "Master of Science",
      field: "Business Analytics and Artificial Intelligence",
      institution: "The University of Texas at Dallas",
      location: "Richardson, TX",
      coursework: [
        "Applied NLP",
        "Applied Deep Learning",
        "Applied ML",
        "Advance Statistics",
        "Predictive Analytics",
        "A/B testing",
      ],
    },
  ];

  const certifications = [
    "Google Cloud Certified Professional ML Engineer",
    "Oracle Cloud Professional GenAI Engineer",
    "Databricks Associate ML Engineer Certification",
    "LLM Agents by UC Berkeley",
  ];

  const domains = [
    {
      title: "Healthcare AI Automation",
      description:
        "Expertise in healthcare AI automation, particularly in administrative workflow optimization for hospitals and dental clinics, ensuring compliance with regulatory frameworks like HIPAA while delivering measurable operational improvements.",
    },
    {
      title: "Financial Risk Modeling",
      description:
        "Proficient in Python, R, and advanced ML frameworks for financial risk modeling, credit risk assessment, and fraud detection systems with proven track record of improving decision accuracy.",
    },
    {
      title: "Predictive Maintenance",
      description:
        "Experience in manufacturing predictive maintenance, equipped with clinical decision support systems using Power BI and advanced analytics for proactive equipment management.",
    },
    {
      title: "Generative AI & LLMs",
      description:
        "Expert in generative AI technologies and LLM applications, including RAG systems, multi-agent frameworks, and automated document processing for business workflow enhancement.",
    },
    {
      title: "Cloud-Native ML Deployments",
      description:
        "Skilled in cloud-native ML deployments (GCP, AWS, Azure) and MLOps practices for managing complex data pipelines, model versioning, and continuous integration.",
    },
    {
      title: "AI ROI & Impact Analysis",
      description:
        "Proven track record in conducting impact analysis, model performance evaluation, and ROI assessments for AI implementations with cross-functional leadership skills.",
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
              About Me
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Learn about my background, expertise, and journey in AI and
              machine learning
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="space-y-16">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Overview</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm an AI Engineer with 6+ years of progressive experience
                    specializing in healthcare, banking/insurance, and
                    manufacturing domains. My expertise spans machine learning,
                    deep learning, and generative AI solutions aligned with
                    business objectives and regulatory requirements.
                  </p>
                  <p>
                    Throughout my career, I've developed a strong foundation in
                    building production-ready AI systems, from concept to
                    deployment. My approach combines technical excellence with
                    business acumen, ensuring that every solution delivers
                    measurable value and aligns with organizational goals.
                  </p>
                  <p>
                    I'm passionate about leveraging AI to solve complex real-world
                    problems, particularly in automating critical business
                    processes while maintaining compliance and security standards.
                  </p>
                </div>
              </div>

              {/* Areas of Expertise */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Areas of Expertise
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {domains.map((domain, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
                    >
                      <h3 className="mb-2 font-semibold text-foreground">
                        {domain.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {domain.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-border bg-card p-6"
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">{edu.field}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}, {edu.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">
                          Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Certifications
                </h2>
                <div className="grid gap-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <div className="h-3 w-3 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership & Values */}
              <div className="space-y-4 rounded-lg bg-secondary/5 p-8 border border-border">
                <h2 className="text-3xl font-bold text-foreground">
                  Leadership & Values
                </h2>
                <p className="text-muted-foreground">
                  I believe in collaborative problem-solving and continuous
                  learning. With strong cross-functional leadership skills, I
                  drive successful AI transformation initiatives by building
                  trust, fostering innovation, and delivering results that exceed
                  expectations. My approach is data-driven, user-centric, and
                  always focused on creating lasting value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
