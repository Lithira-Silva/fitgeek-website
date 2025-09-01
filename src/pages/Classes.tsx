const Classes = () => {
  const classes = [
    {
      name: 'HIIT Training',
      description: 'High-intensity interval training for maximum calorie burn and cardiovascular fitness.',
      duration: '45 min',
      level: 'All Levels',
      instructor: 'Sarah Johnson',
      schedule: ['Mon 6:00 AM', 'Wed 7:00 PM', 'Fri 6:00 AM']
    },
    {
      name: 'Yoga Flow',
      description: 'Improve flexibility, balance, and mindfulness through flowing yoga sequences.',
      duration: '60 min',
      level: 'Beginner',
      instructor: 'Emily Davis',
      schedule: ['Tue 7:00 AM', 'Thu 6:00 PM', 'Sat 9:00 AM']
    },
    {
      name: 'Strength Training',
      description: 'Build muscle mass and increase overall strength with progressive resistance training.',
      duration: '50 min',
      level: 'Intermediate',
      instructor: 'Mike Chen',
      schedule: ['Mon 7:00 PM', 'Wed 6:00 AM', 'Fri 7:00 PM']
    },
    {
      name: 'Cardio Kickboxing',
      description: 'High-energy martial arts inspired workout that burns calories and builds confidence.',
      duration: '45 min',
      level: 'All Levels',
      instructor: 'Alex Rivera',
      schedule: ['Tue 6:00 PM', 'Thu 7:00 AM', 'Sat 10:00 AM']
    },
    {
      name: 'Pilates Core',
      description: 'Strengthen your core, improve posture, and enhance body awareness.',
      duration: '55 min',
      level: 'Beginner',
      instructor: 'Lisa Wong',
      schedule: ['Mon 8:00 AM', 'Wed 5:00 PM', 'Fri 8:00 AM']
    },
    {
      name: 'Spin Cycle',
      description: 'High-energy indoor cycling class with motivating music and challenging intervals.',
      duration: '45 min',
      level: 'All Levels',
      instructor: 'Jake Thompson',
      schedule: ['Tue 5:30 AM', 'Thu 5:30 PM', 'Sun 9:00 AM']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Fitness Classes
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover our diverse range of fitness classes designed to challenge, motivate, 
            and help you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">{classItem.name} Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{classItem.name}</h3>
                  <p className="text-gray-600 mb-4">{classItem.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{classItem.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{classItem.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Instructor:</span>
                      <span className="font-medium">{classItem.instructor}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Schedule:</h4>
                    <div className="space-y-1">
                      {classItem.schedule.map((time, timeIndex) => (
                        <div key={timeIndex} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 btn-primary">
                    Book Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Weekly Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Plan your week with our comprehensive class schedule.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Time</th>
                  <th className="px-6 py-4 text-left">Monday</th>
                  <th className="px-6 py-4 text-left">Tuesday</th>
                  <th className="px-6 py-4 text-left">Wednesday</th>
                  <th className="px-6 py-4 text-left">Thursday</th>
                  <th className="px-6 py-4 text-left">Friday</th>
                  <th className="px-6 py-4 text-left">Saturday</th>
                  <th className="px-6 py-4 text-left">Sunday</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">6:00 AM</td>
                  <td className="px-6 py-4">HIIT Training</td>
                  <td className="px-6 py-4">Yoga Flow</td>
                  <td className="px-6 py-4">Strength Training</td>
                  <td className="px-6 py-4">Cardio Kickboxing</td>
                  <td className="px-6 py-4">HIIT Training</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">8:00 AM</td>
                  <td className="px-6 py-4">Pilates Core</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">Pilates Core</td>
                  <td className="px-6 py-4">Yoga Flow</td>
                  <td className="px-6 py-4">Spin Cycle</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">6:00 PM</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">Cardio Kickboxing</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">Yoga Flow</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">7:00 PM</td>
                  <td className="px-6 py-4">Strength Training</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">HIIT Training</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">Strength Training</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Classes
