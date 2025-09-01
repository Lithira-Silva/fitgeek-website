import { CheckIcon } from '@heroicons/react/24/outline'

const Packages = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Wellness Packages
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-4">
              Choose the perfect wellness package that fits your lifestyle and budget. Professional services with flexible pricing options.
            </p>
            <p className="text-lg text-primary-200">
              All pricing in Sri Lankan Rupees (LKR) - Monthly subscriptions
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Basic Package */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Package</h3>
                <div className="text-5xl font-bold text-primary-600 mb-2">LKR 12,000</div>
                <p className="text-gray-600">per month</p>
                <p className="text-sm text-gray-500 mt-2">Perfect for beginners</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">2 personal training sessions per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic nutrition guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly wellness assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access to group wellness sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Online wellness resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Choose Basic
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Package</h3>
                <div className="text-5xl font-bold text-primary-600 mb-2">LKR 25,000</div>
                <p className="text-gray-600">per month</p>
                <p className="text-sm text-gray-500 mt-2">Great value for committed users</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Basic package</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">4 personal training sessions per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced nutrition coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom meal planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bi-weekly progress consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Phone & WhatsApp support</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Choose Premium
              </button>
            </div>

            {/* Premium Plus Package */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-primary-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Plus</h3>
                <div className="text-5xl font-bold text-primary-600 mb-2">LKR 45,000</div>
                <p className="text-gray-600">per month</p>
                <p className="text-sm text-gray-500 mt-2">Ultimate wellness experience</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Premium package</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">8 personal training sessions per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Weekly home consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete lifestyle transformation coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 dedicated wellness support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced health monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Exclusive wellness workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">VIP access to all programs</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Choose Premium Plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Package Comparison</h2>
            <p className="text-xl text-gray-600">Compare features across all packages</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium Plus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Personal Training Sessions</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">2/month</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">4/month</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">8/month</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Nutrition Guidance</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Basic</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Advanced</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Premium</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Home Consultations</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">-</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Bi-weekly</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Weekly</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Support</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Email</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Phone & WhatsApp</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">24/7 Dedicated</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Monthly Price</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-primary-600">LKR 12,000</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-accent-600">LKR 25,000</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-primary-600">LKR 45,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our packages</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I switch between packages?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your package at any time. Changes will take effect from the next billing cycle.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a minimum commitment period?</h3>
              <p className="text-gray-600">All packages are month-to-month with no long-term commitment required. You can cancel anytime with 30 days notice.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there any additional fees?</h3>
              <p className="text-gray-600">No hidden fees! The package price includes all listed services. Additional services can be added for an extra cost.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer family packages?</h3>
              <p className="text-gray-600">Yes, we offer special family discounts for Premium and Premium Plus packages. Contact us for more details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss which package is right for you and begin your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+94757342418" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Call: 94 75 734 2418
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Packages
