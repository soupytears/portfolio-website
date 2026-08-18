import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/ContactForm.css';

export default function ContactForm() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', 'd11bf097-d602-4578-a8ea-ec576422e5ba');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? 'Success!' : 'Error');
  };

  return (
    <form onSubmit={onSubmit}>
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label className='form-label-custom'>name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          placeholder='your name'
          required
          className='form-input-custom'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label className='form-label-custom'>email</Form.Label>
        <Form.Control
          type='email'
          name='email'
          placeholder='your.email@example.com'
          required
          className='form-input-custom'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formMessage'>
        <Form.Label className='form-label-custom'>message</Form.Label>
        <Form.Control
          as='textarea'
          rows={4}
          name='message'
          placeholder='write your message to me here...'
          required
          className='form-input-custom'
        />
      </Form.Group>

      <Button type='submit' className='submit-btn-custom d-block mx-auto mt-3'>
        submit!
      </Button>
      {result && <p className='form-status-text mt-3 mb-0'>{result}</p>}
    </form>
  );
}
