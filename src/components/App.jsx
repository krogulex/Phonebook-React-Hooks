import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = event => {
    const filter = event.target.value;

    this.setState({
      filter: filter,
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('contacts'));
    console.log(dataLocalStorage)

    if (dataLocalStorage) {
      this.setState({
        contacts: dataLocalStorage
        }
    );
    }
  }
  componentDidUpdate() {
    const thisStateStringified = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', thisStateStringified);
    console.log(thisStateStringified)
  }

/*   componentDidUpdate(prevProps, prevState) {
    console.log(prevState.contacts)
    if (this.state.contacts !== prevState.contacts) {
      console.log(this.state)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  } */

  render() {

    return (
      <div className="content-box">
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={values => {
            if (
              this.state.contacts.find(
                contacts =>
                  contacts.name.toLowerCase() === values.name.toLowerCase()
              )
            ) {
              return alert(`${values.name} is already in contacts`);
            }

            this.state.contacts.push(values);
            this.setState(this.state.contacts);
          }}
        />

        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
