import React from 'react';
import { Card } from 'react-bootstrap';

const CardLayout = () => {
  return (
    <Card style={{ width: '16rem'}}>
      	<h2 align="center">Card</h2>
		<Card.Body>
			<Card.Title align="center"> Card Title</Card.Title>
			<Card.Subtitle align="center" className="mb-2 text-muted"> Card Subtitle</Card.Subtitle>
			<Card.Text align="center"> Card content</Card.Text>
		</Card.Body>
	</Card>
    );
}
export default CardLayout;


