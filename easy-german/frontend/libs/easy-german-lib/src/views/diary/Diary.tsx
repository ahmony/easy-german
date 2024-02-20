import { Stack, TextField } from '@mui/material';
import { classes } from './Diary.styles';
import DiaryFeed from './components/diary-feed/DiaryFeed';
import Calendar from '../../components/calendar/Calendar';
import Dialog from '../../components/dialog/Dialog';
import { useState } from 'react';

const Diary = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogVisibilityChange = (isOpen: boolean) => {
    setIsDialogOpen(isOpen);
  };

  return (
    <Stack sx={classes.container}>
      <Stack sx={classes.leftContainer}>
        <TextField
          multiline
          minRows={1}
          maxRows={10}
          placeholder="Tell us how did you spend your day..."
          onMouseDown={(e) => {
            e.preventDefault();
            handleDialogVisibilityChange(true);
          }}
        />
        <DiaryFeed />
      </Stack>
      <Stack sx={classes.rightContainer}>
        <Calendar />
      </Stack>
      <Dialog open={isDialogOpen} onClose={handleDialogVisibilityChange} />
    </Stack>
  );
};

export default Diary;
