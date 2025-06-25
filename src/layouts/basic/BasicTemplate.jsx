import React, { useState, useEffect, useRef, useContext } from "react";
import { toast } from 'react-hot-toast';
import BasicTemplateForm from "./Form";
import BasicTemplatePreview from "./Preview";
import { createBasicTemplate } from "@/utils/api";
import { THEME_COLORS } from "@/constants/theme-colors";
import { createDefaultProfile, SOCIAL_ICONS } from "@/constants";
import { AuthContext } from "@/context/AuthenticationContext";

const BasicTemplate = () => {
  const [editMode, setEditMode] = useState(true);
  const [themeColor, setThemeColor] = useState(THEME_COLORS[0].value);
  const [layoutType, setLayoutType] = useState("horizontal")
  const [profile, setProfile] = useState(() => createDefaultProfile(themeColor));
  const { userId } = useContext(AuthContext)
  
  // Save feature
  const handleSave = async (e) => {
    e.preventDefault();
    if (!profile.fullName) {
      toast.error("Full Name is a required field.");
      return;
    }
    if(!userId){
      toast.error("You must be logged in to save your profile.");
      return;
    }
    console.log("userId", userId)
    await createBasicTemplate(profile, userId)
      .then((res) => {
        console.log("Template created:", res);
        toast.success("Profile saved successfully!");
      })
      .catch((err) => {
        console.error("Error creating template:", err);
        toast.error("Error creating template");
      });
  };

  const handlePreview = () => {
    if (!profile.fullName) {
      toast.error("Please enter your name before previewing.");
      return;
    }
    
    const emptyFields = [];
    if (!profile.bio) emptyFields.push("Bio");
    if (!profile.about) emptyFields.push("About Me");
    if (profile.work.length === 0) emptyFields.push("Work section");

    if (emptyFields.length > 0) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Empty Fields
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  You have some empty fields: {emptyFields.join(", ")}.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
    ))
    }

    setEditMode(false);
  }

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
  const shareUrl = `${profile.name ? `${window.location.origin}/profile/${encodeURIComponent(profile.name.replace(/\s+/g, '-').toLowerCase())}` : '[complete-your-profile to get link]'}`;

  return (
    <div className="min-h-screen font-poppins" style={{ background: '#f9fafb' }}>
      <div className="flex justify-between items-center p-4 gap-2">
        <div className="flex flex-col-reverse gap-5 fixed right-0">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded shadow"
            onClick={handleSave}
            aria-label="Save profile"
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded shadow"
            onClick={editMode ? handlePreview : () => setEditMode(true)}
            aria-label={editMode ? "Preview profile" : "Edit profile"}
          >
            {editMode ? "Preview" : "Edit"}
          </button>
        </div>
      </div>
      {editMode ? (
        <BasicTemplateForm 
            profile={profile}
            setProfile={setProfile}
            handleSave={handleSave}
            themeColor={themeColor}
            setThemeColor={setThemeColor}
            THEME_COLORS={THEME_COLORS}
        />
      ) : (
        <BasicTemplatePreview 
            profile={profile}
            themeColor={themeColor}
            shareUrl={shareUrl}
            SOCIAL_ICONS={SOCIAL_ICONS}
            layoutType={layoutType}
            setLayoutType={setLayoutType}
        />
      )}
    </div>
  );
};

export default BasicTemplate;