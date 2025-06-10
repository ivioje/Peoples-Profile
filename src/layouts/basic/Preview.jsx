
import { useState } from "react"
import { Button } from "@/components/ui/button.jsx"
import { Card, CardContent } from "@/components/ui/card.jsx"
import { Separator } from "@/components/ui/separator.jsx"
import { Copy, Check, Mail, ExternalLink } from "lucide-react"

const BasicTemplatePreview = ({ profile, themeColor, shareUrl, SOCIAL_ICONS }) => {
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
          {/* Profile Section */}
          <div className="relative px-6 pt-6 pb-8">
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
                  <div
                    className="absolute inset-0 rounded-full border-2 opacity-20"
                    style={{ borderColor: themeColor }}
                  />
                </div>
              </div>
            )}

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium">{profile.title}</p>
            </div>

            {/* Social Links and External Links */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {/* Social Icons */}
              {Object.entries(profile.social).map(([platform, url]) => {
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

              {/* External Links */}
              {profile.links
                .filter((l) => l.label && l.url)
                .map((link) => (
                  <Button
                    key={link.url}
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:scale-105 transition-all duration-200"
                    style={{
                      borderColor: themeColor + "40",
                      color: themeColor,
                    }}
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {link.label}
                    </a>
                  </Button>
                ))}
            </div>
          </div>

          <Separator />

          {/* Content Sections */}
          <div className="px-6 py-8 space-y-8">
            {/* About Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
                About
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">{profile.bio}</p>
            </section>

            {/* Dynamic Sections */}
            {profile.sections
              .filter((s) => s.title && s.items.length > 0)
              .map((section) => (
                <section key={section.title}>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
                    {section.title}
                  </h3>
                  <div className="grid gap-3">
                    {section.items
                      .filter((i) => i)
                      .map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: themeColor }}
                          />
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                  </div>
                </section>
              ))}

            {/* Contact Section */}
            {profile.email && (
              <section>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: themeColor }} />
                  Get In Touch
                </h3>
                <Button
                  size="lg"
                  className="rounded-full hover:scale-105 transition-all duration-200 shadow-lg"
                  style={{ backgroundColor: themeColor }}
                  asChild
                >
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send me an email
                  </a>
                </Button>
              </section>
            )}

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