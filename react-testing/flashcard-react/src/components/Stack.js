import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';

class Stack extends Component {
  render() {
    const { stack } = this.props;

    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <h3>{stack.title}</h3>
        {
          stack.cards.map(card => {
            return (
              <Card key={card.id} card={card}/>
            )
          })
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
