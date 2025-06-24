import React from 'react'

const WorkSection = ({ profile, addWorkItem, removeWorkItem, handleWorkChange, handleWorkImageChange, accentColor }) => {
  return (
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
  )
}

export default WorkSection