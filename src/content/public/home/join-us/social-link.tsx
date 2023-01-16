import { styled } from "@mui/material/styles";
import { FlexColumn } from "src/components";
import { homePageConfig } from "src/config";

const SocialLinkContainer = styled(FlexColumn)`
    flex: 1;
    img {
        width: 150px;
        height: auto;
        object-fit: cover;
    }
`;

export const SocialLink: React.FC<typeof homePageConfig.joinUs.links[0]> = (props) => {
    return (
        <a href={props.link} target='_blank' rel="noreferrer">
            <SocialLinkContainer>
                <img src={props.image} alt={props.name} />
            </SocialLinkContainer>
        </a>
    );
};