import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React', level: 80 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3 & Tailwind CSS', level: 88 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Component Architecture', level: 80 },
      ]
    },
    {
      category: 'Hospitality & Customer Service',
      icon: '🏨',
      skills: [
        { name: 'Guest Relations', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Communication Skills', level: 88 },
        { name: 'Teamwork & Collaboration', level: 87 },
        { name: 'Attention to Detail', level: 90 },
        { name: 'Multilingual Support', level: 75 },
      ]
    },
    {
      category: 'Guiding & Mentoring',
      icon: '🎯',
      skills: [
        { name: 'Technical Mentoring', level: 80 },
        { name: 'Problem-Solving Guidance', level: 85 },
        { name: 'Code Review & Feedback', level: 82 },
        { name: 'Patience & Communication', level: 88 },
        { name: 'Best Practices Teaching', level: 83 },
        { name: 'Project Guidance', level: 84 },
      ]
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 font-sans text-gray-800">
      {/* Header */}
      <div className="border-b-2 border-blue-500 pb-6 mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2">
          My <span className="text-blue-600">Skills</span>
        </h1>
        <p className="text-xl text-gray-500 italic">
          A blend of technical expertise, hospitality excellence, and guiding passion
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {skillsData.map((skillGroup, idx) => (
          <div 
            key={idx}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-3xl mb-2">{skillGroup.icon}</h2>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              {skillGroup.category}
            </h3>
            
            <div className="space-y-4">
              {skillGroup.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 font-semibold">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 underline">
          Why This Unique Combination?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          My journey bridges hospitality and tech. I've learned that great software isn't just about clean code—it's about understanding user needs, solving problems with empathy, and guiding others through complex challenges. Whether I'm building intuitive interfaces, helping teams navigate problems, or mentoring junior developers, I bring a people-first approach to everything.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
          <p className="text-gray-600">Frontend Technologies</p>
        </div>
        <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
          <p className="text-gray-600">Years in Hospitality</p>
        </div>
        <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
          <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
          <p className="text-gray-600">Commitment to Growth</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;