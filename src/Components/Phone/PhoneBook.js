import React, { Component } from "react";
import s from "./phoneBook.module.css"

export default class PhoneBook extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleInputName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleInputPhone = (e) => {
    this.setState({ contacts: e.target.value });
  };
  hendleSubmit = (e)=>{
      e.preventDefault();
      this.props.onAddTask(this.state.text)
  }
  render() {
    return (
      <div className={s.phone}>
        <h2>Phonebook</h2>
        <h3>Name</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInputName}
        />
        <h3>Phone</h3>
        <input
          type="number"
          value={this.state.contacts}
          onChange={this.handleInputPhone}
        />
        <form className={s.description} onSubmit={this.hendleSubmit}>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}