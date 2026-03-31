import React from 'react';

const About = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6 font-sans text-gray-800">
      
      <div className="border-b-2 border-blue-500 pb-6 mb-10">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2">
          Hi, I'm <span className="text-blue-600">Ben.</span> 
        </h1>
        <p className="text-xl text-gray-500 italic">
          Part Human, Part Compiler.
        </p>
      </div>

      
      <div className="space-y-8 text-lg leading-relaxed">
        <p>
          I’ve spent the last year transitioning from <code className="bg-gray-100 px-2 py-1 rounded text-pink-600">"What is a div?"</code> 
          to building full-stack applications. It’s been a wild ride of brackets, semicolons, and a 
          disturbing amount of coffee.
        </p>

        <p>
          I love the logic of the server, the chaos of the frontend, and that rare, 
          beautiful feeling of seeing <span className="font-bold text-green-600">0 Errors, 0 Warnings</span> in the console.
        </p>

        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 underline ">
            What I’m Building Right Now 
          </h2>
          <p className="mb-4">
            I’m currently collaborating on a <strong>Full-Stack Community Hub</strong>. 
            We’re digitizing local services—making it so you can find a plumber or a tutor 
            online instead of wandering the streets face-to-face.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">#React</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">#FullStack</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">#TailwindCSS</span>
            <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">#TeamCollab</span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
            <h3 className="font-bold text-blue-600 mb-2 ">The "Ben" Status Report</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Status: Active & Learning</li>
              <li>Coffee Level: Critical</li>
              <li>Git Merges: Getting better</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
            <h3 className="font-bold text-blue-600 mb-2 ">My Philosophy</h3>
            <p className="text-gray-600">
              If it isn't broken, I'll probably find a way to "optimize" it until it is.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
        <p className="text-gray-600">Currently looking for my next challenge. Let’s chat!</p>
      </footer>
    </section>
  );
};

export default About;