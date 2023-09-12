import { createContext, useState } from "react";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const toggleLike = (blogId) => {
    setLikes((preLikes) => ({
      ...preLikes,
      [blogId]: !preLikes[blogId],
    }));
  };

  return (
    <LikeContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};
