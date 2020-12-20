import React, { Component } from "react";
import PhoneBook from "./Components/Phone/PhoneBook";
import PhoneEditor from "./Components/Phone/PhoneEditor";
// import {uuid} from 'uuidv4';

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  addNewContact = (object) => {
    this.setState({
      contacts: [...this.state.contacts, object],
    });
  };

  render() {
    return (
      <>
        <PhoneEditor x={this.addNewContact}/>
        <PhoneBook contactList={this.state.contacts}/>
      </>
    );
  }
}
