import React, { useState } from 'react';
import { 
  Users, BookOpen, Calendar, Award, 
  Clock, CheckCircle, MessageSquare, TrendingUp,
  Star, ArrowUp, ArrowDown, FileText
} from 'lucide-react';

const MentorDashboard = () => {
  // Mentor's statistics
  const mentorStats = {
    totalStudents: 125,
    activeStudents: 85,
    completedSessions: 450,
    upcomingSessions: 8,
    averageRating: 4.8,
    totalHours: 650,
    responseRate: 98,
    coursesTeaching: 4
  };

  // Upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      student: "John Doe",
      course: "React Development",
      date: "2024-03-20",
      time: "10:00 AM",
      topic: "Advanced Hooks",
      status: "confirmed"
    },
    {
      id: 2,
      student: "Jane Smith",
      course: "Web Development",
      date: "2024-03-20",
      time: "2:00 PM",
      topic: "CSS Grid Systems",
      status: "pending"
    }
  ];

  // Recent student progress
  const studentProgress = [
    {
      id: 1,
      name: "John Doe",
      course: "React Development",
      progress: 75,
      lastActivity: "Completed Module 5",
      trend: "up"
    },
    {
      id: 2,
      name: "Jane Smith",
      course: "Web Development",
      progress: 60,
      lastActivity: "Submitted Assignment 3",
      trend: "stable"
    }
  ];

  // Recent feedback
  const recentFeedback = [
    {
      id: 1,
      student: "John Doe",
      rating: 5,
      comment: "Excellent explanation of complex concepts",
      date: "2024-03-18"
    },
    {
      id: 2,
      student: "Jane Smith",
      rating: 4.5,
      comment: "Very helpful session on React hooks",
      date: "2024-03-17"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 mb-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Mentor!</h1>
              <p className="text-purple-100">Your impact today: {mentorStats.activeStudents} active students</p>
            </div>
            <div className="text-right">
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-sm">Average Rating</p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                  <span className="text-2xl font-bold">{mentorStats.averageRating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{mentorStats.totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>12% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Completed Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{mentorStats.completedSessions}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>8% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Teaching Hours</p>
                <p className="text-2xl font-bold text-gray-900">{mentorStats.totalHours}h</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>15% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Response Rate</p>
                <p className="text-2xl font-bold text-gray-900">{mentorStats.responseRate}%</p>
              </div>
              <MessageSquare className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>2% from last month</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                Upcoming Sessions
              </h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Next 24h
              </span>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map(session => (
                <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{session.student}</h3>
                      <p className="text-sm text-gray-500">{session.course} - {session.topic}</p>
                      <p className="text-xs text-gray-400">{session.date} at {session.time}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    session.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {session.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Student Progress */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                Student Progress
              </h2>
            </div>
            <div className="space-y-4">
              {studentProgress.map(student => (
                <div key={student.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-500">{student.course}</p>
                    </div>
                    <span className={`flex items-center ${
                      student.trend === 'up' ? 'text-green-500' : 'text-blue-500'
                    }`}>
                      {student.trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{student.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Last activity: {student.lastActivity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Feedback */}
          <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Recent Feedback
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentFeedback.map(feedback => (
                <div key={feedback.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{feedback.student}</h3>
                      <p className="text-xs text-gray-500">{feedback.date}</p>
                    </div>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-yellow-700">{feedback.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{feedback.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
