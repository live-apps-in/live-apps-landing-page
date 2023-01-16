import { useTheme } from '@mui/material';
// import { useLocation } from 'react-router-dom';
import { CustomButton } from "src/components";
import { NAVIGATION_LINKS } from "src/routes";
// import { isActiveRoute } from 'src/utils';

export const NavBar: React.FC<{navigationLinks?: NAVIGATION_LINKS}> = ({ navigationLinks = [] }) => {

    const theme = useTheme();
    // const { pathname, hash } = useLocation();

    // const route = pathname + hash;

    return (
        <>
        {navigationLinks.map((navigationLinkItem, index) => (
            <a href={navigationLinkItem.path} key={index} style={{ textDecoration: 'none' }}>
                <CustomButton
                    variant='text' 
                    sx={{ 
                        color: theme.colors.pureBlack, 
                        // borderBottom: isActiveRoute({ path: navigationLinkItem.path, route }) ? `1px solid ${theme.colors.black}` : 'none' 
                    }}
                >
                    {navigationLinkItem.name}
                </CustomButton>
            </a>
        ))}
      </>
    );
};
