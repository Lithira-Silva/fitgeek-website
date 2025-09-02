import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">FG</span>
              </div>
              <span className="ml-3 text-2xl font-display font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FitGeek
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Transform your body, transform your life. Join FitGeek and discover the power of fitness with our expert trainers and state-of-the-art equipment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/fitgeeksl" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700/50">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@FITGEEKSL/featured" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700/50">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                About Us
              </Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Services
              </Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Packages
              </Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Contact
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Contact Info
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-600/20 transition-colors duration-300 border border-gray-700/50">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300 leading-relaxed">FitGeek, Thalawathugoda road, Kotte</span>
              </li>
              <li className="flex items-center group">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-600/20 transition-colors duration-300 border border-gray-700/50">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+94757342418" className="text-gray-300 hover:text-white transition-colors duration-200">
                  94 75 734 2418
                </a>
              </li>
              <li className="flex items-center group">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary-600/20 transition-colors duration-300 border border-gray-700/50">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:nethsukasakindu@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  nethsukasakindu@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 FitGeek. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Online Support Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
