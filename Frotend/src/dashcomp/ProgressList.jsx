import React, { useState } from 'react';

const ProgressList = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      courseName: "React Development Masterclass",
      date: "2024-11-18",
      mentorName: "Sarah Johnson",
      rating: "Excellent",
      feedback: "Excellent work on the React components! Your code is well-structured and you've implemented the hooks pattern effectively. Keep up the great work with state management.",
      improvements: "Consider adding more comments to complex logic sections.",
      status: "positive",
      messages: []
    },
    {
      id: 2,
      courseName: "HTML and CSS for Beginners",
      date: "2024-11-10",
      mentorName: "Alice Green",
      rating: "Good",
      feedback: "Your website layout is clean and responsive. Good use of flexbox and grid systems.",
      improvements: "Work on optimizing CSS selectors and consider using more semantic HTML elements.",
      status: "positive",
      messages: []
    },
    {
      id: 3,
      courseName: "Python for Data Science",
      date: "2024-11-20",
      mentorName: "Michael Chen",
      rating: "Needs Improvement",
      feedback: "You're making progress with Python basics, but need more practice with data structures.",
      improvements: "Focus on understanding list comprehensions and pandas DataFrame operations.",
      status: "warning",
      messages: []
    }
  ]);

  const [replyText, setReplyText] = useState('');
  const [activeChat, setActiveChat] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'positive':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const handleSendReply = (feedbackId) => {
    if (replyText.trim()) {
      setFeedbacks(feedbacks.map(feedback => {
        if (feedback.id === feedbackId) {
          return {
            ...feedback,
            messages: [...feedback.messages, {
              id: feedback.messages.length + 1,
              text: replyText,
              sender: 'student',
              timestamp: new Date().toLocaleString()
            }]
          };
        }
        return feedback;
      }));
      setReplyText('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Mentor Feedback</h1>
        
        <div className="space-y-6">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{feedback.courseName}</h2>
                    <p className="text-gray-600">Mentor: {feedback.mentorName}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(feedback.status)}`}>
                      {feedback.rating}
                    </span>
                    <span className="text-sm text-gray-500 mt-1">{feedback.date}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Feedback</h3>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-gray-700">{feedback.feedback}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Areas for Improvement</h3>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <p className="text-gray-700">{feedback.improvements}</p>
                    </div>
                  </div>

                  {/* Chat Section */}
                  <div className="mt-6">
                    <button
                      onClick={() => setActiveChat(activeChat === feedback.id ? null : feedback.id)}
                      className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-2"
                    >
                      {activeChat === feedback.id ? 'Hide Chat' : 'Reply to Mentor'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </button>

                    {activeChat === feedback.id && (
                      <div className="mt-4">
                        {/* Messages */}
                        <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
                          {feedback.messages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${message.sender === 'student' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div className={`max-w-[80%] rounded-lg p-3 ${
                                message.sender === 'student' 
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                <p>{message.text}</p>
                                <span className="text-xs opacity-75 mt-1 block">
                                  {message.timestamp}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Reply Input */}
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Type your reply..."
                            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleSendReply(feedback.id);
                              }
                            }}
                          />
                          <button
                            onClick={() => handleSendReply(feedback.id)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressList;
