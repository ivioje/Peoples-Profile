import { BsCamera } from "react-icons/bs";

const BasicForm = ({ profile, setProfile, fileInputRef, headerInputRef, handleSave, SOCIAL_ICONS, themeColor }) => {
    // Input handlers
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfile((prev) => ({ ...prev, photo: reader.result }));
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleHeaderChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfile((prev) => ({ ...prev, header: reader.result }));
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleSocialChange = (platform, value) => {
        setProfile((prev) => ({ ...prev, social: { ...prev.social, [platform]: value } }));
      };
    
      const handleLinkChange = (idx, field, value) => {
        const newLinks = [...profile.links];
        newLinks[idx][field] = value;
        setProfile((prev) => ({ ...prev, links: newLinks }));
      };
    
      const addLink = () => {
        setProfile((prev) => ({ ...prev, links: [...prev.links, { label: "", url: "" }] }));
      };
    
      const removeLink = (idx) => {
        setProfile((prev) => ({ ...prev, links: prev.links.filter((_, i) => i !== idx) }));
      };
    
      // Section customization
      const handleSectionChange = (idx, field, value) => {
        const newSections = [...profile.sections];
        newSections[idx][field] = value;
        setProfile((prev) => ({ ...prev, sections: newSections }));
      };
    
      const handleSectionItemChange = (sectionIdx, itemIdx, value) => {
        const newSections = [...profile.sections];
        newSections[sectionIdx].items[itemIdx] = value;
        setProfile((prev) => ({ ...prev, sections: newSections }));
      };
    
      const addSection = () => {
        setProfile((prev) => ({ ...prev, sections: [...prev.sections, { title: "", items: [""] }] }));
      };
    
      const removeSection = (idx) => {
        setProfile((prev) => ({ ...prev, sections: prev.sections.filter((_, i) => i !== idx) }));
      };
    
      const addSectionItem = (sectionIdx) => {
        const newSections = [...profile.sections];
        newSections[sectionIdx].items.push("");
        setProfile((prev) => ({ ...prev, sections: newSections }));
      };
    
      const removeSectionItem = (sectionIdx, itemIdx) => {
        const newSections = [...profile.sections];
        newSections[sectionIdx].items = newSections[sectionIdx].items.filter((_, i) => i !== itemIdx);
        setProfile((prev) => ({ ...prev, sections: newSections }));
      };
    
      // Section reordering
      const moveSection = (from, to) => {
        if (to < 0 || to >= profile.sections.length) return;
        const newSections = [...profile.sections];
        const [moved] = newSections.splice(from, 1);
        newSections.splice(to, 0, moved);
        setProfile((prev) => ({ ...prev, sections: newSections }));
      };

  return (
    <form className="max-w-2xl mx-auto py-4 px-2 sm:px-4" onSubmit={handleSave} aria-label="Edit profile form">
      {/* Header image upload with dashed drop area */}
      <div className="flex flex-col items-center mb-4">
        <label
          htmlFor="header-upload"
          className="w-full flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-400 rounded cursor-pointer hover:border-blue-400 transition relative"
          style={{ maxWidth: 600 }}
          tabIndex={0}
          aria-label="Upload header image"
        >
          {profile.header ? (
            <img
              src={profile.header}
              alt="Header Preview"
              className="w-full h-32 object-cover rounded"
              style={{ maxWidth: 600 }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <span className="text-3xl text-gray-400 mb-1">+</span>
              <span className="text-gray-500 text-sm">Add Banner Image</span>
            </div>
          )}
          <input
            id="header-upload"
            type="file"
            accept="image/*"
            onChange={handleHeaderChange}
            ref={headerInputRef}
            className="hidden"
            tabIndex={-1}
          />
          <BsCamera className={`absolute bottom-2 right-2 hover:text-blue-500 transition w-10 h-10 bg-gray-200 shadow-sm p-2 rounded-full`} aria-hidden="true" />
        </label>
      </div>
      {/* Profile photo upload with dashed drop area */}
      <div className="flex flex-col items-center mb-6">
        <label
          htmlFor="photo-upload"
          className="w-32 h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-full cursor-pointer hover:border-blue-400 transition relative"
          tabIndex={0}
          aria-label="Upload profile photo"
        >
          {profile.photo ? (
            <img
              src={profile.photo}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full object-cover shadow"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <span className="text-3xl text-gray-400 mb-1">+</span>
              <span className="text-gray-500 text-xs">Add Profile Photo</span>
            </div>
          )}
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
            tabIndex={-1}
          />
          <BsCamera className={`absolute bottom-2 right-2 hover:text-blue-500 transition w-8 h-8 bg-gray-200 shadow-sm p-2 rounded-full`} aria-hidden="true" />
        </label>
      </div>
      <input
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Full Name"
        aria-label="Full Name"
        className="block w-full mb-4 p-2 border rounded"
        required
      />
      <input
        name="title"
        value={profile.title}
        onChange={handleChange}
        placeholder="Title (e.g. Web Developer)"
        aria-label="Title"
        className="block w-full mb-4 p-2 border rounded"
      />
      <textarea
        name="bio"
        value={profile.bio}
        onChange={handleChange}
        placeholder="Short bio/about you"
        aria-label="Bio"
        className="block w-full mb-4 p-2 border rounded"
      />
      {/* Social media icons */}
      <div className="mb-6 flex flex-col gap-2">
        <label className="font-semibold">Social Media</label>
        {Object.entries(SOCIAL_ICONS).map(([platform, Icon]) => (
          <div key={platform} className="flex items-center gap-2">
            <Icon className="text-xl" aria-hidden="true" />
            <input
              type="url"
              value={profile.social[platform]}
              onChange={e => handleSocialChange(platform, e.target.value)}
              placeholder={`Your ${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
              aria-label={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
              className="p-2 border rounded w-full"
            />
          </div>
        ))}
      </div>
      {/* Links */}
      <div className="mb-6">
        <label className="font-semibold">Links</label>
        {profile.links.map((link, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              value={link.label}
              onChange={e => handleLinkChange(idx, "label", e.target.value)}
              placeholder="Label (e.g. Portfolio)"
              aria-label="Link label"
              className="p-2 border rounded w-1/3"
            />
            <input
              value={link.url}
              onChange={e => handleLinkChange(idx, "url", e.target.value)}
              placeholder="URL"
              aria-label="Link URL"
              className="p-2 border rounded w-2/3"
            />
            <button type="button" onClick={() => removeLink(idx)} className="text-red-500" aria-label="Remove link">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addLink} className="text-blue-600" aria-label="Add link">+ Add Link</button>
      </div>
      {/* Section customization with reordering */}
      <div className="mb-6">
        <label className="font-semibold">Sections</label>
        {profile.sections.map((section, sIdx) => (
          <div key={sIdx} className="mb-4 border p-2 rounded bg-gray-50">
            <div className="flex items-center gap-2 mb-2">
              <input
                value={section.title}
                onChange={e => handleSectionChange(sIdx, "title", e.target.value)}
                placeholder="Section Title (e.g. Experience)"
                aria-label="Section Title"
                className="p-2 border rounded w-full"
              />
              <button type="button" onClick={() => moveSection(sIdx, sIdx - 1)} aria-label="Move section up" className="text-gray-500">↑</button>
              <button type="button" onClick={() => moveSection(sIdx, sIdx + 1)} aria-label="Move section down" className="text-gray-500">↓</button>
              <button type="button" onClick={() => removeSection(sIdx)} className="text-red-500 ml-2" aria-label="Remove section">Remove</button>
            </div>
            {section.items.map((item, iIdx) => (
              <div key={iIdx} className="flex gap-2 mb-2">
                <input
                  value={item}
                  onChange={e => handleSectionItemChange(sIdx, iIdx, e.target.value)}
                  placeholder="Item (e.g. Company, Project, Skill)"
                  aria-label="Section item"
                  className="p-2 border rounded w-full"
                />
                <button type="button" onClick={() => removeSectionItem(sIdx, iIdx)} className="text-red-500" aria-label="Remove item">Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => addSectionItem(sIdx)} className="text-blue-600" aria-label="Add item">+ Add Item</button>
          </div>
        ))}
        <button type="button" onClick={addSection} className="text-blue-600" aria-label="Add section">+ Add Section</button>
      </div>
      {/* CTA for email contact */}
      <div className="mb-6">
        <label className="font-semibold">Contact Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Your contact email"
          aria-label="Contact email"
          className="block w-full mb-2 p-2 border rounded"
          required
        />
      </div>
    </form>
  )
}

export default BasicForm