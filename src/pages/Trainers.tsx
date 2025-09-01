const Trainers = () => {
  const trainers = [
    {
      name: 'Sarah Johnson',
      title: 'Head Trainer & Founder',
      specialties: ['HIIT', 'Weight Training', 'Nutrition'],
      experience: '15 years',
      certifications: ['NASM-CPT', 'NSCA-CSCS'],
      bio: 'Sarah founded FitGeek with a vision to make fitness accessible to everyone. With over 15 years of experience, she specializes in creating personalized training programs.'
    },
    {
      name: 'Mike Chen',
      title: 'Strength & Conditioning Coach',
      specialties: ['Powerlifting', 'Olympic Lifting', 'Athletic Performance'],
      experience: '12 years',
      certifications: ['NSCA-CSCS', 'USAW-L1'],
      bio: 'Mike is our go-to expert for strength training. He has helped numerous clients achieve their strength goals and has coached several competitive athletes.'
    },
    {
      name: 'Emily Davis',
      title: 'Yoga & Wellness Instructor',
      specialties: ['Yoga', 'Meditation', 'Flexibility'],
      experience: '10 years',
      certifications: ['RYT-500', 'YTT-200'],
      bio: 'Emily brings a holistic approach to fitness, focusing on the mind-body connection. Her yoga classes are perfect for all levels.'
    },
    {
      name: 'Alex Rivera',
      title: 'Cardio & HIIT Specialist',
      specialties: ['Kickboxing', 'HIIT', 'Cardio Training'],
      experience: '8 years',
      certifications: ['ACSM-CPT', 'Kickboxing Certified'],
      bio: 'Alex brings high energy and motivation to every class. His cardio kickboxing sessions are among our most popular offerings.'
    },
    {
      name: 'Lisa Wong',
      title: 'Pilates Instructor',
      specialties: ['Pilates', 'Core Training', 'Rehabilitation'],
      experience: '9 years',
      certifications: ['PMA-CPT', 'Balanced Body'],
      bio: 'Lisa focuses on precision and control in movement. Her Pilates classes help improve posture, flexibility, and core strength.'
    },
    {
      name: 'Jake Thompson',
      title: 'Cycling Instructor',
      specialties: ['Indoor Cycling', 'Endurance Training', 'Music Therapy'],
      experience: '6 years',
      certifications: ['ACSM-CPT', 'Spinning Certified'],
      bio: 'Jake creates an energetic atmosphere in his spinning classes, combining challenging workouts with motivating playlists.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Meet Our Trainers
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Our certified fitness professionals are here to guide, motivate, and help you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">{trainer.name} Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{trainer.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{trainer.title}</p>
                  
                  <p className="text-gray-600 mb-4">{trainer.bio}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty, i) => (
                          <span key={i} className="bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Experience:</h4>
                      <p className="text-gray-600">{trainer.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.certifications.map((cert, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 btn-primary">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Training CTA */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready for Personal Training?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Take your fitness to the next level with one-on-one training sessions 
              tailored specifically to your goals and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent text-lg px-8 py-4">
                Book Consultation
              </button>
              <button className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Personal Training Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect training package for your fitness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Single Session</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$75</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 1 hour training session</li>
                <li>✓ Personalized workout plan</li>
                <li>✓ Form correction and guidance</li>
                <li>✓ Nutrition tips</li>
              </ul>
              <button className="btn-primary w-full">Get Started</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center border-2 border-primary-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">4-Session Package</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$280</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ 4 one-hour training sessions</li>
                <li>✓ Custom fitness assessment</li>
                <li>✓ Detailed nutrition plan</li>
                <li>✓ Progress tracking</li>
                <li>✓ Email support</li>
              </ul>
              <button className="btn-primary w-full">Get Started</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Monthly Unlimited</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">$399</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Unlimited training sessions</li>
                <li>✓ Comprehensive fitness plan</li>
                <li>✓ Meal planning assistance</li>
                <li>✓ 24/7 support access</li>
                <li>✓ Monthly body composition analysis</li>
              </ul>
              <button className="btn-primary w-full">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trainers
