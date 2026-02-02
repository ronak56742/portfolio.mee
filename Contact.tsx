import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
        <p className="text-xl text-blue-100 mb-12">
          I'm actively seeking Data Analyst and Data Science opportunities. Let's discuss how I can contribute to your team!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:raunaqsayyed7@gmail.com"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors"
          >
            <Mail className="w-8 h-8 text-white mx-auto mb-3" />
            <p className="text-white font-medium mb-1">Email</p>
            <p className="text-blue-100 text-sm">raunaqsayyed7@gmail.com</p>
          </a>

          <a
            href="tel:6393055499"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors"
          >
            <Phone className="w-8 h-8 text-white mx-auto mb-3" />
            <p className="text-white font-medium mb-1">Phone</p>
            <p className="text-blue-100 text-sm">+91 6393055499</p>
          </a>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
            <p className="text-white font-medium mb-1">Location</p>
            <p className="text-blue-100 text-sm">Bandra, Mumbai 400051</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/ronak56742"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/raunaqsayyed"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-100 text-sm">
            © 2026 Sayyed Raunaq. Open to Full-time and Internship Opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
