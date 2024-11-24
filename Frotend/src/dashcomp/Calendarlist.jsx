import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// Initial data
const initialStudents = [
  { id: 1, name: 'Nelly' },
  { id: 2, name: 'Uwase' },
  { id: 3, name: 'Kelly' },
  { id: 4, name: 'Kethia' },
  { id: 5, name: 'Aline' },
];

const initialSessions = [
  {
    id: 1,
    studentName: 'Nelly',
    date: '2024-11-01',
    startTime: '10:00',
    endTime: '11:00',
    duration: '1 hour'
  },
  {
    id: 2,
    studentName: 'Uwase',
    date: '2024-11-01',
    startTime: '11:00',
    endTime: '12:00',
    duration: '1 hour'
  },
  {
    id: 3,
    studentName: 'Kelly',
    date: '2024-11-02',
    startTime: '09:00',
    endTime: '10:00',
    duration: '1 hour'
  },
  {
    id: 4,
    studentName: 'Kethia',
    date: '2024-11-02',
    startTime: '10:00',
    endTime: '11:30',
    duration: '1 hour 30 minutes'
  },
  {
    id: 5,
    studentName: 'Aline',
    date: '2024-11-03',
    startTime: '14:00',
    endTime: '15:00',
    duration: '1 hour'
  }
];

const CalendarList = () => {
  const [sessions, setSessions] = useState(initialSessions);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSession, setEditingSession] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Calculate duration between start and end time
  const calculateDuration = (startTime, endTime) => {
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    const diff = (end - start) / (1000 * 60); // Duration in minutes
    if (diff < 60) {
      return `${diff} minutes`;
    }
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours} hour${hours !== 1 ? 's' : ''}${minutes ? ` ${minutes} minutes` : ''}`;
  };

  // Handle input changes for editing session
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingSession(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle edit form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const duration = calculateDuration(editingSession.startTime, editingSession.endTime);
    
    setSessions(prev => prev.map(session => 
      session.id === editingSession.id 
        ? { ...editingSession, duration } 
        : session
    ));
    setIsEditing(false);
    setEditingSession(null);
    setShowForm(false);
  };

  // Edit session
  const handleEdit = (session) => {
    setIsEditing(true);
    setEditingSession(session);
    setShowForm(true);
  };

  // Delete session
  const handleDelete = (id) => {
    setSessions(prev => prev.filter(session => session.id !== id));
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Calendar Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        {showForm && (
          <form onSubmit={handleSubmit} className="mb-6 space-y-4 bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Student Name</label>
                <Input
                  name="studentName"
                  value={editingSession.studentName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <Input
                  type="date"
                  name="date"
                  value={editingSession.date}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Start Time</label>
                <Input
                  type="time"
                  name="startTime"
                  value={editingSession.startTime}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">End Time</label>
                <Input
                  type="time"
                  name="endTime"
                  value={editingSession.endTime}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                Update Session
              </Button>
              <Button 
                type="button" 
                onClick={() => {
                  setShowForm(false);
                  setIsEditing(false);
                  setEditingSession(null);
                }}
                className="bg-gray-500 hover:bg-gray-600"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border text-left">Student Name</th>
                <th className="p-2 border text-left">Date</th>
                <th className="p-2 border text-left">Start Time</th>
                <th className="p-2 border text-left">End Time</th>
                <th className="p-2 border text-left">Duration</th>
                <th className="p-2 border text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{session.studentName}</td>
                  <td className="p-2 border">{session.date}</td>
                  <td className="p-2 border">{session.startTime}</td>
                  <td className="p-2 border">{session.endTime}</td>
                  <td className="p-2 border">{session.duration}</td>
                  <td className="p-2 border">
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleEdit(session)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-sm px-2 py-1"
                      >
                        Edit
                      </Button>
                      <Button 
                        onClick={() => handleDelete(session.id)}
                        className="bg-red-500 hover:bg-red-600 text-sm px-2 py-1"
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarList;
