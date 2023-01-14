import { styled } from "@mui/material";
import { CustomText, FlexColumn, YCenter } from "src/components";
import { homePageConfig } from "src/config";

const ProjectCardWrapper = styled('a')(({theme}) => `
    flex: 1;
    border-radius: 5px;
    display: grid;
    grid-template-rows: 100px auto auto;
    padding: 20px;
    text-decoration: none;
    transition: all 1s ease;
    > * > * {
        color: ${theme.colors.black} !important;
    }
    &:hover {
        background: linear-gradient(176deg, rgba(37,98,149,1) 0%, rgba(26,133,224,1) 62%, rgba(49,180,204,1) 100%);
        > * > * {
            color: ${theme.colors.white} !important;
        }
    }
`)

const ProjectCardImageContainer = styled(YCenter)`
    height: 100%;
    width: 100%;
    img {
        max-width: 80px;
        max-height: 80px;
        object-fit: contain;
        border-radius: 10px;
    }
`

const ProjectCardContentContainer = styled(FlexColumn)(({theme}) => `
    gap: 2px;
    transition: all 1s ease;
    > * {
        color: ${theme.colors.black} !important;
    }
    &:hover {
        > * {
            color: ${theme.colors.white} !important;
        }
    }
`)

export const ProjectCard: React.FC<typeof homePageConfig.projects[0]> = (props) => {
    return <ProjectCardWrapper href={props.link} target='_blank'>
            <ProjectCardImageContainer>
                <img src={props.image} alt={props.name} />
            </ProjectCardImageContainer>
            <ProjectCardContentContainer>
                <CustomText variant="h2">{props.name}</CustomText>
                <CustomText variant="subtitle1">Learn more</CustomText>
            </ProjectCardContentContainer>
    </ProjectCardWrapper>
}