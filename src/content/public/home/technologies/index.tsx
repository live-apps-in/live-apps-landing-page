import { styled } from "@mui/material";
import { CustomText, FlexColumn, FlexRow } from "src/components";
import { homePageConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { TechnologyCard } from "./technology-card";

const TechnologiesContainerWrapper = styled(FlexColumn)`
    padding: 20px 10vw;
    min-height: calc(100vh - ${layoutSettings.header.height});
    justify-content: center;
    gap: 50px;
`;

const TechnologiesContainer = styled(FlexRow)`
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Technologies: React.FC = () => {
    return <TechnologiesContainerWrapper>
        <CustomText variant='h1'>Technologies Used</CustomText>
        <TechnologiesContainer>
            {homePageConfig.technologies.map((technology, index) => (
                <TechnologyCard {...technology} key={index} />
            ))}
        </TechnologiesContainer>
    </TechnologiesContainerWrapper>;
};