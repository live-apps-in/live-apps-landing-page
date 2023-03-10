import { styled, Divider } from '@mui/material';
import { CustomText, FlexColumn, XYCenter } from 'src/components';
import { homePageConfig } from 'src/config';
import { layoutSettings } from 'src/layouts/public/layout-settings';
import { mediaQuery } from 'src/theme';
import { SocialLink } from './social-link';

const JoinUsContainer = styled(FlexColumn)`
    gap: 50px;
    width: 100%;    
    padding: 20px;
    min-height: calc(100vh - ${layoutSettings.header.height});
    justify-content: center;
    ${mediaQuery.up('sm')} {
        padding: 20px 10vw;
    }
`;

const JoinUsContentContainer = styled(FlexColumn)`
    width: 100%;
    gap: 20px;
    align-items: center;
`;

const JoinUsLinksContainer = styled(XYCenter)`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`;

const CommunityGradient = styled('span')`
    background: linear-gradient(90deg, #491EC6 0%, #F7354D 100%);
    background-clip: text;
    text-fill-color: transparent;
`;

export const JoinUS: React.FC = () => {
    return (
        <JoinUsContainer id='joinus' sx={{ scrollMarginTop: layoutSettings.header.height }}>
            <CustomText variant='h1'>Join Our <CommunityGradient>Community</CommunityGradient></CustomText>
            <JoinUsContentContainer>
                <CustomText align='center' variant='h2' sx={{fontWeight: '300'}}>{homePageConfig.joinUs.description}</CustomText>
                <Divider sx={{width: '100%'}} />
                <JoinUsLinksContainer>
                    {homePageConfig.joinUs.links.map((link, index) => <SocialLink {...link} key={index} />)}
                </JoinUsLinksContainer>
            </JoinUsContentContainer>
        </JoinUsContainer>
    );
};