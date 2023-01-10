import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import img from './whisky.png';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

interface WhiskeyProps {
  name: string,
  rating: number,
  price: number,
  cask: string,
  alcohol: number
}

const Whiskey: React.FC<WhiskeyProps> = ({ name, rating, price, cask, alcohol }) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <Img alt="complex" src={img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="subtitle1" component="div">
                {name}
              </Typography>
              <Stack direction="row" alignItems="center" gap={0} spacing={0.5}>
                <StarIcon sx={{ color: "orange" }} />
                <Typography variant="body1">{rating}</Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary">캐스크: {cask}</Typography>
              <Typography variant="body1" color="text.secondary">도수: {alcohol}%</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" component="div">
              ₩{price.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}


export default Whiskey;
