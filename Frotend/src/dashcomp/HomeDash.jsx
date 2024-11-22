import React, { useState, useEffect } from 'react';
import { 
  Users, BookOpen, GraduationCap, Award, 
  TrendingUp, Clock, CheckCircle, AlertTriangle,
  Activity, UserCheck, Star, Calendar, Mail, 
  BarChart2, ArrowUp, ArrowDown, FileText,
  DollarSign, Settings, Bell
} from 'lucide-react';

const HomeDash = () => {
  // Admin Dashboard Statistics
  const [dashboardStats, setDashboardStats] = useState({
    totalStudents: 1250,
    totalMentors: 25,
    activeCourses: 18,
    completionRate: 85,
    newEnrollments: 45,
    pendingCertificates: 12,
    activeIssues: 5,
    averageRating: 4.8,
    totalRevenue: 125000,
    monthlyGrowth: 12.5,
    studentRetention: 92,
    courseCompletion: 78
  });

  // Alerts and Notifications
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning',
      message: '5 students require certificate approval',
      time: '10 minutes ago'
    },
    {
      id: 2,
      type: 'info',
      message: 'New mentor application received',
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'success',
      message: 'Course completion rate increased by 5%',
      time: '2 hours ago'
    }
  ]);

  // Performance Metrics
  const performanceMetrics = [
    {
      title: 'Student Engagement',
      value: 85,
      trend: 'up',
      change: 12,
      color: 'blue'
    },
    {
      title: 'Course Completion',
      value: 78,
      trend: 'up',
      change: 8,
      color: 'green'
    },
    {
      title: 'Mentor Satisfaction',
      value: 92,
      trend: 'up',
      change: 5,
      color: 'purple'
    },
    {
      title: 'Platform Uptime',
      value: 99.9,
      trend: 'stable',
      change: 0.1,
      color: 'orange'
    }
  ];

  // Recent Activities
  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      type: 'enrollment',
      user: 'John Doe',
      action: 'enrolled in',
      target: 'React Development',
      time: '2 hours ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'certificate',
      user: 'Jane Smith',
      action: 'completed',
      target: 'Python Basics',
      time: '4 hours ago',
      status: 'pending'
    },
    {
      id: 3,
      type: 'support',
      user: 'Mike Johnson',
      action: 'reported',
      target: 'Technical Issue',
      time: '1 hour ago',
      status: 'warning'
    }
  ]);

  // Quick Actions
  const quickActions = [
    {
      title: 'Approve Certificates',
      icon: Award,
      color: 'text-yellow-500',
      count: 5
    },
    {
      title: 'Review Reports',
      icon: AlertTriangle,
      color: 'text-red-500',
      count: 3
    },
    {
      title: 'Mentor Applications',
      icon: UserCheck,
      color: 'text-blue-500',
      count: 8
    },
    {
      title: 'Course Updates',
      icon: BookOpen,
      color: 'text-green-500',
      count: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Vestine!</h1>
            <p className="text-gray-600">Here's what's happening in your admin dashboard today</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 relative">
              <Bell className="h-6 w-6 text-gray-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {alerts.length}
              </span>
            </button>
            <button className="p-2">
              <Settings className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Students */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Students</p>
                <h3 className="text-3xl font-bold">{dashboardStats.totalStudents}</h3>
              </div>
              <Users className="h-10 w-10 text-blue-100" />
            </div>
            <div className="mt-4 flex items-center text-sm text-blue-100">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>{dashboardStats.monthlyGrowth}% from last month</span>
            </div>
          </div>

          {/* Active Mentors */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Active Mentors</p>
                <h3 className="text-3xl font-bold">{dashboardStats.totalMentors}</h3>
              </div>
              <GraduationCap className="h-10 w-10 text-purple-100" />
            </div>
            <div className="mt-4 flex items-center text-sm text-purple-100">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>5% from last month</span>
            </div>
          </div>

          {/* Course Completion */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Course Completion</p>
                <h3 className="text-3xl font-bold">{dashboardStats.courseCompletion}%</h3>
              </div>
              <CheckCircle className="h-10 w-10 text-green-100" />
            </div>
            <div className="mt-4 flex items-center text-sm text-green-100">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>8% improvement</span>
            </div>
          </div>

          {/* Student Retention */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Student Retention</p>
                <h3 className="text-3xl font-bold">{dashboardStats.studentRetention}%</h3>
              </div>
              <Activity className="h-10 w-10 text-orange-100" />
            </div>
            <div className="mt-4 flex items-center text-sm text-orange-100">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>3% improvement</span>
            </div>
          </div>
        </div>

        {/* Quick Actions and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <action.icon className={`h-8 w-8 ${action.color} mr-3`} />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{action.title}</p>
                    <p className="text-sm text-gray-500">{action.count} pending</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h2>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg ${
                    alert.type === 'warning' ? 'bg-yellow-50' :
                    alert.type === 'info' ? 'bg-blue-50' : 'bg-green-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className={`text-sm ${
                      alert.type === 'warning' ? 'text-yellow-800' :
                      alert.type === 'info' ? 'text-blue-800' : 'text-green-800'
                    }`}>
                      {alert.message}
                    </p>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.status === 'success' ? 'bg-green-100' :
                    activity.status === 'pending' ? 'bg-yellow-100' : 'bg-red-100'
                  }`}>
                    {activity.type === 'enrollment' && <UserCheck className={`h-5 w-5 ${
                      activity.status === 'success' ? 'text-green-600' :
                      activity.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                    }`} />}
                    {activity.type === 'certificate' && <Award className={`h-5 w-5 ${
                      activity.status === 'success' ? 'text-green-600' :
                      activity.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                    }`} />}
                    {activity.type === 'support' && <AlertTriangle className={`h-5 w-5 ${
                      activity.status === 'success' ? 'text-green-600' :
                      activity.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                    }`} />}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.user} {activity.action} {activity.target}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-700 text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
