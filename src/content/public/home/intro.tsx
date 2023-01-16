import { styled, useTheme } from "@mui/material";
import { AISignWaveGif } from "src/assets";
import { CustomButton, CustomText } from "src/components";
import { homePageConfig } from "src/config";
import { layoutSettings } from "src/layouts/public/layout-settings";
import { mediaQuery } from "src/theme";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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

    const theme = useTheme();

    return (
        <IntroContainerWrapper>
            <IntroContentContainerWrapper>
                <CustomText variant="h1" sx={{ fontWeight: 600, fontSize: { xs: 30, sm: 40, md: 60 }, letterSpacing: 1.5 }} >{homePageConfig.intro.title}</CustomText>
                <CustomText variant="h3" sx={{ pt: 5 }}>{homePageConfig.intro.slogan}</CustomText>
                <CustomText sx={{ pt: 2, letterSpacing: 2, color: theme.colors.grey, width: '100%', maxWidth: 800 }}>{homePageConfig.intro.description}</CustomText>
                <a style={{ textDecoration: 'none' }} href='#projects'>
                    <CustomButton sx={{ mt: 5 }} color='secondary' endIcon={<ArrowRightAltIcon />}>Get Started</CustomButton>
                </a>
            </IntroContentContainerWrapper>
        </IntroContainerWrapper>
    );
};