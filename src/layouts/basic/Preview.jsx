import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Copy, Check, Mail, Phone, MapPin, Globe, ExternalLink, Calendar } from "lucide-react"

const BasicTemplatePreview = ({ profile, themeColor, shareUrl, SOCIAL_ICONS, layoutType = "horizontal" }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy URL:", err)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString + "-01")
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" })
  }

  const ContactInfo = () => (
    <div className="space-y-3">
      {profile.email && (
        <div className="flex items-center gap-3 text-sm">
          <Mail className="w-4 h-4 flex-shrink-0" style={{ color: themeColor }} />
          <a href={`mailto:${profile.email}`} className="hover:underline break-all">
            {profile.email}
          </a>
        </div>
      )}
      {profile.phone && (
        <div className="flex items-center gap-3 text-sm">
          <Phone className="w-4 h-4 flex-shrink-0" style={{ color: themeColor }} />
          <span>{profile.phone}</span>
        </div>
      )}
      {profile.location && (
        <div className="flex items-center gap-3 text-sm">
          <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: themeColor }} />
          <span>{profile.location}</span>
        </div>
      )}
      {profile.website && (
        <div className="flex items-center gap-3 text-sm">
          <Globe className="w-4 h-4 flex-shrink-0" style={{ color: themeColor }} />
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
            {profile.website.replace(/^https?:\/\//, "")}
          </a>
        </div>
      )}
    </div>
  )

  const SocialLinks = () => (
    <div className="flex flex-wrap gap-3">
      {Object.entries(profile.social || {}).map(([platform, url]) => {
        if (!url) return null
        const Icon = SOCIAL_ICONS[platform]
        return (
          <Button
            key={platform}
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-110 transition-all duration-200 border-2"
            style={{
              borderColor: themeColor + "40",
              color: themeColor,
            }}
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={platform}>
              <Icon />
            </a>
          </Button>
        )
      })}
    </div>
  )

  const SkillsSection = () => {
    if (!profile.skills || Object.keys(profile.skills).length === 0) return null

    return (
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
          Skills
        </h3>
        <div className="space-y-4">
          {Object.entries(profile.skills).map(([category, skills]) => {
            if (!skills || skills.length === 0) return null
            return (
              <div key={category}>
                <h4 className="font-medium text-gray-800 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.trim())
                    .map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full border"
                        style={{ borderColor: themeColor + "40", color: themeColor }}
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  const ExperienceSection = () => {
    if (!profile.experience || profile.experience.length === 0) return null

    return (
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
          Work Experience
        </h3>
        <div className="space-y-6">
          {profile.experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-lg">{exp.jobTitle}</h4>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  {exp.location && <p className="text-gray-600 text-sm">{exp.location}</p>}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4" />
                  {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                </div>
              </div>
              {exp.description && exp.description.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  {exp.description
                    .filter((desc) => desc.trim())
                    .map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }

  const EducationSection = () => {
    if (!profile.education || profile.education.length === 0) return null

    return (
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
          Education
        </h3>
        <div className="space-y-4">
          {profile.education.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                <div>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-gray-700">{edu.institution}</p>
                  {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4" />
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </div>
              </div>
              <div className="flex gap-4 text-sm text-gray-600">
                {edu.gpa && <span>GPA: {edu.gpa}</span>}
                {edu.honors && <span>{edu.honors}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  const ProjectsSection = () => {
    if (!profile.projects || profile.projects.length === 0) return null

    return (
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
          Projects
        </h3>
        <div className="space-y-4">
          {profile.projects.map((project, index) => (
            <div key={index}>
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold">{project.name}</h4>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 hover:underline"
                    style={{ color: themeColor }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                )}
              </div>
              {project.description && <p className="text-gray-700 text-sm mb-2">{project.description}</p>}
              {project.technologies && (
                <div className="flex flex-wrap gap-1">
                  {project.technologies.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded border"
                      style={{ borderColor: themeColor + "30", backgroundColor: themeColor + "10" }}
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }

  const CertificationsSection = () => {
    if (!profile.certifications || profile.certifications.length === 0) return null

    return (
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
          Certifications
        </h3>
        <div className="space-y-3">
          {profile.certifications.map((cert, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
              </div>
              {cert.date && <span className="text-sm text-gray-600">{formatDate(cert.date)}</span>}
            </div>
          ))}
        </div>
      </section>
    )
  }

  const LanguagesSection = () => {
    if (!profile.languages || profile.languages.length === 0) return null

    return (
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
          Languages
        </h3>
        <div className="space-y-2">
          {profile.languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-medium">{lang.language}</span>
              <span className="text-sm text-gray-600">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }

  const InterestsSection = () => {
    if (!profile.interests) return null

    const interests = profile.interests
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i)
    if (interests.length === 0) return null

    return (
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
          Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full"
              style={{ backgroundColor: themeColor + "20", color: themeColor }}
            >
              {interest}
            </span>
          ))}
        </div>
      </section>
    )
  }

  // Two-column layout
  if (layoutType === "horizontal") {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <Card className="overflow-hidden shadow-xl border-0">
          {/* Header Image */}
          {profile.header && (
            <div className="relative h-28 md:h-44 overflow-hidden">
              <img
                src={profile.header || "/placeholder.svg"}
                alt="Profile header"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          <CardContent className="relative p-0">
            {/* Header Section */}
            <div className="relative px-6 pt-6 pb-6 text-center border-b">
              {/* Profile Photo */}
              {profile.photo && (
                <div className="flex justify-center mb-4">
                  <div
                    className="relative -mt-16 md:-mt-20"
                    style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}
                  >
                    <img
                      src={profile.photo || "/placeholder.svg"}
                      alt={profile.name}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Name and Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: themeColor }}>
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium mb-4">{profile.title}</p>

              {/* Social Links */}
              <div className="flex justify-center">
                <SocialLinks />
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Professional Summary */}
                {profile.summary && (
                  <section>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
                      Professional Summary
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{profile.summary}</p>
                  </section>
                )}

                <ExperienceSection />
                <ProjectsSection />
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                {/* Contact Information */}
                <section>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
                    Contact
                  </h3>
                  <ContactInfo />
                </section>

                <SkillsSection />
                <EducationSection />
                <CertificationsSection />
                <LanguagesSection />
                <InterestsSection />
              </div>
            </div>

            {/* Share Section */}
            <div className="px-6 pb-6">
              <Separator className="mb-6" />
              <section>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 rounded-full" style={{ backgroundColor: themeColor }} />
                  Share Profile
                </h3>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 bg-gray-50 rounded-lg border">
                    <p className="text-sm text-gray-600 font-mono break-all">{shareUrl}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopyUrl}
                    className="flex-shrink-0 hover:scale-105 transition-all duration-200"
                    style={{
                      borderColor: themeColor + "40",
                      color: themeColor,
                    }}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                {copied && (
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Link copied to clipboard!
                  </p>
                )}
              </section>
            </div>

            {/* Footer */}
            <Separator />
            <footer className="px-6 py-4 text-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} {profile.name}. All rights reserved.
              </p>
            </footer>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Single column layout (vertical)
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="overflow-hidden shadow-xl border-0">
        {/* Header Image */}
        {profile.header && (
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={profile.header || "/placeholder.svg"}
              alt="Profile header"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        <CardContent className="relative p-0">
          {/* Header Section */}
          <div className="relative px-6 pt-6 pb-8 text-center">
            {/* Profile Photo */}
            {profile.photo && (
              <div className="flex justify-center mb-6">
                <div
                  className="relative -mt-16 md:-mt-20"
                  style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}
                >
                  <img
                    src={profile.photo || "/placeholder.svg"}
                    alt={profile.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white bg-white"
                  />
                </div>
              </div>
            )}

            {/* Name and Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: themeColor }}>
              {profile.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium mb-6">{profile.title}</p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <ContactInfo />
            </div>

            {/* Social Links */}
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>

          <Separator />

          {/* Single Column Content */}
          <div className="px-6 py-8 space-y-8">
            {/* Professional Summary */}
            {profile.summary && (
              <section>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
                  Professional Summary
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">{profile.summary}</p>
              </section>
            )}

            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <CertificationsSection />
            <LanguagesSection />
            <InterestsSection />

            {/* Share Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
                Share Profile
              </h3>
              <div className="flex gap-2">
                <div className="flex-1 p-3 bg-gray-50 rounded-lg border">
                  <p className="text-sm text-gray-600 font-mono break-all">{shareUrl}</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopyUrl}
                  className="flex-shrink-0 hover:scale-105 transition-all duration-200"
                  style={{
                    borderColor: themeColor + "40",
                    color: themeColor,
                  }}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              {copied && (
                <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Link copied to clipboard!
                </p>
              )}
            </section>
          </div>

          <Separator />

          {/* Footer */}
          <footer className="px-6 py-4 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </footer>
        </CardContent>
      </Card>
    </div>
  )
}

export default BasicTemplatePreview
