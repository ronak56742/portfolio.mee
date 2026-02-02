import React from 'react';
import { Code2, Database, BarChart3, FileSpreadsheet } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: ['Python', 'SQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'BI Tools',
      skills: ['Power BI', 'DAX', 'Data Modeling'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Libraries',
      skills: ['Pandas', 'NumPy', 'Matplotlib'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileSpreadsheet,
      title: 'Analytics',
      skills: ['Excel', 'Data Cleaning', 'EDA', 'Visualization'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
