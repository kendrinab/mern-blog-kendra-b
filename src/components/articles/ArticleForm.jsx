import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const ArticleForm = () => {
  return (
    <div>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control
  type="text"
  placeholder="Title of your article..."
  required={true}
  onChange={e => setValues({...values, title: e.target.value})}
/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Text</Form.Label>
    <Form.Control
  as="textarea"
  rows="5"
  placeholder="Text for your article..."
  required={true}
  onChange={e => setValues({...values, text: e.target.value})}
/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

const initialState = { title: '', text: '' }
const [values, setValues] = useState(initialState)
    </div>
  );
}

export default ArticleForm;
