import React, { useState } from "react";
import { Box, TextField, Button, Typography, CircularProgress, Paper } from "@mui/material";
import { motion } from "framer-motion";
import './App.css'

const glassStyle = {
  background: "rgba(30, 30, 40, 0.7)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  borderRadius: "32px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  padding: "48px 32px",
  width: "100%",
  maxWidth: "400px",
  textAlign: "center",
  margin: "0 auto",
};
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

console.log('API URL:', apiUrl);

function App() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const msg = await response.text();
      setMessage(msg);
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        background: "radial-gradient(circle at 20% 20%, #232526 0%, #1a1a2e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', 'Roboto', Arial, sans-serif",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
            filter: ["blur(0px)", "blur(8px)", "blur(0px)"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            opacity: 0.18,
            zIndex: 0,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -360, 0],
            filter: ["blur(0px)", "blur(12px)", "blur(0px)"]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
            opacity: 0.22,
            zIndex: 0,
          }}
        />
      </motion.div>
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "400px" }}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <Paper elevation={12} style={glassStyle}>
            <Typography variant="h4" mb={2} color="#fff" fontWeight={700}>
              Email Notify
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <TextField
                type="email"
                label="Enter your email"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputProps={{ style: { color: "#fff", background: "rgba(255,255,255,0.08)" } }}
                InputLabelProps={{ style: { color: "#bbb" } }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(31,38,135,0.07)",
                  py: 1.5,
                  fontSize: "1rem",
                  ':active': { transform: 'scale(0.97)' },
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Send"}
              </Button>
            </form>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Typography mt={2} color="#fff" fontWeight={500} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "10px 16px" }}>
                  {message}
                </Typography>
              </motion.div>
            )}
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
}

export default App;
