import {
  Twitter,
  Github,
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

const SocialIcon = ({ type }) => {
  switch (type) {
    case "linkedin":
      return <FaLinkedin className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
    case "twitter":
      return <Twitter className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
    case "github":
      return <Github className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
    case "website":
      return <Globe className="w-5 h-5 text-gray-500 hover:text-black transition-colors" />
    default:
      return null
  }
}

const BasicTemplatePreview = ({ profile, themeColor }) => {
  const Nav = () => (
    <nav className="flex justify-between items-center py-4">
      <div className="font-bold text-lg">{profile.fullName || "Your Name"}</div>
      <div className="hidden md:flex items-center space-x-8 text-gray-600">
        <a href="#about" className="hover:text-black">
          About
        </a>
        <a href="#work" className="hover:text-black">
          Work
        </a>
        <a href="#contact" className="hover:text-black">
          Contact
        </a>
      </div>
    </nav>
  )

  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Nav />

        {/* --- Hero Section --- */}
        <header
          className="relative text-left py-24 sm:py-32"
          style={{
            backgroundImage: `url(${profile.header})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "1rem",
            color: "white", // Default text color for contrast on image
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-8">
            <div className="flex-1 space-y-4">
              <p className="text-lg uppercase" style={{ color: themeColor }}>
                {profile.bio || "Your Professional Title"}
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                {profile.fullName || "Your Name"}
              </h1>
              <p className="text-xl text-gray-200 max-w-xl">
                {profile.about || "A brief description about yourself, your passions, and your work."}
              </p>
              <a href="#contact">
                <button
                  className="mt-4 px-6 py-3 rounded-lg font-semibold text-white transition-transform transform hover:scale-105"
                  style={{ backgroundColor: themeColor }}
                >
                  Get In Touch
                </button>
              </a>
            </div>
            {profile.photo && (
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                <img
                  src={profile.photo}
                  alt={profile.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </header>

        {/* --- About Section --- */}
        <section id="about" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {profile.about ||
              "This is a space for a more detailed bio. Talk about your journey, your philosophy, and what you're passionate about. Make it personal and engaging."}
          </p>
        </section>

        {/* --- Interests Section --- */}
        {profile.interests && profile.interests.length > 0 && (
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Interests</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {profile.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* --- My Work Section --- */}
        <section id="work" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(profile.work || []).map((item) => (
              <a
                key={item.id}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-64 bg-gray-200">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title || "Project Title"}</h3>
                    <p className="text-gray-600 mb-4">{item.description || "A short description of the work."}</p>
                    <span className="flex items-center font-semibold" style={{ color: themeColor }}>
                      View Project <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        
        {/* --- Footer & Contact --- */}
        <footer id="contact" className="py-20 bg-gray-50 rounded-lg mt-12">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Have a project in mind? I'd love to hear from you.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-lg">
                {profile.contact?.email && (
                    <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-3 hover:text-black">
                        <Mail className="w-6 h-6" style={{color: themeColor}}/>
                        <span>{profile.contact.email}</span>
                    </a>
                )}
                {profile.contact?.phone && (
                     <div className="flex items-center gap-3">
                        <Phone className="w-6 h-6" style={{color: themeColor}}/>
                        <span>{profile.contact.phone}</span>
                    </div>
                )}
                 {profile.contact?.city && profile.contact?.country && (
                    <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6" style={{color: themeColor}}/>
                        <span>{profile.contact.city}, {profile.contact.country}</span>
                    </div>
                )}
            </div>
            <div className="flex justify-center gap-6 mt-12">
                {Object.entries(profile.social || {}).map(([type, url]) => {
                    if (!url) return null
                    return (
                        <a key={type} href={url} target="_blank" rel="noopener noreferrer">
                            <SocialIcon type={type}/>
                        </a>
                    )
                })}
            </div>
            <div className="text-center text-gray-500 mt-16">
                 © {new Date().getFullYear()} {profile.fullName || "Your Name"}. All rights reserved.
            </div>
        </footer>
      </div>
    </div>
  )
}

export default BasicTemplatePreview
