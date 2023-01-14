import { styled } from "@mui/material"
import { homePageConfig } from "src/config"
import { ProjectDetail } from "./project-detail"

const ProjectDetailsContainer = styled('div')`
    padding: 10px;
`

export const ProjectDetails: React.FC = () => {
    return (
        <ProjectDetailsContainer>
            {homePageConfig.projects.map((project, index) => (
                <ProjectDetail {...project} key={index} />
            ))}
        </ProjectDetailsContainer>
    )
}