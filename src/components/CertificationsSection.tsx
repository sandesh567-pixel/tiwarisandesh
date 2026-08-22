import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ShieldCheck, Network, Code2, BookOpen, Brain, Trophy } from "lucide-react";

const certifications = [
  {
    title: "Computer Hardware and Network Technician (Level 2)",
    organization: "National Skill Testing Board (NSTB) / CTEVT",
    date: "Jul 2026",
    type: "Official Certification",
    icon: ShieldCheck,
  },
  {
    title: "Skill Identity Card – Computer Hardware and Network Technician (Level 2)",
    organization: "National Skill Testing Board (NSTB) / CTEVT",
    date: "Jul 2026",
    type: "Official License",
    icon: ShieldCheck,
  },
  {
    title: "Professional Computer Hardware & Network Technician",
    organization: "S.P.S.A. Computer Institute",
    date: "Apr 2026",
    type: "Professional Training",
    icon: Network,
  },
  {
    title: "Networking Basics",
    organization: "Cisco Networking Academy",
    date: "Apr 2026",
    type: "Certification",
    icon: Network,
  },
  {
    title: "HTML Essentials",
    organization: "Cisco Networking Academy",
    date: "Jan 2026",
    type: "Certification",
    icon: Code2,
  },
  {
    title: "Computer Course (C, C++, Python, SQL, HTML, CSS)",
    organization: "Kapan Institute",
    date: "Feb 2025",
    type: "Training",
    icon: BookOpen,
  },
  {
    title: "AI with Python Workshop",
    organization: "Mero Coding Class",
    date: "May 2025",
    type: "Workshop",
    icon: Brain,
  },
  {
    title: "Mathematics Topper’s Competition-7",
    organization: "Lord Buddha Computer Institute",
    date: "Dec 2018",
    type: "Appreciation",
    icon: Trophy,
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Certifications & Credentials"
        subtitle="Official certifications, professional training and continuous learning"
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {certifications.map((cert, i) => {
              const Icon = cert.icon;

              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex gap-5 sm:gap-6"
                >
                  {/* Timeline icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-sm">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {cert.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-display font-semibold text-foreground leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.organization}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;

