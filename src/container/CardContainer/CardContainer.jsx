import React from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Card/Card';

function CardContainer(props) {



  const cards = props.ideas.map((idea, i) => <Card idea={idea} key={i}/>)
  console.log(props)
  return (
    <div>
      {cards}
    </div>
  )
}

const mapStateToProps = state => ({
  ideas: state.ideas
})

export default connect(mapStateToProps)(CardContainer)