import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const Todos = () => {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1 >Todo List</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >ID</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Completed/Not Completed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((todo) => (
                            <TableRow key={todo.id}>
                                <TableCell align="center">{todo.id}</TableCell>
                                <TableCell align="center">{todo.title}</TableCell>
                                <TableCell align="center">{todo.completed ? 'Completed' : 'Not Completed'}</TableCell>              </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default Todos;