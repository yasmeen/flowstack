import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import FlowCard from './FlowCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FlowGrid() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={4}>
          <FlowCard />
        </Grid>
        <Grid xs={4}>
        <FlowCard />
        </Grid>
        <Grid xs={4}>
        <FlowCard />
        </Grid>
        <Grid xs={4}>
        <FlowCard />
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}