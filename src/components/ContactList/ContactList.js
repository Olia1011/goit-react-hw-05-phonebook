import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import slideTransition from "../transitions/slide.module.css";


const ContactList = ({ contacts, onDelete }) => {
  return (
    <TransitionGroup>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={slideTransition}>
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
         </CSSTransition>
      ))}
    </TransitionGroup>
  );
}


export default ContactList;