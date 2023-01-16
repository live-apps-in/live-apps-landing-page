import { CustomIconButton } from "src/components";
import NavigationIcon from '@mui/icons-material/Navigation';
import { styled, useTheme } from "@mui/material";
import { mediaQuery } from "src/theme";

const ScrollToTopContainer = styled('a')`
    position: fixed;
    z-index: 10;
    bottom: 30px;
    right: 30px;
    ${mediaQuery.up('sm')} {
        bottom: 50px;
        right: 50px;
    }
`;

export const ScrollToTop: React.FC = () => {

    const theme = useTheme();

    return (
        <ScrollToTopContainer href='#intro'>
            <CustomIconButton color="primary" sx={{ border: `1px solid ${theme.colors.primary}` }}>
                <NavigationIcon />
            </CustomIconButton>
        </ScrollToTopContainer>
    );
};