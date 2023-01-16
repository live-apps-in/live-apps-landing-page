import { useTheme } from '@mui/material';
import { CustomButton } from "src/components";
import { NAVIGATION_LINKS } from "src/routes";
import { Link } from 'react-router-dom';

export const NavBar: React.FC<{navigationLinks?: NAVIGATION_LINKS}> = ({ navigationLinks = [] }) => {

    const theme = useTheme();

    return (
        <>
        {navigationLinks.map((navigationLinkItem, index) => (
            <a href={navigationLinkItem.path} key={index} style={{ textDecoration: 'none' }}>
                <CustomButton
                    variant='text' 
                    sx={{ color: theme.colors.pureBlack }}
                >
                    {navigationLinkItem.name}
                </CustomButton>
            </a>
        ))}
      </>
    );
};
