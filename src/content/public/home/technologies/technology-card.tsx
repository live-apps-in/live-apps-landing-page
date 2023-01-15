import { homePageConfig } from "src/config";
import { styled, Divider, useTheme } from "@mui/material";
import { CustomText, XYCenter } from "src/components";
import { mediaQuery } from "src/theme";

const TechnologyCardContainer = styled("a")(({theme}) => `
    display: grid;
    grid-template-rows: auto 100px 0.5px auto;
    gap: 20px;
    padding: 20px;
    flex: 1;
    min-width: 200px;
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s ease;
    border: 1px solid lightgrey;
    border-radius: 50px;
    background-color: ${theme.colors.white};
    text-decoration: none;
    &:hover {
        transform: scale(1.1);
        box-shadow: 15px 15px 10px 0px rgba(227,227,227,0.7);
    }
    ${mediaQuery.up("xs")} {
        width: 75%;
        max-width: 75%;
    }
    ${mediaQuery.up("sm")} {
        width: 50%;
        max-width: 50%;
    }
    ${mediaQuery.up("md")} {
        width: 25%;
        max-width: 25%;
    }
`);

const TechnologyCardImageContainer = styled(XYCenter)`
    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
`;

export const TechnologyCard: React.FC<typeof homePageConfig.technologies[0]> = (props) => {

    const theme = useTheme();

    return <TechnologyCardContainer href={props.link} target="_blank">
        <CustomText variant="h2" style={{ textAlign: "center" }}>{props.name}</CustomText>
        <TechnologyCardImageContainer>
            <img src={props.image} alt={props.name} />
        </TechnologyCardImageContainer>
        <Divider sx={{ background: theme.colors.primary }} />
        <CustomText variant="caption" color='primary' align="center">{props.description}</CustomText>
    </TechnologyCardContainer>;
}; 