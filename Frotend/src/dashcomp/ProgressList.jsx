import React, { useState } from 'react';

// Sample data for the progress list
const progressList = [
  {
    studentName: 'Mutoni Jacky',
    mentorName: 'John Doe',
    enrolledCourses: ['Software Development', 'Web Development'],
  },
  {
    studentName: 'Pascaline Jane',
    mentorName: 'Jane Smith',
    enrolledCourses: ['Robotics', 'Artificial Intelligence'],
  },
  {
    studentName: 'Asifiwe',
    mentorName: 'Michael Brown',
    enrolledCourses: ['Cybersecurity', 'Data Science'],
  },
];

// ChatComponent for interacting with mentors
function ChatComponent({ studentName, mentorName, onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  // Handle sending a message
  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'Student', text: currentMessage },
      ]);
      setCurrentMessage('');
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">
        Chat with {mentorName} (Mentor for {studentName})
      </h2>
      <div className="w-full max-w-md h-64 border border-gray-300 rounded-lg p-4 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 mb-2 ${
                msg.sender === 'Student'
                  ? 'text-right text-blue-700'
                  : 'text-left text-green-700'
              }`}
            >
              <span className="block font-bold">{msg.sender}:</span>
              <span>{msg.text}</span>
            </div>
          ))
        )}
      </div>
      <div className="w-full max-w-md mt-4 flex">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
      <button
        onClick={onClose}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Close Chat
      </button>
    </div>
  );
}

// Main component
function ProgressList() {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Student-Mentor Chat</h2>
      <table className="min-w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border border-gray-300">Student Name</th>
            <th className="p-4 border border-gray-300">Mentor Name</th>
            <th className="p-4 border border-gray-300">Enrolled Courses</th>
            <th className="p-4 border border-gray-300">Chat</th>
          </tr>
        </thead>
        <tbody>
          {progressList.map((student, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <td className="p-4 border border-gray-300">{student.studentName}</td>
              <td className="p-4 border border-gray-300">{student.mentorName}</td>
              <td className="p-4 border border-gray-300">
                {student.enrolledCourses.join(', ')}
              </td>
              <td className="p-4 border border-gray-300">
                <button
                  onClick={() => setActiveChat(student)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Chat with Mentor
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {activeChat && (
        <ChatComponent
          studentName={activeChat.studentName}
          mentorName={activeChat.mentorName}
          onClose={() => setActiveChat(null)}
        />
      )}
    </div>
  );
}

export default ProgressList;
