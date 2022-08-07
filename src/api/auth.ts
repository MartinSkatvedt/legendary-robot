import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebase";

export const signIn = async () => {
  const auth = getAuth();

  try {
    const signInResult = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(signInResult);
    if (!credential) return;
    const token = credential.accessToken;
    const user = signInResult.user;
    return {
        token,
        user
    }
} catch (error) {
    console.log(error)
    return null
  }
};
