// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppLoader } from "src/components";
// import { rbacSetup } from "src/data";
// import { useAuth } from "src/hooks";

import { styled } from "@mui/material";
import { CustomText, XYCenter } from "src/components";
import { Parallax } from "react-scroll-parallax";

const StyledHomePageContainer = styled("div")`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
`;

const StyledSection1 = styled("div")`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
`;

const StyledTitleSection = styled(XYCenter)`
  padding: 40px 0px;
  flex-direction: column;
  background: linear-gradient(
    176deg,
    rgba(91, 149, 37, 1) 0%,
    rgba(0, 0, 0, 1) 62%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const StyledHeading = styled(CustomText)(
  ({ theme }) => `
  color: ${theme.colors.white};
  font-weight: 800;
  padding: 30px 3px;
  letter-spacing: 5px;
  font-size: 60px;
`
);

const StyledCaption = styled(CustomText)`
  color: #8c8a8a;
  fontweight: 100;
`;

// const StyledImageSection = styled("div")`
//   width: 100%;
//   background-color: black;
//   background-image: url(${HomepageBgGif});
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
// `;

const NeonAnimationSection = styled(XYCenter)`
  width: 100%;
`;

const NeonAnimatedText = styled(CustomText)`
  font-weight: 900;
  font-size: 50px;
  color: #6f6;
  animation: pulse-text 0.8s infinite alternate ease-in-out;
  @keyframes pulse-text {
    0% {
      text-shadow: 0px 0px 8px rgba(0, 255, 0, 0.7);
    }
    100% {
      text-shadow: 0px 0px 22px rgba(0, 255, 0, 1);
    }
  }
`;

export const HomePageContent = () => {
  // const { data } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (data) {
  //     navigate(
  //       `${
  //         rbacSetup.homePage[data?.roles[0] as keyof typeof rbacSetup.homePage]
  //       }`,
  //       { replace: true }
  //     );
  //   }
  // }, []);

  return (
    <StyledHomePageContainer>
      <StyledSection1>
        <StyledTitleSection>
          <StyledHeading variant="h1">LIVE APPS</StyledHeading>
          <StyledCaption variant="caption">
            Developing something better
          </StyledCaption>
        </StyledTitleSection>
        <NeonAnimationSection>
          <NeonAnimatedText>Coming Soon</NeonAnimatedText>
        </NeonAnimationSection>
      </StyledSection1>
    </StyledHomePageContainer>
  );
};
