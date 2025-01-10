import React from "react";
import { useUserRole } from "../../hooks/useUSerRole";
import AuthorProfile from "../../pages/Author/AuthorProfile";
import ReaderProfile from "../../pages/Reader/ReaderProfile";

const ProfilePage: React.FC = () => {
  const role = useUserRole();

  if (role === "author") {
    return <AuthorProfile />;
  }

  if (role === "reader") {
    return <ReaderProfile />;
  }

  return <p>Cargando perfil...</p>;
};

export default ProfilePage;
