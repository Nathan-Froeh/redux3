

import {connect} from 'react-redux';
import React, { Component } from 'react';
import {addIdea} from '../../actions/index';
import Call from '../Fetch/Fetch';
import {addReservations} from '../../reducers/addReservation'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idea: ''
    }
  }

  componentDidMount() {
    Call.getReservations()
      .then(res => console.log(res))
  }

  handleChange = (e) => {
    this.setState({idea: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addIdea(this.state.idea)
    this.setState({idea: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          onChange={this.handleChange}
          value={this.state.idea}
        />
        <input type="submit"/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addIdea: idea => dispatch(addIdea(idea)),
  addReservations: reservation => dispatch(addReservations(reservation))
})

export default connect(null, mapDispatchToProps)(Form)