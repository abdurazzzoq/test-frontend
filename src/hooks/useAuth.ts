import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    User,
  } from "firebase/auth";
  import { useRouter } from "next/router";
  import { useState } from "react";
  import {auth} from '../firebase'  

  
  export const useAuth = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setIsError] = useState<string>("");
    const [user, setIsUser] = useState<User | null>(null);
  
    const router = useRouter();
  
    const signUp = async (email: string, password: string) => {
      setIsLoading(true);
  
      await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setIsUser(res.user);
          router.push("/");
          setIsLoading(true);
        })
        .catch((error) => setIsError(error.message))
        .finally(() => setIsLoading(false));
    };
  
    const signIn = async (email: string, password: string) => {
      setIsLoading(true);
  
      await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setIsUser(res.user);
          router.push("/");
          setIsLoading(true);
        })
        .catch((error) => setIsError(error.message))
        .finally(() => setIsLoading(false));
    };
  
    const logout = async () => {
      setIsLoading(true);
      signOut(auth)
        .then(() => setIsUser(null))
        .catch((error) => setIsError(error.message))
        .finally(() => setIsLoading(false));
    };
    return { error, isLoading, user, signIn, signUp, logout, setIsUser };
  };
  