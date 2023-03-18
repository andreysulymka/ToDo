import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 40px;
max-width: 90%`

export const Item = styled.li`
display: flex;
align-items: center;
gap: 10px;
padding: 20px;
border: 3px solid`

export const ToDoText = styled.p`
font-weight: bold`

export const DeleteButton = styled.button`
border: none;
padding: 5px;`

export const Input = styled.input`
width: 20px;
height: 20px
`