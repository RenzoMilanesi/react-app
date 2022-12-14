
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CartForm(props) {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function onInputChange(evt) {
    const nameInput = evt.target.name;
    const value = evt.target.value;
    const newData = { ...data };

    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;
    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: 'flex', marginBottom: 8 }}>
        <label htmlFor='name' style={{ width: '100px', marginRight: 4 }}>
          Nombre
        </label>
        <input
          required
          value={data.name}
          name='name'
          type='text'
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: 'flex', marginBottom: 8 }}>
        <label htmlFor='email' style={{ width: '100px', marginRight: 4 }}>
          Email
        </label>
        <input
          required
          value={data.email}
          name='email'
          type='email'
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: 'flex', marginBottom: 8 }}>
        <label htmlFor='phone' style={{ width: '100px', marginRight: 4 }}>
          Teléfono
        </label>
        <input
          required
          value={data.phone}
          name='phone'
          type='phone'
          onChange={onInputChange}
        />
      </div>
      <Button
        disabled={data.name === '' || data.phone === '' || data.email === ''}
        type='submit'
        variant='outline-success'
      >
        Finalizar Compra
      </Button>
    </form>
  );
}
