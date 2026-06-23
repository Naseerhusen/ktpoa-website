import { motion, useInView } from "motion/react";
import { Card, CardContent } from "./ui/card";
import {
  Users,
  ArrowRight,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  User,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
const hemamaliniPhoto = '/images/cd67160cd5ff3195a83045aed3ab56f8647b87fe.png';
const nabiPhoto = '/images/nabi.jpeg';
const vandanaPhoto = '/images/Vandana.jpeg';
const bheemeswaraPhoto = '/images/Bheemeswara_Reddy.jpeg';
const celestinaPhoto = '/images/Celestina Suresh.jpg';
const rashmiPhoto = '/images/Rashmi.jpeg';
const netravathiPhoto = '/images/Nethravathi.jpeg';
import { AnimatePresence } from "motion/react";

interface ExecutiveMember {
  name: string;
  position: string;
  institution: string;
  qualifications?: string;
  image?: string;
  about: string;
  areasOfExpertise: string[];
  keyAchievements: string[];
  email: string;
  linkedin?: string;
}

interface Message {
  name: string;
  position: string;
  message: string;
  image?: string;
}

interface ExecutiveMembersPageProps {
  onNavigate?: (page: string) => void;
}

export function ExecutiveMembersPage({
  onNavigate,
}: ExecutiveMembersPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [selectedMember, setSelectedMember] =
    useState<ExecutiveMember | null>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Messages from executive members
  const messages: Message[] = [
    {
      name: "Prof. N RAVIKUMAR",
      position: "President, KTPOA",
      message:
        "As we navigate the evolving landscape of education and employment, KTPOA remains committed to bridging the gap between academia and industry. Our collective efforts ensure that every student in Karnataka has access to quality placement opportunities and career guidance. Together, we are building a brighter future for our students.",
      image: undefined,
    },
    {
      name: "Dr. HEMAMALINI M.J",
      position: "Vice President, KTPOA",
      message:
        "Training and placement is not just about securing jobs; it's about shaping careers and transforming lives. With 20+ years in this field, I've witnessed the power of mentorship and industry partnerships. Let's continue to empower our students with the skills and confidence they need to succeed in the global marketplace.",
      image: hemamaliniPhoto,
    },
    {
      name: "Prof. GURUCHARAN SINGH",
      position: "Honorary President, KTPOA",
      message:
        "KTPOA has grown from a vision to a vibrant community of dedicated professionals. Our strength lies in our unity and shared commitment to student success. As we move forward, let us continue to innovate, collaborate, and set new benchmarks in placement excellence across Karnataka.",
      image: undefined,
    },
    {
      name: "Prof. Dr. NABI A",
      position: "General Secretary, KTPOA",
      message:
        "Effective coordination and seamless communication are the backbone of successful placement operations. At KTPOA, we ensure that every member institution receives the support and resources needed to excel. Our network is our strength, and together we create opportunities that change lives.",
      image: nabiPhoto,
    },
    {
      name: "Mr. SANTOSH KUMAR B.S",
      position: "Joint Secretary, KTPOA",
      message:
        "Building strong relationships with recruiters is an art that requires dedication, trust, and consistent delivery. Every placement drive is an opportunity to showcase the exceptional talent Karnataka produces. Let's work together to ensure our students are industry-ready and future-proof.",
      image: undefined,
    },
  ];

  // Auto-advance timer (7 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [messages.length]);

  const goToPrevious = () => {
    setCurrentMessageIndex(
      (prev) => (prev - 1 + messages.length) % messages.length
    );
  };

  const goToNext = () => {
    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
  };

  const executives: ExecutiveMember[] = [
    {
      name: "Ms. VANDANA R",
      position: "Executive Committee Member",
      institution:
        "Sapthagiri NPS University,",
      qualifications: "MBA, BBA in HR",
      email: "vandana.r@ktpoa.org",
      about:
        "Ms. Vandana R focuses on women empowerment and diversity initiatives in campus placements.",
      areasOfExpertise: [
        "Diversity & Inclusion",
        "Women Empowerment",
        "Career Guidance",
      ],
      keyAchievements: [
        "Increased women placement by 65%",
        "Launched women leadership programs",
        "Advocated for inclusive hiring practices",
      ],
      image: vandanaPhoto,
      linkedin: "https://www.linkedin.com/in/vandanar",
    },
    {
      name: "Dr. SHARANA BASAVANA GOWDA",
      position: "Executive Committee Member",
      institution:
        "SDM College of Engineering and Technology, Dharwad",
      qualifications: "Ph.D., M.Tech",
      email: "sharana.bg@ktpoa.org",
      about:
        "Dr. Sharana Basavana Gowda works extensively with tier-2 and tier-3 city institutions to enhance placement opportunities.",
      areasOfExpertise: [
        "Rural Outreach",
        "Regional Development",
        "Inclusive Placement",
      ],
      keyAchievements: [
        "Placed 3,000+ students from tier-2/3 cities",
        "Conducted 120+ rural campus drives",
        "Partnered with 60+ regional companies",
      ],
      linkedin: "https://www.linkedin.com/in/sharanagowda",
    },
    {
      name: "Mr. RAKESH S",
      position: "Executive Committee Member",
      institution: "NIE Institute of Technology, Mysore",
      qualifications: "MBA, B.E.",
      email: "rakeshs@ktpoa.org",
      about:
        "Mr. Rakesh S focuses on industry-academia collaboration and corporate relationship management.",
      areasOfExpertise: [
        "Industry Relations",
        "Corporate Partnerships",
        "Placement Strategy",
      ],
      keyAchievements: [
        "Established 80+ corporate partnerships",
        "Organized successful job fairs",
        "Enhanced industry connect programs",
      ],
      linkedin: "https://www.linkedin.com/in/rakeshs",
    },
    {
      name: "Ms. Celestina Suresh (Salestena Mary)",
      position: "Executive Committee Member",
      institution: "MS RAMAIAH UNIVERSITY  OF APPLIED SCIENCES",
      qualifications: "MBA",
      email: "celestina4suresh@gmail.com",
      about:
        "Ms. Celestina Suresh (Salestena Mary) specializes in curriculum development aligned with industry requirements.",
      areasOfExpertise: [
        "Curriculum Development",
        "Industry-Academia Collaboration",
        "Skills Training",
      ],
      keyAchievements: [
        "Developed industry-aligned training modules",
        "Established 40+ MoUs with companies",
        "Mentored 300+ placement officers",
      ],
      image: celestinaPhoto,
      linkedin: "https://www.linkedin.com/in/celestina-suresh-6528622b",
    },
    {
      name: "Dr. BHEEMESWARA REDDY",
      position: "Executive Committee Member",
      institution: "RajaRajeswari College of Engineering",
      qualifications: "Ph.D., MBA",
      email: "bheemeswara.reddy@ktpoa.org",
      about:
        "Dr. Bheemeswara Reddy brings expertise in research and academic excellence to placement strategies.",
      areasOfExpertise: [
        "Research",
        "Academic Excellence",
        "Quality Assurance",
      ],
      keyAchievements: [
        "Published 20+ research papers on placements",
        "Improved placement quality metrics",
        "Enhanced TPO training standards",
      ],
      image: bheemeswaraPhoto,
      linkedin: "https://www.linkedin.com/in/bheemeswara",
    },
    {
      name: "Mr. ANANDKUMAR V",
      position: "Executive Committee Member",
      institution: "NMAM Institute of Technology, Nitte",
      qualifications: "MBA, B.Tech",
      email: "anandkumar.v@ktpoa.org",
      about:
        "Mr. Anandkumar V specializes in startup ecosystem development and entrepreneurship initiatives for students.",
      areasOfExpertise: [
        "Entrepreneurship",
        "Startup Ecosystem",
        "Innovation",
      ],
      keyAchievements: [
        "Facilitated 50+ student startups",
        "Established incubation partnerships",
        "Promoted entrepreneurial culture",
      ],
      linkedin: "https://www.linkedin.com/in/anandkumar",
    },
    {
      name: "Mrs. Rashmi Rajeev",
      position: "Executive Committee Member",
      institution:
        "Sambhram Group of Institutions",
      qualifications: "MBA",
      email: "placements@sambhram.org",
      about:
        "Mrs. Rashmi focuses on student counseling and career guidance programs across member institutions.",
      areasOfExpertise: [
        "Career Counseling",
        "Student Mentoring",
        "Guidance Programs",
      ],
      keyAchievements: [
        "Counseled 5,000+ students",
        "Developed career guidance frameworks",
        "Improved student career readiness",
      ],
      image: rashmiPhoto,
      linkedin: "https://www.linkedin.com/in/rashmi",
    },
    {
      name: "Mr. MUJTHABA WASEEM K",
      position: "Executive Committee Member",
      institution: "KNS Institute of Technology",
      qualifications: "M.tech, MBA",
      email: "mujthaba.waseem@ktpoa.org",
      about:
        "Mr. Mujthaba Waseem K works on digital marketing and branding initiatives for placement activities.",
      areasOfExpertise: [
        "Digital Marketing",
        "Branding",
        "Social Media",
      ],
      keyAchievements: [
        "Enhanced KTPOA digital presence",
        "Increased employer engagement",
        "Improved brand visibility",
      ],
      linkedin: "https://www.linkedin.com/in/mujthaba2026?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Mr. BALUCY",
      position: "Executive Committee Member",
      institution: "Manipal Institute of Technology, Manipal",
      qualifications: "M.Tech, B.E.",
      email: "balucy@ktpoa.org",
      about:
        "Mr. Balucy specializes in data analytics and placement performance metrics.",
      areasOfExpertise: [
        "Data Analytics",
        "Performance Metrics",
        "Reporting",
      ],
      keyAchievements: [
        "Implemented placement analytics dashboard",
        "Improved data-driven decision making",
        "Enhanced reporting mechanisms",
      ],
      linkedin: "https://www.linkedin.com/in/balucy",
    },
    {
      name: "Prof B Nethravathi",
      position: "Executive Committee Member",
      institution: "SKIT Bengaluru",
      qualifications: "M.Tech, B.E.",
      email: "placement@skit.org.in",
      about:
        "Prof B Nethravathi Assistant professor in CSE in VTU college since 10 years , successfully doing Technical training in CSE and allied branches , Heading as Head training placement officer since 4 plus years .",
      areasOfExpertise: [
        "Academics",
        "Training Coordination",
        "Placements",
      ],
      keyAchievements: [
        "Been in the Academic industry since 10 years",
        "Enhanced skill development programs",
        "Improved student readiness",
      ],
      image: netravathiPhoto,
      linkedin: "https://www.linkedin.com/in/netharavathi",
    },
    {
      name: "Mr. SANTHOSH KUMARK",
      position: "Executive Committee Member",
      institution: "RVCE, Bangalore",
      qualifications: "MBA, B.Tech",
      email: "santhosh.kumark@ktpoa.org",
      about:
        "Mr. Santhosh Kumar K works on international placement opportunities and global collaborations.",
      areasOfExpertise: [
        "International Placements",
        "Global Partnerships",
        "Study Abroad",
      ],
      keyAchievements: [
        "Established 25+ international partnerships",
        "Facilitated 500+ international placements",
        "Enhanced global opportunities",
      ],
      linkedin: "https://www.linkedin.com/in/santhoshkumar",
    },
  ];

  return (
    <div className="bg-white">
      {/* Message Slider - Hero Style */}
      <section className="h-[50vh] min-h-[500px] bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(var(--navy))]/95 to-[hsl(var(--navy))]/90 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A870] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A870] rounded-full blur-3xl"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessageIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <Quote className="h-16 w-16 text-[#C9A870]" />
                </div>

                {/* Message */}
                <p className="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-10 italic font-light">
                  "{messages[currentMessageIndex].message}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4 mb-10">
                  {messages[currentMessageIndex].image ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 border-3 border-[#C9A870] shadow-xl">
                      <img
                        src={messages[currentMessageIndex].image}
                        alt={messages[currentMessageIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-[#C9A870]/20 flex items-center justify-center border-3 border-[#C9A870] shadow-xl">
                      <User className="h-10 w-10 text-white" />
                    </div>
                  )}
                  <div className="text-left">
                    <h4 className="font-bold text-white text-xl">
                      {messages[currentMessageIndex].name}
                    </h4>
                    <p className="text-[#C9A870] font-semibold">
                      {messages[currentMessageIndex].position}
                    </p>
                  </div>
                </div>

                {/* Navigation & Indicators */}
                <div className="flex items-center justify-center gap-6">
                  <button
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all border border-white/20"
                    onClick={goToPrevious}
                    aria-label="Previous message"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="flex gap-3">
                    {messages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMessageIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === currentMessageIndex
                            ? "bg-[#C9A870] w-10"
                            : "bg-white/40 hover:bg-white/60 w-2.5"
                        }`}
                        aria-label={`Go to message ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all border border-white/20"
                    onClick={goToNext}
                    aria-label="Next message"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs">Executive Members</span>
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>
        </div>
      </section>

      {/* Executive Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {executives.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Card
                  className="bg-white border-2 border-gray-200 hover:border-[#C9A870] shadow-md hover:shadow-xl transition-all h-full cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <CardContent className="p-8">
                    {/* Avatar */}
                    <div className="flex justify-center mb-6">
                      {member.image ? (
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-[#C9A870]/10 flex items-center justify-center">
                          <Users className="h-12 w-12 text-[#1E293B]" />
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                      {member.name}
                    </h3>

                    {/* Position */}
                    <p className="text-[#C9A870] font-semibold text-center text-sm mb-4">
                      {member.position}
                    </p>

                    {/* Institution */}
                    <div className="flex items-start gap-2 mb-3 text-gray-600 text-sm">
                      <Building2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#1E293B]" />
                      <span>{member.institution}</span>
                    </div>

                    {/* Qualifications */}
                    {member.qualifications && (
                      <div className="flex items-start gap-2 mb-4 text-gray-600 text-sm">
                        <GraduationCap className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#1E293B]" />
                        <span>{member.qualifications}</span>
                      </div>
                    )}

                    {/* View Profile Link */}
                    <div className="w-full flex items-center justify-center gap-2 text-[#1E293B] hover:text-[#C9A870] font-medium text-sm mt-4 pt-4 border-t border-gray-100 transition-colors">
                      <span>View Full Profile</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Sticky Header Section */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex-shrink-0">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-[#C9A870]/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {selectedMember.image ? (
                        <img
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-8 w-8 text-[#1E293B]" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedMember.name}
                      </h2>
                      <p className="text-[#C9A870] font-semibold text-sm mt-1">
                        {selectedMember.position}
                      </p>
                      {selectedMember.qualifications && (
                        <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                          <GraduationCap className="h-4 w-4 text-gray-400" />
                          <span>
                            {selectedMember.qualifications}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Contact Icons */}
                    <div className="flex items-center gap-2">
                      {selectedMember.email && (
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="w-10 h-10 rounded-full bg-[#C9A870]/10 hover:bg-[#C9A870]/20 flex items-center justify-center transition-colors"
                          title="Send Email"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail className="h-5 w-5 text-[#1E293B]" />
                        </a>
                      )}
                      {selectedMember.linkedin && (
                        <a
                          href={selectedMember.linkedin || "#"}
                          className="w-10 h-10 rounded-full bg-[#C9A870]/10 hover:bg-[#C9A870]/20 flex items-center justify-center transition-colors"
                          title="LinkedIn Profile"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="h-5 w-5 text-[#1E293B]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scrollable Content Section */}
                <div className="overflow-y-auto px-6 py-6 space-y-6 flex-1">
                  {/* Institution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-[#C9A870]" />
                      <h3 className="font-semibold text-gray-900">
                        Institution
                      </h3>
                    </div>
                    <p className="text-gray-700 ml-7">
                      {selectedMember.institution}
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Contact Information
                    </h3>
                    <div className="ml-7 space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[#C9A870]" />
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="text-[#1E293B] hover:text-[#C9A870] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {selectedMember.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      About
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedMember.about}
                    </p>
                  </div>

                  {/* Areas of Expertise */}
                  {selectedMember.areasOfExpertise.length >
                    0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.areasOfExpertise.map(
                          (area, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-[#C9A870]/20 text-[#1E293B] rounded-full text-sm font-medium"
                            >
                              {area}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements */}
                  {selectedMember.keyAchievements.length >
                    0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {selectedMember.keyAchievements.map(
                          (achievement, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <span className="text-[#C9A870] mt-1.5">
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="members" />
    </div>
  );
}