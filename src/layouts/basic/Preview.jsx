import React from 'react'

const BasicTemplatePreview = ({ profile, themeColor, shareUrl, SOCIAL_ICONS }) => {
  return (
    <div className="max-w-2xl mx-auto py-4 px-2 sm:px-4" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001' }}>
          {/* Header image */}
          {profile.header && (
            <img
              src={profile.header}
              alt="Header"
              className="w-full h-32 object-cover rounded mb-2"
              style={{ maxWidth: 600, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
          )}
          <header className="flex flex-col items-center py-6 border-b" style={{ borderColor: themeColor }}>
            {profile.photo && (
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow -mt-16 border-4"
                style={{ borderColor: themeColor, background: '#fff' }}
              />
            )}
            <h1 className="text-3xl font-bold" style={{ color: themeColor }}>{profile.name}</h1>
            <h2 className="text-lg text-gray-600">{profile.title}</h2>
            <div className="flex gap-4 mt-2">
              {Object.entries(profile.social).map(([platform, url]) => {
                if (!url) return null;
                const Icon = SOCIAL_ICONS[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="text-2xl"
                    style={{ color: themeColor }}
                  >
                    <Icon />
                  </a>
                );
              })}
              {profile.links.filter(l => l.label && l.url).map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-base"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </header>
          <main>
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">About</h3>
              <p className="text-gray-700">{profile.bio}</p>
            </section>
            {profile.sections.filter(s => s.title).map((section) => (
              <section key={section.title} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {section.items.filter(i => i).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
            {/* CTA for email contact */}
            {profile.email && (
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-block px-4 py-2 rounded text-white"
                  style={{ background: themeColor }}
                  aria-label="Contact via email"
                >
                  Email Me
                </a>
              </section>
            )}
            {/* Shareable link */}
            <section className="mb-4">
              <h3 className="text-lg font-semibold mb-1">Share your profile</h3>
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="w-full p-2 border rounded text-sm bg-gray-100"
                aria-label="Shareable profile link"
                onFocus={e => e.target.select()}
              />
            </section>
          </main>
          <footer className="text-center py-4 text-gray-400 text-sm border-t">
            &copy; {new Date().getFullYear()} {profile.name}
          </footer>
        </div>
  )
}

export default BasicTemplatePreview