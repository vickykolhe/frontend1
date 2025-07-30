import React from "react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <div
      className="min-h-screen flex flex-col gap-8 items-center justify-top "
      style={{
        background:
          "linear-gradient(322.11deg, #761010 10.96%, #671011 38.74%, #340808 55.25%, #000000 89.04%)",
      }}
    >
      <h1 className="mt-12 font-normaltext text-[24px] text-white">
        this page is under construction
      </h1>
      <div className="bg-white shadow-md p-6 rounded-lg text-center mt-24">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <p className="mb-4">
          <strong>Email:</strong> {currentUser?.email}
        </p>

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
