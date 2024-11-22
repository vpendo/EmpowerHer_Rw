import React, { useState } from 'react';

// Define available topics
const TOPICS = {
  CAREER: 'Career Coaching',
  LEADERSHIP: 'Leadership',
  WEBSITE: 'Creating Website',
  SOFTWARE: 'Software Development'
};

// Sample schedule data with specific topics
const initialSchedule = [
  {
    id: 1,
    studentName: 'Mutoni Jacky',
    topic: TOPICS.CAREER,
    date: '2024-11-01',
    time: '10:00 AM',
    status: null
  },
  {
    id: 2,
    studentName: 'Pascaline Jane',
    topic: TOPICS.LEADERSHIP,
    date: '2024-11-02',
    time: '11:00 AM',
    status: null
  },
  {
    id: 3,
    studentName: 'Asifiwe',
    topic: TOPICS.WEBSITE,
    date: '2024-11-03',
    time: '1:00 PM',
    status: null
  },
  {
    id: 4,
    studentName: 'John Doe',
    topic: TOPICS.SOFTWARE,
    date: '2024-11-04',
    time: '2:00 PM',
    status: null
  }
];

// Get topic-specific badge color
const getTopicColor = (topic) => {
  switch(topic) {
    case TOPICS.CAREER:
      return 'bg-blue-100 text-blue-800';
    case TOPICS.LEADERSHIP:
      return 'bg-purple-100 text-purple-800';
    case TOPICS.WEBSITE:
      return 'bg-green-100 text-green-800';
    case TOPICS.SOFTWARE:
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

function ScheduleList() {
  const [schedule, setSchedule] = useState(initialSchedule);

  const handleAction = (id, action) => {
    setSchedule(prevSchedule =>
      prevSchedule.map(session =>
        session.id === id ? { ...session, status: action } : session
      )
    );
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'accept':
        return 'text-green-600';
      case 'decline':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mentorship Schedule</h2>
      
      {/* Topics Legend */}
      <div className="mb-4 flex gap-4 flex-wrap">
        {Object.values(TOPICS).map(topic => (
          <span 
            key={topic}
            className={`px-3 py-1 rounded-full text-sm font-medium ${getTopicColor(topic)}`}
          >
            {topic}
          </span>
        ))}
      </div>

      <table className="min-w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border border-gray-300">Student Name</th>
            <th className="p-4 border border-gray-300">Topic to Discuss</th>
            <th className="p-4 border border-gray-300">Date</th>
            <th className="p-4 border border-gray-300">Time</th>
            <th className="p-4 border border-gray-300">Action</th>
            <th className="p-4 border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((session) => (
            <tr key={session.id} className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300">{session.studentName}</td>
              <td className="p-4 border border-gray-300">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTopicColor(session.topic)}`}>
                  {session.topic}
                </span>
              </td>
              <td className="p-4 border border-gray-300">{session.date}</td>
              <td className="p-4 border border-gray-300">{session.time}</td>
              <td className="p-4 border border-gray-300">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAction(session.id, 'accept')}
                    className={`px-4 py-2 rounded-md text-white font-medium
                      ${session.status === null 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-gray-300 cursor-not-allowed'
                      }`}
                    disabled={session.status !== null}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleAction(session.id, 'decline')}
                    className={`px-4 py-2 rounded-md text-white font-medium
                      ${session.status === null 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-gray-300 cursor-not-allowed'
                      }`}
                    disabled={session.status !== null}
                  >
                    Decline
                  </button>
                </div>
              </td>
              <td className={`p-4 border border-gray-300 ${getStatusColor(session.status)} font-medium`}>
                {session.status ? session.status.charAt(0).toUpperCase() + session.status.slice(1) : 'Pending'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleList;