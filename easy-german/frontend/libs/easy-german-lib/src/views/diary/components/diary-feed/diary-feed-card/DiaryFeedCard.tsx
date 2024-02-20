import {
  Avatar,
  Box,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';

const DiaryFeedCard = () => {
  return (
    <Box>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'red' }}>R</Avatar>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent sx={{ paddingTop: '8px' }}>
        <Typography variant="h5" component="div">
          ssasasa
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: '24px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur odio sit amet odio tristique, vel tincidunt risus
          facilisis. Integer eget justo vitae mi semper blandit. Ut sit amet
          scelerisque sapien. Vivamus auctor odio eget metus fringilla, vel
          posuere velit ultrices. Nunc tristique justo vel quam suscipit, nec
          elementum lectus auctor. Fusce aliquet fermentum nisi, id auctor lacus
          condimentum in. Proin malesuada ultricies purus, ut tempor urna
          scelerisque sit amet. Sed interdum, quam non auctor tincidunt, odio
          quam convallis metus, vel luctus lacus urna quis libero. Quisque
          fringilla cursus lectus, vitae facilisis lectus convallis ut. Nullam
          ac erat vel est convallis euismod. Sed sodales quam vel mauris
          ultrices, ut sollicitudin ipsum fermentum. Curabitur id ultricies dui.
          In hac habitasse platea dictumst. Curabitur nec interdum sem.
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <Typography variant="h6">0 like this</Typography>
        </Stack>
      </CardActions>
    </Box>
  );
};

export default DiaryFeedCard;
