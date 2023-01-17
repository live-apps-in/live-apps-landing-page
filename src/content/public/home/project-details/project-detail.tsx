import Warning from "@mui/icons-material/Warning";
import { Divider, styled, Chip, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CustomText, FlexColumn, FlexRow, JustifyBetween } from "src/components";
import { homePageConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { mediaQuery } from "src/theme";

const ProjectDetailContainer = styled(FlexColumn)`
    padding: 10px;
    gap: 30px;
`;

const ProjectDetailTitleContainer = styled(FlexColumn)`
    width: 100%;
`;

const ProjectDetailTitleSection = styled(JustifyBetween)`
    gap: 10px;
    align-items: center;
    img {
        width: 70px;
        height: 70px;
        object-fit: contain;
        border-radius: 50%;
    }
`;

const ProjectDetailTitleDescription = styled("div")``;

const ProjectDetailFeaturesContainer = styled(FlexRow)(({theme}) => `
    flex-wrap: wrap;
    padding-bottom: 30px;
    ${mediaQuery.up("md")} {
        > div:not(:last-child) {
            border-right: 1px solid ${theme.colors.primary};
        }
    }
`);

const ProjectDetailFeatureContainer = styled(FlexColumn)`
    flex: 1;
    min-width: 200px;
    width: 100%;
    padding: 0 20px;
    ${mediaQuery.up("md")} {
        width: 25%;
        min-width: 25%;
    }
`;

const ProjectDetailFeatureTitleContainer = styled(FlexRow)`
    flex-wrap: wrap;
    align-items: center;
`;

const ProjectDetailFeatureDescriptionsContainer = styled("ul")`

`;

const ProjectDetailFeatureDescriptionContainer = styled("li")`

`;

export const ProjectDetail: React.FC<typeof homePageConfig.projects[0]> = (props) => {

    const theme = useTheme();

    return (
        <>
            <ProjectDetailContainer id={props.id} sx={{ scrollMarginTop: layoutSettings.header.height }}>
                <ProjectDetailTitleContainer>
                    <ProjectDetailTitleSection>
                        <CustomText variant="h3" style={{ fontWeight: "bold" }}>{props.name} 
                            {
                                props.isBeta && (
                                    <Tooltip title='Under Development'>
                                        <Chip label='Development' color='secondary' sx={{ ml: 1 }} />
                                    </Tooltip>
                                )
                            } 
                            {
                                props.isLive && (
                                    <Tooltip title='This is live in our Discord server'>
                                        <Chip label='Live' color='success' sx={{ ml: 1, color: theme.colors.white }} />
                                    </Tooltip>
                                )
                            }
                        </CustomText>
                        <img src={props.image} alt={props.name} />
                    </ProjectDetailTitleSection>
                    <ProjectDetailTitleDescription>
                        <CustomText variant="body2">{props.description}</CustomText>
                    </ProjectDetailTitleDescription>
                </ProjectDetailTitleContainer>
                <ProjectDetailFeaturesContainer>
                    {props.features.map((feature, index) => <ProjectDetailFeatureContainer key={index}>
                            <ProjectDetailFeatureTitleContainer>
                                {
                                    feature.isLimitation ? 
                                        <Tooltip title='Limitations specific for this project'>
                                            <Chip icon={<Warning fontSize="small" />} sx={{ px: 1 }} label={feature.name} color='warning' />
                                        </Tooltip> 
                                        : 
                                        <CustomText variant="h5" color='primary'>{feature.name}</CustomText>
                                }
                                {
                                    feature.isBeta &&
                                        <Tooltip title='Under Development'>
                                            <Chip label='Development' color='error' />
                                        </Tooltip>
                                }
                            </ProjectDetailFeatureTitleContainer>
                            {feature.descriptions.map((description, index) => <ProjectDetailFeatureDescriptionsContainer key={index}>
                                <ProjectDetailFeatureDescriptionContainer  sx={{ fontWeight: 300, fontStyle: 'italic' }}>
                                    {description}
                                </ProjectDetailFeatureDescriptionContainer>
                            </ProjectDetailFeatureDescriptionsContainer>)}
                        </ProjectDetailFeatureContainer>)
                    }
                </ProjectDetailFeaturesContainer>
            </ProjectDetailContainer>
            <Divider />
        </>
    );
};
