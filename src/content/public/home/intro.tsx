import { styled } from "@mui/material"
import { AISignWaveGif } from "src/assets"
import { CustomButton, CustomText } from "src/components"
import { homePageConfig } from "src/config"

const IntroContentContainerWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
`

const IntroContainerWrapper = styled('div')`
    width: 100vw;
    height: 100%;
    background-image: url("${AISignWaveGif}");
    background-position: right 0 bottom 20%;
    background-size: 100% auto;
    background-repeat: no-repeat;
`

export const Intro: React.FC = () => {
    return (
        <IntroContainerWrapper>
            <IntroContentContainerWrapper>
                <CustomText variant="h1" style={{fontWeight: 'bold'}}>Jaga will give the content</CustomText>
                <CustomButton href={homePageConfig.pingHomepage}>Learn more</CustomButton>
            </IntroContentContainerWrapper>
        </IntroContainerWrapper>
    )
}