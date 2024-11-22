import React, { useState } from 'react';
import { 
  Users, BookOpen, GraduationCap, Award, 
  AlertTriangle, CheckCircle, XCircle, FileText,
  MessageSquare, Clock, Bell
} from 'lucide-react';

const AdminCheckTable = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [pendingActions, setPendingActions] = useState([
    {
      id: 1,
      type: 'certificate',
      student: "John Doe",
      course: "React Development Masterclass",
      completionDate: "2024-11-18",
      status: "pending_certificate",
      grade: "A",
      score: 95
    },
    {
      id: 2,
      type: 'support',
      student: "Jane Smith",
      course: "Python for Data Science",
      issue: "Access problem to course materials",
      priority: "high",
      reportedDate: "2024-11-19"
    },
    {
      id: 3,
      type: 'review',
      student: "Mike Johnson",
      course: "Full Stack Development",
      submission: "Final Project",
      submissionDate: "2024-11-17",
      status: "pending_review"
    }
  ]);

  const recentIssues = [
    {
      id: 1,
      type: 'technical',
      student: "Alice Brown",
      course: "UI/UX Design",
      description: "Video playback issues",
      status: "open",
      priority: "medium"
    },
    {
      id: 2,
      type: 'access',
      student: "Bob Wilson",
      course: "Cybersecurity Fundamentals",
      description: "Cannot access course content",
      status: "in_progress",
      priority: "high"
    }
  ];

  const handleCertificateApproval = (student) => {
    setSelectedStudent(student);
    setShowCertificateModal(true);
  };

  const issueCertificate = () => {
    setPendingActions(pendingActions.filter(action => action.id !== selectedStudent.id));
    alert(`Certificate issued for ${selectedStudent.student}`);
    setShowCertificateModal(false);
    setSelectedStudent(null);
  };

  const handleIssueResolution = (issue) => {
    setPendingActions(pendingActions.map(action => 
      action.id === issue.id 
        ? { ...action, status: 'resolved' }
        : action
    ));
    alert(`Issue resolved for ${issue.student}`);
  };

  const handleReviewSubmission = (submission) => {
    setPendingActions(pendingActions.map(action => 
      action.id === submission.id 
        ? { ...action, status: 'reviewed' }
        : action
    ));
    alert(`Submission reviewed for ${submission.student}`);
  };

  const getStatusBadge = (status, priority) => {
    const badges = {
      pending_certificate: 'bg-yellow-100 text-yellow-800',
      pending_review: 'bg-blue-100 text-blue-800',
      open: 'bg-red-100 text-red-800',
      in_progress: 'bg-purple-100 text-purple-800',
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800'
    };
    return badges[status] || badges[priority] || 'bg-gray-100 text-gray-800';
  };

  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'success') => {
    const newNotification = {
      id: Date.now(),
      message,
      type
    };
    setNotifications([newNotification, ...notifications]);
    setTimeout(() => {
      setNotifications(notifications.filter(n => n.id !== newNotification.id));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Action Center</h1>
          <div className="flex items-center gap-4">
            <span className="relative">
              <Bell className="h-6 w-6 text-gray-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Certificates</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
              <FileText className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Open Issues</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Reviews</p>
                <p className="text-2xl font-bold text-gray-900">7</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Resolved Today</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Pending Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Actions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pendingActions.map((action) => (
                  <tr key={action.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {action.type === 'certificate' && <FileText className="h-5 w-5 text-yellow-500" />}
                      {action.type === 'support' && <MessageSquare className="h-5 w-5 text-red-500" />}
                      {action.type === 'review' && <Clock className="h-5 w-5 text-blue-500" />}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{action.student}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{action.course}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(action.status, action.priority)}`}>
                        {action.status?.replace('_', ' ').toUpperCase() || action.priority?.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {action.type === 'certificate' && (
                        <button
                          onClick={() => handleCertificateApproval(action)}
                          className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                          Issue Certificate
                        </button>
                      )}
                      {action.type === 'support' && (
                        <button
                          onClick={() => handleIssueResolution(action)}
                          className="text-red-500 hover:text-red-700 font-medium"
                        >
                          Resolve Issue
                        </button>
                      )}
                      {action.type === 'review' && (
                        <button
                          onClick={() => handleReviewSubmission(action)}
                          className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                          Review Submission
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certificate Modal */}
        {showCertificateModal && selectedStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold mb-4">Issue Certificate</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600">Student: {selectedStudent.student}</p>
                <p className="text-sm text-gray-600">Course: {selectedStudent.course}</p>
                <p className="text-sm text-gray-600">Grade: {selectedStudent.grade}</p>
                <p className="text-sm text-gray-600">Score: {selectedStudent.score}%</p>
                <p className="text-sm text-gray-600">Completion Date: {selectedStudent.completionDate}</p>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setShowCertificateModal(false);
                    setSelectedStudent(null);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={issueCertificate}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Approve & Issue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notification System */}
        <div className="fixed top-4 right-4 z-50">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className={`mb-2 p-4 rounded-lg shadow-lg ${
                notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              } text-white`}
            >
              {notification.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCheckTable;
