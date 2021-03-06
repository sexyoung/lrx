import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import style from './app.scss';

/**
 * Template React Component
 */
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  };
  static defaultProps = {
    children: null,
  }
  render() {
    return (
      <div className={style.wrapper}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="counter">Counter</Link></li>
          <li><Link to="todo">Todo</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
