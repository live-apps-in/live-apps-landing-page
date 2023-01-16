import { styled } from "@mui/material";
import { CustomText, FlexColumn, FlexRow } from "src/components";
import { homePageConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { mediaQuery } from "src/theme";
import { ProjectCard } from "./project-card";

export const ProjectsContainerWrapper = styled(FlexColumn)`
    min-height: calc(100vh - ${layoutSettings.header.height});
    justify-content: center;
    gap: 50px;
    padding: 20px;
    ${mediaQuery.up('sm')} {
        padding: 20px 10vw;
    }
`;

export const ProjectCardsContainerWrapper = styled(FlexRow)`
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const ProjectsGradient = styled('span')`
  background: linear-gradient(90deg, #C2C61E 0%, #496FF5 100%);
  background-clip: text;
  text-fill-color: transparent;
`;

export const Projects: React.FC = () => {
    return (
        <ProjectsContainerWrapper id='projects' sx={{ scrollMarginTop: layoutSettings.header.height }}>
            <CustomText variant="h1">Open Source <ProjectsGradient>Projects</ProjectsGradient></CustomText>
            <ProjectCardsContainerWrapper>
                {homePageConfig.projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </ProjectCardsContainerWrapper>
        </ProjectsContainerWrapper>
    );
};