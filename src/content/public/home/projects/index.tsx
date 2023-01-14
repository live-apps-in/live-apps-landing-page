import { styled } from "@mui/material"
import { CustomText, FlexColumn, FlexRow } from "src/components"
import { homePageConfig } from "src/config"
import { ProjectCard } from "./project-card"

export const ProjectsContainerWrapper = styled(FlexColumn)`
    height: 100%;
    justify-content: center;
`

export const ProjectCardsContainerWrapper = styled(FlexRow)`
    flex-wrap: wrap;
`

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
    )
}