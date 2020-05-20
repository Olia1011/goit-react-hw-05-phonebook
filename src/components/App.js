import React, { Component } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import dates from '../LocalStorage/LocalStorage';
import styles from './App.css';
import fadeTransition from './transitions/fade.module.css';
import slideTransition from './transitions/slide.module.css';
import { CSSTransition } from 'react-transition-group';
import { Bounce } from './logo/Bounce';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    isShow: false,
  };

  changeHandler = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContactbyId = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: [...updatedContacts],
    });
  };

  addContact = newContact => {
    const { name } = newContact;
    const newName = this.state.contacts.some(contact => contact.name === name);
    if (!newName) {
      this.setState(prevstate => ({
        contacts: [...prevstate.contacts, newContact],
      }));
    } else this.setState(prevState => ({ isShow: !prevState.isShow }));
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    if (contacts.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  };

  componentDidMount() {
    if (dates.get('contacts')) {
      this.setState({
        contacts: [...dates.get('contacts')],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      dates.save('contacts', this.state.contacts);
    }
  }

  render() {
    const { filter, isShow, name } = this.state;
    return (
      <>
        <Section>
          <CSSTransition
            in={isShow}
            timeout={500}
            unmountOnExit
            classNames={slideTransition}>
            <Notification name={name} />
          </CSSTransition>
          <Bounce>
            <h2 className={styles.title}>Phonebook</h2>
          </Bounce>
          <ContactForm addContact={this.addContact} />
        </Section>

        <Section>
          <h2 className={styles.title}>Contacts</h2>
          <CSSTransition
            in={this.state.contacts.length > 2}
            timeout={250}
            unmountOnExit
            classNames={fadeTransition}>
            <Filter value={filter} onChange={this.changeHandler} />
          </CSSTransition>

          <ContactList
            contacts={this.filterContactsByName()}
            onDelete={this.deleteContactbyId}
          />
        </Section>
      </>
    );
  }
}

export default App;
