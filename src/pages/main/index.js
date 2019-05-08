import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuario/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>facebook/react</strong> (Et et aliqua qui labore fugiat magna irure mollit
              dolor.){' '}
            </p>
            <a href="http://github.com/tavareshenrique">Acessar</a>
          </li>
        </ul>
      </>
    );
  }
}
