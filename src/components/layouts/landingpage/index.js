import { NavBar } from "../../general/navbar";
export const LandingPageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
