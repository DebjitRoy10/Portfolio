"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  GraduationCap,
  Code,
  Award,
  Cpu,
  Zap,
  BookOpenCheck,
  Activity,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-600">Debjit Roy</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">
                About
              </a>
              <a href="#education" className="text-gray-600 hover:text-blue-600">
                Education
              </a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600">
                Projects
              </a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600">
                Experience
              </a>
              <a href="#publications" className="text-gray-600 hover:text-blue-600">
                Publications
              </a>
              <a href="#extracurricular" className="text-gray-600 hover:text-blue-600">
                Extracurricular
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#about" className="block py-2 text-gray-600">
                About
              </a>
              <a href="#education" className="block py-2 text-gray-600">
                Education
              </a>
              <a href="#skills" className="block py-2 text-gray-600">
                Skills
              </a>
              <a href="#projects" className="block py-2 text-gray-600">
                Projects
              </a>
              <a href="#experience" className="block py-2 text-gray-600">
                Experience
              </a>
              <a href="#publications" className="block py-2 text-gray-600">
                Publications
              </a>
              <a href="#extracurricular" className="block py-2 text-gray-600">
                Extracurricular
              </a>
              <a href="#contact" className="block py-2 text-gray-600">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Debjit Roy</span>
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">Front-End Developer & VLSI Enthusiast</h2>
              <p className="text-lg text-gray-600 mb-8">
                A highly motivated and skilled pre-final year student with a strong foundation in Electronics and
                Communication Engineering and a passion for technology. Eager to leverage my expertise in Frontend
                development, VLSI design, and embedded systems to contribute to innovative projects and drive meaningful
                impact.
              </p>
              <div className="flex gap-4 mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/DebjitRoy10" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/debjit2402/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>

                <a href="mailto:roydebjit2402@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>

            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEeJbsfPaTrVQ/profile-displayphoto-shrink_400_400/B56ZX1gerVHQAg-/0/1743580690018?e=1756339200&v=beta&t=EQdyRlH1cNJ5gPWEgyvQgze5t9qfEtQG4GngNniQDM0"
                  alt="Debjit Roy - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>Bachelor of Technology - Electronics & Communication Engineering</CardTitle>
                    <p className="text-blue-600 font-medium">Institute of Engineering and Management, Kolkata</p>
                    <p className="text-gray-600">2022 - 2026 | MAKAUT | CGPA: 9.04 (Till 5th Semester)</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <strong>Relevant Coursework:</strong> VLSI Design, Digital Signal Processing, Operating System,
                  Database Management System, FPGA Programming, Microprocessors, Digital Electronics, Communication
                  Systems, Computer Networks
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Activities:</strong> Core Member of IEM Freedom Cup, Participated in hackathons
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>Higher Secondary Education</CardTitle>
                    <p className="text-blue-600 font-medium">Harindanga High School</p>
                    <p className="text-gray-600">2019 - 2021 | Science Stream | 80.8%</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>Secondary Education</CardTitle>
                    <p className="text-blue-600 font-medium">Harindanga High School</p>
                    <p className="text-gray-600">2019 | 84.57%</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-600" />
                  VLSI & Hardware
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>VLSI Design</Badge>
                  <Badge>Verilog</Badge>
                  <Badge>VHDL</Badge>
                  <Badge>FPGA</Badge>
                  <Badge>Xilinx Vivado</Badge>
                  <Badge>Cadence</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Tools & Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>MATLAB</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-commerce Platform
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Developed a comprehensive e-commerce platform tailored for the Indian market, featuring product
                  listings, secure payment gateways, and a user-friendly interface to enhance the online shopping
                  experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Efficient Squarer Circuit
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Designed and implemented an optimized squarer circuit using Verilog on Xilinx Vivado, achieving
                  high-speed performance and resource efficiency for FPGA-based applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Verilog</Badge>
                  <Badge variant="outline">FPGA</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Quantum Cost Optimized Adder
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Developed a quantum-cost-optimized adder circuit using Verilog on Xilinx Vivado, minimizing quantum
                  resources and enhancing the performance of quantum computing applications on FPGA platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Verilog</Badge>
                  <Badge variant="outline">FPGA</Badge>
                  <Badge variant="outline">Digital Design</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience & Activities</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Code className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>Student Researcher</CardTitle>
                    <p className="text-blue-600 font-medium">
                      Innovation and Entrepreneurship Development Cell (IEDC) ECE, Kolkata
                    </p>
                    <p className="text-gray-600">May'24 - July'24</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Conducted research on innovative projects in electronics and communication engineering.</li>
                  <li>
                    • Collaborated with faculty and fellow students to develop and implement new ideas and technologies.
                  </li>
                  <li>• Participated in workshops and seminars to enhance knowledge and skills in relevant fields.</li>
                </ul>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BookOpenCheck className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>
                      Design and FPGA Implementation of an Efficient Squarer Circuit Using Reversible Logic
                    </CardTitle>
                    <p className="text-blue-600 font-medium">IEEE</p>
                    <p className="text-gray-600">
                      <span className="font-bold">doi</span>: 
                      <a 
                        href="https://doi.org/10.1109/EDKCON62339.2024.10870860" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="italic text-blue-600 hover:underline"
                      >
                        10.1109/EDKCON62339.2024.10870860
                      </a> 
                      | 2024
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This paper presents the design and FPGA implementation of an efficient 4×4 squarer circuit using reversible logic. The proposed architecture is developed using the hardware description language Verilog and synthesized with Xilinx Vivado and Xilinx ISE 14.7 tools. The FPGA implementation of proposed design has been done on Artix 7 (NexysA7).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BookOpenCheck className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>Design and Implementation of an EfficientQuantum Cost Optimized Adder Using Reversible Logic Gates</CardTitle>
                    <p className="text-blue-600 font-medium">IEEE</p>
                    <p className="text-gray-600">
                      <span className="font-bold">doi</span>: 
                      <a 
                        href="https://doi.org/10.1109/IEMENTech65115.2025.10959433" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="italic text-blue-600 hover:underline"
                      >
                        10.1109/IEMENTech65115.2025.10959433
                      </a> 
                       | 2025
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This paper presents the design and FPGA implementation of an efficient and high-speed full adder circuit utilizing reversible logic gates, namely Feynman, Toffoli, and Peres gates. The design focuses on improving computational efficiency and thermal performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section id="extracurricular" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Extracurricular Activities</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>Sports Head</CardTitle>
                    <p className="text-blue-600 font-medium">IEM, Kolkata</p>
                    <p className="text-gray-600">2025 - 2026</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                 Worked as the Sports Captain, managing all college sports events and leading teams in various competitions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>Chairman</CardTitle>
                    <p className="text-blue-600 font-medium">IEM Federation Cup</p>
                    <p className="text-gray-600">2025 - 2026</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">

                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>Data Base Management System</CardTitle>
                    <p className="text-blue-600 font-medium">NPTEL</p>
                    <p className="text-gray-600">Jul-Sep 2024 | 57%</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>System Design Through Verilog</CardTitle>
                    <p className="text-blue-600 font-medium">NPTEL</p>
                    <p className="text-gray-600">Jul-Sep 2024 | 65%</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>CSS for Programmers</CardTitle>
                    <p className="text-blue-600 font-medium">Linkedin Learning</p>
                    <p className="text-gray-600">May 2025</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>HTML for Programmers</CardTitle>
                    <p className="text-blue-600 font-medium">Linkedin Learning</p>
                    <p className="text-gray-600">May 2025</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">roydebjit2402@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 7679023121</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Kolkata, West Bengal, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/DebjitRoy10" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/debjit2402/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>

                  <a href="mailto:roydebjit2402@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </a>
                </div>

              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Let's Connect!</h3>
                <p className="text-gray-600">
                  I'm actively seeking internship and full-time opportunities in frontend development, VLSI design, and
                  embedded systems. Let's discuss how I can contribute to your team!
                </p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Debjit Roy. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/DebjitRoy10" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                <Github className="h-4 w-4" />
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/debjit2402/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>

            <a href="mailto:roydebjit2402@gmail.com">
              <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>

        </div>
      </footer>
    </div>
  )
}
