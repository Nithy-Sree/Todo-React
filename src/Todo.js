import React from 'react';
import './Todo.css';
import { useState } from 'react';
import { ListItem, List, ListItemText, ListItemAvatar, Modal } from '@material-ui/core';
import { Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TimerIcon from '@material-ui/icons/Timer';
import EditIcon from '@material-ui/icons/Edit';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        // update the todo with new input text

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge:true});
        setOpen(false);
    };

    return (
        <List className="todo__list">
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update</Button>
            </div>
        </Modal>
        
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <TimerIcon></TimerIcon>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <EditIcon onClick={e => setOpen(true)} />
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
                {/* <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</Button> */}
            {/* <li>{props.text}</li> */}
        </List>
    )
}

export default Todo;
