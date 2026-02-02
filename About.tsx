import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold text-slate-800">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-slate-800">B.Sc. Computer Science</p>
                <p className="text-slate-600">R.D. National College, Mumbai</p>
                <p className="text-sm text-slate-500">CGPA: 8.73 • Second Year</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-semibold text-slate-800">Experience</h3>
            </div>
            <div>
              <p className="font-medium text-slate-800">Data Science Intern</p>
              <p className="text-slate-600">SmartED Innovations</p>
              <p className="text-sm text-slate-500 mb-3">May 2025 - June 2025 • Remote</p>
              <p className="text-slate-700 text-sm">
                Performed data cleaning, EDA, and visualization using Python to generate 
                insights from real-world datasets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}