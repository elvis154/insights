// LoginPage.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Ensure firebase is configured correctly
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Alert, Box, CircularProgress, Paper } from "@mui/material"; // Material UI components
import './login.css'; // Import your custom CSS (if you have any)

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate("/home"); // Navigate to the desired route after login
    } catch (err) {
      setLoading(false);
      console.error("Login Error:", err); // Log the error for debugging
      setError("Invalid email or password.");
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
          backgroundColor: "#1E1E1E", // Dark background for the form
          width: '100%',
          maxWidth: 400, // Max width for form container
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold", color: "#bb86fc" }}>
          Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: "100%", marginBottom: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              backgroundColor: "#333", // Dark background for inputs
              color: "white", // White text
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#bb86fc", // Light purple border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#bb86fc", // Light purple label color
              },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              backgroundColor: "#333", // Dark background for inputs
              color: "white", // White text
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#bb86fc", // Light purple border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#bb86fc", // Light purple label color
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              marginTop: 2,
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
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
