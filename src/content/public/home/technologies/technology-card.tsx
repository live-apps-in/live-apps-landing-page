import { homePageConfig } from "src/config";
import { styled } from "@mui/material";
import { CustomText, FlexColumn, XYCenter } from "src/components";
import { mediaQuery } from "src/theme";

const TechnologyCardContainer = styled('div')`
    display: grid;
    grid-template-rows: 100px auto;
    padding: 20px;
    min-width: 250px;
    width: 100%;
    text-decoration: none;
    flex: 1;
    ${mediaQuery.up("xs")} {
        width: 75%;
        max-width: 75%;
    }
    ${mediaQuery.up("sm")} {
        width: 50%;
        max-width: 50%;
    }
`;

const TechnologyCardListItemsContainer = styled(FlexColumn)`
    width: 100%;
    gap: 10px;
`;

const TechnologyCardListItemContainer = styled('div')(({theme}) => `
    display: grid;
    min-width: fit-content;
    grid-template-columns: 50px auto;
    align-items: center;
    padding: 10px;
    gap: 20px;
    border-radius: 10px 20px;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    background-color: ${theme.colors.white};
    &:hover {
        transform: scale(1.1);
        border: 1px solid lightgrey;
        box-shadow: 15px 15px 10px 0px rgba(227,227,227,0.7);
    }
`);

const TechnologyCardListItemImageContainer = styled(XYCenter)`
    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        border-radius: 5px;
    }
`;

export const TechnologyCard: React.FC<typeof homePageConfig.technologies[0]> = (props) => {

    return (<TechnologyCardContainer>
        <CustomText variant="h2" style={{ textAlign: "center", fontWeight: 300 }}>{props.name}</CustomText>
        <TechnologyCardListItemsContainer>
            {
                props.technologies.map((technology, index) => 
                    <a href={technology.link} target={'_blank'} key={index} rel="noreferrer" style={{ textDecoration: 'none' }}>
                        <TechnologyCardListItemContainer>
                            <TechnologyCardListItemImageContainer>
                                <img src={technology.image} alt={technology.name} />
                            </TechnologyCardListItemImageContainer>
                            <CustomText variant="h4">{technology.name}</CustomText>
                        </TechnologyCardListItemContainer>
                    </a>
                )
            }
        </TechnologyCardListItemsContainer>
    </TechnologyCardContainer>);
}; 