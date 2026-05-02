import React from 'react'

const Text = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen items-center bg-gray-300 px-10'>
      {/* Left Column: Text Content */}
      <div className='py-5'>
        <h1 className='font-bold text-4xl py-5'>Hello, I'm Asifiwe Ben Bosco</h1>
        <p className='mb-6 text-lg'>
          I'm a freelance UI/UX Designer and Developer based in Kigali, Rwanda. <br/>
          I strive to build immersive and beautiful web applications through <br /> 
          carefully crafted code and user-centric design.
        </p>
        <button className='bg-purple-400 px-6 py-3 text-white font-medium hover:bg-purple-500 transition-colors'>
          Say Hello
        </button>
      </div>

      {/* Right Column: Controlled Photo */}
      <div className='flex justify-center items-center p-10'>
        <img 
          src="/my-photo.png" 
          alt="Asifiwe Ben Bosco" 
          className='max-w-full max-h-[70vh] w-auto h-auto rounded-2xl shadow-2xl object-contain'
        />
      </div>
    </div>
  )
}

export default Text