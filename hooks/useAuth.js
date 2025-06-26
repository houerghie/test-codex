import { useEffect, useState, useContext, createContext } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { app, db } from '../firebase/client';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const docRef = doc(db, 'users', firebaseUser.uid);
        const snap = await getDoc(docRef);
        setRole(snap.exists() ? snap.data().role : null);
      } else {
        setRole(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const logout = async () => {
    await signOut(auth);
  };
  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider
      value={{ user, role, loading, login, signup, logout, resetPassword, loginWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
};
