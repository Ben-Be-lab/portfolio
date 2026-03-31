import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        
        <div>
          <h2 className="text-xl font-bold italic">MYLOGO</h2>
          <p className="text-gray-400 mt-2 text-sm">
            © 2026 Built with React & Tailwind CSS.
          </p>
        </div>

      
        <div className="flex gap-8 text-gray-400">
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer