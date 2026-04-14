import { useState, useEffect } from "react";
import {
  Stethoscope,
  Mail,
  MapPin,
  ChevronDown,
  Baby,
  ShieldCheck,
  HeartPulse,
  MessageCircle,
  Menu,
  X,
  Star,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const colors = {
  primary: "#2C3E50",
  secondary: "#A0D2EB",
  accent: "#E0F2F1",
  bg: "#F8FAFC",
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSpecialty, setActiveSpecialty] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const specialties = [
    {
      title: "Consulta de Puericultura",
      desc: "Acompanhamento periódico para monitorar o crescimento, desenvolvimento e prevenir doenças, garantindo uma infância saudável.",
      icon: <Baby className="w-6 h-6" />,
    },
    {
      title: "Consulta de Adoecimento",
      desc: "Atendimento focado em diagnósticos agudos, como febres, gripes, infecções e outras queixas que surgem subitamente.",
      icon: <HeartPulse className="w-6 h-6" />,
    },
    {
      title: "Dermatologia Pediátrica",
      desc: "Cuidado especializado com a pele sensível dos pequenos: dermatites, alergias, hemangiomas e outras condições cutâneas.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Teste do Olhinho",
      desc: "Exame fundamental que deve ser realizado nos primeiros dias de vida da criança e repetido periodicamente nos primeiros anos de vida, para detectar de forma precoce alterações visuais, como catarata congênita e retinoblastoma, por exemplo.",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "Consulta Pré-Natal",
      desc: "Preparação dos pais para a chegada do bebê, orientações sobre amamentação, hora ouro, cuidados com a pele, indicação dos produtos mais adequados, manobra de desengasgo e os cuidados essenciais com o bebê",
      icon: <HeartPulse className="w-6 h-6" />,
    },
  ];

  const experience = [
    {
      title: "HUOL / MEJC",
      role: "Residência médica em Pediatria",
      period: "2019 - 2022",
    },
    {
      title: "Hospital da Unimed",
      role: "Médico plantonista do Pronto Socorro Infantil",
      period: "Experiência Clínica",
    },
    {
      title: "HUAB (UFRN)",
      role: "Pediatra e Preceptor médico da residência de Pediatria",
      period: "Docência e Clínica",
    },
    {
      title: "Hospital Central Cel. Pedro Germano",
      role: "Pediatra e Chefe do Serviço de Pediatria",
      period: "Liderança Médica",
    },
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Mãe do Pedro (2 anos)",
      content:
        "O Dr. Ícaro é extremamente atencioso e paciente. Explicou cada detalhe do desenvolvimento do meu filho e nos passou muita segurança no diagnóstico dermatológico.",
      rating: 5,
    },
    {
      name: "Ricardo Oliveira",
      role: "Pai da Alice (6 meses)",
      content:
        "Melhor pediatra que já fomos! O atendimento pré-natal nos ajudou muito a nos sentirmos preparados. A clínica em Natal é excelente e muito acolhedora.",
      rating: 5,
    },
    {
      name: "Carla Souza",
      role: "Mãe do Arthur (4 anos)",
      content:
        "Profissional impecável. Consegue falar com a criança de igual para igual, o que deixa o meu filho super tranquilo nas consultas. Recomendo de olhos fechados!",
      rating: 5,
    },
  ];

  return (
    <div
      className="min-h-screen font-sans selection:bg-blue-100"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-[#2C3E50] text-white">
              <Stethoscope size={24} />
            </div>
            <span
              className={`font-bold text-xl tracking-tight ${
                scrolled ? "text-[#2C3E50]" : "text-white"
              }`}
            >
              Dr. Ícaro <span className="text-[#A0D2EB]">Fioravante</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#sobre" scrolled={scrolled}>
              Sobre
            </NavLink>
            <NavLink href="#especialidades" scrolled={scrolled}>
              Especialidades
            </NavLink>
            <NavLink href="#depoimentos" scrolled={scrolled}>
              Depoimentos
            </NavLink>
            <NavLink href="#locais" scrolled={scrolled}>
              Onde Atendo
            </NavLink>
            <a
              href="#contato"
              className="px-6 py-2.5 bg-[#2C3E50] text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-md"
            >
              Agendar Consulta
            </a>
          </div>

          <button
            className={`md:hidden ${
              scrolled ? "text-[#2C3E50]" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col space-y-6 md:hidden"
          >
            <a
              href="#sobre"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-[#2C3E50]"
            >
              O Doutor
            </a>
            <a
              href="#especialidades"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-[#2C3E50]"
            >
              Especialidades
            </a>

            <a
              href="#depoimentos"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-[#2C3E50]"
            >
              Depoimentos
            </a>

            <a
              href="#locais"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-[#2C3E50]"
            >
              Onde Atendo
            </a>
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#A0D2EB] text-white p-4 rounded-2xl text-center font-bold"
            >
              Agendar Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-[#2C3E50]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A0D2EB]/5 -skew-x-12 translate-x-1/4 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Reintroduzida */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex justify-center md:justify-start"
            >
              <img
                src="/Logo.png"
                alt="Logo Dr. Ícaro"
                className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-2xl"
              />
            </motion.div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-[#A0D2EB]/20 text-[#A0D2EB] font-bold text-sm mb-6 uppercase tracking-widest">
              Pediatria com Amor e Ciência
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 text-center md:text-left">
              Saúde Infantil com{" "}
              <span className="text-[#A0D2EB]">Excelência</span> e Afeto.
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed text-center md:text-left">
              Dr. Ícaro Fioravante: cuidado especializado focado no
              desenvolvimento pleno e na saúde dermatológica do seu filho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contato"
                className="px-8 py-4 bg-[#A0D2EB] text-[#2C3E50] rounded-2xl font-bold text-center hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Agendar Consulta <ChevronDown size={20} />
              </a>
              <a
                href="#sobre"
                className="px-8 py-4 border-2 border-white/20 text-white rounded-2xl font-bold text-center hover:bg-white/10 transition-all"
              >
                Conheça a Trajetória
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-400 text-center md:text-left">
              CRM 9777 | RQE 5022
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img
                src="/image2.jpg"
                alt="Dr. Ícaro Fioravante"
                className="w-full h-[550px] object-cover"
                onError={(e) =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1631217816684-2200778db951?auto=format&fit=crop&q=80&w=800")
                }
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-gray-100">
              <div className="flex text-yellow-400 mb-2">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-xs font-bold text-[#2C3E50]">
                Referência em Pediatria e <br />
                Dermatologia Pediátrica.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 uppercase tracking-tighter">
              Especialidades
            </h2>
            <p className="text-gray-500 italic">
              Toque para ver detalhes de cada atendimento
            </p>
          </div>

          <div className="space-y-4">
            {specialties.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl border-2 transition-all overflow-hidden ${
                  activeSpecialty === index
                    ? "border-[#A0D2EB] bg-[#A0D2EB]/5"
                    : "border-gray-100 bg-white"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveSpecialty(activeSpecialty === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-2xl ${
                        activeSpecialty === index
                          ? "bg-[#2C3E50] text-white"
                          : "bg-gray-100 text-[#2C3E50]"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-bold text-lg text-[#2C3E50]">
                      {item.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeSpecialty === index ? 180 : 0 }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeSpecialty === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 pt-0 ml-16"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre e História */}
      <section id="sobre" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/image3.jpg"
                alt="Dr. Icaro"
                className="w-full h-[500px] object-cover"
                onError={(e) =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800")
                }
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-8 uppercase tracking-tighter">
              Minha História
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Olá! Sou o <strong>Dr. Ícaro Fioravante Germano Feitosa</strong>
                , pediatra dedicado a cuidar da saúde de crianças e adolescentes
                com excelência e humanização.
              </p>
              <p>
                Formado pela <strong>UNP</strong>, com residência médica em
                Pediatria pelo <strong>HUOL-UFRN</strong> e pós-graduação em{" "}
                <strong>Dermatologia Pediátrica</strong>.
              </p>
              <p>
                Minha maior satisfação é acompanhar o crescimento dos meus
                pequenos pacientes em parceria com as famílias, garantindo uma
                infância saudável e feliz.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                <GraduationCap size={20} className="text-[#A0D2EB]" />{" "}
                <span className="text-sm font-bold text-[#2C3E50]">
                  Pediatra
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                <Stethoscope size={20} className="text-[#A0D2EB]" />{" "}
                <span className="text-sm font-bold text-[#2C3E50]">
                  Dermatopediatra
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Profissional */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 uppercase tracking-tighter">
              Experiência Profissional
            </h2>
            <div className="w-20 h-1.5 bg-[#A0D2EB] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <Briefcase className="text-[#A0D2EB] mb-6" size={32} />
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.role}
                  </p>
                </div>
                <span className="text-xs font-black uppercase text-[#A0D2EB] tracking-widest">
                  {item.period}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 uppercase tracking-tighter">
              O que as famílias dizem
            </h2>
            <div className="w-20 h-1.5 bg-[#A0D2EB] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{t.content}"
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#2C3E50]">{t.name}</h4>
                  <p className="text-sm text-[#A0D2EB] font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <a
              href="https://www.instagram.com/p/DUdhWvqjl7R/"
              target="_blank"
              rel="noreferrer"
              className="block group"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <img
                  src="/instagram-post.png"
                  alt="Depoimentos no Instagram"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-[#2C3E50] font-bold group-hover:text-[#A0D2EB] transition-colors">
                <FaInstagram />
                Ver publicação completa no Instagram
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Locais de Atendimento */}
      <section id="locais" className="py-24 bg-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-tighter">
            Locais de Atendimento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <LocationCard
              img="/AMIPersonali.png"
              name="AMI Personali"
              city="Natal | RN"
              address="Praça Augusto Leite, 656 - Tirol"
              mapLink="https://www.google.com.br/maps/place/Ami+Vacinas+-+Personali"
            />
            <LocationCard
              img="/CENTRALCLINIC.jpg"
              name="Central Clinic"
              city="Jucurutu | RN"
              address="Rua Otávio Lamartine, 38 B - Centro"
              mapLink="https://www.google.com/maps/place/Central+clinic+Jucurutu"
            />
          </div>
        </div>
      </section>

      {/* Seção Final de Contato */}
      <section id="contato" className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-8 uppercase tracking-tighter italic">
            Vamos marcar uma consulta?
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            Escolha a clínica onde deseja ser atendido:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <a
              href="https://wa.me/5584999241860"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-[3rem] shadow-xl hover:scale-105 transition-all border-2 border-transparent hover:border-green-500"
            >
              <span className="text-green-500 font-bold mb-2">
                Clínica em Natal
              </span>
              <h3 className="text-2xl font-black text-[#2C3E50] mb-4">
                AMI Personali
              </h3>
              <div className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold">
                <MessageCircle size={20} /> Agendar via WhatsApp
              </div>
            </a>

            <a
              href="https://wa.me/558498183636"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-[3rem] shadow-xl hover:scale-105 transition-all border-2 border-transparent hover:border-green-500"
            >
              <span className="text-green-500 font-bold mb-2">
                Clínica em Jucurutu
              </span>
              <h3 className="text-2xl font-black text-[#2C3E50] mb-4">
                Central Clinic
              </h3>
              <div className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold">
                <MessageCircle size={20} /> Agendar via WhatsApp
              </div>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8 border-t border-gray-200">
            <a
              href="https://instagram.com/dr.icarofioravante"
              className="flex items-center gap-2 text-[#2C3E50] font-bold hover:text-[#A0D2EB] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram /> @dr.icarofioravante
            </a>
            <a
              href="mailto:icarofioravant@gmail.com"
              className="flex items-center gap-2 text-[#2C3E50] font-bold hover:text-[#A0D2EB] transition-colors"
            >
              <Mail /> icarofioravant@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2C3E50] text-center border-t border-white/5">
        <p className="text-gray-400 text-sm">
          © 2026 Dr. Ícaro Fioravante Germano Feitosa.{" "}
          <br className="md:hidden" /> CRM 9777 | RQE 5022
        </p>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children, scrolled }) => (
  <a
    href={href}
    className={`font-bold hover:text-[#A0D2EB] transition-colors ${
      scrolled ? "text-[#2C3E50]" : "text-white"
    }`}
  >
    {children}
  </a>
);

const LocationCard = ({ img, name, city, address, mapLink }) => (
  <div className="group rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 hover:border-[#A0D2EB]/50 transition-all">
    <div className="h-56 overflow-hidden relative">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800")
        }
      />
      <div className="absolute top-4 right-4">
        <span className="text-[10px] font-black uppercase tracking-tighter bg-[#A0D2EB] text-[#2C3E50] px-3 py-1.5 rounded-full shadow-lg">
          {city}
        </span>
      </div>
    </div>
    <div className="p-10">
      <div className="flex items-center gap-3 mb-4">
        <MapPin size={24} className="text-[#A0D2EB]" />
        <h3 className="text-3xl font-black text-white">{name}</h3>
      </div>
      <p className="text-gray-400 mb-8 leading-relaxed">{address}</p>
      <a
        href={mapLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 font-bold text-[#A0D2EB] group-hover:gap-4 transition-all"
      >
        Abrir no Google Maps <ChevronDown className="-rotate-90" size={18} />
      </a>
    </div>
  </div>
);

export default App;
