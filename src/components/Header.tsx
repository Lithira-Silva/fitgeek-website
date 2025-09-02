import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'About', 
      href: '/about',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: 'Services', 
      href: '/services',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      name: 'Packages', 
      href: '/packages',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    { 
      name: 'Contact', 
      href: '/contact',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if current page matches navigation item
  const isActivePage = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname === href
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' 
        : 'bg-white/95 backdrop-blur-lg shadow-lg'
    }`}>
      {/* Background overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-accent-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
      
      <nav className="container-max relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:via-primary-600 group-hover:to-accent-600 transition-all duration-500">
                    FitGeek
                  </span>
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wide group-hover:text-primary-600 transition-colors duration-300">
                  Premium Wellness Center
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 bg-white/60 backdrop-blur-xl rounded-2xl p-1.5 shadow-inner border border-gray-200/50">
              {navigation.map((item) => {
                const isActive = isActivePage(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative flex items-center px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 group overflow-hidden ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow-lg shadow-primary-500/25'
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:shadow-md'
                    }`}
                  >
                    {/* Background animation */}
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600' 
                        : 'bg-gradient-to-r from-primary-600/0 to-accent-600/0 group-hover:from-primary-600 group-hover:to-accent-600'
                    }`}></div>
                    
                    {/* Icon */}
                    <span className={`relative z-10 mr-2 transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'
                    }`}>
                      {item.icon}
                    </span>
                    
                    {/* Text */}
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Hover shine effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700"></div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/packages"
              className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <svg className="relative z-10 w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              
              {/* Text */}
              <span className="relative z-10">Get Started</span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700"></div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-3 rounded-2xl transition-all duration-300 overflow-hidden group ${
                isMenuOpen 
                  ? 'bg-gradient-to-br from-primary-50 to-accent-50 text-primary-600 shadow-lg border border-primary-200' 
                  : 'bg-white/80 text-gray-600 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50 hover:text-primary-600 shadow-md border border-gray-200/50'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              
              {/* Background animation */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
              }`}></div>
              
              <div className="w-6 h-6 relative z-10">
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 rounded-full ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'top-1.5 group-hover:top-1'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-2.5 rounded-full ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 rounded-full ${
                  isMenuOpen ? '-rotate-45 top-2.5' : 'top-3.5 group-hover:top-4'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="relative mx-4 mb-4 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/50"></div>
            
            <div className="relative p-6">
              {/* Mobile navigation items */}
              <div className="space-y-2 mb-6">
                {navigation.map((item) => {
                  const isActive = isActivePage(item.href)
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                        isActive
                          ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/25'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 hover:shadow-md'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        {/* Icon */}
                        <span className={`mr-4 p-2 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-primary-100 text-primary-600 group-hover:bg-primary-200'
                        }`}>
                          {item.icon}
                        </span>
                        
                        {/* Text */}
                        <span className="font-semibold text-lg">{item.name}</span>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className={`transition-all duration-300 ${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-primary-600'
                      }`}>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  )
                })}
              </div>
              
              {/* Mobile CTA Section */}
              <div className="pt-6 border-t border-gray-200/50">
                <div className="space-y-4">
                  {/* Get Started Button */}
                  <Link
                    to="/packages"
                    className="group flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center">
                      <svg className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-lg">Start Your Journey</span>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700"></div>
                    </div>
                  </Link>
                  
                  {/* Quick Contact */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+94757342418"
                      className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 text-primary-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 border border-primary-200/50"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call
                    </a>
                    
                    <Link
                      to="/contact"
                      className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-accent-50 to-accent-100 hover:from-accent-100 hover:to-accent-200 text-accent-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 border border-accent-200/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Chat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
