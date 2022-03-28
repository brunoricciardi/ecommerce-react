import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Item = ({libro}) => {
  return (
    <div>
        <Card>
  <Card.Img variant="top" src={libro.image} />
  <Card.Body>
    <Card.Title>{libro.title}</Card.Title>
    <Card.Text>
      {libro.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Item