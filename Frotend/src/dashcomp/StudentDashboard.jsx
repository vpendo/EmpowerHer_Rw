import React, { useState, useEffect } from 'react';
import { 
  BookOpen, GraduationCap, Award, 
  Clock, CheckCircle, Star, Calendar,
  MessageSquare, TrendingUp, FileText,
  Layout, List, Rocket, Target, Heart
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [viewMode, setViewMode] = useState('grid');
  const [loading, setLoading] = useState(true);

  // Get user info from localStorage
  const userInfo = JSON.parse(localStorage.getItem('UserInfo')) || {};
  const studentName = userInfo.username || 'Student';

  // Student Data
  const [studentInfo, setStudentInfo] = useState({
    name: studentName,
    email: userInfo.email || '',
    enrolledDate: "2024-01-15",
    totalProgress: 75,
    completedCourses: 2,
    ongoingCourses: 2,
    nextSession: "2024-11-20 10:00 AM",
    mentor: "Pendo Vestine",
    dailyStreak: 15,
    nextGoal: "Complete Module 5"
  });

  // Enrolled Courses
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 1,
      name: "React Development Masterclass",
      progress: 100,
      grade: "A",
      score: 92,
      status: "Completed",
      lastAccessed: "2024-11-18",
      nextLesson: "Course Completed",
      image: "path/to/react-image.jpg"
    },
    {
      id: 2,
      name: "Python for Data Science",
      progress: 60,
      grade: "In Progress",
      score: "-",
      status: "In Progress",
      lastAccessed: "2024-11-19",
      nextLesson: "Data Visualization",
      image: "path/to/python-image.jpg"
    }
  ]);

  // Recent Feedback
  const [recentFeedback, setRecentFeedback] = useState([
    {
      id: 1,
      course: "React Development",
      mentor: "Sarah Johnson",
      date: "2024-11-18",
      message: "Excellent work on the React components! Your code is well-structured.",
      rating: "Excellent"
    }
  ]);

  // Upcoming Sessions
  const [upcomingSessions, setUpcomingSessions] = useState([
    {
      id: 1,
      mentor: "Sarah Johnson",
      date: "2024-11-20",
      time: "10:00 AM",
      topic: "Advanced React Patterns",
      duration: "1 hour"
    }
  ]);

  // Progress Stats
  const [progressStats, setProgressStats] = useState({
    totalCourses: 4,
    completedCourses: 2,
    averageGrade: "A",
    totalHours: 120
  });

  // Fetch student data
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true);
        // Simulate API call - replace with actual API endpoint
        const response = await fetch(`http://127.0.0.1:8000/api/student/${userInfo.id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        if (!response.ok) throw new Error('Failed to fetch student data');
        
        const data = await response.json();
        setStudentInfo(prevInfo => ({
          ...prevInfo,
          ...data
        }));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching student data:', err);
        setLoading(false);
      }
    };

    if (userInfo.id) {
      fetchStudentData();
    }
  }, [userInfo.id]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Personalized Header Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {studentInfo.name}! 🌟
              </h1>
              <p className="text-indigo-100 text-lg">
                Ready to continue your tech journey?
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-sm">Daily Streak</span>
                  <div className="flex items-center gap-2">
                    <Rocket className="h-4 w-4" />
                    <span className="font-bold">{studentInfo.dailyStreak} days</span>
                  </div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-sm">Next Goal</span>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span className="font-bold">{studentInfo.nextGoal}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-indigo-100">Overall Progress</p>
              <div className="flex items-center gap-2">
                <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                    style={{ width: `${studentInfo.totalProgress}%` }}
                  />
                </div>
                <span className="text-lg font-bold">{studentInfo.totalProgress}%</span>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 backdrop-blur-sm"></div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Enrolled Courses</p>
                <p className="text-2xl font-bold text-gray-900">{progressStats.totalCourses}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-indigo-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{progressStats.completedCourses}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Grade</p>
                <p className="text-2xl font-bold text-gray-900">{progressStats.averageGrade}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Learning Hours</p>
                <p className="text-2xl font-bold text-gray-900">{progressStats.totalHours}h</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Main Content Tabs */}
          <div className="flex gap-4 border-b mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-4 ${
                activeTab === 'overview'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`pb-4 px-4 ${
                activeTab === 'courses'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              My Courses
            </button>
            <button
              onClick={() => setActiveTab('feedback')}
              className={`pb-4 px-4 ${
                activeTab === 'feedback'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Feedback
            </button>
            <button
              onClick={() => setActiveTab('sessions')}
              className={`pb-4 px-4 ${
                activeTab === 'sessions'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Mentorship
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Completed Module 3</p>
                      <p className="text-xs text-gray-500">React Development Course • 2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <FileText className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Submitted Assignment</p>
                      <p className="text-xs text-gray-500">Python Basics • Yesterday</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <MessageSquare className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Mentorship Session</p>
                      <p className="text-xs text-gray-500">with Sarah Johnson • 2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-indigo-500" />
                  Next Steps
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <BookOpen className="h-4 w-4 text-indigo-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Start Module 4</p>
                      <p className="text-xs text-gray-500">React Development Course • Due Tomorrow</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Calendar className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Upcoming Mentorship Session</p>
                      <p className="text-xs text-gray-500">Thursday, 2:00 PM • Advanced React Patterns</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-pink-100 p-2 rounded-full">
                      <Star className="h-4 w-4 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Complete Quiz</p>
                      <p className="text-xs text-gray-500">Python Basics • Due in 3 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              {/* Course View Toggle */}
              <div className="flex justify-end mb-4">
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

              {/* Courses Grid/List View */}
              <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-6' : 'space-y-4'}>
                {enrolledCourses.map(course => (
                  <div key={course.id} className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex-grow h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-blue-500 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{course.progress}%</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Grade: {course.grade}</span>
                      <span>{course.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="space-y-6">
              {recentFeedback.map(feedback => (
                <div key={feedback.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{feedback.course}</h3>
                      <p className="text-gray-500">Mentor: {feedback.mentor}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {feedback.rating}
                    </span>
                  </div>
                  <p className="text-gray-600">{feedback.message}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="space-y-6">
              {upcomingSessions.map(session => (
                <div key={session.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{session.topic}</h3>
                      <p className="text-gray-500">Mentor: {session.mentor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{session.date}</p>
                      <p className="text-sm text-gray-500">{session.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
