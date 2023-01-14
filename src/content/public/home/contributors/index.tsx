import { styled } from "@mui/material"
import { CustomText, XYCenter } from "src/components"
import { homePageConfig } from "src/config"
import { Contributor } from "./contributor"

const ContributorsContainerWrapper = styled('div')`
    padding: 10px;
`

const ContributorsContentContainer = styled(XYCenter)`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`

export const Contributors: React.FC = () => {
    return (
        <ContributorsContainerWrapper>
            <CustomText variant="h1">Contributors</CustomText>
            <ContributorsContentContainer>
                {homePageConfig.contributors.map((contributor, index) => (
                    <Contributor {...contributor} key={index} />
                ))}
            </ContributorsContentContainer>
        </ContributorsContainerWrapper>
    )
}