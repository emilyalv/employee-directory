import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Filter(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Filter by City" variant="outlined" onChange={(e) => props.setUserEntry(e.target.value)}/><br/>
      <Button variant="contained" color="primary" onClick={props.search}>Filter</Button>
      <Button id="clearBtn" variant="contained" color="primary" onClick={props.clear}>Clear Filter</Button>
    </form>
  );
}
