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
      features: ['Personalized workout plans', 'Goal-specific training', 'In-person & online options', 'Progress tracking']
    },
    {
      name: 'Group Fitness Classes',
      description: 'Fun and energetic group sessions that build community while you work towards your fitness goals.',
      duration: '45-60 min',
      level: 'All Levels',
      category: 'Group Sessions',
      features: ['Community building', 'Energetic atmosphere', 'Variety of formats', 'Motivational support']
    },
    {
      name: 'Yoga & Mindfulness',
      description: 'Relaxation, flexibility, and stress relief through guided yoga and mindfulness practices.',
      duration: '60-75 min',
      level: 'Beginner to Advanced',
      category: 'Mind & Body',
      features: ['Stress relief', 'Flexibility improvement', 'Mindfulness training', 'Relaxation techniques']
    },
    {
      name: 'Nutrition Guidance',
      description: 'Personalized diet and meal planning to fuel your body and support your fitness journey.',
      duration: 'Ongoing',
      level: 'All Levels',
      category: 'Nutrition Support',
      features: ['Meal planning', 'Dietary consultations', 'Nutritional education', 'Custom diet plans']
    },
    {
      name: 'Weight Management',
      description: 'Comprehensive weight loss and weight gain programs designed for sustainable, healthy results.',
      duration: 'Program-based',
      level: 'All Levels',
      category: 'Specialized Programs',
      features: ['Sustainable results', 'Medical monitoring', 'Behavior modification', 'Long-term support']
    },
    {
      name: 'Wellness Coaching',
      description: 'Lifestyle and habit improvement coaching to help you build lasting, positive changes.',
      duration: 'Flexible',
      level: 'All Levels',
      category: 'Lifestyle Coaching',
      features: ['Habit formation', 'Lifestyle optimization', 'Goal setting', 'Accountability support']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive wellness services designed to support your health journey 
            with personalized coaching, group programs, and holistic wellness support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">{service.name} Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {expandedService !== index && (
                    <>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Level:</span>
                          <span className="font-medium">{service.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Category:</span>
                          <span className="font-medium">{service.category}</span>
                        </div>
                      </div>
                      
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-500 italic">Click "Learn More" to see features</p>
                      </div>
                    </>
                  )}
                  
                  {expandedService === index && (
                    <div className="border-t pt-4 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-primary-600">Features</h4>
                        <div className="flex items-center text-primary-600">
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium">What's Included</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200">
                            <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                            <span className="text-gray-800 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => toggleService(index)}
                    className="w-full mt-4 btn-primary flex items-center justify-center space-x-2 transition-all duration-200"
                  >
                    <span>{expandedService === index ? 'Show Less' : 'Learn More'}</span>
                    <svg 
                      className={`w-4 h-4 transform transition-transform duration-200 ${expandedService === index ? 'rotate-180' : ''}`} 
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

      {/* Service Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive wellness solutions designed to support your health journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Individual Coaching</h3>
              <p className="text-gray-600">Personalized training and wellness coaching tailored to your unique needs.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Group Programs</h3>
              <p className="text-gray-600">Community-focused fitness and wellness programs that motivate and inspire.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Wellness Support</h3>
              <p className="text-gray-600">Holistic health services including nutrition, mindfulness, and lifestyle coaching.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
