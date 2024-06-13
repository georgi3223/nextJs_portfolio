import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-800">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Skill 1 */}
          <div className="border border-gray-300 w- sm:w-3/4  mx-auto rounded-lg bg-white 
          transition-duration-300 ease-in-out p-6 text-center hover:bg-gray-200 hover:text-black transform hover:scale-105">
            <h3 className=" text-2xl  text-black">HTML</h3>
          </div>

          {/* Skill 2 */}
          <div className="border border-gray-300 w-1/2 sm:w-3/4 mx-auto rounded-lg bg-white 
          transition-duration-300 ease-in-out p-6 text-center hover:bg-gray-200 hover:text-black transform hover:scale-105">
            <h3 className=" text-2xl text-black">CSS</h3>
          </div>

          {/* Skill 3 */}
          <div className="border border-gray-300 w-1/2 sm:w-3/4 mx-auto rounded-lg bg-white 
          transition-duration-300 ease-in-out p-6 text-center hover:bg-gray-200 hover:text-black transform hover:scale-105">
            <h3 className=" text-2xl text-black">JavaScript</h3>
          </div>

          {/* Skill 4 */}
          <div className="border border-gray-300 w-1/2 sm:w-3/4 mx-auto rounded-lg bg-white 
          transition-duration-300 ease-in-out p-6 text-center hover:bg-gray-200 hover:text-black transform hover:scale-105">
            <h3 className=" text-2xl text-black">PHP</h3>
          </div>

          {/* Skill 5 */}
          <div className="border border-gray-300 w-1/2 sm:w-3/4 mx-auto rounded-lg bg-white 
          transition-duration-300 ease-in-out p-6 text-center hover:bg-gray-200 hover:text-black transform hover:scale-105">
            <h3 className=" text-2xl text-black">Laravel</h3>
          </div>

          {/* Skill 6 */}
          <div className="border border-gray-300 w-1/2 sm:w-3/4 mx-auto rounded-lg bg-white 
          transition-duration-300 ease-in-out p-6 text-center hover:bg-gray-200 hover:text-black transform hover:scale-105">
            <h3 className=" text-2xl text-black">React</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
