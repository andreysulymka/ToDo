import React from "react";
import { List, Item, ToDoText, DeleteButton, Input } from "./ToDoList.styled";


const ToDoList = ({ todos, onDeleteToDo, onToggleCompleted }) => (<List>{todos.map(({ id, name, completed}) => (<Item key={id}>
    <Input type="checkbox" checked={completed} onChange={()=>onToggleCompleted(id)}></Input>
    <ToDoText>{name}</ToDoText><DeleteButton onClick={() => onDeleteToDo(id)}>Удалить</DeleteButton></Item>))}</List>);

export default ToDoList;
