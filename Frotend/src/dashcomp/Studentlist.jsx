import React from 'react';

// Data for students
const students = [
  {
    id: 1,
    name: 'Mutoni Jacky',
    year: 'Sophomore',
    description: 'Exploring different fields in technology and interested in learning about career options in software development.',
    interests: 'Software Development, Career Guidance, Web Development',
    sessionsBooked: 2,
  },
  {
    id: 2,
    name: 'Pascaline Jane',
    year: 'Junior',
    description: 'Passionate about robotics and researching opportunities to study robotics in Rwanda and beyond.',
    interests: 'Robotics, Artificial Intelligence, Machine Learning',
    sessionsBooked: 4,
  },
  {
    id: 3,
    name: 'Asifiwe',
    year: 'Senior',
    description: 'Building a strong foundation in programming to explore tech-based career paths.',
    interests: 'Programming, Career Development, Cybersecurity',
    sessionsBooked: 3,
  },
];

// StudentList component
function StudentList() {
  return (
    <div className="bg-gray-50 text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Student completed Mentorship</h2>
      <table className="min-w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-4 border border-gray-300">ID</th>
            <th className="p-4 border border-gray-300">Name</th>
            <th className="p-4 border border-gray-300">Year</th>
            <th className="p-4 border border-gray-300">Description</th>
            <th className="p-4 border border-gray-300">Interests</th>
            <th className="p-4 border border-gray-300">Sessions Booked</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={student.id}
              className={`${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } hover:bg-blue-100 transition-colors`}
            >
              <td className="p-4 border border-gray-300 text-center">{student.id}</td>
              <td className="p-4 border border-gray-300">{student.name}</td>
              <td className="p-4 border border-gray-300">{student.year}</td>
              <td className="p-4 border border-gray-300">{student.description}</td>
              <td className="p-4 border border-gray-300">{student.interests}</td>
              <td className="p-4 border border-gray-300 text-center">{student.sessionsBooked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
