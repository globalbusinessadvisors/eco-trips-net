// Import all the relevant exports from other files in the supabase directory
import { supabase } from './supabase.js';
import { SupabaseAuthProvider, useSupabaseAuth, SupabaseAuthUI } from './auth.jsx';
import { useUser, useUsers, useAddUser, useUpdateUser, useDeleteUser } from './hooks/users.js';

// Export all the imported functions and objects
export {
  supabase,
  SupabaseAuthProvider,
  useSupabaseAuth,
  SupabaseAuthUI,
  useUser,
  useUsers,
  useAddUser,
  useUpdateUser,
  useDeleteUser,
};
