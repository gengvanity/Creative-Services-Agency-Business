import React from 'react';
import { Calendar, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const CallToAction = () => {
  const benefits = [
    'Free consultation to understand your needs',
    'Custom proposal tailored to your goals',
    'No commitment required',
    'Expert guidance from day one'
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Are You Prepared to Turn Your{' '}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Creative Vision
              </span>{' '}
              into Reality?
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their brands with our 
              premium creative services. Let's discuss how we can help you achieve your goals.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule a Demo Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual Element */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Calendar illustration */}
              <div className="bg-white rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <span className="text-gray-900 font-bold text-lg">Schedule Your Demo</span>
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-xs font-semibold text-gray-500">
                      {day}
                    </div>
                  ))}
                  {[...Array(35)].map((_, i) => {
                    const isSelected = i === 15;
                    const isAvailable = [8, 9, 10, 15, 16, 17, 22, 23, 24].includes(i);
                    return (
                      <div
                        key={i}
                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-200 ${
                          isSelected
                            ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold scale-110'
                            : isAvailable
                            ? 'bg-purple-50 text-gray-900 hover:bg-purple-100 cursor-pointer'
                            : 'text-gray-300'
                        }`}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>

                {/* Time slots */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Available Times</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time, i) => (
                      <button
                        key={i}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                          i === 1
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">30 min</div>
                  <div className="text-gray-300 text-sm">Demo Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">Free</div>
                  <div className="text-gray-300 text-sm">Consultation</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 shadow-2xl animate-bounce">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-4 shadow-2xl">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">5 min</div>
              <div className="text-gray-300 text-sm">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 text-sm">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
