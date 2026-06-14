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
const santoshPhoto = '/images/Santhosh Kumar.jpg';
const naseerPhoto = '/images/Naseer.jpeg';
const piyushPhoto = '/images/Dr. Piyush Kumar Soni.jpeg';
const matheenullaPhoto = '/images/Matheen_sir.jpeg';
const pradeepPhoto = '/images/Pradeep N E.png';
const sindhuPhoto = '/images/Sindhu Shekar.jpg';
const spoorthyPhoto = '/images/spoorthy sollapur.jpg';
const tejaswiniPhoto = '/images/Tejaswini Begur.jpg';
import { AnimatePresence } from "motion/react";

interface ExecutiveMember {
  name: string;
  position: string;
  institution: string;
  qualifications?: string;
  image?: string;
  email?: string;
  linkedin?: string;
}

interface Message {
  name: string;
  position: string;
  message: string;
  image?: string;
}

interface MembersPageProps {
  onNavigate?: (page: string) => void;
}

export function MembersPage ({
  onNavigate,
}: MembersPageProps) {
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
      image: santoshPhoto,
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
      name: "Mr. Naseerhusen Ankalagi",
      position: "KTPOA Webmaster",
      institution:
        "City Engineering College, Bangalore",
      qualifications: "MCA, BCA",
      email: "naseer8496@gmail.com",
      image: naseerPhoto,
    },
    {
      name: "Dr. Piyush Kumar Soni",
      position: "Member",
      institution:
        "Sapthagiri NPS University, Bengaluru",
      qualifications: "Ph.D, M.Tech, B.E, Diploma",
      email: "drpiyushkumarsoni@gmail.com",
      image: piyushPhoto,
    },
    {
      name: "Dr. Mohammed Mathenulla Shariff",
      position: "Member",
      institution:
        "City Engineering College, Bangalore",
      qualifications: "Ph.D., M.E, B.E",
      email: "matheenulla3@gmail.com",
      image: matheenullaPhoto,
    },
    {
      name: "Dr. Pradeep N E",
      position: "Member",
      institution:
        "Nagarjuna College Of Engineering and Technology",
      qualifications: "Ph.D, PGDHRM, MBA",
      email: "pradeep.ne@gmail.com",
      image: pradeepPhoto,
    },
    {
      name: "Mrs. G A Sindhu",
      position: "Member",
      institution:
        "Akash Group of Institutions",
      qualifications: "MBA in Human Resource Management, B.Sc",
      email: "sindhu.gudibande82@gmail.com",
      image: sindhuPhoto,
    },
    {
      name: "Mrs. Spoorthy Mahadikar ",
      position: "Member",
      institution:
        "Hkbk college of engineering and group of institutions",
      qualifications: "B l, L lb",
      email: "Spoorthy011@gmail.com",
      image: spoorthyPhoto,
    },
    {
      name: "Mrs. Tejaswini B N",
      position: "Member",
      institution:
        "City Engineering College, Bangalore",
      qualifications: "M.Tech, B.E",
      email: "tejaswini.begur@gmail.com",
      image: tejaswiniPhoto,
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
            <span className="text-xs">Members</span>
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>
        </div>
      </section>

      {/* Members Grid */}
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
                    {/* Email */}
                    {member.email && (
                      <div className="flex items-start gap-2 mb-4 text-gray-600 text-sm">
                        <Mail className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#1E293B]" />
                        <span>{member.email}</span>
                      </div>
                    )}                    
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
      <ScrollToTop currentPage="members" />
    </div>
  );
}