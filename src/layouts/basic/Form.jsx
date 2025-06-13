import { useState } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { restrictToVerticalAxis, restrictToWindowEdges } from "@dnd-kit/modifiers"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Camera,
  Plus,
  Trash2,
  GripVertical,
  Linkedin,
  Twitter,
  Github,
  Globe,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react"

const SortableItem = ({ id, children, onRemove }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="flex items-start gap-2">
      <GripVertical className="w-5 h-5 text-gray-400 mt-9 cursor-grab" {...listeners} />
      {children}
    </div>
  )
}

const BasicTemplateForm = ({ profile, setProfile, handleSave }) => {
  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setProfile((prev) => {
        const oldIndex = prev.work.findIndex((item) => item.id === active.id)
        const newIndex = prev.work.findIndex((item) => item.id === over.id)
        return {
          ...prev,
          work: arrayMove(prev.work, oldIndex, newIndex),
        }
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const keys = name.split(".")
    if (keys.length > 1) {
      setProfile((prev) => ({
        ...prev,
        [keys[0]]: { ...prev[keys[0]], [keys[1]]: value },
      }))
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }))
    }
  }
  
  const handleImageChange = (e, field) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, [field]: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const addWorkItem = () => {
    if (profile.work.length >= 6) return
    setProfile((prev) => ({
      ...prev,
      work: [
        ...prev.work,
        { id: `work-${Date.now()}`, image: "", title: "", description: "", link: "" },
      ],
    }))
  }

  const removeWorkItem = (id) => {
    setProfile((prev) => ({
      ...prev,
      work: prev.work.filter((item) => item.id !== id),
    }))
  }

  const handleWorkChange = (id, field, value) => {
    setProfile((prev) => {
      const newWork = prev.work.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value }
        }
        return item
      })
      return { ...prev, work: newWork }
    })
  }

  const handleWorkImageChange = (e, id) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile((prev) => ({
            ...prev,
            work: prev.work.map((item) => (item.id === id ? { ...item, image: reader.result } : item)),
          }))
      }
      reader.readAsDataURL(file)
    }
  }

  const addTestimonialItem = () => {
    setProfile((prev) => ({
      ...prev,
      testimonials: [
        ...prev.testimonials,
        { id: `testimonial-${Date.now()}`, name: "", company: "", testimonial: "", link: "" },
      ],
    }))
  }

  const removeTestimonialItem = (id) => {
    setProfile((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((item) => item.id !== id),
    }))
  }

  const handleTestimonialChange = (id, field, value) => {
    setProfile((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    }))
  }

  const accentColor = "#60A5FA" // Soft Blue

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <form
        onSubmit={handleSave}
        className="max-w-5xl mx-auto p-4 md:p-8 space-y-8"
      >
        {/* Header Image */}
        <div className="relative w-full h-48 md:h-64 bg-gray-200 rounded-lg group -mb-16">
          <label htmlFor="header-upload" className="cursor-pointer w-full h-full flex items-center justify-center">
            {profile.header ? (
              <img src={profile.header} alt="Header" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="text-center text-gray-500">
                <Camera className="w-10 h-10 mx-auto" />
                <p>Upload a header image</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </label>
          <input id="header-upload" type="file" accept="image/*" className="hidden" onChange={(e) => handleImageChange(e, 'header')} />
        </div>

        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-4 text-center z-10">
          <label
            htmlFor="photo-upload"
            className="w-32 h-32 rounded-full border-4 border-white cursor-pointer flex items-center justify-center relative group bg-gray-100 hover:bg-gray-200 transition"
          >
            {profile.photo ? (
              <img
                src={profile.photo}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <Camera className="w-8 h-8 text-gray-400" />
            )}
            <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </label>
          <input id="photo-upload" type="file" accept="image/*" className="hidden" onChange={(e) => handleImageChange(e, 'photo')} />

          <Input
            name="fullName"
            value={profile.fullName || ""}
            onChange={handleChange}
            placeholder="Your Name"
            className="text-3xl font-bold text-center border-none focus:ring-0 shadow-none bg-transparent w-auto max-w-md"
            required
          />
          <Textarea
            name="bio"
            value={profile.bio || ""}
            onChange={handleChange}
            placeholder="A short, one-line bio"
            rows={1}
            className="text-lg text-gray-500 text-center border-none focus:ring-0 shadow-none bg-transparent resize-none w-auto max-w-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Me */}
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <Textarea
                name="about"
                value={profile.about || ""}
                onChange={handleChange}
                placeholder="• Your passions... • Personal values... • What drives you..."
                rows={5}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300"
                maxLength={300}
              />
              <p className="text-right text-sm text-gray-400 mt-1">
                {profile.about?.length || 0} / 300
              </p>
            </div>

            {/* Interests */}
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h2 className="text-xl font-semibold mb-4">Interests</h2>
              <p className="text-sm text-gray-500 mb-4">
                Add tags for your interests. (e.g., Hiking ⛰️, Coding 💻)
              </p>
              {/* This is a simplified tag input. For a real app, a library like react-select would be better. */}
              <Input
                name="interests"
                value={profile.interests ? profile.interests.join(", ") : ""}
                onChange={(e) => setProfile((prev) => ({...prev, interests: e.target.value.split(",").map(s => s.trim())}))}
                placeholder="Add tags separated by commas"
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {(profile.interests || []).map((interest, index) =>
                  interest ? (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {interest}
                    </span>
                  ) : null
                )}
              </div>
            </div>

             {/* Contact Info */}
             <div className="p-6 border border-gray-200 rounded-lg bg-white">
                <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <Input name="contact.email" value={profile.contact?.email || ""} onChange={handleChange} placeholder="Email Address" className="border-gray-200 rounded-lg"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <Input name="contact.phone" value={profile.contact?.phone || ""} onChange={handleChange} placeholder="Phone Number" className="border-gray-200 rounded-lg"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <Input name="contact.city" value={profile.contact?.city || ""} onChange={handleChange} placeholder="City" className="border-gray-200 rounded-lg"/>
                        <Input name="contact.country" value={profile.contact?.country || ""} onChange={handleChange} placeholder="Country" className="border-gray-200 rounded-lg"/>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <h2 className="text-xl font-semibold mb-4">Social Links</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Linkedin className="w-5 h-5 text-gray-400" />
                    <Input name="social.linkedin" value={profile.social?.linkedin || ""} onChange={handleChange} placeholder="LinkedIn Profile URL" className="border-gray-200 rounded-lg"/>
                </div>
                <div className="flex items-center gap-4">
                    <Twitter className="w-5 h-5 text-gray-400" />
                    <Input name="social.twitter" value={profile.social?.twitter || ""} onChange={handleChange} placeholder="Twitter Profile URL" className="border-gray-200 rounded-lg"/>
                </div>
                <div className="flex items-center gap-4">
                    <Github className="w-5 h-5 text-gray-400" />
                    <Input name="social.github" value={profile.social?.github || ""} onChange={handleChange} placeholder="GitHub Profile URL" className="border-gray-200 rounded-lg"/>
                </div>
                <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <Input name="social.website" value={profile.social?.website || ""} onChange={handleChange} placeholder="Website/Portfolio URL" className="border-gray-200 rounded-lg"/>
                </div>
                <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <Input name="resumeUrl" value={profile.resumeUrl || ""} onChange={handleChange} placeholder="Link to your resume (e.g., Google Drive)" className="border-gray-200 rounded-lg"/>
                </div>
              </div>
            </div>

            {/* My Work */}
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">My Work</h2>
                <Button type="button" variant="outline" size="sm" onClick={addWorkItem} style={{borderColor: accentColor, color: accentColor}}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Work
                </Button>
              </div>
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
              >
                <SortableContext
                  items={profile.work.map(w => w.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-4">
                    {(profile.work || []).map((item) => (
                      <SortableItem key={item.id} id={item.id} onRemove={removeWorkItem}>
                        <div className="w-full p-4 border border-gray-200 rounded-lg bg-white relative">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeWorkItem(item.id)}
                            className="absolute top-2 right-2 w-7 h-7"
                          >
                            <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500" />
                          </Button>
                          <div className="flex gap-4">
                            <label className="w-24 h-24 flex-shrink-0">
                                <div className="w-full h-full border border-gray-200 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer">
                                    {item.image ? <img src={item.image} alt="Work thumbnail" className="w-full h-full object-cover rounded-md" /> : <Plus />}
                                </div>
                                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleWorkImageChange(e, item.id)} />
                            </label>

                            <div className="flex-grow space-y-2">
                              <Input
                                value={item.title}
                                onChange={(e) => handleWorkChange(item.id, "title", e.target.value)}
                                placeholder="Work Title"
                                className="border-gray-200 rounded-lg"
                              />
                              <Textarea
                                value={item.description}
                                onChange={(e) => handleWorkChange(item.id, "description", e.target.value)}
                                placeholder="Short description..."
                                rows={2}
                                className="border-gray-200 rounded-lg resize-none"
                              />
                              <Input
                                value={item.link}
                                onChange={(e) => handleWorkChange(item.id, "link", e.target.value)}
                                placeholder="https://example.com"
                                className="border-gray-200 rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      </SortableItem>
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            </div>

            {/* Testimonials Section */}
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Testimonials</h2>
                <Button type="button" variant="outline" size="sm" onClick={addTestimonialItem} style={{borderColor: accentColor, color: accentColor}}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Testimonial
                </Button>
              </div>
              <div className="space-y-4">
                {(profile.testimonials || []).map((item) => (
                  <div key={item.id} className="w-full p-4 border border-gray-200 rounded-lg bg-white relative">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTestimonialItem(item.id)}
                      className="absolute top-2 right-2 w-7 h-7"
                    >
                      <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500" />
                    </Button>
                    <div className="space-y-2">
                      <Input
                        value={item.name}
                        onChange={(e) => handleTestimonialChange(item.id, "name", e.target.value)}
                        placeholder="Full Name"
                        className="border-gray-200 rounded-lg"
                      />
                       <Input
                        value={item.company}
                        onChange={(e) => handleTestimonialChange(item.id, "company", e.target.value)}
                        placeholder="Company / Role"
                        className="border-gray-200 rounded-lg"
                      />
                      <Textarea
                        value={item.testimonial}
                        onChange={(e) => handleTestimonialChange(item.id, "testimonial", e.target.value)}
                        placeholder="Testimonial text..."
                        rows={3}
                        className="border-gray-200 rounded-lg resize-none"
                      />
                      <Input
                        value={item.link}
                        onChange={(e) => handleTestimonialChange(item.id, "link", e.target.value)}
                        placeholder="Link to website or social (optional)"
                        className="border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-6">
          <Button
            type="submit"
            size="lg"
            className="px-8 rounded-full font-semibold"
            style={{ backgroundColor: accentColor }}
          >
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BasicTemplateForm