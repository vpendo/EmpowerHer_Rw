import React, { useState } from 'react';
import { Calendar, Search, Layout, List } from 'lucide-react';

const Courses = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('title');
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showEnrollPopup, setShowEnrollPopup] = useState(false);
  const [enrollingCourse, setEnrollingCourse] = useState(null);

  const initialCourses = [
    {
      id: 1,
      title: "React Development Masterclass",
      description: "Master modern React development with hooks, context, and advanced patterns. Learn to build scalable applications.",
      date: "2024-11-01",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.8,
      enrolled: 1250,
      price: 0,
      image: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
      lectures: [
        "Modern React Fundamentals",
        "Hooks Deep Dive",
        "State Management with Context",
        "Performance Optimization"
      ],
      requirements: [
        "Strong JavaScript knowledge",
        "Basic React experience",
        "Understanding of ES6+"
      ],
      outcomes: [
        "Build complex React applications",
        "Implement advanced state management",
        "Master React performance optimization"
      ],
      materials: [
        "HD Video lectures",
        "Interactive coding exercises",
        "Project source code",
        "Certificate of completion"
      ],
      videoUrl: "https://www.youtube.com/watch?v=x4rFhThSX04"
    },
    {
      id: 2,
      title: "Python for Data Science",
      description: "Comprehensive Python programming for data analysis and machine learning fundamentals.",
      date: "2024-10-15",
      instructor: "Michael Chen",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      enrolled: 2100,
      price: 0,
      image: "https://www.svgrepo.com/show/376344/python.svg",
      lectures: [
        "Python Fundamentals",
        "NumPy and Pandas",
        "Data Visualization",
        "Machine Learning Basics"
      ],
      requirements: [
        "Basic programming knowledge",
        "Mathematics fundamentals"
      ],
      outcomes: [
        "Analyze data with Python",
        "Build ML models",
        "Create data visualizations"
      ],
      materials: [
        "Video tutorials",
        "Practice datasets",
        "Jupyter notebooks"
      ],
      videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
    },
    {
      id: 3,
      title: "HTML and CSS for Beginners",
      description: "Start your web development journey with HTML5 and CSS3. Learn to build beautiful, responsive websites from scratch.",
      date: "2024-11-15",
      instructor: "Alice Green",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.6,
      enrolled: 2500,
      price: 0,
      image: "https://i.pinimg.com/originals/52/2e/6b/522e6bc1a11d1726a35f81cbd979395f.jpg",
      lectures: [
        "HTML5 Fundamentals",
        "CSS3 Basics",
        "Responsive Web Design",
        "CSS Flexbox and Grid",
        "Building Modern Layouts"
      ],
      requirements: [
        "No prior coding experience needed",
        "Basic computer skills",
        "Enthusiasm to learn"
      ],
      outcomes: [
        "Build responsive websites",
        "Style web pages with CSS3",
        "Create modern layouts",
        "Understand web development basics"
      ],
      materials: [
        "Video tutorials",
        "Practice exercises",
        "Project files",
        "Coding resources"
      ],
      videoUrl: "https://www.youtube.com/watch?v=kUMe1FH4CHE&list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88"
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      description: "Master both frontend and backend development with modern technologies. Learn to build complete web applications from scratch.",
      date: "2024-12-01",
      instructor: "David Wilson",
      duration: "16 weeks",
      level: "Intermediate",
      rating: 4.9,
      enrolled: 1800,
      price: 0,
      image: "https://cdni.iconscout.com/illustration/premium/thumb/full-stack-developer-illustration-download-in-svg-png-gif-file-formats--java-logo-web-development-pack-crime-security-illustrations-4051527.png",
      lectures: [
        "HTML5 & CSS3 Mastery",
        "JavaScript & ES6+",
        "Node.js & Express",
        "MongoDB & Database Design",
        "API Development"
      ],
      requirements: [
        "Basic HTML/CSS knowledge",
        "Understanding of JavaScript",
        "Computer with internet connection"
      ],
      outcomes: [
        "Build full-stack web applications",
        "Deploy applications to the cloud",
        "Work with databases and APIs",
        "Implement authentication and security"
      ],
      materials: [
        "HD Video lectures",
        "Coding exercises",
        "Project starter files",
        "Development environment setup guide"
      ],
      videoUrl: "https://www.youtube.com/watch?v=nu_pCVPKzTk"
    },
    {
      id: 5,
      title: "Cybersecurity Fundamentals",
      description: "Learn essential cybersecurity concepts, threat detection, and security implementation. Perfect for IT professionals and security enthusiasts.",
      date: "2024-11-30",
      instructor: "Emily Rodriguez",
      duration: "14 weeks",
      level: "Beginner",
      rating: 4.7,
      enrolled: 1500,
      price: 0,
      image: "https://flashtek.online/wp-content/uploads/2024/04/what-is-cybersecurity.png",
      lectures: [
        "Security Fundamentals",
        "Network Security",
        "Cryptography Basics",
        "Threat Detection",
        "Security Tools & Practices"
      ],
      requirements: [
        "Basic IT knowledge",
        "Understanding of networks",
        "No prior security experience needed"
      ],
      outcomes: [
        "Implement security best practices",
        "Detect and prevent cyber threats",
        "Understand security protocols",
        "Use security tools effectively"
      ],
      materials: [
        "Video tutorials",
        "Security tools guide",
        "Practice labs",
        "Case studies"
      ],
      videoUrl: "https://www.youtube.com/watch?v=rL9h1Z5VMtM"
    },
    {
      id: 6,
      title: "UI/UX Design Masterclass",
      description: "Learn to create beautiful and functional user interfaces. Master the principles of user experience design and modern design tools.",
      date: "2024-12-15",
      instructor: "Sophie Anderson",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.8,
      enrolled: 1350,
      price: 0,
      image: "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg",
      lectures: [
        "Design Principles",
        "User Research",
        "Wireframing & Prototyping",
        "Figma Mastery",
        "Design Systems"
      ],
      requirements: [
        "Basic design knowledge",
        "Creativity and attention to detail",
        "Computer with design software"
      ],
      outcomes: [
        "Create user-centered designs",
        "Build interactive prototypes",
        "Conduct user research",
        "Develop design systems"
      ],
      materials: [
        "Design software tutorials",
        "UI kit templates",
        "Case study projects",
        "Design resources library"
      ],
      videoUrl: "https://www.youtube.com/watch?app=desktop&v=uC1VK4ktsFc"
    }
  ];

  const [courses, setCourses] = useState(initialCourses);

  const sortCourses = (coursesToSort) => {
    return [...coursesToSort].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'enrolled':
          return b.enrolled - a.enrolled;
        default:
          return a.title.localeCompare(b.title);
      }
    });
  };

  const filteredAndSortedCourses = sortCourses(
    courses.filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleEnrollment = (course) => {
    setEnrollingCourse(course);
    setShowEnrollPopup(true);
  };

  const confirmEnrollment = () => {
    if (enrollingCourse) {
      setEnrolledCourses([...enrolledCourses, enrollingCourse.id]);
      setShowEnrollPopup(false);
      
      if (enrollingCourse.videoUrl) {
        window.open(enrollingCourse.videoUrl, '_blank');
      }
      
      setEnrollingCourse(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-blue-500">Course Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="title">Sort by Title</option>
                <option value="rating">Sort by Rating</option>
                <option value="enrolled">Sort by Popularity</option>
              </select>
              <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                >
                  <Layout className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{course.rating}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-600">{course.enrolled} students</span>
                    </div>
                    <span className="text-blue-500 font-bold">Free</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      {enrolledCourses.includes(course.id) ? (
                        <span className="text-green-500 font-medium">Enrolled in Course</span>
                      ) : (
                        <button
                          onClick={() => setSelectedCourse(course)}
                          className="text-blue-500 hover:text-blue-600 font-medium"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAndSortedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full md:w-48 h-48 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {course.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <span className="text-gray-500">Instructor</span>
                        <p className="font-medium">{course.instructor}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration</span>
                        <p className="font-medium">{course.duration}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Rating</span>
                        <p className="font-medium">★ {course.rating}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Price</span>
                        <p className="font-medium text-blue-500">Free</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {enrolledCourses.includes(course.id) ? (
                        <span className="text-green-500 font-medium">Enrolled in Course</span>
                      ) : (
                        <button
                          onClick={() => handleEnrollment(course)}
                          className="text-blue-500 hover:text-blue-600 font-medium"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">About This Course</h3>
                  <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedCourse.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">What You'll Learn</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedCourse.outcomes.map((outcome, idx) => (
                          <li key={idx}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Course Content</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Lectures</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedCourse.lectures.map((lecture, idx) => (
                          <li key={idx}>{lecture}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Course Materials</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedCourse.materials.map((material, idx) => (
                          <li key={idx}>{material}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-900 font-medium">Price</span>
                        <span className="text-blue-500 font-bold text-xl">
                          Free
                        </span>
                      </div>
                      <button 
                        onClick={() => handleEnrollment(selectedCourse)}
                        className={`w-full py-2 rounded-lg transition-colors ${
                          enrolledCourses.includes(selectedCourse.id)
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-blue-500 hover:bg-blue-600'
                        } text-white`}
                        disabled={enrolledCourses.includes(selectedCourse.id)}
                      >
                        {enrolledCourses.includes(selectedCourse.id) ? 'Enrolled in Course' : 'Enroll Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEnrollPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Successfully Enrolled!</h3>
            <p className="text-gray-600 mb-6">
              You have successfully enrolled in "{enrollingCourse?.title}". Would you like to watch the course video now or later?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setEnrolledCourses([...enrolledCourses, enrollingCourse.id]);
                  setShowEnrollPopup(false);
                  setEnrollingCourse(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Watch Later
              </button>
              <button
                onClick={() => {
                  setEnrolledCourses([...enrolledCourses, enrollingCourse.id]);
                  window.open(enrollingCourse.videoUrl, '_blank');
                  setShowEnrollPopup(false);
                  setEnrollingCourse(null);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;