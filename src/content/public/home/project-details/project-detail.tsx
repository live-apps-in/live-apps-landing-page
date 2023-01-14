import { Divider, styled } from "@mui/material"
import { CustomText, FlexRow } from "src/components"
import { homePageConfig } from "src/config"

const ProjectDetailContainer = styled('div')`
    padding: 10px;
`

const ProjectDetailTileImageWrapper = styled('div')`
    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
`

const ProjectDetailTitleContainer = styled(FlexRow)`
    gap: 10px;
    align-items: center;
`
const ProjectDetailFeaturesContainer = styled('div')`
    padding: 5px;
`

const ProjectDetailFeatureContainer = styled('div')`
    
`

const ProjectDetailFeatureTitleContainer = styled('div')`

`

const ProjectDetailFeatureDescriptionsContainer = styled('ul')`

`

const ProjectDetailFeatureDescriptionContainer = styled('li')`

`

export const ProjectDetail: React.FC<typeof homePageConfig.projects[0]> = (props) => {
    return (
        <>
            <ProjectDetailContainer>
                <ProjectDetailTitleContainer>
                    <ProjectDetailTileImageWrapper>
                        <img src={props.image} alt={props.name} />
                    </ProjectDetailTileImageWrapper>
                    <CustomText variant="h3">{props.name}</CustomText>
                </ProjectDetailTitleContainer>
                <ProjectDetailFeatureContainer>
                    {props.features.map((feature, index) => <>
                            <ProjectDetailFeatureTitleContainer key={index}>
                                {feature.name}
                            </ProjectDetailFeatureTitleContainer>
                            {feature.descriptions.map((description, index) => <ProjectDetailFeatureDescriptionsContainer key={index}>
                                <ProjectDetailFeatureDescriptionContainer>
                                    {description}
                                </ProjectDetailFeatureDescriptionContainer>
                            </ProjectDetailFeatureDescriptionsContainer>)}
                        </>)
                    }
                </ProjectDetailFeatureContainer>
            </ProjectDetailContainer>
            <Divider />
        </>
    )
}
