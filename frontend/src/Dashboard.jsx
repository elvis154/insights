// Dashboard.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./dashboard.css"; // Import custom CSS

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* AppBar (Header) */}
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h2" align="center" gutterBottom className="heading">
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="h5" align="center" paragraph className="subheading">
          A simple and professional homepage that shows the core features of your dashboard.
        </Typography>

        {/* Card Grid */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Feature One
                </Typography>
                <Typography variant="body1">
                  This is a brief description of the first feature offered by your dashboard.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Feature Two
                </Typography>
                <Typography variant="body1">
                  This section highlights the second feature, which enhances user experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Feature Three
                </Typography>
                <Typography variant="body1">
                  The third feature explains how your dashboard offers value to users.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "1.2rem",
              padding: "12px 24px",
              borderRadius: 3,
            }}
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
