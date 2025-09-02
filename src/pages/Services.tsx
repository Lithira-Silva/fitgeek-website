import { useState } from 'react'

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }
  const services = [
    {
      name: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals with both in-person and online options available.',
      duration: 'Flexible',
      level: 'All Levels',
      category: 'Individual Coaching',
      image: '/images/services/personal-training.jpg',
      features: ['Personalized workout plans', 'Goal-specific training', 'In-person & online options', 'Progress tracking']
    },
    {
      name: 'Group Fitness Classes',
      description: 'Fun and energetic group sessions that build community while you work towards your fitness goals.',
      duration: '45-60 min',
      level: 'All Levels',
      category: 'Group Sessions',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80',
      features: ['Community building', 'Energetic atmosphere', 'Variety of formats', 'Motivational support']
    },
    {
      name: 'Yoga & Mindfulness',
      description: 'Relaxation, flexibility, and stress relief through guided yoga and mindfulness practices.',
      duration: '60-75 min',
      level: 'Beginner to Advanced',
      category: 'Mind & Body',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80',
      features: ['Stress relief', 'Flexibility improvement', 'Mindfulness training', 'Relaxation techniques']
    },
    {
      name: 'Nutrition Guidance',
      description: 'Personalized diet and meal planning to fuel your body and support your fitness journey.',
      duration: 'Ongoing',
      level: 'All Levels',
      category: 'Nutrition Support',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80',
      features: ['Meal planning', 'Dietary consultations', 'Nutritional education', 'Custom diet plans']
    },
    {
      name: 'Weight Management',
      description: 'Comprehensive weight loss and weight gain programs designed for sustainable, healthy results.',
      duration: 'Program-based',
      level: 'All Levels',
      category: 'Specialized Programs',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80',
      features: ['Sustainable results', 'Medical monitoring', 'Behavior modification', 'Long-term support']
    },
    {
      name: 'Wellness Coaching',
      description: 'Lifestyle and habit improvement coaching to help you build lasting, positive changes.',
      duration: 'Flexible',
      level: 'All Levels',
      category: 'Lifestyle Coaching',
      image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80',
      features: ['Habit formation', 'Lifestyle optimization', 'Goal setting', 'Accountability support']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,white_2px,transparent_2px)] bg-[length:2rem_2rem]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,white_1px,transparent_1px)] bg-[length:1rem_1rem]"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
        
        <div className="relative container mx-auto px-6 py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Professional Wellness Services</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-blue-300">
                Services
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Comprehensive wellness services designed to support your health journey 
              with personalized coaching, group programs, and holistic wellness support.
            </p>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: '6+', label: 'Services' },
                { number: '750+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>What We Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Wellness Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our range of professional services designed to support every aspect of your wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary-200 transform group-hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPicgKyBzZXJ2aWNlLm5hbWUgKyAnPC90ZXh0Pjwvc3ZnPic=';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Enhanced Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        {service.category}
                      </span>
                    </div>
                    
                    {/* Enhanced Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center justify-between">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl text-sm font-semibold border border-white/30">
                          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {service.duration}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl text-sm font-semibold border border-white/30">
                          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {service.level}
                        </span>
                      </div>
                    </div>
                    
                    {/* Gradient Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-500"></div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {expandedService !== index && (
                      <>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                            <span className="text-gray-600 font-medium flex items-center">
                              <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Duration:
                            </span>
                            <span className="font-bold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{service.duration}</span>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                            <span className="text-gray-600 font-medium flex items-center">
                              <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Level:
                            </span>
                            <span className="font-bold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{service.level}</span>
                          </div>
                        </div>
                        
                        <div className="text-center mb-6">
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                            <p className="text-sm text-primary-700 font-medium flex items-center justify-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Click "Learn More" to discover all features
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {expandedService === index && (
                      <div className="border-t border-gray-200 pt-6 mb-6">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">What's Included</h4>
                          <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-medium">Premium Features</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="group flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-primary-500 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                              <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                              <span className="text-gray-800 font-medium flex-grow">{feature}</span>
                              <div className="ml-auto">
                                <svg className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => toggleService(index)}
                      className="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                    >
                      <span>{expandedService === index ? 'Show Less' : 'Learn More'}</span>
                      <svg 
                        className={`w-5 h-5 transform transition-transform duration-300 group-hover:scale-110 ${expandedService === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Card Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400/0 to-accent-400/0 group-hover:from-primary-400/5 group-hover:to-accent-400/5 blur-xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,white_2px,transparent_2px)] bg-[length:2rem_2rem]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,white_1px,transparent_1px)] bg-[length:1rem_1rem]"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Ready to Get Started?</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Transform Your Life with Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-blue-300">
                Professional Services
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Join thousands of satisfied clients who have achieved their wellness goals with FitGeek. 
              Start your transformation journey today!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/membership"
                className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">View Packages</span>
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
              
              <a
                href="/contact"
                className="group inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: '750+', label: 'Happy Clients' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '6+', label: 'Premium Services' },
                  { number: '24/7', label: 'Support Available' }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
