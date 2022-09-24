import { styled } from "@mui/material";

const StyledPublicLayout = styled("div")(({ theme }) => ({
  ...theme.layouts.public,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
}));

export const PublicLayout = ({ children }) => {
  return <StyledPublicLayout>{children}</StyledPublicLayout>;
};
