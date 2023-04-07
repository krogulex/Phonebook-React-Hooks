import { nanoid } from 'nanoid';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { id, name, value } = event.target;

    this.setState({
      id: id,
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    this.props.onSubmit({ ...this.state });

    form.reset();
  };

  render() {
    const nameInputId = nanoid();

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            id={nameInputId}
            type="text"
            placeholder="Enter name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
          <button className='add-button' type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
