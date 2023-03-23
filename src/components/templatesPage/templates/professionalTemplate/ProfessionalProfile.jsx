import React from 'react'

const ProfessionalProfile = () => {
  return (
    <div className="bg-gray-100">
    <div className="bg-white rounded-lg shadow-lg p-6">
<h1 className="text-2xl font-bold mb-4">Professional Profile</h1>
<form>
 <label className="block text-gray-700 font-bold mb-2" htmlFor="work-experience">
   Work Experience
 </label>
 <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700 mb-4" id="work-experience"></textarea>
 <label className="block text-gray-700 font-bold mb-2" htmlFor="education">
   Education
 </label>
 <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700 mb-4" id="education"></textarea>
 <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">
   Skills
 </label>
 <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700 mb-4" id="skills"></textarea>
 <label className="block text-gray-700 font-bold mb-2" htmlFor="certifications">
   Certifications
 </label>
 <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700 mb-4" id="certifications"></textarea>
 <label className="block text-gray-700 font-bold mb-2" htmlFor="awards">
   Awards
 </label>
 <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700 mb-4" id="awards"></textarea>
 <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">
   Contact Information
 </label>
 <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700 mb-4" id="contact"></textarea>
 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
   Submit
 </button>
</form>
</div>

         </div>  
  )
}

export default ProfessionalProfile