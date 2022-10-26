import { User, UserCredential } from "firebase/auth";
import React from "react";

export interface AuthContextType {
  user: User | null,
  login: (email: string, password: string) => Promise<UserCredential>,
  signin: (name: string, lastname: string, email: string, password: string) => Promise<void>,
  signout: () => Promise<void>,
}

let AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext