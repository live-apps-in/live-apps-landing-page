import { styled } from "@mui/material";
import { CustomText, FlexColumn, FlexRow } from "src/components";
import { homePageConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { ProjectCard } from "./project-card";

export const ProjectsContainerWrapper = styled(FlexColumn)`
    min-height: calc(100vh - ${layoutSettings.header.height});
    justify-content: center;
    padding: 20px 10vw;
    gap: 50px;
`;

export const ProjectCardsContainerWrapper = styled(FlexRow)`
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const Projects: React.FC = () => {
    return (
        <ProjectsContainerWrapper>
            <CustomText variant="h1">Open Source Projects</CustomText>
            <ProjectCardsContainerWrapper>
                {homePageConfig.projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </ProjectCardsContainerWrapper>
        </ProjectsContainerWrapper>
    );
};