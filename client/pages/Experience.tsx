import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "AI Engineer",
      company: "Tensorlinks Inc",
      period: "April 2024 – Present",
      location: "TX",
      description:
        "Leading AI engineering initiatives for dental practice management solutions. Architecting and deploying production-ready conversational AI systems serving 500+ dental clinics.",
      achievements: [
        "Architected production-ready conversational AI system 'TensorSpace' for dental practice management, serving 500+ dental clinics with real-time voice and text AI interactions, reducing appointment scheduling overhead by 60%",
        "Built multi-modal voice assistant using OpenAI GPT-4 Realtime API with WebSocket streaming and Twilio telephony infrastructure, processing 10,000+ patient calls monthly with 95% conversation completion rate",
        "Developed sophisticated multi-agent framework with 30+ custom function tools for dental operations including appointment scheduling, patient data retrieval, and treatment plan management, improving operational efficiency by 45%",
        "Implemented voice AI pipeline with server-side Voice Activity Detection (VAD), Whisper-1 audio transcription, and μ-law audio format processing, achieving 92% speech recognition accuracy for healthcare-specific terminology",
        "Engineered dynamic agent switching system between OpenDental and NexHealth PMS providers based on configuration, enabling seamless integration across diverse practice management systems",
        "Created AI-powered analytics platform processing voice conversations to extract patient sentiment, appointment outcomes, and operational metrics, providing actionable insights through Power BI dashboards with 15+ KPIs",
        "Deployed scalable microservices architecture on Google Cloud Platform with Kubernetes orchestration, managing 15+ containerized AI services with 99.5% uptime and auto-scaling capabilities",
        "Architected patient data processing pipeline integrating OpenDental and NexHealth APIs with real-time synchronization, ensuring HIPAA-compliant data handling and reducing data processing time by 70%",
        "Implemented comprehensive MLOps pipeline with Firestore data persistence, Redis caching, BigQuery analytics, and Cloud Storage, supporting automated model retraining and deployment cycles",
        "Built CI/CD automation for AI service deployment using Docker containerization and Cloud Build integration, reducing deployment time from hours to minutes while maintaining production stability",
        "Developed automated patient engagement system with AI-generated personalized communications and appointment reminders, increasing patient show-up rates by 35%",
        "Conducted cost-benefit analysis demonstrating average ROI of 300% for dental practices through reduced administrative costs, improved patient scheduling efficiency, and enhanced patient communication workflows",
      ],
    },
    {
      id: 2,
      title: "ML Engineer",
      company: "Cognizant Technology Solutions",
      period: "Jan 2019 – Jul 2022",
      location: "India",
      description:
        "Developed and deployed machine learning solutions for banking and financial services clients, focusing on risk assessment, fraud detection, and process optimization.",
      achievements: [
        "Developed and deployed credit risk assessment models using Python and scikit-learn for a major banking client, improving loan approval decision accuracy by 8% through feature engineering and ensemble methods",
        "Built fraud detection system using anomaly detection algorithms and SQL queries on transaction data, reducing false positive alerts by 15% and supporting the compliance team's daily monitoring workflows",
        "Developed ETL pipelines and data models using Python scripts on AWS EC2 instances, processing data from MySQL databases in AWS RDS to generate analytical reports for banking operations",
        "Enhanced existing risk models through feature optimization and algorithm tuning, boosting loan conversion rates by 2% while simultaneously reducing overall portfolio risk by 2%",
        "Created automated data pipelines using Python scripts and Apache Airflow for ETL processes, processing daily transaction files and reducing manual data preparation time by 40%",
        "Developed predictive model for loan disbursement process optimization, reducing loan cancellations by 55% through better validation of customer bank account information and payment routing",
        "Built machine learning models for customer churn prediction using logistic regression and random forest algorithms, identifying key factors influencing customer retention for the analytics team",
        "Optimized data acquisition costs by evaluating and integrating lower-cost third-party data sources, achieving $2 per application savings while maintaining data quality and predictive model performance",
        "Implemented customer segmentation models using clustering techniques (K-means, hierarchical clustering) on demographic and transaction data, enabling targeted marketing campaigns for banking products",
        "Collaborated with business analysts and domain experts to understand banking workflows, translating business requirements into technical ML solutions for loan processing systems",
        "Conducted model validation and performance monitoring using cross-validation techniques, ensuring model stability and documenting results for stakeholder reviews",
        "Utilized Azure cloud services for model deployment and data storage, working with DevOps teams to maintain production ML pipelines serving daily predictions",
      ],
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Prathibha Biotech Pvt Ltd",
      period: "Aug 2017 – Nov 2018",
      location: "India",
      description:
        "Performed comprehensive data analysis on agricultural production data, developing predictive models and reporting solutions for fertilizer and pesticide manufacturing operations.",
      achievements: [
        "Performed comprehensive data analysis on fertilizer and pesticide production data using Python and R, identifying quality control patterns and process optimization opportunities that reduced defect rates by 6%",
        "Developed customer segmentation models using clustering algorithms for agricultural distribution channels, analyzing 15,000+ farmer and distributor records to optimize sales territory allocation and improve targeting efficiency",
        "Created automated reporting pipelines using Python scripts and SQL queries, reducing manual data preparation time by 35% and enabling daily production monitoring dashboards for fertilizer manufacturing operations",
        "Conducted detailed data analysis using SQL queries and visualized insights with Power BI to deliver interactive dashboards, tracking production KPIs and performance metrics, enhancing data-driven decision-making for agricultural product manufacturing",
        "Applied Waterfall methodologies to gather requirements and engage stakeholders through 5+ workshops, ensuring alignment with business goals throughout project lifecycles using Microsoft Project for task tracking and milestone management",
        "Built predictive models for seasonal demand forecasting of fertilizers and pesticides using time series analysis, incorporating agricultural cycles and weather patterns to achieve 72% forecast accuracy",
        "Leveraged advanced Excel techniques such as pivot tables, VLOOKUP, and macros to analyze production data, automate reporting workflows, and enhance agricultural product manufacturing process monitoring",
        "Implemented data quality assurance processes for regulatory compliance in pesticide manufacturing, ensuring adherence to agricultural safety standards and reducing data validation errors by 18%",
        "Collaborated with manufacturing teams to analyze equipment performance data for fertilizer production lines, identifying maintenance patterns and supporting predictive maintenance initiatives",
        "Authored key documentation (BRD & FRD) using Microsoft Word, ensuring clarity and alignment with business and technical requirements, improving stakeholder communication and project transparency",
        "Created visualizations and reports for management stakeholders, presenting insights on production efficiency, crop season planning, and inventory optimization recommendations for agricultural products",
        "Supported cross-functional teams in data collection and analysis for process improvement initiatives, contributing to overall operational efficiency improvements across fertilizer and pesticide manufacturing units",
      ],
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
              Professional Experience
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              6+ years of progressive experience across healthcare, financial
              services, and manufacturing sectors
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 px-6 md:px-8 py-6 md:py-8 border-b border-border">
                    <div className="flex flex-col justify-between md:flex-row md:items-start gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">
                          {exp.title}
                        </h2>
                        <p className="text-lg text-primary font-semibold mt-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {exp.period} • {exp.location}
                        </p>
                      </div>
                      <div className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full w-fit font-medium">
                        {idx === 0 ? "Current" : "Past"}
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="px-6 md:px-8 py-8">
                    <h3 className="mb-4 font-semibold text-foreground">
                      Key Achievements & Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground text-sm"
                        >
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Summary */}
        <section className="bg-secondary/5 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Impact & Metrics
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">60%</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reduction in appointment scheduling overhead
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">99.5%</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Uptime on production AI services
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">300%</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Average ROI for dental practices
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">8%</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Improved loan approval accuracy
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">72%</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Demand forecasting accuracy
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="text-4xl font-bold text-primary">6+</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Years of progressive experience
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
