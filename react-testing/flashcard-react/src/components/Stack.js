import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Stack extends Component {
  render() {
    const { stack } = this.props;
    console.log('stack props', stack)
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>{stack.title}</h3>
        {
          stack.cards.map(card =>
            <div key={card.id}>
              {card.prompt}
            </div>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { stack: state }
}

const connectComponent = connect(mapStateToProps, null);

export default connectComponent(Stack);
