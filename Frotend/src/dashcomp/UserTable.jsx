import React, { useState } from 'react';
import { Search, Filter, Download, UserCheck, BookOpen, Clock } from 'lucide-react';

const UserTable = () => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProgress, setFilterProgress] = useState('all');

  const students = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      joinDate: "2024-11-10",
      lastLogin: "2024-11-18 09:30 AM",
      enrolledCourses: [
        {
          name: "React Development Masterclass",
          progress: 100,
          status: "Completed",
          completionDate: "2024-11-18"
        },
        {
          name: "HTML and CSS for Beginners",
          progress: 100,
          status: "Completed",
          completionDate: "2024-11-10"
        }
      ],
      status: "Active",
      totalProgress: 85,
      completedCourses: 2,
      ongoingCourses: 0
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      joinDate: "2024-11-12",
      lastLogin: "2024-11-18 10:15 AM",
      enrolledCourses: [
        {
          name: "Python for Data Science",
          progress: 60,
          status: "In Progress",
          completionDate: "-"
        }
      ],
      status: "Active",
      totalProgress: 60,
      completedCourses: 1,
      ongoingCourses: 0
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@example.com",
      joinDate: "2024-11-15",
      lastLogin: "2024-11-17 03:45 PM",
      enrolledCourses: [
        {
          name: "Full Stack Web Development",
          progress: 30,
          status: "In Progress",
          completionDate: "-"
        },
        {
          name: "UI/UX Design Masterclass",
          progress: 75,
          status: "In Progress",
          completionDate: "-"
        }
      ],
      status: "Active",
      totalProgress: 75,
      completedCourses: 1,
      ongoingCourses: 1
    }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStatusBadge = (status) => {
    const colors = {
      Active: 'bg-green-100 text-green-800',
      Inactive: 'bg-gray-100 text-gray-800',
      'On Leave': 'bg-yellow-100 text-yellow-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) ||
                         student.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    const matchesProgress = filterProgress === 'all' || 
                          (filterProgress === 'completed' && student.totalProgress === 100) ||
                          (filterProgress === 'ongoing' && student.totalProgress < 100);
    return matchesSearch && matchesStatus && matchesProgress;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Student Management Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">{students.length}</p>
                </div>
                <UserCheck className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Courses</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {students.reduce((acc, student) => acc + student.ongoingCourses, 0)}
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Completed Courses</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {students.reduce((acc, student) => acc + student.completedCourses, 0)}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search students..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterProgress}
                onChange={(e) => setFilterProgress(e.target.value)}
              >
                <option value="all">All Progress</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Student Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex-grow h-2 bg-gray-200 rounded-full">
                            <div
                              className={`h-2 rounded-full ${getProgressColor(student.totalProgress)}`}
                              style={{ width: `${student.totalProgress}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-500">{student.totalProgress}%</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {student.completedCourses} completed • {student.ongoingCourses} ongoing
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {student.lastLogin}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <button className="text-blue-500 hover:text-blue-700">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
