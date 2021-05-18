import { createContext, useState } from "react";
import { IProfile,ProfileContextState } from "../interfaces/ExportInterfaces";

const contextDefaultValues: ProfileContextState = {
  dataProfile: {} as IProfile,
  handleProfile: () => {}
}

export const ProfileContext = createContext<ProfileContextState>(contextDefaultValues);

export const ProfileProvider = ({ children }) => {

  const [dataProfile, setDataProfile] = useState<IProfile>(contextDefaultValues.dataProfile);

   async function handleProfile(profile: IProfile) {
    await setDataProfile(profile);
  }

  return (
    <ProfileContext.Provider value={{ dataProfile, handleProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};