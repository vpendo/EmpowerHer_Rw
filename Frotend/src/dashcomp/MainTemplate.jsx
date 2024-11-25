import React, { useState } from 'react';
import {
  FiMenu, FiX, FiChevronDown, FiChevronRight, FiPackage,
  FiHome, FiUsers, FiLogOut, FiShoppingCart,
  FiDollarSign, FiPieChart, FiLayers, FiShield, FiMapPin
} from 'react-icons/fi';
import HomeDash from './HomeDash';
import StudentDashboard from './StudentDashboard';
import MentorDashboard from './MentorDashboard';
import { useTheme } from '../App';
import Courses from './Courses';
import Mentors from './Mentors'; 
import Studentlist from './Studentlist';
import ScheduleList from './ScheduleList';
import CalendarList from './Calendarlist';
import GradeList from './Gradelist';
import ProgressList from './ProgressList';
import UserTable from './UserTable';
import MentorTable from './MentorTable';
import CourseTable from './CourseTable';
import Settings from './Settings';
import AdminCheckTable from './AdminCheckTable';



const DashboardLayout = () => {
  const { setIsAdmin } = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(localStorage.getItem('ViewPanel') || 'dashboard');

  // Define available roles and set the default
  const availableRoles = ['Student', 'mentor', 'admin']; // Add more roles as needed
  const [currentRole, setCurrentRole] = useState(
    localStorage.getItem("userRole")?.toLowerCase() || 'student'
  );

  // Navigation arrays for each role type
  const userNavigation = [
    { name: 'Dashboard', href: '#', icon: FiHome, id: 'dashboard' },
    { name: 'Course', href: '#', icon: FiShoppingCart, id: 'Course' },
    { name: 'Mentorship', href: '#', icon: FiMapPin, id: 'Mentors' },
    { name: 'Grade', href: '#', icon: FiPackage, id: 'grade' },
    { name: 'Feedback', href: '#', icon: FiLayers, id: 'Feedback' },

  ];

  const mentorsNavigation = [
    { name: 'Dashboard', href: '#', icon: FiHome, id: 'dashboard' },
    
    { name: 'Student', href: '#', icon: FiUsers, id: 'Student' },
    { name: 'Scheledule', href: '#', icon: FiDollarSign, id: 'Scheledule' },
    { name: 'Calendar', href: '#', icon: FiPieChart, id: 'Calendar' },
    
  ];

  const adminNavigation = [
    { name: 'Dashboard', href: '#', icon: FiHome, id: 'dashboard' },
    { name: 'User', href: '#', icon: FiUsers, id: 'User' },
    { name: 'Mentor', href: '#', icon: FiDollarSign, id: 'Mentor' },
    { name: 'CourseTable', href: '#', icon: FiPackage, id: 'CourseTable' },
    { name: 'Checking', href: '#', icon: FiPieChart, id: 'Checking' },
    { name: 'Settings', href: '#', icon: FiLayers, id: 'Settings' },
  ];

  // Determine the current navigation based on active role
  const navigation = currentRole === "admin"
    ? adminNavigation
    : currentRole === "mentor"
    ? mentorsNavigation
    : userNavigation;

  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    localStorage.setItem("userRole", newRole); // Persist the role
    setIsAdmin(newRole === 'admin');
    setActiveLink('dashboard'); // Reset to dashboard on role change
    setProfileOpen(false); // Close profile menu
  };

  const handleLogout = () => {
    localStorage.removeItem('ViewPanel');
    localStorage.removeItem("userRole");
    localStorage.removeItem("UserInfo");
    window.location.href = "";
  };

  console.log("Current role:", currentRole); // This will help debug role issues

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed w-80 max-lg:w-1/2 bg-white h-screen shadow-sm transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <FiShield className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-xl font-bold text-blue-600">
              {currentRole === "admin" ? (
                <> <span className="text-red-700">Admin</span> <span>Dashboard</span> </>
              ) : currentRole === "mentor" ? (
                <> <span className="text-green-700">Mentor</span> <span>Dashboard</span> </>
              ) : (
                <> <span className="text-red-700">Student</span> <span>Dashboard</span> </>
              )}
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md lg:hidden hover:bg-gray-100"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => { setActiveLink(item.id); localStorage.setItem('ViewPanel', item.id); }}
              className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${activeLink === item.id ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
              {activeLink === item.id && (
                <FiChevronRight className="w-5 h-5 ml-auto" />
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'w-full' : 'w-full'}`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md lg:hidden hover:bg-gray-100"
            >
              <FiMenu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4 ml-auto">
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                    {/* Placeholder for avatar */}
                  </div>
                  <FiChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    {availableRoles.length > 2 ? (
                      availableRoles.map((role) => (
                        <button
                          key={role}
                          onClick={() => handleRoleChange(role)}
                          className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${currentRole === role ? 'bg-blue-100 font-semibold' : ''}`}
                        >
                          <FiShield className="w-4 h-4 mr-3" />
                          Switch to {role.charAt(0).toUpperCase() + role.slice(1)}
                        </button>
                      ))
                    ) : (
                      <button
                        onClick={() => handleRoleChange(currentRole === 'user' ? 'mentor' : 'user')}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <FiShield className="w-4 h-4 mr-3" />
                        Switch to {currentRole === 'user' ? 'Mentor' : 'User'}
                      </button>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FiLogOut className="w-4 h-4 mr-3" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {activeLink === "dashboard" && (
            currentRole === 'admin' ? (
              <HomeDash isAdmin={true} />
            ) : currentRole === 'mentor' ? (
              <MentorDashboard />
            ) : (
              <StudentDashboard />
            )
          )}
          {activeLink === "Course" && <Courses />}
          {activeLink === "Mentors" && <Mentors />}
          {activeLink === "Student" && <Studentlist/>}
          {activeLink === "Scheledule" && <ScheduleList/>}
          {activeLink === "Calendar" && <CalendarList/>}
          {activeLink === "grade" && <GradeList/>}
          {activeLink === "Feedback" && <ProgressList/>}
          {activeLink === "User" && <UserTable/>}
          {activeLink === "CourseTable" && <CourseTable/>}
          {activeLink === "Mentor" && <MentorTable/>}
          {activeLink === "Checking" && <AdminCheckTable/>}    
          {activeLink === "Settings" && <Settings/>}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
