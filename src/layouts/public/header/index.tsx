import { Actions } from "./actions";
import { Logo } from "./logo";
import { styled } from "@mui/material";
import { NAVIGATION_LINKS } from "src/routes";
import { JustifyBetween, YCenter } from "src/components";
import { Navigation } from "../navigation";
import { NAVIGATION_DRAWER_PROPS } from "../navigation/drawer";

const StyledHeader = styled(JustifyBetween)(({theme}) => `
  padding: 10px 10vw 0;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${theme.colors.white};
  z-index: 10;
`);

export interface HEADER_PROPS {
  navigationLinks?: NAVIGATION_LINKS;
  actions?: React.ReactNode;
}

export const Header: React.FC<
  HEADER_PROPS & { children?: React.ReactNode } & NAVIGATION_DRAWER_PROPS
> = ({
  navigationLinks = [],
  actions = null,
  isOpen,
  setIsOpen
}) => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation navigationLinks={navigationLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
      <YCenter>{actions && <Actions>{actions}</Actions>}</YCenter>
    </StyledHeader>
  );
};
