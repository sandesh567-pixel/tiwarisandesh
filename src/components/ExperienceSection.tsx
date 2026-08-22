import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const items = [
  {
    title: "IT Support / Computer Technician",
    company: "A2Z Computer",
    employment: "Full-time",
    location: "Kathmandu, Bāgmatī, Nepal",
    duration: "Mar 2026 – Aug 2026 · 6 mos",
    description:
      "Provided hands-on IT support and computer troubleshooting, assisting with hardware maintenance, Windows installation and configuration, LAN and IP configuration, software setup, and common technical issues.",
    tags: [
      "IT Support",
      "Hardware Troubleshooting",
      "Windows",
      "Networking",
    ],
  },
  {
    title: "Hardware & Networking Technician Trainee",
    company: "MaxPro Computer Institute",
    employment: "Full-time",
    location: "Kathmandu, Bāgmatī, Nepal",
    duration: "Nov 2024 – Feb 2026 · 1 yr 4 mos",
    description:
      "Completed practical training in computer hardware and networking, including hardware troubleshooting, Windows and Linux installation, LAN and IP configuration, Ethernet cabling, network troubleshooting, and basic router and switch configuration.",
    tags: [
      "Hardware",
      "Networking",
      "Troubleshooting",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "Marketing Representative",
    company: "Search Solution Pvt. Ltd.",
    employment: "Part-time",
    location: "Kathmandu, Bāgmatī, Nepal",
    duration: "Jan 2024 – Oct 2024 · 10 mos",
    description:
      "Promoted products through field-based marketing campaigns, interacted directly with customers, communicated product information, and developed strong customer handling, communication, teamwork, and interpersonal skills.",
    tags: [
      "Marketing",
      "Customer Relations",
      "Communication",
      "Teamwork",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={`${item.company}-${item.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Timeline icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* Experience content */}
                <div className="flex-1 pb-2">
                  <div className="mb-5">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="text-primary font-semibold mt-1">
                      {item.company}
                      <span className="text-muted-foreground font-normal">
                        {" "}
                        · {item.employment}
                      </span>
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.duration}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;

