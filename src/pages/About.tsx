const About = () => {
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
        
        <div className="relative container-max py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Since 2020</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-blue-300">
                FitGeek
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-light">
              Empowering individuals to achieve their fitness goals through expert guidance, 
              cutting-edge equipment, and a supportive community since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-8">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
                Our Story of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Transformation
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  FitGeek was founded with a simple mission: to make fitness accessible, enjoyable, 
                  and effective for everyone. We believe that fitness is not just about physical 
                  transformation, but about building confidence, discipline, and a healthier lifestyle.
                </p>
                <p>
                  Over the years, we've helped thousands of members achieve their fitness goals, 
                  from weight loss and muscle building to improving overall health and wellness. 
                  Our approach combines scientific training methods with personalized attention 
                  to ensure every member gets the results they deserve.
                </p>
              </div>
              
              {/* Stats Card */}
              <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div className="group">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700 mb-2 group-hover:scale-110 transition-transform duration-300">750+</div>
                    <div className="text-gray-600 font-medium">Happy Members</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-700 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                    <div className="text-gray-600 font-medium">Success Rate</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-gray-600 font-medium">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:pl-8">
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                    alt="FitGeek Team - Professional fitness environment"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80';
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-600 mb-1">5+</div>
                        <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent-600 mb-1">24/7</div>
                        <div className="text-xs text-gray-600 font-medium">Support</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600 mb-1">6+</div>
                        <div className="text-xs text-gray-600 font-medium">Services</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] from-primary-500 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative container-max">
          <div className="text-center mb-20">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Our Core Values</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              What We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Stand For
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do at FitGeek and drive our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Passion",
                description: "We're passionate about fitness and helping others discover their potential.",
                gradient: "from-red-500 to-pink-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Excellence",
                description: "We strive for excellence in everything we do, from training to customer service.",
                gradient: "from-primary-500 to-blue-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Community",
                description: "We believe in the power of community to motivate and support each other.",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Innovation",
                description: "We continuously innovate to provide the best fitness experience possible.",
                gradient: "from-purple-500 to-indigo-600"
              }
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group-hover:border-gray-200 transform group-hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {value.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Hover Gradient Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container-max">
          <div className="text-center mb-20">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Meet Our Leader</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600">
                Leader
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the passionate leaders driving FitGeek's mission forward with expertise and dedication.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="group relative max-w-md">
              {/* Background Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="w-56 h-56 rounded-full mx-auto overflow-hidden ring-8 ring-gray-100 group-hover:ring-primary-100 transition-all duration-500">
                    <img 
                      src="/images/services/team_member.jpg" 
                      alt="Team Member"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI0IiBoZWlnaHQ9IjIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZvdW5kZXI8L3RleHQ+PC9zdmc+';
                      }}
                    />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>Available</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    Founder & CEO
                  </h3>
                  
                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>8 Years Experience</span>
                  </div>
                  
                  {/* Specialties */}
                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {['Youtuber', 'Motivational Speaker', 'Muay Thai'].map((specialty, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievement Stats */}
                  <div className="border-t border-gray-100 pt-6 mt-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700 mb-1">750+</div>
                        <div className="text-xs text-gray-600 font-medium">Members Trained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-700 mb-1">8</div>
                        <div className="text-xs text-gray-600 font-medium">Years Industry</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
