import { useState } from 'react';
import { styled } from "@mui/material";
import { CustomIconButton, FlexRow, MediaQueryBox } from "src/components";
import { NAVIGATION_LINKS } from "src/routes";
import { NavigationDrawer, NAVIGATION_DRAWER_PROPS } from './drawer';
import { NavBar } from './navbar';


const NavigationLinksContainer = styled(FlexRow)`
    
`;

export const Navigation: React.FC<{navigationLinks?: NAVIGATION_LINKS} & NAVIGATION_DRAWER_PROPS> = ({ navigationLinks = [], isOpen, setIsOpen }) => {

    return (
        <NavigationLinksContainer>
            <MediaQueryBox down={{ breakpoint: 'sm', style: { display: 'none' } }}>
                <NavBar navigationLinks={navigationLinks} />
            </MediaQueryBox>
            <MediaQueryBox down={{ breakpoint: 'sm', style: { display: 'none' } }}>
                <NavigationDrawer navigationLinks={navigationLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
            </MediaQueryBox>
        </NavigationLinksContainer>
    );
};
