import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from '../../utils/API';
import Filter from '../Filter';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable() {
  const classes = useStyles();

//hooks
  const [ users,setUsers ] = useState([]);
  const [ userEntry,setUserEntry ] = useState('');

//get employee data & add to array
  useEffect(() => {
    const getUsers = async () => {
      try {
        const userList = await API.search()
        setUsers(userList.data.results)
      } catch (error) {
        console.log(error)        
      }
    }
    getUsers();
    console.log(users)
  }, [])

  function search() {
    const filteredList = users.filter(user => {
      return user.location.city.includes(userEntry);
    })
    console.log(filteredList)
  }

  return (
    <>
    <Filter setUserEntry={setUserEntry} search={search}/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.email}>
             <TableCell align="right"><img src={user.picture.thumbnail} /></TableCell>  
              <TableCell align="right">{user.name.first} {user.name.last}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.location.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
