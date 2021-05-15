import { createContext, useState } from "react";
import { IProfile } from "../interfaces/ExportInterfaces";

export const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {

  const [dataProfile, setDataProfile] = useState<IProfile>({} as IProfile);

   function handleProfile(prof: IProfile) {
    setDataProfile(prof);
  }

  return (
    <ProfileContext.Provider value={{ dataProfile, handleProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};