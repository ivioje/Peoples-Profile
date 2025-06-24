import React from 'react'

const TestimonialSection = ({ profile, addTestimonialItem, removeTestimonialItem, handleTestimonialChange, accentColor }) => {
  return (
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
  )
}

export default TestimonialSection