// LogoutPage.js
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Alert, Box, CircularProgress, Paper } from "@mui/material"; // Material UI components
import "./logout.css"; // Import your custom CSS

const LogoutPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogoutClick = async () => {
    setLoading(true);
    try {
      await signOut(auth); // Log the user out
      alert("Logout successful! 👋");
      navigate("/"); // Redirect to the login page after logout
    } catch (err) {
      console.error("Logout failed:", err.message);
      setError("An error occurred during logout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "0vh", // Center vertically
        backgroundColor: "#121212", // Dark background color
      }}
    >
      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#1E1E1E", // Dark background for form
          width: "100%",
          maxWidth: 400, // Max width for form container
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold", color: "#bb86fc" }}>
          Logout - Windows 95
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: "100%", marginBottom: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="div" sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ marginBottom: 2, color: "white" }}>
            You are logged in!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogoutClick}
            fullWidth
            sx={{
              padding: 1.5,
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: 2,
              backgroundColor: "#6200ea", // Dark purple button color
              ":hover": {
                backgroundColor: "#3700b3", // Darker purple on hover
                boxShadow: 3,
              },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Logout"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LogoutPage;
