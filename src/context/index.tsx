"use client";
import { HubType, UserType } from "@/types";
import { logoutAuth } from "@/utils/Api/cookie";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface AuthContextType {
  ideaHub_user: UserType | null;
  login: (user: UserType) => void;
  logout: () => void;
  hub: HubType[] | null;
  getHub:(hub: HubType[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [ideaHub_user, setIdeaHub_user] = useState<UserType | null>(
    typeof window !== "undefined" && localStorage.getItem("ideaHub_user")
      ? JSON.parse(window.localStorage.getItem("ideaHub_user")!)
      : null
  );

  const [hub, setHub] = useState<HubType[] | null>(
    typeof window !== "undefined" && localStorage.getItem("hub")
      ? JSON.parse(window.localStorage.getItem("hub")!)
      : null
  );


  const login = (user: UserType) => {
    setIdeaHub_user(user);
    typeof window !== "undefined" &&
      localStorage.setItem("ideaHub_user", JSON.stringify(user));
  };

  const getHub = (hub: HubType[]) => {
    setHub(hub);
    typeof window !== "undefined" &&
      localStorage.setItem("hub", JSON.stringify(hub));
  };

  const logout = () => {
    setIdeaHub_user(null);
    typeof window !== "undefined" && localStorage.removeItem("ideaHub_user");
    logoutAuth();
  };



  const contextValue: AuthContextType = {
    ideaHub_user,
    login,
    logout,
    hub,
    getHub
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>

  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
