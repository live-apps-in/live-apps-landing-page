import { styled } from "@mui/material";
import { CustomText } from "src/components";
import { homePageConfig } from "src/config";

const ContributorContainerWrapper = styled("a")`
    padding: 10px;
    display: grid;
    grid-template-rows: 150px auto;
    place-items: center;
    gap: 20px;
    text-decoration: none;
    transition: transform 0.3s ease;
    img {
        max-width: 150px;
        max-height: 150px
        object-fit: cover;
        border-radius: 50px;
    }
    &:hover {
        transform: scale(1.1);
    }
`;

const ContributorsContentContainer = styled("div")`
    *, > * {
        text-align: center;
    }
`;

export const Contributor: React.FC<typeof homePageConfig.contributors[0]> = (props) => {
    return (
        <ContributorContainerWrapper href={props.link} target='_blank'>
            <img src={props.image} alt={props.name} />
            <ContributorsContentContainer>
                <CustomText variant="h3" style={{ fontWeight: "bold" }}>{props.name}</CustomText>
                <CustomText variant="body2" color='primary'>{props.role}</CustomText>
            </ContributorsContentContainer>
        </ContributorContainerWrapper>
    );
};