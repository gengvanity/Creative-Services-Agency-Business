import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      image: 'SJ',
      rating: 5,
      text: 'Konstant Kreative transformed our brand identity completely. Their attention to detail and creative vision exceeded all our expectations. The ROI on our campaigns increased by 300%!',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'GrowthLabs',
      image: 'MC',
      rating: 5,
      text: 'Working with Konstant Kreative has been a game-changer for our business. Their video editing services are top-notch, and they always deliver on time. Highly recommended!',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Brand Manager',
      company: 'StyleHub',
      image: 'ER',
      rating: 5,
      text: 'The team at Konstant Kreative is incredibly talented and professional. They took our vague ideas and turned them into stunning visual content that resonates with our audience.',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'StartupX',
      image: 'DT',
      rating: 5,
      text: 'From logo design to social media content, Konstant Kreative handles it all with excellence. Their creative solutions have helped us stand out in a crowded market.',
      gradient: 'from-green-400 to-green-600'
    },
    {
      name: 'Lisa Anderson',
      role: 'CMO',
      company: 'BrandWorks',
      image: 'LA',
      rating: 5,
      text: 'Exceptional quality and outstanding service! The Konstant Kreative team understands our brand vision and consistently delivers creative assets that drive engagement.',
      gradient: 'from-indigo-400 to-indigo-600'
    },
    {
      name: 'James Wilson',
      role: 'Creative Director',
      company: 'MediaPro',
      image: 'JW',
      rating: 5,
      text: 'I\'ve worked with many creative agencies, but Konstant Kreative stands out for their innovation and reliability. They\'re our go-to partner for all creative needs.',
      gradient: 'from-orange-400 to-orange-600'
    }
  ];

  const clientLogos = [
    { name: 'TechFlow', color: 'text-purple-600' },
    { name: 'GrowthLabs', color: 'text-blue-600' },
    { name: 'StyleHub', color: 'text-pink-600' },
    { name: 'StartupX', color: 'text-green-600' },
    { name: 'BrandWorks', color: 'text-indigo-600' },
    { name: 'MediaPro', color: 'text-orange-600' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              Social Proof
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Endorsed by Industry Pioneers for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Unrivaled Creative Expertise
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Leading marketing agencies and brands across multiple sectors rely on Konstant Kreative 
            for exceptional results that surpass expectations. Explore testimonials from our delighted clients.
          </p>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center px-6 py-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <span className={`text-2xl font-bold ${logo.color} group-hover:scale-110 transition-transform duration-300`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-gray-900" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover gradient effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
              5,000+
            </div>
            <div className="text-gray-600 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-600 font-medium">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
