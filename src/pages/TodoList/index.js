import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text} <button onClick={() => removeTodo(todo.id)}>Remover</button>{' '}
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo('Entrar na Comunidade')}>Adicionar</button>
  </>
);

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
