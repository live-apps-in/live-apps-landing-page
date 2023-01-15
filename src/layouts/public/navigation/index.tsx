import { styled } from "@mui/material";
import { FlexRow } from "src/components";
import { NAVIGATION_LINKS } from "src/routes";

const NavigationLinksContainer = styled(FlexRow)`
    
`;

export const Navigation: React.FC<{navigationLinks?: NAVIGATION_LINKS}> = ({ navigationLinks = [] }) => {
    return <NavigationLinksContainer>Navigation Links</NavigationLinksContainer>;
};