import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Eye, Target } from "lucide-react";

export function VisionMissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#0F172A]" id="vision-mission">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-8">

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-[#1E293B] rounded-2xl p-10"
          >
            <div className="flex items-center gap-4 mb-7">
              {/* Gold gradient icon square */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{ background: "linear-gradient(135deg, #C9A870 0%, #EAB308 100%)" }}
              >
                <Eye className="h-7 w-7 text-[#0F172A]" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Vision
              </h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              To be a leading professional association that drives excellence in industry engagement, employability outcomes, and institutional
collaboration, creating a strong bridge between academia and the world of work.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-[#1E293B] rounded-2xl p-10"
          >
            <div className="flex items-center gap-4 mb-7">
              {/* Gold gradient icon square */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{ background: "linear-gradient(135deg, #C9A870 0%, #EAB308 100%)" }}
              >
                <Eye className="h-7 w-7 text-[#0F172A]" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Mission
              </h3>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              KTPOA is committed to enhance employability through skill development and empower placement professionals through
collaboration, knowledge sharing, and the adoption of best practices in talent development and workforce readiness.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
