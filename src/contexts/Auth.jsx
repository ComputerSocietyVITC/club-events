import { createContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/client';
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleAuthStateChange = session => {
      setUser(session?.user ?? undefined);
      setLoading(false);
    };

    handleAuthStateChange(supabase.auth.session());

    const { data: subscription } = supabase.auth.onAuthStateChange((_, session) =>
      handleAuthStateChange(session),
    );

    return () => void subscription?.unsubscribe();
  });

  const authContextValue = {
    signIn: data => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };
  return (
    <AuthContext.Provider value={authContextValue}>{!loading && children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
