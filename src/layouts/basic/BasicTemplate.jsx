import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import BasicForm from "./BasicForm";
import BasicTemplatePreview from "./Preview";

const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

const THEME_COLORS = [
  { name: "Blue", value: "#2563eb" },
  { name: "Emerald", value: "#10b981" },
  { name: "Rose", value: "#e11d48" },
];

const BasicTemplate = () => {
  const [editMode, setEditMode] = useState(true);
  const [themeColor, setThemeColor] = useState(THEME_COLORS[0].value);
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    bio: "",
    photo: "",
    header: "",
    links: [{ label: "", url: "" }],
    social: { github: "", linkedin: "", twitter: "" },
    sections: [{ title: "Experience", items: [""] }],
    email: "",
  });
  const fileInputRef = useRef();
  const headerInputRef = useRef();
  

  // Save feature
  const handleSave = (e) => {
    e.preventDefault();
    // For now, just log the profile data
    console.log("Saved profile:", profile);
    alert("Profile details logged to console. (DB save coming soon)");
  };

  useEffect(() => {
    document.title = profile.name ? `${profile.name} | Peoples Profile` : "Create Your Profile";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', profile.bio || 'Create and share your professional profile.');
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = profile.bio || 'Create and share your professional profile.';
      document.head.appendChild(m);
    }
  }, [profile.name, profile.bio]);

  // Shareable link (simulate for now)
  const shareUrl = `${window.location.origin}/profile/${encodeURIComponent(profile.name.replace(/\s+/g, '-').toLowerCase())}`;

  return (
    <div className="min-h-screen font-poppins" style={{ background: '#f9fafb' }}>
      <div className="flex justify-between items-center p-4 gap-2">
        <div className="flex gap-2">
          {THEME_COLORS.map((c) => (
            <button
              key={c.value}
              aria-label={`Switch to ${c.name} theme`}
              className={`w-6 h-6 rounded-full border-2 ${themeColor === c.value ? 'border-black' : 'border-gray-300'}`}
              style={{ background: c.value }}
              onClick={() => setThemeColor(c.value)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded shadow"
            onClick={handleSave}
            aria-label="Save profile"
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded shadow"
            onClick={() => setEditMode((prev) => !prev)}
            aria-label={editMode ? "Preview profile" : "Edit profile"}
          >
            {editMode ? "Preview" : "Edit"}
          </button>
        </div>
      </div>
      {editMode ? (
        <BasicForm 
            profile={profile}
            setProfile={setProfile}
            fileInputRef={fileInputRef}
            headerInputRef={headerInputRef}
            handleSave={handleSave}
            SOCIAL_ICONS={SOCIAL_ICONS}
            themeColor={themeColor}
        />
      ) : (
        <BasicTemplatePreview 
            profile={profile}
            themeColor={themeColor}
            shareUrl={shareUrl}
            SOCIAL_ICONS={SOCIAL_ICONS}
        />
      )}
    </div>
  );
};

export default BasicTemplate;