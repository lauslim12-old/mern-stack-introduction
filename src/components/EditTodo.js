import React from 'react';
import axios from 'axios';
import { UPDATEURL, READURL } from '../variables/Variables';

class EditTodo extends React.Component {
  constructor(props) {
    super(props);

    this.setTodoPriority = this.setTodoPriority.bind(this);
    this.setTodoTitle = this.setTodoTitle.bind(this);
    this.setTodoResponsible = this.setTodoResponsible.bind(this);
    this.setTodoCompleted = this.setTodoCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todoTitle: '',
      todoResponsibility: '',
      todoPriority: '',
      todoCompleted: false
    };
  }

  componentDidMount() {
    axios.get(READURL + '/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          todoTitle: res.data.todoTitle,
          todoResponsibility: res.data.todoResponsibility,
          todoPriority: res.data.todoPriority,
          todoCompleted: res.data.todoCompleted
        });
      })
      .catch(err => {
        console.log(err);
      });
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

  setTodoCompleted(e) {
    this.setState({
      todoCompleted: !this.state.todoCompleted
    });
  }

  onSubmit(e) {
    e.preventDefault();

    /*
    console.log("Form submitted: ");
    console.log(`Todo Title: ${this.state.todoTitle}`);
    console.log(`Todo Responsibility: ${this.state.todoResponsibility}`);
    console.log(`Todo Priority: ${this.state.todoPriority}`);
    */

    const updatedTodo = {
      todoTitle: this.state.todoTitle,
      todoResponsibility: this.state.todoResponsibility,
      todoPriority: this.state.todoPriority,
      todoCompleted: this.state.todoCompleted
    }

    axios.put(UPDATEURL + '/' + this.props.match.params.id, updatedTodo)
      .then(res => {
        //console.log(res);
        this.props.history.push('/todos');
      });
  }

  render() {
    return (
      <div className="App-container">
        <h3 className="App-title">Update Todo</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="App-label">
              Title:
            </label>
            <input
              id="title"
              type="text"
              className="form-control"
              value={this.state.todoTitle}
              onChange={this.setTodoTitle}
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="responsibility" className="App-label">
              Responsibility:
            </label>
            <input
              id="responsibility"
              type="text"
              className="form-control"
              value={this.state.todoResponsibility}
              onChange={this.setTodoResponsible}
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todoPriority === "Low"}
                onChange={this.setTodoPriority}
              />
              <label className="App-label" htmlFor="priorityLow">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todoPriority === "Medium"}
                onChange={this.setTodoPriority}
              />
              <label className="App-label" htmlFor="priorityMedium">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todoPriority === "High"}
                onChange={this.setTodoPriority}
              />
              <label className="App-label" htmlFor="priorityHigh">High</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="completedCheckbox"
                type="checkbox"
                name="completedCheckbox"
                onChange={this.setTodoCompleted}
                checked={this.state.todoCompleted}
                value={this.state.todoCompleted}
              />
              <label className="App-label" htmlFor="completedCheckbox">Completed</label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-info" value="Update Todo" />
          </div>
        </form>
      </div>
    );
  }

}

export default EditTodo;