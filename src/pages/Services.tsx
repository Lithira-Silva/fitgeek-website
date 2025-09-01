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
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                ✨ Professional Wellness Services
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive wellness services designed to support your health journey 
              with personalized coaching, group programs, and holistic wellness support.
            </p>
            
            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm text-primary-100">Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold">750+</div>
                <div className="text-sm text-primary-100">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-primary-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-primary-100">Support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🌟 What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Wellness Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of professional services designed to support every aspect of your wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPicgKyBzZXJ2aWNlLm5hbWUgKyAnPC90ZXh0Pjwvc3ZnPic=';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                        ⏱️ {service.duration}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                        📊 {service.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {expandedService !== index && (
                    <>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-500 font-medium">Duration:</span>
                          <span className="font-semibold text-gray-900">{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-500 font-medium">Level:</span>
                          <span className="font-semibold text-gray-900">{service.level}</span>
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <p className="text-sm text-gray-500 italic bg-blue-50 p-3 rounded-lg border border-blue-100">
                          💡 Click "Learn More" to discover all features
                        </p>
                      </div>
                    </>
                  )}
                  
                  {expandedService === index && (
                    <div className="border-t pt-6 mb-6 animate-fadeIn">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-xl font-bold text-primary-600">✨ What's Included</h4>
                        <div className="flex items-center text-green-600">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium">Premium Features</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-primary-500 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105">
                            <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mr-4"></div>
                            <span className="text-gray-800 font-medium">{feature}</span>
                            <div className="ml-auto">
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>{expandedService === index ? 'Show Less' : 'Learn More'}</span>
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                🚀 Ready to Get Started?
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your Life with Our
              <span className="block text-accent-400 mt-2">Professional Services</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who have achieved their wellness goals with FitGeek. 
              Start your transformation journey today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/packages"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span>View Packages</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">750+</div>
                  <div className="text-blue-200 text-sm">Happy Clients</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">6+</div>
                  <div className="text-blue-200 text-sm">Premium Services</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
