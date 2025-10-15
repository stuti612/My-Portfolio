import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Brain, Cloud, Briefcase, GraduationCap, Award } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const skills = {
    languages: ["Python", "SQL", "C++", "JavaScript"],
    frontend: ["React.js", "Next.js", "Redux", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    cloud: ["AWS (S3, EC2, Lambda, Route53, CloudFront, Kinesis, Redshift)", "Docker", "Airflow", "Spark", "ETL", "CI/CD", "Linux"],
    ai: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Regression", "Classification", "Deep Learning"],
    tools: ["Git", "Jira", "Agile", "Tableau", "Figma"],
    concepts: ["System Design", "Data Modelling", "Distributed Systems", "Data Structures & Algorithms", "Machine Learning"]
  };

  const projects = [
    {
      category: "AI / Machine Learning",
      items: [
        {
          title: "Stock Price Prediction (Regression + LSTM)",
          description: "Developed an LSTM-based model to forecast NSE stock trends using historical time-series data; achieved ~82% prediction accuracy.",
          tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"]
        },
        {
          title: "Image Classification (CNN on CIFAR-10)",
          description: "Built and trained a CNN with dropout and augmentation, improving classification accuracy by 10% on CIFAR-10 dataset.",
          tech: ["Python", "TensorFlow", "Keras"]
        }
      ]
    },
    {
      category: "Data Engineering",
      items: [
        {
          title: "Real-Time Wind Turbine Data Pipeline (Genpact)",
          description: "Designed and deployed data ingestion and transformation pipelines on AWS for 8,000+ wind turbines, improving telemetry coverage from 65% → 95%.",
          tech: ["AWS (S3, EC2, Lambda, Redshift)", "Python", "SQL", "Docker"]
        }
      ]
    },
    {
      category: "Software Engineering",
      items: [
        {
          title: "OneTrade (MERN + AWS)",
          description: "Built a full-stack trading platform with React and Node.js, integrating real-time APIs for stock data. Deployed on AWS with CI/CD.",
          tech: ["React", "Node.js", "Express", "MongoDB", "AWS"]
        },
        {
          title: "CryptoTrust",
          description: "Developed a blockchain-based platform for secure ICOs with ERC-20 smart contracts supporting KYC, crowdsale, and investor voting.",
          tech: ["Solidity", "Polygon", "Next.js", "Redux", "Web3.js"]
        },
        {
          title: "Blockchain Warranty System (Flipkart Grid 4.0)",
          description: "Created an NFT-based warranty system using ERC-721 tokens with self-decaying expiration logic. Top 1300 global teams.",
          tech: ["Solidity", "React", "AWS", "Smart Contracts (ERC-721)"]
        }
      ]
    }
  ];

  const experience = [
    {
      role: "Cloud Data Engineer",
      company: "Genpact, Bangalore",
      period: "Aug 2023 – Jul 2025",
      achievements: [
        "Built AWS pipelines for 8,000+ wind turbines; improved telemetry coverage from 65% → 95%",
        "Automated data validation pipelines and coordinated DevOps integration via CI/CD"
      ],
      tech: ["AWS", "Python", "SQL", "Docker", "Airflow"]
    },
    {
      role: "Software Developer Intern",
      company: "Enquero Global (A Genpact Company), Bangalore",
      period: "Mar 2023 – Jul 2023",
      achievements: [
        "Developed backend APIs and ReactJS modules for financial dashboards",
        "Reduced data sync latency by 25% through workflow optimization"
      ],
      tech: ["React", "Node.js", "REST APIs", "JavaScript"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Saaspect Pvt Ltd, Remote",
      period: "Aug 2021 – Nov 2021",
      achievements: [
        "Implemented responsive React components from Figma designs with accessibility and performance enhancements"
      ],
      tech: ["React", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(var(--glow-primary)),transparent_50%),radial-gradient(circle_at_70%_50%,hsla(var(--glow-secondary)),transparent_50%)] animate-glow-pulse" />
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="animate-fade-up flex flex-col md:flex-row items-center gap-12">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-glow-pulse blur-2xl opacity-40"></div>
              <img 
                src={profilePhoto} 
                alt="Stuti Prasad - Software and Data Engineer" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-elegant"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-5xl md:text-8xl font-bold mb-6">
                Stuti <span className="gradient-text">Prasad</span>
              </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl">
              Turning complex systems into clean, intelligent, and intuitive experiences — from cloud to code.
            </p>
            
            <div className="prose prose-invert max-w-3xl mb-12 text-lg leading-relaxed">
              <p className="text-foreground/90">
                I'm a <span className="text-primary font-semibold">Software and Data Engineer</span> pursuing my M.S. in Computer Science at the University of Southern California. 
                I build scalable cloud systems, data pipelines, and intelligent applications powered by AI.
              </p>
              <p className="text-foreground/90">
                My work bridges engineering precision with creativity — transforming data into insight and infrastructure into impact.
              </p>
              <p className="text-foreground/80">
                I believe technology should feel human, not heavy — fast, purposeful, and beautifully engineered.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="glass hover:glow-primary transition-all duration-300 group" asChild>
                <a href="#projects">
                  <Code2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View My Work
                </a>
              </Button>
              <Button size="lg" variant="outline" className="glass hover:glow-accent transition-all duration-300 group" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/stuti612" target="_blank" rel="noopener noreferrer" 
                 className="p-3 glass rounded-full hover:glow-primary transition-all duration-300 hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/stuti-prasad-05168b1b7" target="_blank" rel="noopener noreferrer"
                 className="p-3 glass rounded-full hover:glow-accent transition-all duration-300 hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:stutiprasad63@gmail.com"
                 className="p-3 glass rounded-full hover:glow-secondary transition-all duration-300 hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">Building intelligent systems that make a difference</p>

          <div className="space-y-12">
            {projects.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-6 text-primary">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((project, projIdx) => (
                    <Card key={projIdx} className="glass p-6 hover:glow-primary transition-all duration-300 group">
                      <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="glass">{tech}</Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">Delivering impact at scale through engineering excellence</p>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <Card key={idx} className="glass p-8 hover:glow-secondary transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 glass rounded-lg">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4 ml-4">
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx} className="text-foreground/90 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 ml-4">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="glass">{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">Building a strong foundation in computer science</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass p-8 hover:glow-accent transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="text-2xl font-bold">University of Southern California</h3>
                  <p className="text-muted-foreground">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-primary mb-2">M.S. in Computer Science</p>
              <p className="text-muted-foreground mb-4">Aug 2025 – May 2027</p>
              <p className="text-foreground/90">
                <span className="font-semibold">Coursework:</span> Deep Learning, Machine Learning in Data Science, Artificial Intelligence, Analysis of Algorithms
              </p>
            </Card>

            <Card className="glass p-8 hover:glow-accent transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="text-2xl font-bold">Nitte Meenakshi Institute of Technology</h3>
                  <p className="text-muted-foreground">Bangalore, India</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-primary mb-2">B.Tech in Computer Science Engineering</p>
              <p className="text-muted-foreground mb-4">Aug 2019 – May 2023</p>
              <p className="text-foreground/90">
                <span className="font-semibold">CGPA:</span> 3.6 / 4.0
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">Comprehensive expertise across the full technology spectrum</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass p-6 hover:glow-primary transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary" className="glass">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="glass p-6 hover:glow-secondary transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="glass">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="glass p-6 hover:glow-accent transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="glass">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="glass p-6 hover:glow-primary transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">Data Engineering & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <Badge key={skill} variant="secondary" className="glass">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="glass p-6 hover:glow-secondary transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">AI & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((skill) => (
                  <Badge key={skill} variant="secondary" className="glass">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="glass p-6 hover:glow-accent transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">Tools & Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...skills.tools, ...skills.concepts].map((skill) => (
                  <Badge key={skill} variant="secondary" className="glass">{skill}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications & Achievements */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Publications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">Recognition for innovation and excellence</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass p-8 hover:glow-primary transition-all duration-300">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Publication</h3>
              <p className="text-foreground/90 mb-2">
                "Transparent Fund Raiser for Projects using Blockchain Technology"
              </p>
              <p className="text-muted-foreground">IEEE ICAISC-2023 (Peer-Reviewed)</p>
            </Card>

            <Card className="glass p-8 hover:glow-secondary transition-all duration-300">
              <Award className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Key Achievements</h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Top 1300 global teams in Flipkart Grid 4.0 Hackathon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Improved telemetry coverage to 95% at Genpact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>1st Place in Thinkathon Hackathon at Enquero Global</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text animate-fade-up">
            Get In Touch
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-12 text-center space-y-6 animate-fade-up">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button size="lg" className="glow-primary" asChild>
                <a href="mailto:stutiprasad63@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="glass" asChild>
                <a href="https://linkedin.com/in/stuti-prasad-05168b1b7" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="glass" asChild>
                <a href="https://github.com/stuti612" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Stuti Prasad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
