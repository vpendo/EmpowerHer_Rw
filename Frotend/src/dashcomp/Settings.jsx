import React, { useState } from 'react';
import { 
  Bell, Shield, Users, Mail, Key, Globe, 
  Moon, Sun, Database, AlertTriangle 
} from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      emailAlerts: true,
      newStudentAlerts: true,
      courseCompletionAlerts: true,
      systemUpdates: false
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      ipRestriction: false
    },
    system: {
      darkMode: false,
      language: 'English',
      timezone: 'UTC+2',
      autoBackup: true
    }
  });

  const [activeTab, setActiveTab] = useState('notifications');

  const handleSettingChange = (category, setting) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting]
      }
    }));
  };

  const handleInputChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Settings</h1>

        {/* Settings Navigation */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex space-x-6 border-b">
            <button
              onClick={() => setActiveTab('notifications')}
              className={`pb-4 flex items-center gap-2 ${
                activeTab === 'notifications'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Bell className="h-5 w-5" />
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`pb-4 flex items-center gap-2 ${
                activeTab === 'security'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield className="h-5 w-5" />
              Security
            </button>
            <button
              onClick={() => setActiveTab('system')}
              className={`pb-4 flex items-center gap-2 ${
                activeTab === 'system'
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Database className="h-5 w-5" />
              System
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Email Alerts</p>
                      <p className="text-sm text-gray-500">Receive important notifications via email</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.notifications.emailAlerts}
                      onChange={() => handleSettingChange('notifications', 'emailAlerts')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">New Student Alerts</p>
                      <p className="text-sm text-gray-500">Get notified when new students register</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.notifications.newStudentAlerts}
                      onChange={() => handleSettingChange('notifications', 'newStudentAlerts')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">System Updates</p>
                      <p className="text-sm text-gray-500">Get notified about system maintenance and updates</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.notifications.systemUpdates}
                      onChange={() => handleSettingChange('notifications', 'systemUpdates')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Key className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.security.twoFactorAuth}
                      onChange={() => handleSettingChange('security', 'twoFactorAuth')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Session Timeout (minutes)</p>
                      <p className="text-sm text-gray-500">Automatically log out after inactivity</p>
                    </div>
                  </div>
                  <input
                    type="number"
                    min="5"
                    max="120"
                    className="w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => handleInputChange('security', 'sessionTimeout', parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          )}

          {/* System Settings */}
          {activeTab === 'system' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">System Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {settings.system.darkMode ? (
                      <Moon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Sun className="h-5 w-5 text-gray-400" />
                    )}
                    <div>
                      <p className="font-medium text-gray-900">Dark Mode</p>
                      <p className="text-sm text-gray-500">Toggle dark mode theme</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.system.darkMode}
                      onChange={() => handleSettingChange('system', 'darkMode')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Language</p>
                      <p className="text-sm text-gray-500">Select your preferred language</p>
                    </div>
                  </div>
                  <select
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={settings.system.language}
                    onChange={(e) => handleInputChange('system', 'language', e.target.value)}
                  >
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">Auto Backup</p>
                      <p className="text-sm text-gray-500">Automatically backup system data</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.system.autoBackup}
                      onChange={() => handleSettingChange('system', 'autoBackup')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
