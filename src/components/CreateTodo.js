import React from 'react';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.setTodoPriority = this.setTodoPriority.bind(this);
    this.setTodoTitle = this.setTodoTitle.bind(this);
    this.setTodoResponsible = this.setTodoResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todoTitle: '',
      todoResponsibility: '',
      todoPriority: '',
      todoCompleted: false
    }
  }

  setTodoTitle(e) {
    this.setState({
      todoTitle: e.target.value
    });
  }

  setTodoResponsible(e) {
    this.setState({
      todoResponsibility: e.target.value
    });
  }

  setTodoPriority(e) {
    this.setState({
      todoPriority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Form submitted: ");
    console.log(`Todo Title: ${this.state.todoTitle}`);
    console.log(`Todo Responsibility: ${this.state.todoResponsibility}`);
    console.log(`Todo Priority: ${this.state.todoPriority}`);

    this.setState({
      todoTitle: '',
      todoResponsibility: '',
      todoPriority: '',
      todoCompleted: false
    })
  }

  render() {
    return (
      <div className="App-container">
        <h3 className="App-title">Create New Todo</h3>
      </div>
    )
  }
}

export default CreateTodo;