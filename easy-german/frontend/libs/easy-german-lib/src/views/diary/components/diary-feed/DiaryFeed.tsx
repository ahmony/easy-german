import { Stack } from '@mui/material';
import DiaryFeedCard from './diary-feed-card/DiaryFeedCard';

const DiaryFeed = () => {
  return (
    <Stack sx={{ gap: '70px' }}>
      <DiaryFeedCard />
      <DiaryFeedCard />
    </Stack>
  );
};

export default DiaryFeed;
