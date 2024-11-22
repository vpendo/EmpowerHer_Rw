import React, { useState } from 'react';
import { 
  BookOpen, GraduationCap, Award, 
  Clock, CheckCircle, Star, Calendar,
  MessageSquare, TrendingUp, FileText,
  Layout, List
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [viewMode, setViewMode] = useState('grid');

  // Student Data
  const studentInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    enrolledDate: "2024-01-15",
    totalProgress: 75,
    completedCourses: 2,
    ongoingCourses: 2,
    nextSession: "2024-11-20 10:00 AM",
    mentor: "Sarah Johnson"
  };

  // Enrolled Courses
  const enrolledCourses = [
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
  ];

  // Recent Feedback
  const recentFeedback = [
    {
      id: 1,
      course: "React Development",
      mentor: "Sarah Johnson",
      date: "2024-11-18",
      message: "Excellent work on the React components! Your code is well-structured.",
      rating: "Excellent"
    }
  ];

  // Upcoming Sessions
  const upcomingSessions = [
    {
      id: 1,
      mentor: "Sarah Johnson",
      date: "2024-11-20",
      time: "10:00 AM",
      topic: "Advanced React Patterns",
      duration: "1 hour"
    }
  ];

  // Progress Stats
  const progressStats = {
    totalCourses: 4,
    completedCourses: 2,
    averageGrade: "A",
    totalHours: 120
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {studentInfo.name}!</h1>
              <p className="text-blue-100">Continue your learning journey</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-200">Overall Progress</p>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-blue-900 rounded-full">
                  <div 
                    className="h-2 bg-green-400 rounded-full"
                    style={{ width: `${studentInfo.totalProgress}%` }}
                  />
                </div>
                <span className="text-lg font-bold">{studentInfo.totalProgress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Enrolled Courses</p>
                <p className="text-2xl font-bold text-gray-900">{progressStats.totalCourses}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{progressStats.completedCourses}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Grade</p>
                <p className="text-2xl font-bold text-gray-900">{progressStats.averageGrade}</p>
              </div>
              <Award className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Learning Hours</p>
                <p className="text-2xl font-bold text-gray-900">{progressStats.totalHours}h</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6">
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
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                {/* Add recent activity content */}
              </div>

              {/* Next Steps */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
                {/* Add next steps content */}
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
