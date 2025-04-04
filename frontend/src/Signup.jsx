// Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Alert, Box, CircularProgress, Paper } from "@mui/material"; // Material UI components
import "./signup.css"; // Import your custom CSS

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to login after successful signup
    } catch (err) {
      setError(err.message);
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
          backgroundColor: "#1E1E1E", // Dark background for the form
          width: '100%',
          maxWidth: 400, // Max width for form container
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: "bold", color: "#bb86fc" }}>
          Sign Up
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: "100%", marginBottom: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSignup}>
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
            {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
          </Button>
        </Box>

        <p style={{ textAlign: "center", marginTop: 16, color: "white" }}>
          Already have an account? <a href="/" style={{ color: "#bb86fc" }}>Login</a>
        </p>
      </Paper>
    </Container>
  );
};

export default Signup;
