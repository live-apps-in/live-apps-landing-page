import { styled } from "@mui/material";
import { CustomText, FlexColumn, XYCenter } from "src/components";
import { homePageConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { Contributor } from "./contributor";

const ContributorsContainerWrapper = styled(FlexColumn)`
    padding: 20px 10vw;
    min-height: calc(100vh - ${layoutSettings.header.height});
    justify-content: center;
    gap: 50px;
`;

const ContributorsContentContainer = styled(XYCenter)`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`;

const ContributorsGradient = styled('span')`
    background: linear-gradient(90deg, #3FC61E 0%, #F7354D 100%);
    background-clip: text;
    text-fill-color: transparent;
`;

export const Contributors: React.FC = () => {
    return (
        <ContributorsContainerWrapper id='contributors' sx={{ scrollMarginTop: layoutSettings.header.height }}>
            <CustomText variant="h1">
                <ContributorsGradient>Contributors</ContributorsGradient>
            </CustomText>
            <ContributorsContentContainer>
                {homePageConfig.contributors.map((contributor, index) => (
                    <Contributor {...contributor} key={index} />
                ))}
            </ContributorsContentContainer>
        </ContributorsContainerWrapper>
    );
};