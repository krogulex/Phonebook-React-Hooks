import { nanoid } from 'nanoid';
import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const nameInputId = nanoid();

  const [contact, setContacts] = useState({
    id: '',
    name: '',
    number: '',
  });
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  /*   const handleChange = event => {
    console.log(event.target)
    const { id, name, value } = event.target;

    if (name === "name") {
      setName(value)
    }
    if (name === "number") {
      setNumber(value)
    }
    setID(id)

console.log(id, name, number)

  }; */

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    setID(nameInputId);

    const newContact = {id, name, number}

    form.reset();

    onSubmit({ newContact })

    setName("");
    setNumber("");
    setID("")
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          id={nameInputId}
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onInput={e => {
            setName(e.target.value);
            setID(nameInputId);
          }}
        />
        <div>
          <input
            id={nameInputId}
            type="tel"
            placeholder="Enter phone number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onInput={e => setNumber(e.target.value)}
          />
        </div>
        <button className="add-button" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
