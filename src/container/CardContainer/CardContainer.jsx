import React from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card';

function CardContainer(props) {



  const cards = props.reservations.map((res, i) => 
  (
    <Card 
    idea={res} 
    key={i}
  />))

  return (
    <div>
      {cards}
    </div>
  )
}

const mapStateToProps = state => ({
  ideas: state.ideas,
  reservations: state.reservations
})

export default connect(mapStateToProps)(CardContainer)