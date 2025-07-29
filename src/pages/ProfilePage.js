import React from 'react';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <p className="mb-4"><strong>Email:</strong> {currentUser?.email}</p>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
