import React from 'react';
import { Chip, Avatar, makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  chipStyles: {
    cursor: 'pointer',
    '& .MuiChip-label': {
      color: '#fff',
    },
    '& .MuiChip-avatar': {
      color: '#fff',
    },
  },
}));

const CategoryChip = ({ category, fill }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Chip
        avatar={<Avatar style={{ backgroundColor: fill ? 'rgb(139, 27, 27)' : '#000' }}>{category.charAt(0)}</Avatar>}
        label={category}
        className={classes.chipStyles}
        style={{ backgroundColor: fill ? theme.palette.primary.main : theme.palette.common.dark }}
      />
    </div>
  );
};

export default CategoryChip;
