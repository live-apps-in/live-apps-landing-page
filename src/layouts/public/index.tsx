import { navigationLinks } from "src/routes";
import { Header } from "./header";
import { styled } from "@mui/material";
// import { CustomButton } from "src/components";
import { layoutSettings } from "./layout-settings";
import { CustomIconButton, MediaQueryBox } from "src/components";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
// import { useAuth } from "src/hooks";
// import { authConfig } from "src/config";
// import { isActiveRoute } from "src/utils";
// import { useLocation } from "react-router-dom";

const MainContentWrapper = styled("div")`
  width: 100vw;
  max-width: 100vw;
  overflow: auto;
  overflow-x: hidden;
  height: calc(100vh - ${layoutSettings.header.height});
  max-height: 100vh;
`;

export const PublicLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const { pathname } = useLocation();
  // const { logout } = useAuth();
  // const [loading, setLoading] = useState(false);

  // const handleLogout = async () => {
  //   setLoading(true);
  //   try {
  //     await logout();
  //   } catch (err) {
  //     /* ignore error */
  //   }
  //   setLoading(false);
  // };

  const actions = (
  <MediaQueryBox up={{ breakpoint: 'sm', style: { display: 'none' } }}>
    <CustomIconButton onClick={() => setIsOpen(prev => !prev)}>
        <MenuIcon />
    </CustomIconButton>
  </MediaQueryBox>
);
    // display only if its not the signup page
    // !isActiveRoute({ path: pathname, route: authConfig.signupPage }) && (
    //   <CustomButton loading={loading} onClick={handleLogout}>
    //     Logout
    //   </CustomButton>
    // );

  return (
    <>
      <Header navigationLinks={navigationLinks.publicLayout} actions={actions} isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainContentWrapper>{children}</MainContentWrapper>
    </>
  );
};
