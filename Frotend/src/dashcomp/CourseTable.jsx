import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, AlertCircle, CheckCircle, X, Upload } from 'lucide-react';

const CourseTable = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      instructor: "Sarah Johnson",
      level: "Beginner",
      duration: "6 weeks",
      status: "Active",
      lastUpdated: "2024-03-20"
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      instructor: "Michael Chen",
      level: "Beginner",
      duration: "8 weeks",
      status: "Active",
      lastUpdated: "2024-03-19"
    },
    {
      id: 3,
      title: "React Development",
      instructor: "Emma Wilson",
      level: "Intermediate",
      duration: "10 weeks",
      status: "Active",
      lastUpdated: "2024-03-18"
    },
    {
      id: 4,
      title: "Node.js Backend",
      instructor: "David Brown",
      level: "Intermediate",
      duration: "8 weeks",
      status: "Active",
      lastUpdated: "2024-03-17"
    },
    {
      id: 5,
      title: "Python Programming",
      instructor: "Lisa Anderson",
      level: "Beginner",
      duration: "8 weeks",
      status: "Active",
      lastUpdated: "2024-03-16"
    }
  ]);

  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: '',
    level: 'Beginner',
    duration: '',
    status: 'Active',
    image: null
  });

  const handleUpdateCourse = () => {
    if (!selectedCourse.title || !selectedCourse.instructor || !selectedCourse.duration) {
      alert('Please fill in all required fields');
      return;
    }

    setCourses(courses.map(course => 
      course.id === selectedCourse.id ? 
      { ...selectedCourse, lastUpdated: new Date().toISOString().split('T')[0] } : 
      course
    ));
    setIsEditing(false);
    setSelectedCourse(null);
  };

  const handleDeleteCourse = () => {
    setCourses(courses.filter(course => course.id !== selectedCourse.id));
    setShowDeleteModal(false);
    setSelectedCourse(null);
  };

  const handleAddCourse = () => {
    // Validate required fields
    if (!newCourse.title || !newCourse.instructor || !newCourse.duration) {
      alert('Please fill in all required fields');
      return;
    }

    // Create new course object
    const courseToAdd = {
      id: courses.length + 1,
      ...newCourse,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    // Add course to list
    setCourses([...courses, courseToAdd]);

    // Reset form
    setNewCourse({
      title: '',
      instructor: '',
      level: 'Beginner',
      duration: '',
      status: 'Active'
    });

    // Close modal
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Course Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Plus className="h-4 w-4" />
            Add New Course
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Course Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Level & Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    <div className="text-sm text-gray-500">Last updated: {course.lastUpdated}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {course.instructor}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {course.level}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">{course.duration}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      course.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setSelectedCourse(course);
                          setIsEditing(true);
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedCourse(course);
                          setShowDeleteModal(true);
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Course Modal */}
      {(showAddModal || isEditing) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">
                  {isEditing ? 'Edit Course' : 'Add New Course'}
                </h3>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setIsEditing(false);
                    setSelectedCourse(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={isEditing ? selectedCourse.title : newCourse.title}
                    onChange={(e) => {
                      if (isEditing) {
                        setSelectedCourse({ ...selectedCourse, title: e.target.value });
                      } else {
                        setNewCourse({ ...newCourse, title: e.target.value });
                      }
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Instructor
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={isEditing ? selectedCourse.instructor : newCourse.instructor}
                      onChange={(e) => {
                        if (isEditing) {
                          setSelectedCourse({ ...selectedCourse, instructor: e.target.value });
                        } else {
                          setNewCourse({ ...newCourse, instructor: e.target.value });
                        }
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={isEditing ? selectedCourse.duration : newCourse.duration}
                      onChange={(e) => {
                        if (isEditing) {
                          setSelectedCourse({ ...selectedCourse, duration: e.target.value });
                        } else {
                          setNewCourse({ ...newCourse, duration: e.target.value });
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Level
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={isEditing ? selectedCourse.level : newCourse.level}
                      onChange={(e) => {
                        if (isEditing) {
                          setSelectedCourse({ ...selectedCourse, level: e.target.value });
                        } else {
                          setNewCourse({ ...newCourse, level: e.target.value });
                        }
                      }}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={isEditing ? selectedCourse.status : newCourse.status}
                      onChange={(e) => {
                        if (isEditing) {
                          setSelectedCourse({ ...selectedCourse, status: e.target.value });
                        } else {
                          setNewCourse({ ...newCourse, status: e.target.value });
                        }
                      }}
                    >
                      <option value="Active">Active</option>
                      <option value="Draft">Draft</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload a file</span>
                          <input type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setIsEditing(false);
                    setSelectedCourse(null);
                  }}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={isEditing ? handleUpdateCourse : handleAddCourse}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {isEditing ? 'Update Course' : 'Add Course'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Delete Course</h3>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to delete "{selectedCourse?.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedCourse(null);
                }}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteCourse}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseTable;
