import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      {/* Navbar */}
      <nav className="bg-[#2C3E50] text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-[#A0D2EB] text-3xl">
                  <span className="sr-only">Logo</span>
                  <FontAwesomeIcon icon={faStethoscope} className="w-10 h-10" />
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#especialidades"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Especialidades
              </a>
              <a
                href="#sobre"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Minha História
              </a>
              <a
                href="#locais"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Localização
              </a>
              <a
                href="#contato"
                className="bg-[#A0D2EB] hover:bg-[#8FB8D1] px-4 py-2 rounded-full text-white transition duration-300"
              >
                Marcar Consulta
              </a>
              <a
                href="https://www.instagram.com/dr.icarofioravante"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#especialidades"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Especialidades
              </a>
              <a
                href="#sobre"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Minha História
              </a>
              <a
                href="#locais"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Localização
              </a>
              <a
                href="#contato"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Agende Sua Consulta
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-0 bg-[#2C3E50] text-white">
        <div className="md:h-screen flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 px-8 py-12 md:py-0 md:pl-16 lg:pl-24 z-10">
            <div className="text-center md:text-left">
              <div className="mb-6 inline-block">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  className="w-30 h-30 mx-auto md:mx-0"
                />
              </div>
              <h1 className="text-5xl font-bold mb-4">Dr. Ícaro Fioravante</h1>
              <h2 className="text-xl font-medium text-gray-300 mb-8">
                PEDIATRA ESPECIALISTA
              </h2>
              <p className="text-sm text-gray-400 mb-8">CRM 9777 | RQE 5022</p>
              <a
                href="#contato"
                className="inline-block bg-[#A0D2EB] hover:bg-[#8FB8D1] text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                AGENDAR MINHA CONSULTA
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50] to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent z-0"></div>
            <div className="h-64 md:h-full bg-gray-800 relative">
              <img
                src="/image2.jpg"
                alt="Dr. Ícaro Fioravante"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section id="especialidades" className="py-20 bg-white text-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-wider">
            ESPECIALIDADES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#F0F4F8] rounded-md overflow-hidden hover:shadow-xl transition duration-300">
              <button className="w-full p-4 flex items-center justify-between text-left">
                <span>Consulta de adoecimento</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-[#F0F4F8] rounded-md overflow-hidden hover:shadow-xl transition duration-300">
              <button className="w-full p-4 flex items-center justify-between text-left">
                <span>Consulta de puericultura</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-[#F0F4F8] rounded-md overflow-hidden hover:shadow-xl transition duration-300">
              <button className="w-full p-4 flex items-center justify-between text-left">
                <span>Teste do olhinho</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="bg-[#F0F4F8] rounded-md overflow-hidden hover:shadow-xl transition duration-300">
              <button className="w-full p-4 flex items-center justify-between text-left">
                <span>Avaliação de crescimento e desenvolvimento</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contato"
              className="inline-block bg-[#2C3E50] hover:bg-[#8FB8D1] text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              AGENDAR MINHA CONSULTA
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white text-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="h-96 bg-[#F0F4F8] rounded-lg relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-lg"></div>
                <img
                  src="/image3.jpg"
                  alt="Dr. Ícaro Fioravante"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-10 tracking-wider">
                MINHA HISTÓRIA
              </h2>

              <div className="prose prose-lg text-gray-700 max-w-xl">
                <p className="mb-6">
                  Olá! Sou o Dr.{" "}
                  <strong>Ícaro Fioravante Germano Feitosa</strong>, médico
                  pediatra dedicado a cuidar da saúde e do bem-estar de crianças
                  e adolescentes, desde os primeiros dias de vida até a fase da
                  adolescência.
                </p>
                <p className="mb-6">
                  Formado pela <strong>Universidade Potiguar (UNP)</strong>, com
                  residência médica em <strong>Pediatria</strong> pelo Hospital
                  Universitário Onofre Lopes (HUOL-UFRN).
                </p>
                <p>
                  Minha maior satisfação é acompanhar o crescimento e
                  desenvolvimento dos meus pequenos pacientes, oferecendo um
                  atendimento humanizado, preventivo e personalizado, sempre em
                  parceria com as famílias. Acredito que cada criança é única, e
                  meu compromisso é garantir que elas tenham uma infância
                  saudável e feliz, com todo o suporte necessário para seu pleno
                  desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-20 bg-[#F0F4F8] text-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-wider">
            EXPERIÊNCIA PROFISSIONAL
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 mb-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">HUOL/MEJC</h3>
              <p className="text-gray-700">
                Residência médica em Pediatria (2019-2022)
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Hospital da Unimed</h3>
              <p className="text-gray-700">
                Atuação como médico plantonista do Pronto Socorro Infantil
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 mb-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">
                HUAB (Hospital Universitário Ana Bezerra - UFRN)
              </h3>
              <p className="text-gray-700">
                Atuação como pediatra e preceptor médico da residência de
                Pediatria
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">
                Hospital Central Coronel Pedro Germano
              </h3>
              <p className="text-gray-700">
                Atuação como pediatra e Chefe do Serviço de Pediatria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locais Section */}
      <section id="locais" className="py-20 bg-white text-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-wider">
            LOCAIS DE ATENDIMENTO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AMI Personali */}
            <div className="bg-[#F0F4F8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gray-700 relative">
                {/* Imagem da AMI Personali */}
                <img
                  src="/AMIPersonali.png"
                  alt="Clínica AMI Personali"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AMI Personali</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Manhattan Business</strong>
                  <br />
                  Av. Campos Sales, 901 – Salas 1201 e 1202
                  <br />
                  Tirol, Natal | RN – CEP: 59020-300
                </p>
                <a
                  href="https://www.google.com/maps?ll=-5.793702,-35.201881&z=16&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=15449437247759503614"
                  className="inline-flex items-center text-[#A0D2EB] hover:text-[#8FB8D1]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>Ver no mapa</span>
                </a>
              </div>
            </div>

            {/* Central Clinic */}
            <div className="bg-[#F0F4F8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gray-700 relative">
                {/* Imagem da Central Clinic */}
                <img
                  src="/CENTRALCLINIC.jpg"
                  alt="Central Clinic"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Central Clinic</h3>
                <p className="text-gray-700 mb-4">
                  Rua Otávio Lamartine, N° 38 B<br />
                  Centro, Jucurutu | RN – CEP: 59330-000
                </p>
                <a
                  href="https://www.google.com/maps/place/Central+clinic+Jucurutu/@-5.576453,-36.9896872,12.5z/data=!4m3!3m2!1s0x6f79bd0a958cd77f:0x363d7db7729c4b12!16s%2Fg%2F11l240w6k7?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
                  className="inline-flex items-center text-[#A0D2EB] hover:text-[#8FB8D1]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>Ver no mapa</span>
                </a>
              </div>
            </div>

            {/* Quallivida */}
            <div className="bg-[#F0F4F8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gray-700 relative">
                {/* Imagem da Quallivida */}
                <img
                  src="/QUALIVIDA.jpg"
                  alt="Clínica Quallivida"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Clínica Quallivida</h3>
                <p className="text-gray-700 mb-4">
                  Rua Jerônimo Câmara, R. Abílio Ventura, 385
                  <br />
                  João Câmara | RN, CEP: 59550-000
                </p>
                <a
                  href="https://www.google.com/maps/place/Cl%C3%ADnica+Quallivida/data=!4m2!3m1!1s0x0:0xd60f1068fc0d0ba7?sa=X&ved=1t:2428&ictx=111"
                  className="inline-flex items-center text-[#A0D2EB] hover:text-[#8FB8D1]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>Ver no mapa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-wider">
            ENTRE EM CONTATO
          </h2>

          <div className="max-w-md mx-auto space-y-6">
            <a
              href="mailto:icarofioravant@gmail.com"
              className="flex items-center justify-center bg-[#A0D2EB] py-4 px-6 rounded-lg hover:bg-[#8FB8D1] transition duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-white" />
              <span>icarofioravant@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/dr.icarofioravante"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-3" />
              <span>@dr.icarofioravante</span>
            </a>

            <div className="pt-8">
              <h3 className="text-xl font-bold text-center mb-6">
                Marcar Consulta
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://wa.me/558430884488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-600 py-4 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  <span>MedFácil (Natal)</span>
                  <FontAwesomeIcon icon={faWhatsapp} className="ml-3 text-xl" />
                </a>

                <a
                  href="https://wa.me/558498183636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-600 py-4 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  <span>Central Clinic (Jucurutu)</span>
                  <FontAwesomeIcon icon={faWhatsapp} className="ml-3 text-xl" />
                </a>

                <a
                  href="https://wa.me/558491773097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-600 py-4 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  <span>Quallivida (João Câmara)</span>
                  <FontAwesomeIcon icon={faWhatsapp} className="ml-3 text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] py-10 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-2">
            © 2025 Dr. Ícaro Fioravante. Todos os direitos reservados.
          </p>
          <p>CRM 9777 | RQE 5022</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
