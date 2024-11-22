import React, { useState } from 'react';

const MentorshipView = () => {
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const availableSlots = [
    { id: 1, time: "9:00 AM - 10:00 AM", day: "Monday" },
    { id: 2, time: "2:00 PM - 3:00 PM", day: "Monday" },
    { id: 3, time: "11:00 AM - 12:00 PM", day: "Tuesday" },
    { id: 4, time: "4:00 PM - 5:00 PM", day: "Wednesday" },
    { id: 5, time: "10:00 AM - 11:00 AM", day: "Thursday" },
    { id: 6, time: "3:00 PM - 4:00 PM", day: "Friday" }
  ];

  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      expertise: "Full Stack Development",
      experience: "10 years",
      specialization: "React, Node.js, Cloud Architecture",
      rating: 4.9,
      sessions: 1250,
      availability: "Mon-Fri",
      languages: ["English", "Spanish"],
      price: "Free"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      expertise: "Data Science & AI",
      experience: "8 years",
      specialization: "Machine Learning, Python, Big Data",
      rating: 4.8,
      sessions: 980,
      availability: "Tue-Sat",
      languages: ["English", "Mandarin"],
      price: "Free"
    },
    {
      id: 3,
      name: "Emma Williams",
      expertise: "UI/UX Design",
      experience: "6 years",
      specialization: "User Research, Figma, Design Systems",
      rating: 4.7,
      sessions: 750,
      availability: "Mon-Thu",
      languages: ["English", "French"],
      price: "Free"
    }
  ];

  const handleBookSession = (slot) => {
    setSelectedSlot(slot);
    setShowBookingPopup(true);
  };

  const confirmBooking = () => {
    setBookingConfirmed(true);
    setShowBookingPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Mentors</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{mentor.name}</h2>
                      <p className="text-lg text-blue-600">{mentor.expertise}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="font-medium">{mentor.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{mentor.sessions} sessions</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="font-medium text-gray-900">Experience</h3>
                      <p className="text-gray-600">{mentor.experience}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Specialization</h3>
                      <p className="text-gray-600">{mentor.specialization}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Languages</h3>
                      <p className="text-gray-600">{mentor.languages.join(", ")}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Availability</h3>
                      <p className="text-gray-600">{mentor.availability}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium text-gray-900 mb-3">Available Time Slots</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() => handleBookSession(slot)}
                          className="px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          {slot.day} {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Popup */}
      {showBookingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Confirm Booking</h3>
            <p className="text-gray-600 mb-4">
              Would you like to book a mentorship session for:
            </p>
            <p className="font-medium mb-6">
              {selectedSlot.day} at {selectedSlot.time}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowBookingPopup(false);
                  setSelectedSlot(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Confirmation Popup */}
      {bookingConfirmed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-6">
                Your mentorship session has been scheduled for {selectedSlot?.day} at {selectedSlot?.time}
              </p>
              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  setSelectedSlot(null);
                }}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorshipView;
