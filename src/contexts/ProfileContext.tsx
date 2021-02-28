import { createContext, ReactNode, useState } from 'react';

interface ProfileContextData {
  user: string;
  newUser: (user) => void;
}

export const ProfileContext = createContext({} as ProfileContextData);

interface ProfileProviderProps {
  children: ReactNode;
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [user, setUser] = useState('');
  function newUser(user: string) {
    setUser(user);
  }
  return (
    <ProfileContext.Provider
      value={{
        user,
        newUser,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
