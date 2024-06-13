import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center">
          {/* Project 1 */}
          <div className="project-item bg-white p-4 rounded shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Watch Store</h3>
            <p className="text-gray-700 mb-4">
              A Next.js-based web application for an online watch store.
            </p>
            <a href="https://github.com/georgi3223/WatchStoreNextJS" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded">GitHub</a>
          </div>
  
          {/* Project 2 */}
          <div className="project-item bg-white p-4 rounded shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Car Sales</h3>
            <p className="text-gray-700 mb-4">
              A Laravel-powered web application for managing car sales.
            </p>
            <a href="https://github.com/georgi3223/laravel_react_inertia_cars_sales" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
