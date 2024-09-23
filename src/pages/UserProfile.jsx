import React from 'react';
import { useSupabaseAuth } from '../integrations/supabase/auth';

const UserProfile = () => {
  const { session } = useSupabaseAuth();

  if (!session) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p><strong>Email:</strong> {session.user.email}</p>
        {/* Add more user details here as needed */}
      </div>
    </div>
  );
};

export default UserProfile;