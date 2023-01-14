import { styled } from "@mui/material"
import { CustomText } from "src/components"
import { homePageConfig } from "src/config"
import { ProjectDetail } from "./project-detail"

const ProjectDetailsContainer = styled('div')`
    padding: 10px;
`

export const ProjectDetails: React.FC = () => {
    return (
        <ProjectDetailsContainer>
            <CustomText variant="h1">Project Details</CustomText>
            {homePageConfig.projects.map((project, index) => (
                <ProjectDetail {...project} key={index} />
            ))}
        </ProjectDetailsContainer>
    )
}