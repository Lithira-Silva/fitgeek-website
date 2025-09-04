import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 -mt-20 overflow-hidden text-white bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern gym interior"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-accent-500/20 blur-xl animate-pulse"></div>
          <div className="absolute w-48 h-48 delay-1000 rounded-full bottom-20 right-20 bg-primary-500/20 blur-xl animate-pulse"></div>
          <div className="absolute w-24 h-24 delay-500 rounded-full top-1/2 left-1/3 bg-white/10 blur-lg animate-bounce"></div>
        </div>

        <div className="relative flex items-center min-h-screen container-max section-padding">
          <div className="grid items-center w-full grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="z-10 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 border rounded-full bg-accent-500/20 border-accent-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium text-accent-300">Sri Lanka's Premier Wellness Center</span>
                </div>
                <h1 className="text-5xl font-bold leading-tight md:text-7xl font-display">
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                    Wellness Journey
                  </span>
                </h1>
              </div>
              
              <p className="max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
                Discover the power of holistic wellness with our expert coaches, personalized programs, 
                and supportive community. Your transformation starts here.
              </p>
              
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Link 
                  to="/packages" 
                  className="relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 transform shadow-xl group bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl hover:shadow-accent-500/25 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Journey
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-accent-600 to-accent-700 group-hover:opacity-100"></div>
                </Link>
                
                <Link 
                  to="/services" 
                  className="px-8 py-4 font-semibold text-white transition-all duration-300 transform border group bg-white/10 backdrop-blur-sm border-white/20 rounded-xl hover:bg-white/20 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    Explore Services
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold md:text-4xl text-accent-400">750+</div>
                  <div className="mt-1 text-sm text-gray-300">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold md:text-4xl text-accent-400">6</div>
                  <div className="mt-1 text-sm text-gray-300">Wellness Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold md:text-4xl text-accent-400">5+</div>
                  <div className="mt-1 text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10 p-8 border bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Personal training session"
                    className="object-cover w-full shadow-2xl h-96 rounded-2xl"
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute p-4 bg-white shadow-xl -top-4 -right-4 rounded-xl animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-100">
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
                  
                  <div className="absolute p-4 delay-1000 bg-white shadow-xl -bottom-4 -left-4 rounded-xl animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100">
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
                <div className="absolute opacity-50 -inset-4 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-3xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        <div className="relative z-10 container-max">
          <div className="mb-20 text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary-100 text-primary-600">
              Why Choose FitGeek
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl font-display">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Succeed
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
              We provide everything you need to achieve your fitness goals in a supportive and motivating environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative p-8 overflow-hidden text-center transition-all duration-500 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-primary-50 to-transparent group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 shadow-lg bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl group-hover:scale-110">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-600">Expert Trainers</h3>
                <p className="leading-relaxed text-gray-600">
                  Our certified trainers provide personalized guidance to help you reach your fitness goals safely and effectively.
                </p>
              </div>
            </div>
            
            <div className="relative p-8 overflow-hidden text-center transition-all duration-500 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-accent-50 to-transparent group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 shadow-lg bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl group-hover:scale-110">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-accent-600">Modern Equipment</h3>
                <p className="leading-relaxed text-gray-600">
                  State-of-the-art fitness equipment and facilities designed to provide the best workout experience possible.
                </p>
              </div>
            </div>
            
            <div className="relative p-8 overflow-hidden text-center transition-all duration-500 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-green-50 to-transparent group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 shadow-lg bg-gradient-to-br from-green-500 to-green-600 rounded-2xl group-hover:scale-110">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600">Community Support</h3>
                <p className="leading-relaxed text-gray-600">
                  Join a community of like-minded individuals who will motivate and support you on your fitness journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-max">
          <div className="mb-20 text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent-100 text-accent-600">
              Popular Services
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl font-display">
              Discover Our Most
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">
                Popular Services
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-600">
              Discover our most popular fitness classes designed for all levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
              <div key={index} className="overflow-hidden transition-all duration-500 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={classItem.image} 
                    alt={classItem.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPicgKyBjbGFzc0l0ZW0ubmFtZSArICc8L3RleHQ+PC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold text-gray-800 rounded-full bg-white/90 backdrop-blur-sm">
                      {classItem.time}
                    </span>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute text-white transition-opacity duration-500 opacity-0 bottom-4 left-4 right-4 group-hover:opacity-100">
                    <h3 className="mb-1 text-lg font-bold">{classItem.name}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{classItem.description}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-600">{classItem.name}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{classItem.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-700">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {classItem.time}
                    </span>
                    <Link to="/services" className="inline-flex items-center font-semibold transition-colors duration-200 group/link text-primary-600 hover:text-primary-700">
                      Learn More
                      <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-xl hover:shadow-xl hover:scale-105">
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
        <div className="absolute w-32 h-32 rounded-full top-10 left-10 bg-gradient-to-r from-accent-400 to-accent-600 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute w-40 h-40 delay-1000 rounded-full bottom-10 right-10 bg-gradient-to-r from-blue-400 to-blue-600 blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative py-24 container-max">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></div>
              <span className="font-medium text-white">Ready to Transform Your Life?</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-6xl font-display">
              Start Your Fitness Journey
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-blue-300">
                Today
              </span>
            </h2>
            
            {/* Description */}
            <p className="max-w-3xl mx-auto mb-12 text-xl font-light leading-relaxed text-blue-100 md:text-2xl">
              Join thousands of satisfied members who have transformed their lives with our expert guidance, 
              state-of-the-art facilities, and supportive community.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link 
                to="/packages" 
                className="relative inline-flex items-center px-10 py-5 font-bold text-white transition-all duration-300 transform shadow-2xl group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 rounded-2xl hover:shadow-accent-500/25 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Get Started Now</span>
                <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-500 group-hover:opacity-20 blur-xl"></div>
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 font-semibold text-white transition-all duration-300 transform border-2 group bg-white/10 backdrop-blur-sm border-white/30 hover:border-white/50 rounded-2xl hover:bg-white/20 hover:scale-105"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-12 mt-16 border-t border-white/20">
              <div className="grid max-w-2xl grid-cols-3 gap-8 mx-auto">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white md:text-4xl">750+</div>
                  <div className="text-sm font-medium text-blue-200">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white md:text-4xl">5+</div>
                  <div className="text-sm font-medium text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white md:text-4xl">98%</div>
                  <div className="text-sm font-medium text-blue-200">Success Rate</div>
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
