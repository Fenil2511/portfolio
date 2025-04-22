import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Fenil Chauhan
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Cybersecurity Professional | AI Enthusiast | Security Researcher
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Link href="mailto:linef.chauhan@gmail.com" className="hover:text-green-400 transition-colors">
              📧 Email
            </Link>
            <Link href="tel:+919638402511" className="hover:text-green-400 transition-colors">
              📱 +91 9638402511
            </Link>
            <Link href="https://linkedin.com/in/itfenil" target="_blank" className="hover:text-green-400 transition-colors">
              🔗 LinkedIn
            </Link>
            <Link href="https://github.com/fenil2511" target="_blank" className="hover:text-green-400 transition-colors">
              💻 GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400">About Me</h2>
          <p className="text-lg text-gray-300 mb-8">
            Cybersecurity professional with hands-on experience in ISO 27001 assessments, GDPR, and CCPA compliance. 
            Skilled in conducting internal audits, gap analyses, and implementing robust security measures. 
            Proven expertise in third-party risk management (TPRM), vulnerability assessments, and cloud security. 
            Passionate about delivering innovative solutions through AI-based projects and cybersecurity research.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Education</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">B. Tech in Computer Engineering</h3>
            <p className="text-gray-300">Sarvajanik College of Engineering & Technology, Surat</p>
            <p className="text-gray-400">July 2021 - June 2025</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Key Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Gemini for Security Engineers',
              'GDPR Compliance',
              'Ethical Hacking',
              'ISO 27001/2',
              'NIST CSF',
              'PCI DSS',
              'Cloud Security',
              'Python',
              'AI/ML',
              'Azure',
              'Blockchain Security',
              'Vulnerability Assessment'
            ].map((skill) => (
              <div key={skill} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Projects</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Malware Detection using AI</h3>
              <p className="text-gray-300">
                Developed an AI tool using Random Forest and Neural Networks to detect and classify malware, 
                enhancing cybersecurity through advanced pattern recognition and behavioral analysis.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Anti-Spoofing System using AI/ML</h3>
              <p className="text-gray-300">
                Created a system to secure against face-scanning attacks through advanced machine learning techniques, 
                implementing real-time detection and prevention of biometric spoofing attempts.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Cryptocurrency Flow Investigation Tool</h3>
              <p className="text-gray-300">
                Developed a tool for analyzing and visualizing cryptocurrency transaction flows to identify 
                potential security issues and suspicious activities in blockchain networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Research And Development Analyst @Unizoy</h3>
              <p className="text-gray-400 mb-2">Jan 2025 - Present | Surat, IN</p>
              <p className="text-gray-300">
                Focus on studying emerging cybersecurity trends and technologies to create better solutions for 
                detecting threats, managing risks, and assessing vulnerabilities.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Cyber Security Analyst, Intern @Second Quadrant Consulting</h3>
              <p className="text-gray-400 mb-2">May 2024 - June 2024 | Mumbai, IN</p>
              <p className="text-gray-300">
                Identified and resolved critical security gaps in cloud environments, conducted compliance assessments, 
                and developed training materials for security best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Design patent for Anti-Sleep Detector Device (April 2024)',
              'Research Paper accepted to IEEE',
              'Outstanding Student of the Year at Sarvajanik University (February 2024)',
              'Microsoft Certified: Security, Compliance, and Identity Fundamentals (March 2022)',
              'Security Vulnerability Discovery by F5.com (November 2023)',
              'Top 25 in Microsoft Azure Blogathon (March 2023)',
              'Hall of Fame by Department of the Treasury (July 2024)',
              'Honorable mention at Hackswift 2024 International Hackathon'
            ].map((achievement) => (
              <div key={achievement} className="bg-gray-800 p-4 rounded-lg">
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
