import { Divider, styled } from "@mui/material";
import { CustomText, FlexColumn, FlexRow, JustifyBetween } from "src/components";
import { homePageConfig } from "src/config";
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
    }
`;

const ProjectDetailTitleDescription = styled("div")``;

const ProjectDetailFeaturesContainer = styled(FlexRow)(({theme}) => `
    flex-wrap: wrap;
    padding-bottom: 30px;
    ${mediaQuery.up("md")} {
        > div:not(:last-child) {
            border-right: 1px solid ${theme.colors.success};
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

const ProjectDetailFeatureTitleContainer = styled("div")`

`;

const ProjectDetailFeatureDescriptionsContainer = styled("ul")`

`;

const ProjectDetailFeatureDescriptionContainer = styled("li")`

`;

export const ProjectDetail: React.FC<typeof homePageConfig.projects[0]> = (props) => {
    return (
        <>
            <ProjectDetailContainer>
                <ProjectDetailTitleContainer>
                    <ProjectDetailTitleSection>
                        <CustomText variant="h3" style={{ fontWeight: "bold" }}>{props.name}</CustomText>
                        <img src={props.image} alt={props.name} />
                    </ProjectDetailTitleSection>
                    <ProjectDetailTitleDescription>
                        <CustomText variant="body2">{props.description}</CustomText>
                    </ProjectDetailTitleDescription>
                </ProjectDetailTitleContainer>
                <ProjectDetailFeaturesContainer>
                    {props.features.map((feature, index) => <ProjectDetailFeatureContainer key={index}>
                            <ProjectDetailFeatureTitleContainer>
                                <CustomText variant="h5" color='success'>{feature.name}</CustomText>
                            </ProjectDetailFeatureTitleContainer>
                            {feature.descriptions.map((description, index) => <ProjectDetailFeatureDescriptionsContainer key={index}>
                                <ProjectDetailFeatureDescriptionContainer>
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
