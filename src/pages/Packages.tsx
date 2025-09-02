import { CheckIcon } from '@heroicons/react/24/outline'

const Packages = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Wellness Packages
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-accent-200">
                Choose Your
              </span>
              <br />
              <span className="text-white">
                Wellness Journey
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-6 leading-relaxed">
              Choose the perfect wellness package that fits your lifestyle and budget. 
              Professional services with flexible pricing options designed for your success.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">Sri Lankan Rupees (LKR)</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-primary-300 rounded-full"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">Monthly subscriptions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Basic Package */}
            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100 group-hover:border-primary-200 transform group-hover:-translate-y-2">
                {/* Plan Header */}
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">Basic Package</h3>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700 mb-2">LKR 12,000</div>
                  <p className="text-gray-600 font-medium">per month</p>
                  <p className="text-sm text-primary-600 font-semibold mt-2">Perfect for beginners</p>
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 text-left mb-8">
                  {[
                    "2 personal training sessions per month",
                    "Basic nutrition guidance",
                    "Monthly wellness assessment",
                    "Access to group wellness sessions",
                    "Online wellness resources",
                    "Email support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                        <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Choose Basic
                </button>
              </div>
              
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400/0 to-primary-500/0 group-hover:from-primary-400/5 group-hover:to-primary-500/5 blur-xl transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* Premium Package */}
            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center border-2 border-accent-200 group-hover:border-accent-300 transform group-hover:-translate-y-2">
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Most Popular
                  </div>
                </div>
                
                {/* Plan Header */}
                <div className="mb-8 pt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-accent-600 transition-colors duration-300">Premium Package</h3>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-700 mb-2">LKR 25,000</div>
                  <p className="text-gray-600 font-medium">per month</p>
                  <p className="text-sm text-accent-600 font-semibold mt-2">Great value for committed users</p>
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 text-left mb-8">
                  {[
                    "Everything in Basic package",
                    "4 personal training sessions per month",
                    "Advanced nutrition coaching",
                    "Custom meal planning",
                    "Bi-weekly progress consultations",
                    "Priority scheduling",
                    "Phone & WhatsApp support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                        <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Choose Premium
                </button>
              </div>
              
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-400/0 to-accent-500/0 group-hover:from-accent-400/10 group-hover:to-accent-500/10 blur-xl transition-all duration-500 pointer-events-none"></div>
            </div>

            {/* Premium Plus Package */}
            <div className="group relative">
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center border-2 border-primary-200 group-hover:border-primary-300 transform group-hover:-translate-y-2">
                {/* Plan Header */}
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">Premium Plus</h3>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 mb-2">LKR 45,000</div>
                  <p className="text-gray-600 font-medium">per month</p>
                  <p className="text-sm text-primary-600 font-semibold mt-2">Ultimate wellness experience</p>
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 text-left mb-8">
                  {[
                    "Everything in Premium package",
                    "8 personal training sessions per month",
                    "Weekly home consultations",
                    "Complete lifestyle transformation coaching",
                    "24/7 dedicated wellness support",
                    "Advanced health monitoring",
                    "Exclusive wellness workshops",
                    "VIP access to all programs"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                        <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Choose Premium Plus
                </button>
              </div>
              
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400/0 to-accent-400/0 group-hover:from-primary-400/5 group-hover:to-accent-400/5 blur-xl transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary-200/10 to-accent-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-accent-200/10 to-primary-200/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Package Comparison
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Compare Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Side-by-side comparison of all package features to help you make the best choice for your wellness journey.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-700 to-primary-800 text-white">
                  <tr>
                    <th className="px-6 py-6 text-left text-lg font-bold">Features</th>
                    <th className="px-6 py-6 text-center text-lg font-bold">
                      <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Basic
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center text-lg font-bold">
                      <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        Premium
                      </div>
                    </th>
                    <th className="px-6 py-6 text-center text-lg font-bold">
                      <div className="flex flex-col items-center">
                        <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Premium Plus
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      feature: "Personal Training Sessions",
                      basic: "2/month",
                      premium: "4/month",
                      premiumPlus: "8/month"
                    },
                    {
                      feature: "Nutrition Guidance",
                      basic: "Basic",
                      premium: "Advanced",
                      premiumPlus: "Premium"
                    },
                    {
                      feature: "Home Consultations",
                      basic: "-",
                      premium: "Bi-weekly",
                      premiumPlus: "Weekly"
                    },
                    {
                      feature: "Support Level",
                      basic: "Email",
                      premium: "Phone & WhatsApp",
                      premiumPlus: "24/7 Dedicated"
                    },
                    {
                      feature: "Monthly Price",
                      basic: "LKR 12,000",
                      premium: "LKR 25,000",
                      premiumPlus: "LKR 45,000"
                    }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 1 ? "bg-gradient-to-r from-gray-50/50 to-primary-50/30" : "bg-white"}>
                      <td className="px-6 py-5 text-gray-900 font-semibold text-lg">{row.feature}</td>
                      <td className="px-6 py-5 text-center">
                        {row.feature === "Monthly Price" ? (
                          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
                            {row.basic}
                          </span>
                        ) : (
                          <span className="text-gray-700 font-medium">{row.basic}</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-center">
                        {row.feature === "Monthly Price" ? (
                          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-700">
                            {row.premium}
                          </span>
                        ) : (
                          <span className="text-gray-700 font-medium">{row.premium}</span>
                        )}
                      </td>
                      <td className="px-6 py-5 text-center">
                        {row.feature === "Monthly Price" ? (
                          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                            {row.premiumPlus}
                          </span>
                        ) : (
                          <span className="text-gray-700 font-medium">{row.premiumPlus}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer */}
            <div className="bg-gradient-to-r from-gray-50 to-primary-50 px-6 py-4 border-t border-gray-100">
              <p className="text-center text-gray-600 font-medium">
                All packages include access to online resources and monthly wellness assessments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our wellness packages and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I switch between packages?",
                answer: "Yes, you can upgrade or downgrade your package at any time. Upgrades take effect immediately, while downgrades take effect from the next billing cycle. Our team will assist you with a smooth transition.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )
              },
              {
                question: "Is there a minimum commitment period?",
                answer: "All packages are month-to-month with no long-term commitment required. You have the flexibility to cancel anytime with 30 days notice, giving you complete control over your wellness journey.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                question: "Are there any additional fees?",
                answer: "No hidden fees! The package price includes all listed services. Additional services like specialized supplements or extra training sessions can be added for an additional cost, but these are completely optional.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                )
              },
              {
                question: "Do you offer family packages?",
                answer: "Yes, we offer special family discounts for Premium and Premium Plus packages when multiple family members join. Families of 3+ can save up to 20% on their monthly packages. Contact us for customized family pricing.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-primary-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Help Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
                Our wellness experts are here to help you choose the perfect package for your needs.
              </p>
              <div className="flex justify-center">
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-white rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            {/* Icon */}
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Life?
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards a healthier, happier you. Contact us today to discuss which package 
              is perfect for your wellness journey and start seeing real results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300 mb-2">750+</div>
                <p className="text-primary-200">Happy Members</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300 mb-2">95%</div>
                <p className="text-primary-200">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300 mb-2">24/7</div>
                <p className="text-primary-200">Expert Support</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+94757342418" 
                className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: 94 75 734 2418
              </a>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 text-primary-200">
              <p className="text-lg">
                Free consultation • No hidden fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Packages
