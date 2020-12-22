import React, { Component } from "react";
import PhoneBook from "./Components/Phone/PhoneBook";
import PhoneEditor from "./Components/Phone/PhoneEditor";
import PhoneFilter from "./Components/Phone/PhoneFilter";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
    filter: "",
  };

  addNewContact = (object) => {
    this.setState({
      contacts: [...this.state.contacts, object],
    });
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  onHandleChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFiltredContacts = () => {
    return [
      ...this.state.contacts.filter((contact) =>
        contact.name
          .toLowerCase()
          .includes(this.state.filter.toLocaleLowerCase())
      ),
    ];
  };

  render() {
    return (
      <>
        <PhoneEditor x={this.addNewContact} />
        <PhoneFilter
          filter={this.state.filter}
          onHandleChangeFilter={this.onHandleChangeFilter}
        />
        <PhoneBook
          contactList={this.getFiltredContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
