import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

const AddMovie = () => {
  const [formValues, setFormValues] = useState({});
  const history = useHistory();

  const onChangeFormField = (event) => {
    const { value, name, type } = event.target;

    setFormValues({
      ...formValues,
      [name]: type === "number" ? Number(value) : value
    });
  }

  const onClickSubmit = async () => {
    try {
      await axios({
        url: 'http://localhost:4000/api/movies',
        method: 'POST',
        data: formValues
      });
      history.push("/");
    }
    catch (e) {
      alert("Add Movie Failed!")
    }
  };

  return (
    <Card>
      <Card.Header className="p-3">
        <h4>Add Movie</h4>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control type="text" placeholder="Enter movie" name="title" onChange={onChangeFormField} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Movie Rating</Form.Label>
          <Form.Control type="number" placeholder="Enter rating" name="rating" onChange={onChangeFormField} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="poster">
          <Form.Label>Movie poster</Form.Label>
          <Form.Control type="text" placeholder="Enter url" name="poster" onChange={onChangeFormField} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={onClickSubmit}>
          Submit
        </Button>
      </Card.Body>
    </Card>
  )
}

export default AddMovie;
