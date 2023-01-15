import { styled } from "@mui/material";
import { CustomText } from "src/components";
import { homePageConfig } from "src/config";
import { ProjectDetail } from "./project-detail";

const ProjectDetailsContainer = styled("div")`
    padding: 20px 10vw;
`;

export const ProjectDetails: React.FC = () => {
    return (
        <ProjectDetailsContainer>
            <CustomText variant="h1">What Our Projects include ?</CustomText>
            {homePageConfig.projects.map((project, index) => (
                <ProjectDetail {...project} key={index} />
            ))}
        </ProjectDetailsContainer>
    );
};