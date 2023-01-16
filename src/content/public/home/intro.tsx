import { styled } from "@mui/material";
import { AISignWaveGif } from "src/assets";
import { CustomText } from "src/components";
import { homePageConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { mediaQuery } from "src/theme";

const IntroContentContainerWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    padding-top: 10% !important;
    padding: 20px;
    ${mediaQuery.up('sm')} {
        padding: 20px 10vw 0px;
    }
`;

const IntroContainerWrapper = styled("div")`
    width: 100vw;
    min-height: calc(100vh - ${layoutSettings.header.height});
    // background-image: url("${AISignWaveGif}");
    background-position: right 0 bottom 10%;
    background-size: 100% auto;
    background-repeat: no-repeat;
`;

export const Intro: React.FC = () => {
    return (
        <IntroContainerWrapper>
            <IntroContentContainerWrapper>
                <CustomText variant="h1" sx={{ fontWeight: "bolder", fontSize: { sm: 50 } }} >{homePageConfig.intro.title}</CustomText>
                <CustomText variant="caption" color='primary' sx={{ letterSpacing: 7, fontSize: { xs: 10, sm: 13 } }}>{homePageConfig.intro.slogan}</CustomText>
                <CustomText sx={{ pt: 10, letterSpacing: 2 }} >{homePageConfig.intro.description}</CustomText>
            </IntroContentContainerWrapper>
        </IntroContainerWrapper>
    );
};