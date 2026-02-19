import { Box, Typography, Container, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1e1e1e",
        color: "white",
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} My Project. All rights reserved.
        </Typography>

        <Typography variant="body2" align="center">
          <Link
            component={RouterLink}
            to="/terms"
            color="inherit"
            underline="hover"
          >
            Terms & Conditions
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
