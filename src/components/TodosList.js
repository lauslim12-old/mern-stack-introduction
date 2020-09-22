import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ENDPOINTURL } from './../variables/Variables';

const Todo = (props) => (
  <tr>
    {!props.todo.todoCompleted && <td></td>}
    {props.todo.todoCompleted && (
      <td>
        <FontAwesomeIcon icon={faCheck} />
      </td>
    )}
    <td>{props.todo.todoTitle}</td>
    <td>{props.todo.todoResponsibility}</td>
    <td>{props.todo.todoPriority}</td>
    <td>
      <Link to={"/edit/" + props.todo.id}>
        <FontAwesomeIcon icon={faEdit} className="App-table-icon" />
      </Link>
    </td>
  </tr>
);

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  fetchData() {
    axios.get(ENDPOINTURL)
      .then(res => {
        this.setState({
          todos: res.data.data.todos,
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  todoTable() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div className="App-container">
        <h3 className="App-title">Todo List</h3>

        <div className="table-responsive">
          <table className="table table-dark table-striped mt-3 text-center">
            <thead>
              <tr>
                <td>Status</td>
                <td>Title</td>
                <td>Responsibility</td>
                <td>Priority</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              { this.todoTable() }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TodosList;