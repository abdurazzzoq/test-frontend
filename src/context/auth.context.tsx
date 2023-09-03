import { ReactNode, useMemo, createContext, useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/router";

interface AuthContextState {
  user: User | null;
  error: string;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
  error: "",
  isLoading: false,
  signIn: async () => {},
  signUp: async () => {},
  logout: async () => {},
});





const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    
const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const { user, error, isLoading, signIn, signUp, logout, setIsUser } =
    useAuth();


    const router = useRouter();


  const value = useMemo(
    () => ({
      user,
      isLoading,
      error,
      signUp,
      logout,
      signIn,
    }),
    // eslint-disable-next-line
    [user, error, isLoading]
  );
  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        if (user) {
          setIsUser(user);
        } else {
          setIsUser(null);
          router.push("/auth");
        }
        setInitialLoading(false);
      }),
      // eslint-disable-next-line
    []
  );

  return (
    <AuthContext.Provider value={value}>
      {!initialLoading ? children : 'Loading...'}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
