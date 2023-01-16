import { styled } from "@mui/material";
import { CustomText, FlexColumn, FlexRow } from "src/components";
import { homePageConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { mediaQuery } from "src/theme";
import { TechnologyCard } from "./technology-card";

const TechnologiesContainerWrapper = styled(FlexColumn)`
    min-height: calc(100vh - ${layoutSettings.header.height});
    justify-content: center;
    gap: 50px;
    padding: 20px;
    ${mediaQuery.up('sm')} {
        padding: 20px 10vw;
    }
`;

const TechnologiesContainer = styled(FlexRow)`
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

const TechnologiesGradient = styled('span')`
  background: linear-gradient(90deg, #1EC6BC 0%, #000000 100%);
  background-clip: text;
  text-fill-color: transparent;
`;

export const Technologies: React.FC = () => {
    return <TechnologiesContainerWrapper id='technologies' sx={{ scrollMarginTop: layoutSettings.header.height }}>
        <CustomText variant='h1'><TechnologiesGradient>Technologies</TechnologiesGradient> Used</CustomText>
        <TechnologiesContainer>
            {homePageConfig.technologies.map((technology, index) => (
                <TechnologyCard {...technology} key={index} />
            ))}
        </TechnologiesContainer>
    </TechnologiesContainerWrapper>;
};