import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Sales Dashboard',
      description: 'Built interactive Power BI dashboards using KPIs, slicers, and data modeling to analyze sales performance and customer behavior.',
      tech: ['Power BI', 'DAX', 'Data Modeling'],
      github: 'https://github.com/ronak56742/Ecommerce-Sales-Dashboard-PowerBI',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Pizza Sales Analysis',
      description: 'Analyzed pizza sales data using SQL with JOINs, GROUP BY, and subqueries to identify top-selling products and revenue trends.',
      tech: ['SQL', 'Data Analysis', 'Queries'],
      github: 'https://github.com/ronak56742/Pizza-Sales-SQL-Analysis',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Blinkit Sales Analysis',
      description: 'Created comprehensive Power BI dashboards to analyze category-wise and regional sales trends for Blinkit grocery delivery platform.',
      tech: ['Power BI', 'Visualization', 'KPIs'],
      github: 'https://github.com/ronak56742/Blinkit-Sales-Analysis-PowerBI',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Movie Analytics',
      description: 'Performed exploratory data analysis and visualization on movie datasets using Python to uncover industry trends and patterns.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
      github: 'https://github.com/ronak56742/movie-analytics-python',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Featured Projects</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          A collection of data analysis projects showcasing my skills in SQL, Python, and Power BI
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-slate-800">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
