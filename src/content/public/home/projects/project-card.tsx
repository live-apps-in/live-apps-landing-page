import { styled, Tooltip, Chip } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { CustomText, FlexColumn, JustifyBetween, YCenter } from "src/components";
import { homePageConfig } from "src/config";
import { mediaQuery } from "src/theme";

const ProjectCardWrapper = styled("a")(({theme}) => `
    flex: 1;
    display: grid;
    grid-template-rows: 100px auto auto;
    padding: 20px;
    text-decoration: none;
    background: ${theme.colors.white};
    transition: all 0.3s ease;
    width: 100%;
    min-width: 200px;
    border: 1px solid lightgrey;
    border-radius: 50px;
    // &:not(:last-child) {
    //     border-right: 1px solid ${theme.colors.primary};
    // }
    ${mediaQuery.up("xs")} {
        width: 75%;
        max-width: 75%;
    }
    ${mediaQuery.up("sm")} {
        width: 50%;
        max-width: 50%;
    }
    ${mediaQuery.up("md")} {
        width: 25%;
        max-width: 25%;
    }
    &:hover {
        background: linear-gradient(176deg, rgba(37,98,149,1) 0%, rgba(26,133,224,1) 62%, rgba(49,180,204,1) 100%);
        border-radius: 10px;
        transform: scale(1.1);
        > * > *, > * > * > * {
            color: ${theme.colors.white} !important;
        }
    }
`);

const ProjectCardImageContainer = styled(YCenter)`
    height: 100%;
    width: 100%;
    img {
        max-width: 80px;
        max-height: 80px;
        object-fit: contain;
        border-radius: 10px;
    }
`;

const ProjectCardContentContainer = styled(FlexColumn)(({theme}) => `
    gap: 2px;
    transition: all 1s ease;
    &:hover {
        > *, > * > * {
            color: ${theme.colors.white} !important;
        }
    }
`);

export const ProjectCard: React.FC<typeof homePageConfig.projects[0]> = (props) => {
    return <ProjectCardWrapper href={`#${props.id}`}>
            <ProjectCardImageContainer>
                <img src={props.image} alt={props.name} />
            </ProjectCardImageContainer>
            <ProjectCardContentContainer>
                <CustomText variant="h3">
                    {props.name} 
                    {
                        props.isBeta && 
                        (<Tooltip title='Under Development'>
                            <Chip sx={{ ml: 1 }} label='Beta' color='error' />
                        </Tooltip>)
                    }
                </CustomText>
                <JustifyBetween>
                    <CustomText variant="subtitle1" color='primary'>Learn more</CustomText>
                    <ArrowOutwardIcon color="primary" />
                </JustifyBetween>
            </ProjectCardContentContainer>
    </ProjectCardWrapper>;
};