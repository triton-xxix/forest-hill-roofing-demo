import React from 'react'
import { Phone, ArrowRight, Shield, Star, Clock } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-sm font-medium">5-Star Rated Local Roofers</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Roofing Services in{' '}
              <span className="text-amber-400">Forest Hill</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Expert roof repairs, new installations, and emergency services. 
              Family-run business serving SE23 and surrounding areas with quality 
              workmanship you can trust.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:07864888292" 
                className="btn-primary flex items-center justify-center space-x-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call for Free Quote</span>
              </a>
              <a 
                href="#services" 
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>24/7 Emergency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-400" />
                <span>10+ Year Guarantee</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image / Visual */}
          <div className="hidden lg:block relative">
            <div className="relative bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Emergency? Call Now</p>
                      <p className="text-2xl font-bold">07864 888292</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                    <p className="text-3xl font-bold text-amber-400">15+</p>
                    <p className="text-sm text-gray-400">Years Experience</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                    <p className="text-3xl font-bold text-amber-400">500+</p>
                    <p className="text-sm text-gray-400">Happy Customers</p>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="ml-2 text-sm">Rated 5/5 by our customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
