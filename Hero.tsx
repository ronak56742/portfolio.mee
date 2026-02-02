import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sayyed Raunaq
          </h1>
          <p className="text-2xl md:text-3xl text-slate-700 mb-6">
            Data Analyst
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transforming data into actionable insights through Python, SQL, and Power BI. 
            Passionate about uncovering patterns and driving data-driven decisions.
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center mb-8">
          <a
            href="https://github.com/ronak56742"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/raunaqsayyed"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:raunaqsayyed7@gmail.com"
            className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1HPj_F6a7v5DCkqf-HAKVWwdbJ7UxhbFn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </div>
    </section>
  );
}