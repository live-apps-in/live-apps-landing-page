// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppLoader } from "src/components";
// import { rbacConfig } from "src/config";
// import { useAuth } from "src/hooks";

import { styled } from "@mui/material";
import { Contributors } from "./contributors";
import { Intro } from "./intro";
import { JoinUS } from "./join-us";
import { ProjectDetails } from "./project-details";
import { Projects } from "./projects";
import { Technologies } from "./technologies";

const StyledHomePageContainer = styled("div")`
  width: 100%;
  min-height: 100%;
`;

export const HomePageContent = () => {
  // const { data } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (data) {
  //     navigate(
  //       `${
  //         rbacConfig.homePage[data?.roles[0] as keyof typeof rbacConfig.homePage]
  //       }`,
  //       { replace: true }
  //     );
  //   }
  // }, []);

  return (
    <StyledHomePageContainer>
      <Intro />
      <Projects />
      <ProjectDetails />
      <Technologies />
      <Contributors />
      <JoinUS />
    </StyledHomePageContainer>
  );
};
