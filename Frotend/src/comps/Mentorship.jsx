import React from 'react';

export const Mentorship = () => {
  const mentorships = [
    {
      id: 1,
      image: 'https://www.packard.org/wp-content/uploads/2023/12/https___www.imagesofempowerment.org_wp-content_uploads_D_PA-1799312_347-scaled-1-1536x1024.jpg',
      title: 'Career Coaching',
      description: 'Get guidance to help you navigate your career path and achieve your goals.',
    },
    {
      id: 3,
      image: 'https://www.packard.org/wp-content/uploads/2023/12/https___www.imagesofempowerment.org_wp-content_uploads_D_PA-1799312_347-scaled-1-1536x1024.jpg',
      title: 'Leadership Development',
      description: 'Become a more effective leader with personalized leadership coaching.',
    },
    {
      id: 4,
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGr-gwAUXU3Vg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727685614454?e=2147483647&v=beta&t=SaHv9P3D83kSRNSw7vVaouv39Yd4j7V8l8TsWcUJ3Nk',
      title: 'Creating Websites',
      description: 'Learn how to design and develop websites from scratch with hands-on mentorship.',
    },
    {
      id: 5,
      image: 'data:image/jpeg;base64,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',
      title: 'Software Development Courses',
      description: 'Gain in-depth knowledge of software development through structured courses.',
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mentorship Programs</h2>

        {/* Responsive 4-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentorships.map((mentorship) => (
            <div
              key={mentorship.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img src={mentorship.image} alt={mentorship.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{mentorship.title}</h3>
                <p className="text-gray-600 mb-4">{mentorship.description}</p>
                <div className="flex justify-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
