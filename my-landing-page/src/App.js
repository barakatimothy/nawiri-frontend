import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box, Container, Grid, Card, CardContent } from '@mui/material';

function App() {
  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '100vh', color: 'white' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: '#121212', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            PIPSY
          </Typography>
          <Box>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">ABOUT</Button>
            <Button color="inherit">REVIEWS</Button>
            <Button color="inherit">FAQ</Button>
            <Button color="inherit">BLOG</Button>
            <Button color="inherit">TEAM</Button>
          </Box>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>Log In</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg">
        <Grid container alignItems="center" sx={{ py: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Revolutionizing AI trading with cutting-edge technology
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Inhouse solutions powerful & sleek, intuitive dashboard for optimal trading perfomance, dedicated team,
              and unmatched customer support.
            </Typography>
            <Button variant="contained" color="success" size="large">
              GET STARTED
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Example phone image */}
            <Box
              component="img"
              sx={{
                maxWidth: '100%',
                borderRadius: '10px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              }}
              src="https://via.placeholder.com/300x600.png?text=Phone+Mockup"
              alt="Phone Dashboard"
            />
          </Grid>
        </Grid>
      </Container>

      {/* Pricing Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#1f1f1f' }}>
              <CardContent>
                <Typography variant="h6" color="success.main">
                 Algorithmic Trading
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Prove your trading skills and keep maximum of your profits for the lowest price.
                </Typography>
                <Typography variant="h4" color="white">$2,500</Typography>
                <Typography variant="body2" color="white">for $35</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#1f1f1f' }}>
              <CardContent>
                <Typography variant="h6" color="success.main">
                  Pipsy Academy
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Skip the evaluation and get your profits within just hours of opening an account.
                </Typography>
                <Typography variant="h4" color="white">$2,500</Typography>
                <Typography variant="body2" color="white">for $99</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#1f1f1f' }}>
              <CardContent>
                <Typography variant="h6" color="success.main">
                  Portfolio Management
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Pass our classic challenge and receive additional monthly salary for consistency.
                </Typography>
                <Typography variant="h4" color="white">$50,000</Typography>
                <Typography variant="body2" color="white">for $550</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1f1f1f', py: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; 2024 pipsy. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
        