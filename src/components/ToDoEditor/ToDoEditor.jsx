import { Component } from "react";
import { Form, TextArea, TextAreaButton } from "./ToDoEditor.styled";


class ToDoEditor extends Component {
    state = {
        message:''
    };

    handleChange = e => {
        this.setState({ message: e.currentTarget.value })
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.onSubmit(this.state.message)
        this.setState({ message: ''})
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <TextArea value={this.state.message} onChange={this.handleChange} ></TextArea>
                <TextAreaButton type="submit">Зберегти</TextAreaButton>
            </Form>
        );
    }
}

export default ToDoEditor;