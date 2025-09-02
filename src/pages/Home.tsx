import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 text-white overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern gym interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce delay-500"></div>
        </div>

        <div className="relative container-max section-padding flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="z-10 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 rounded-full border border-accent-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-accent-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-accent-300 text-sm font-medium">Sri Lanka's Premier Wellness Center</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                    Wellness Journey
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Discover the power of holistic wellness with our expert coaches, personalized programs, 
                and supportive community. Your transformation starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/membership" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-accent-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Journey
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  to="/services" 
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    Explore Services
                    <svg className="w-5 h-5 ml-2 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent-400">750+</div>
                  <div className="text-sm text-gray-300 mt-1">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent-400">6</div>
                  <div className="text-sm text-gray-300 mt-1">Wellness Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent-400">5+</div>
                  <div className="text-sm text-gray-300 mt-1">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Personal training session"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">Wellness Goals</div>
                        <div className="text-xs text-gray-600">Achieved Daily</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl animate-float delay-1000">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800">Expert Guidance</div>
                        <div className="text-xs text-gray-600">24/7 Support</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        <div className="container-max relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Why Choose FitGeek
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide everything you need to achieve your fitness goals in a supportive and motivating environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">Expert Trainers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our certified trainers provide personalized guidance to help you reach your fitness goals safely and effectively.
                </p>
              </div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-accent-600 transition-colors duration-300">Modern Equipment</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art fitness equipment and facilities designed to provide the best workout experience possible.
                </p>
              </div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">Community Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join a community of like-minded individuals who will motivate and support you on your fitness journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container-max">
          <div className="text-center mb-20">
            <span className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Popular Services
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Discover Our Most
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">
                Popular Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our most popular fitness classes designed for all levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Personal Training', 
                description: 'One-on-one coaching tailored to your specific goals with both in-person and online options available', 
                time: 'Flexible',
                image: '/images/services/personal-training.jpg'
              },
              { 
                name: 'Yoga & Mindfulness', 
                description: 'Relaxation, flexibility, and stress relief through guided yoga and mindfulness practices', 
                time: '60-75 min',
                image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80'
              },
              { 
                name: 'Nutrition Guidance', 
                description: 'Personalized diet and meal planning to fuel your body and support your fitness journey', 
                time: 'Ongoing',
                image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80'
              },
            ].map((classItem, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={classItem.image} 
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPicgKyBjbGFzc0l0ZW0ubmFtZSArICc8L3RleHQ+PC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {classItem.time}
                    </span>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-lg font-bold mb-1">{classItem.name}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{classItem.description}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{classItem.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{classItem.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {classItem.time}
                    </span>
                    <Link to="/services" className="group/link inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                      Learn More
                      <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>View All Services</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,white_2px,transparent_2px)] bg-[length:2rem_2rem]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,white_1px,transparent_1px)] bg-[length:1rem_1rem]"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="relative container-max py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Ready to Transform Your Life?</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Start Your Fitness Journey
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-blue-300">
                Today
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Join thousands of satisfied members who have transformed their lives with our expert guidance, 
              state-of-the-art facilities, and supportive community.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/membership" 
                className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Get Started Now</span>
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/contact" 
                className="group inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">750+</div>
                  <div className="text-blue-200 text-sm font-medium">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-blue-200 text-sm font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-blue-200 text-sm font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
