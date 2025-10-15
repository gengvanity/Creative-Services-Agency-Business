import React from 'react';
import { ShoppingBag, Film, Sparkles, Layers, Image, Video, Palette, MonitorPlay } from 'lucide-react';

const ServiceFeatures = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Amazon Ads',
      description: 'High-converting product ads optimized for Amazon platform',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Film,
      title: 'Animation',
      description: 'Engaging animated content that brings your brand to life',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Logo Design',
      description: 'Memorable logos that capture your brand essence',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing for all your content needs',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visuals that make your brand stand out',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: MonitorPlay,
      title: 'Social Media Content',
      description: 'Scroll-stopping content for all social platforms',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Layers,
      title: 'Brand Identity',
      description: 'Complete brand packages that tell your story',
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      icon: Image,
      title: 'Print Design',
      description: 'Beautiful print materials that leave lasting impressions',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Service Features
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Achieving Outstanding Outcomes with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              State-of-the-Art Solutions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our extensive suite of services, including Amazon Ads, Animation, Logo Design, and more, 
            guarantees the ideal solution for your creative needs. Trust our timely delivery and 
            dedication to excellence in bringing your vision to fruition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature Showcase */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Versatile Creative Assets
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                From concept to completion, we deliver diverse creative solutions that adapt to your evolving needs and exceed expectations.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  Fast Turnaround
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  Premium Quality
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  Unlimited Revisions
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">48h</div>
                <div className="text-blue-100 text-sm">Average Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100 text-sm">Quality Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-blue-100 text-sm">Revisions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
