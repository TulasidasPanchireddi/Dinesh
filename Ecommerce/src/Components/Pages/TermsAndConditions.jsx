import { Container, Typography, Box } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Terms and Conditions
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to our application. By accessing or using this project,
          you agree to comply with and be bound by the following terms
          and conditions.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Use of Application
        </Typography>
        <Typography variant="body1" paragraph>
          This application is developed for educational and demonstration
          purposes only. Unauthorized use or modification is not permitted.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. User Responsibility
        </Typography>
        <Typography variant="body1" paragraph>
          Users are responsible for maintaining the confidentiality of
          their data and for all activities performed within the application.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content, design, and source code are the intellectual property
          of the developer and must not be copied or redistributed without
          permission.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          The developer shall not be held responsible for any damages arising
          from the use or inability to use this application.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Changes to Terms
        </Typography>
        <Typography variant="body1">
          These terms may be updated at any time without prior notice.
          Continued use of the application indicates acceptance of the
          revised terms.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
