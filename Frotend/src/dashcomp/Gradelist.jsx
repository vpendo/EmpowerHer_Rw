import React from 'react';

const Gradelist = () => {
  // This would typically come from a logged-in user's context/state
  const studentCourses = [
    {
      name: "React Development Masterclass",
      grade: "A",
      score: 92,
      status: "Completed",
      submissionDate: "2024-11-18",
      progress: 100
    },
    {
      name: "HTML and CSS for Beginners",
      grade: "A-",
      score: 88,
      status: "Completed",
      submissionDate: "2024-11-10",
      progress: 100
    },
    {
      name: "Python for Data Science",
      grade: "B+",
      score: 85,
      status: "In Progress",
      submissionDate: "-",
      progress: 60
    },
    {
      name: "Full Stack Web Development",
      grade: "In Progress",
      score: "-",
      status: "In Progress",
      submissionDate: "-",
      progress: 30
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">My Course Progress</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Completion Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentCourses.map((course, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {course.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 w-32">
                          <div 
                            className="bg-blue-500 h-2.5 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        course.status === 'Completed' 
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {course.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.score !== "-" ? `${course.score}%` : "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        course.status === 'Completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.submissionDate}
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

export default Gradelist;
