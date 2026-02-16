import React from 'react'
import { Shield, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Forest Hill Roofing</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional roofing services in Forest Hill and surrounding areas. 
              15+ years of experience, fully insured, and guaranteed workmanship.
            </p>
            <a 
              href="tel:07864888292" 
              className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">07864 888292</span>
            </a>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white transition-colors cursor-pointer">Roof Repairs</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">New Roofs</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Emergency Repairs</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Chimney Work</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Guttering</span></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {currentYear} Forest Hill Roofing. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
