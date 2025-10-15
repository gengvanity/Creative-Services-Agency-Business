import React from 'react';
import { Users, Award, Zap, Target } from 'lucide-react';

const CreativeSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                Our Creative Solution
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Unlock the Potential of{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                High-Impact Creative Services
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Konstant Kreative delivers premier video editing and graphic design services, 
              customized to your distinct requirements. Our skilled team will craft visually 
              arresting ads that boost conversions and elevate your brand.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Tailored Solutions</h3>
                  <p className="text-gray-600 text-sm">Custom creative services designed specifically for your brand's unique needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Boost Conversions</h3>
                  <p className="text-gray-600 text-sm">Visually arresting ads that drive engagement and increase your ROI</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-pink-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                  <p className="text-gray-600 text-sm">Skilled professionals dedicated to elevating your brand presence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image/Illustration */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl transform rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                {/* Team collaboration illustration */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    <Users className="w-16 h-16 text-purple-600" />
                  </div>
                  
                  <div className="space-y-4">
                    {/* Simulated team members */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        JD
                      </div>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        SM
                      </div>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-3/5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                        AL
                      </div>
                      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Team Progress</span>
                      <span className="font-semibold text-purple-600">85% Complete</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <Zap className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSolution;
