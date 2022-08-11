import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";

const useUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => setCurrentUser(user));

  return currentUser;
};

export default useUser;
