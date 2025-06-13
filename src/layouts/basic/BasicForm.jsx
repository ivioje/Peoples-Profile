import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BsCamera } from "react-icons/bs"
import { Plus, Trash2, GripVertical, LayoutGrid, Columns } from "lucide-react"

const BasicForm = ({ profile, setProfile, fileInputRef, headerInputRef, handleSave, SOCIAL_ICONS, themeColor }) => {
  const [layoutType, setLayoutType] = useState("horizontal")

  // Input handlers
  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleNestedChange = (section, field, value) => {
    setProfile((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, photo: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleHeaderChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, header: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSocialChange = (platform, value) => {
    setProfile((prev) => ({
      ...prev,
      social: { ...prev.social, [platform]: value },
    }))
  }

  // Array field handlers
  const handleArrayChange = (section, index, field, value) => {
    const newArray = [...profile[section]]
    newArray[index] = { ...newArray[index], [field]: value }
    setProfile((prev) => ({ ...prev, [section]: newArray }))
  }

  const addArrayItem = (section, template) => {
    setProfile((prev) => ({
      ...prev,
      [section]: [...prev[section], template],
    }))
  }

  const removeArrayItem = (section, index) => {
    setProfile((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }))
  }

  // Skills handlers
  const addSkill = (category) => {
    const newSkills = { ...profile.skills }
    if (!newSkills[category]) newSkills[category] = []
    newSkills[category].push("")
    setProfile((prev) => ({ ...prev, skills: newSkills }))
  }

  const updateSkill = (category, index, value) => {
    const newSkills = { ...profile.skills }
    newSkills[category][index] = value
    setProfile((prev) => ({ ...prev, skills: newSkills }))
  }

  const removeSkill = (category, index) => {
    const newSkills = { ...profile.skills }
    newSkills[category] = newSkills[category].filter((_, i) => i !== index)
    setProfile((prev) => ({ ...prev, skills: newSkills }))
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Layout Toggle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5" />
            Layout Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button
              type="button"
              variant={layoutType === "horizontal" ? "default" : "outline"}
              onClick={() => setLayoutType("horizontal")}
              className="flex items-center gap-2"
            >
              <Columns className="w-4 h-4" />
              Two Column
            </Button>
            <Button
              type="button"
              variant={layoutType === "vertical" ? "default" : "outline"}
              onClick={() => setLayoutType("vertical")}
              className="flex items-center gap-2"
            >
              <LayoutGrid className="w-4 h-4" />
              Single Column
            </Button>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Header & Profile Images */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Header Image */}
            <div>
              <Label>Header/Banner Image</Label>
              <label
                htmlFor="header-upload"
                className="w-full flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors relative mt-2"
              >
                {profile.header ? (
                  <img
                    src={profile.header || "/placeholder.svg"}
                    alt="Header Preview"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full">
                    <Plus className="w-8 h-8 text-gray-400 mb-2" />
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
                />
                <BsCamera className="absolute bottom-2 right-2 w-8 h-8 bg-white/80 p-1.5 rounded-full shadow-sm" />
              </label>
            </div>

            {/* Profile Photo */}
            <div>
              <Label>Profile Photo</Label>
              <div className="flex justify-center mt-2">
                <label
                  htmlFor="photo-upload"
                  className="w-32 h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-full cursor-pointer hover:border-gray-400 transition-colors relative"
                >
                  {profile.photo ? (
                    <img
                      src={profile.photo || "/placeholder.svg"}
                      alt="Profile Preview"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <Plus className="w-6 h-6 text-gray-400 mb-1" />
                      <span className="text-gray-500 text-xs text-center">Add Photo</span>
                    </div>
                  )}
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                  <BsCamera className="absolute bottom-1 right-1 w-6 h-6 bg-white/80 p-1 rounded-full shadow-sm" />
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={profile.name || ""}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="title">Job Title *</Label>
              <Input
                id="title"
                name="title"
                value={profile.title || ""}
                onChange={handleChange}
                placeholder="Software Engineer"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={profile.email || ""}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={profile.phone || ""}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={profile.location || ""}
                onChange={handleChange}
                placeholder="New York, NY"
              />
            </div>
            <div>
              <Label htmlFor="website">Website/Portfolio</Label>
              <Input
                id="website"
                name="website"
                value={profile.website || ""}
                onChange={handleChange}
                placeholder="https://johndoe.com"
              />
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="summary">Summary (2-4 lines)</Label>
            <Textarea
              id="summary"
              name="summary"
              value={profile.summary || ""}
              onChange={handleChange}
              placeholder="Brief professional summary highlighting your key strengths and experience..."
              rows={4}
              className="mt-2"
            />
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media & Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(SOCIAL_ICONS).map(([platform, Icon]) => (
              <div key={platform} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <Label className="capitalize">{platform}</Label>
                  <Input
                    type="url"
                    value={profile.social?.[platform] || ""}
                    onChange={(e) => handleSocialChange(platform, e.target.value)}
                    placeholder={`Your ${platform} URL`}
                    className="mt-1"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {["Technical", "Soft Skills", "Languages", "Tools"].map((category) => (
              <div key={category}>
                <div className="flex items-center justify-between mb-3">
                  <Label className="text-base font-semibold">{category}</Label>
                  <Button type="button" variant="outline" size="sm" onClick={() => addSkill(category)}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {(profile.skills?.[category] || []).map((skill, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={skill}
                        onChange={(e) => updateSkill(category, index, e.target.value)}
                        placeholder={`${category} skill`}
                      />
                      <Button type="button" variant="outline" size="icon" onClick={() => removeSkill(category, index)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Work Experience</CardTitle>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  addArrayItem("experience", {
                    jobTitle: "",
                    company: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    current: false,
                    description: [],
                  })
                }
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Experience
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {(profile.experience || []).map((exp, index) => (
              <Card key={index} className="border-l-4" style={{ borderLeftColor: themeColor }}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-4">
                    <GripVertical className="w-5 h-5 text-gray-400 mt-1" />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem("experience", index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label>Job Title *</Label>
                      <Input
                        value={exp.jobTitle || ""}
                        onChange={(e) => handleArrayChange("experience", index, "jobTitle", e.target.value)}
                        placeholder="Software Engineer"
                        required
                      />
                    </div>
                    <div>
                      <Label>Company *</Label>
                      <Input
                        value={exp.company || ""}
                        onChange={(e) => handleArrayChange("experience", index, "company", e.target.value)}
                        placeholder="Tech Company Inc."
                        required
                      />
                    </div>
                    <div>
                      <Label>Location</Label>
                      <Input
                        value={exp.location || ""}
                        onChange={(e) => handleArrayChange("experience", index, "location", e.target.value)}
                        placeholder="New York, NY"
                      />
                    </div>
                    <div>
                      <Label>Start Date</Label>
                      <Input
                        type="month"
                        value={exp.startDate || ""}
                        onChange={(e) => handleArrayChange("experience", index, "startDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>End Date</Label>
                      <Input
                        type="month"
                        value={exp.endDate || ""}
                        onChange={(e) => handleArrayChange("experience", index, "endDate", e.target.value)}
                        disabled={exp.current}
                      />
                    </div>
                    <div className="flex items-center space-x-2 mt-6">
                      <input
                        type="checkbox"
                        id={`current-${index}`}
                        checked={exp.current || false}
                        onChange={(e) => handleArrayChange("experience", index, "current", e.target.checked)}
                      />
                      <Label htmlFor={`current-${index}`}>Currently working here</Label>
                    </div>
                  </div>

                  <div>
                    <Label>Job Description</Label>
                    <Textarea
                      value={exp.description?.join("\n") || ""}
                      onChange={(e) =>
                        handleArrayChange("experience", index, "description", e.target.value.split("\n"))
                      }
                      placeholder="• Developed and maintained web applications&#10;• Collaborated with cross-functional teams&#10;• Improved system performance by 30%"
                      rows={4}
                      className="mt-2"
                    />
                    <p className="text-sm text-gray-500 mt-1">Separate each point with a new line</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Education</CardTitle>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  addArrayItem("education", {
                    degree: "",
                    institution: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    gpa: "",
                    honors: "",
                  })
                }
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Education
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {(profile.education || []).map((edu, index) => (
              <Card key={index} className="border-l-4" style={{ borderLeftColor: themeColor }}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-4">
                    <GripVertical className="w-5 h-5 text-gray-400 mt-1" />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem("education", index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label>Degree/Course Title *</Label>
                      <Input
                        value={edu.degree || ""}
                        onChange={(e) => handleArrayChange("education", index, "degree", e.target.value)}
                        placeholder="Bachelor of Computer Science"
                        required
                      />
                    </div>
                    <div>
                      <Label>Institution *</Label>
                      <Input
                        value={edu.institution || ""}
                        onChange={(e) => handleArrayChange("education", index, "institution", e.target.value)}
                        placeholder="University of Technology"
                        required
                      />
                    </div>
                    <div>
                      <Label>Location</Label>
                      <Input
                        value={edu.location || ""}
                        onChange={(e) => handleArrayChange("education", index, "location", e.target.value)}
                        placeholder="Boston, MA"
                      />
                    </div>
                    <div>
                      <Label>Start Date</Label>
                      <Input
                        type="month"
                        value={edu.startDate || ""}
                        onChange={(e) => handleArrayChange("education", index, "startDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>End Date</Label>
                      <Input
                        type="month"
                        value={edu.endDate || ""}
                        onChange={(e) => handleArrayChange("education", index, "endDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>GPA (Optional)</Label>
                      <Input
                        value={edu.gpa || ""}
                        onChange={(e) => handleArrayChange("education", index, "gpa", e.target.value)}
                        placeholder="3.8/4.0"
                      />
                    </div>
                    <div>
                      <Label>Honors/Awards (Optional)</Label>
                      <Input
                        value={edu.honors || ""}
                        onChange={(e) => handleArrayChange("education", index, "honors", e.target.value)}
                        placeholder="Magna Cum Laude"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Projects (Optional)</CardTitle>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  addArrayItem("projects", {
                    name: "",
                    description: "",
                    technologies: "",
                    url: "",
                  })
                }
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Project
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {(profile.projects || []).map((project, index) => (
              <Card key={index} className="border-l-4" style={{ borderLeftColor: themeColor }}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-4">
                    <GripVertical className="w-5 h-5 text-gray-400 mt-1" />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayItem("projects", index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Project Name *</Label>
                      <Input
                        value={project.name || ""}
                        onChange={(e) => handleArrayChange("projects", index, "name", e.target.value)}
                        placeholder="E-commerce Platform"
                        required
                      />
                    </div>
                    <div>
                      <Label>Project URL</Label>
                      <Input
                        value={project.url || ""}
                        onChange={(e) => handleArrayChange("projects", index, "url", e.target.value)}
                        placeholder="https://github.com/username/project"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Description</Label>
                      <Textarea
                        value={project.description || ""}
                        onChange={(e) => handleArrayChange("projects", index, "description", e.target.value)}
                        placeholder="Brief description of the project and your role..."
                        rows={3}
                        className="mt-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Technologies Used</Label>
                      <Input
                        value={project.technologies || ""}
                        onChange={(e) => handleArrayChange("projects", index, "technologies", e.target.value)}
                        placeholder="React, Node.js, MongoDB, AWS"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Certifications (Optional)</CardTitle>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  addArrayItem("certifications", {
                    name: "",
                    issuer: "",
                    date: "",
                    url: "",
                  })
                }
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Certification
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {(profile.certifications || []).map((cert, index) => (
              <div key={index} className="flex gap-4 p-4 border rounded-lg">
                <GripVertical className="w-5 h-5 text-gray-400 mt-1" />
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Certification Name</Label>
                    <Input
                      value={cert.name || ""}
                      onChange={(e) => handleArrayChange("certifications", index, "name", e.target.value)}
                      placeholder="AWS Solutions Architect"
                    />
                  </div>
                  <div>
                    <Label>Issuing Organization</Label>
                    <Input
                      value={cert.issuer || ""}
                      onChange={(e) => handleArrayChange("certifications", index, "issuer", e.target.value)}
                      placeholder="Amazon Web Services"
                    />
                  </div>
                  <div>
                    <Label>Date Obtained</Label>
                    <Input
                      type="month"
                      value={cert.date || ""}
                      onChange={(e) => handleArrayChange("certifications", index, "date", e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeArrayItem("certifications", index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Languages (Optional)</CardTitle>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  addArrayItem("languages", {
                    language: "",
                    proficiency: "",
                  })
                }
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Language
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {(profile.languages || []).map((lang, index) => (
              <div key={index} className="flex gap-4 p-4 border rounded-lg">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Language</Label>
                    <Input
                      value={lang.language || ""}
                      onChange={(e) => handleArrayChange("languages", index, "language", e.target.value)}
                      placeholder="Spanish"
                    />
                  </div>
                  <div>
                    <Label>Proficiency Level</Label>
                    <Select
                      value={lang.proficiency || ""}
                      onValueChange={(value) => handleArrayChange("languages", index, "proficiency", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select proficiency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Native">Native</SelectItem>
                        <SelectItem value="Fluent">Fluent</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Basic">Basic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="button" variant="outline" size="sm" onClick={() => removeArrayItem("languages", index)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Interests/Hobbies */}
        <Card>
          <CardHeader>
            <CardTitle>Interests & Hobbies (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="interests">Personal Interests</Label>
            <Textarea
              id="interests"
              name="interests"
              value={profile.interests || ""}
              onChange={handleChange}
              placeholder="Photography, hiking, reading, cooking, traveling..."
              rows={3}
              className="mt-2"
            />
            <p className="text-sm text-gray-500 mt-1">Separate interests with commas</p>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-center pt-6">
          <Button type="submit" size="lg" className="px-8" style={{ backgroundColor: themeColor }}>
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BasicForm