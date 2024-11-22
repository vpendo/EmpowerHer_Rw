import React, { useState } from 'react';
import { Search, Download, UserCheck, BookOpen, Star, X, Calendar, Mail, Globe, Award } from 'lucide-react';

const MentorTable = () => {
  const [search, setSearch] = useState('');
  const [filterExpertise, setFilterExpertise] = useState('all');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const mentors = [
    {
      id: "MT001",
      name: "Pendo Vestine",
      email: "pendo.v@example.com",
      expertise: "Full Stack Development",
      experience: "10 years",
      coursesOffered: [
        "React Development Masterclass",
        "Full Stack Web Development",
        "HTML and CSS for Beginners"
      ],
      specialization: "React, Node.js, JavaScript",
      rating: 4.9,
      totalSessions: 1250,
      availability: "Mon-Fri",
      status: "Active",
      languages: ["English", "Kinyarwanda"]
    },
    {
      id: "MT002",
      name: "Pascaline Luicide",
      email: "pascaline.l@example.com",
      expertise: "Data Science & AI",
      experience: "8 years",
      coursesOffered: [
        "Python for Data Science",
        "Machine Learning Basics"
      ],
      specialization: "Python, Machine Learning, Data Analysis",
      rating: 4.8,
      totalSessions: 980,
      availability: "Tue-Sat",
      status: "Active",
      languages: ["English", "Kinyarwanda"]
    },
    {
      id: "MT003",
      name: "Jean Paul",
      email: "jean.p@example.com",
      expertise: "UI/UX Design",
      experience: "6 years",
      coursesOffered: [
        "UI/UX Design Masterclass",
        "Web Design Fundamentals"
      ],
      specialization: "Figma, User Research, Design Systems",
      rating: 4.7,
      totalSessions: 750,
      availability: "Mon-Thu",
      status: "Active",
      languages: ["English", "Kinyarwanda", "French"]
    }
  ];

  const getStatusBadge = (status) => {
    const colors = {
      Active: 'bg-green-100 text-green-800',
      Inactive: 'bg-gray-100 text-gray-800',
      'On Leave': 'bg-yellow-100 text-yellow-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.email.toLowerCase().includes(search.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(search.toLowerCase());
    const matchesExpertise = filterExpertise === 'all' || mentor.expertise === filterExpertise;
    return matchesSearch && matchesExpertise;
  });

  const handleViewDetails = (mentor) => {
    setSelectedMentor(mentor);
    setShowDetailsModal(true);
  };

  const MentorDetailsModal = () => {
    if (!selectedMentor) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedMentor.name}</h2>
                <p className="text-blue-600">{selectedMentor.expertise}</p>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-center h-32 w-32 rounded-full bg-blue-100 mx-auto mb-4">
                    <span className="text-4xl font-bold text-blue-600">
                      {selectedMentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-bold text-lg">{selectedMentor.rating}</span>
                    </div>
                    <p className="text-gray-600">{selectedMentor.sessions} sessions completed</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-gray-600">{selectedMentor.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-gray-600">{selectedMentor.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-gray-600">{selectedMentor.availability}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Languages</p>
                      <p className="text-gray-600">{selectedMentor.languages.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Specialization</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">{selectedMentor.specialization}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Courses Offered</h3>
                  <div className="space-y-2">
                    {selectedMentor.coursesOffered.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                        <BookOpen className="h-4 w-4 text-blue-500" />
                        <span className="text-gray-700">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Mentor Management Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Mentors</p>
                  <p className="text-2xl font-bold text-gray-900">{mentors.length}</p>
                </div>
                <UserCheck className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Courses Covered</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {mentors.reduce((acc, mentor) => acc + mentor.coursesOffered.length, 0)}
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Average Rating</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {(mentors.reduce((acc, mentor) => acc + mentor.rating, 0) / mentors.length).toFixed(1)}
                  </p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
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
                placeholder="Search mentors..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterExpertise}
                onChange={(e) => setFilterExpertise(e.target.value)}
              >
                <option value="all">All Expertise</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Data Science & AI">Data Science & AI</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Mentor Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mentor Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expertise & Experience
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Courses & Sessions
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
                {filteredMentors.map((mentor) => (
                  <tr key={mentor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {mentor.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{mentor.name}</div>
                          <div className="text-sm text-gray-500">{mentor.email}</div>
                          <div className="text-xs text-gray-500">ID: {mentor.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 font-medium">{mentor.expertise}</div>
                      <div className="text-sm text-gray-500">{mentor.experience}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Specialization: {mentor.specialization}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {mentor.coursesOffered.map((course, idx) => (
                          <span key={idx} className="inline-block bg-blue-50 text-blue-700 rounded px-2 py-1 text-xs mr-1 mb-1">
                            {course}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Total Sessions: {mentor.totalSessions}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(mentor.status)}`}>
                        {mentor.status}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Available: {mentor.availability}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <button 
                        onClick={() => handleViewDetails(mentor)}
                        className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-2"
                      >
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {showDetailsModal && <MentorDetailsModal />}
    </div>
  );
};

export default MentorTable;
