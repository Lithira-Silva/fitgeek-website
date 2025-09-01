const Membership = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Wellness Service Packages
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Professional wellness services delivered at your convenience. We provide expert coaching, consultations, and personalized programs - no gym membership required. Services available at our location, your home, or online.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Essential Plan */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Essential Wellness</h3>
              <div className="text-5xl font-bold text-primary-600 mb-2">LKR 15,000</div>
              <p className="text-gray-600 mb-6">per month</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic nutrition guidance & dietary consultations (2 sessions)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly wellness assessment & progress tracking
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to 4 group wellness sessions per month
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic weight management support & goal setting
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  WhatsApp support & accountability check-ins
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  One-on-one personal training sessions
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Personalized meal plans & custom diet planning
                </li>
              </ul>
              
              {/* Optional Add-ons */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-3">Premium Add-ons Available:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Custom nutritional plan & meal prep guide</span>
                    <span className="font-medium">+₹4,500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly diet planning & grocery lists</span>
                    <span className="font-medium">+₹3,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Yoga & mindfulness sessions (4/month)</span>
                    <span className="font-medium">+₹5,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personal training sessions (2/month)</span>
                    <span className="font-medium">+₹6,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home wellness consultations</span>
                    <span className="font-medium">+₹3,500/month</span>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full">Choose Plan</button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-primary-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Wellness</h3>
              <div className="text-5xl font-bold text-primary-600 mb-2">₹28,000</div>
              <p className="text-gray-600 mb-6">per month</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Essential Wellness package
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited group wellness sessions & fitness coaching
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  8 yoga & mindfulness sessions per month
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced weight management with weekly check-ins
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly wellness coaching sessions (2 sessions)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 WhatsApp wellness support & guidance
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  One-on-one personal training sessions
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Comprehensive nutrition guidance & meal planning
                </li>
              </ul>
              
              {/* Optional Add-ons */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-3">Premium Add-ons Available:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Comprehensive nutrition plan & meal prep guide</span>
                    <span className="font-medium">+₹8,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom meal planning with shopping lists</span>
                    <span className="font-medium">+₹6,500/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personal training sessions (4/month)</span>
                    <span className="font-medium">+₹12,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Advanced nutrition coaching & supplements guide</span>
                    <span className="font-medium">+₹7,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home wellness visits & consultations</span>
                    <span className="font-medium">+₹5,000/month</span>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full">Choose Plan</button>
            </div>

            {/* Elite Plan */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Elite Wellness</h3>
              <div className="text-5xl font-bold text-primary-600 mb-2">₹50,000</div>
              <p className="text-gray-600 mb-6">per month</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Premium Wellness package included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly personal training sessions (4-6 per month)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete wellness coaching & lifestyle transformation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comprehensive nutrition guidance & custom meal plans
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly home wellness consultations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority scheduling & 24/7 dedicated wellness support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly comprehensive health & progress reports
                </li>
              </ul>
              
              {/* Optional Add-ons */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-3">Premium Elite Add-ons:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Premium nutritional supplements & wellness products</span>
                    <span className="font-medium">+₹15,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Advanced nutrition consultation & specialized diets</span>
                    <span className="font-medium">+₹12,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly meal prep assistance & grocery planning</span>
                    <span className="font-medium">+₹8,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional personal training sessions</span>
                    <span className="font-medium">+₹6,000/session</span>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our wellness service packages
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Do you provide gym facilities?</h3>
              <p className="text-gray-600">
                No, we are a wellness services provider. We offer professional coaching, consultations, and programs that can be delivered at our consultation center, your home, or online. We focus on personalized wellness services rather than gym equipment access.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Where are the services provided?</h3>
              <p className="text-gray-600">
                Our services are flexible and can be provided at our wellness center, your home, or through online consultations depending on the service type and your preference.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Can I add services to my package later?</h3>
              <p className="text-gray-600">
                Yes! All our packages have optional add-ons that you can include at any time. You can also upgrade your package as your wellness needs evolve.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">What's included in the nutrition guidance?</h3>
              <p className="text-gray-600">
                Our nutrition guidance includes dietary consultations, basic meal planning suggestions, and nutritional education. For comprehensive meal plans and detailed nutritional analysis, check our premium add-ons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Membership
