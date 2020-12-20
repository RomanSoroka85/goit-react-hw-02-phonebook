import React, {Component} from "react";
import PhoneBook from "./Components/Phone/PhoneBook";
import PhoneEditor from "./Components/Phone/PhoneEditor";
// import {uuid} from 'uuidv4';
export default class App extends Component {
  state = {
      contacts: [],
      name: "",
    };
  render() {
    return (
      <>     <PhoneBook/> 
         <PhoneEditor />
    </>
    );
  }
}

// export default class App extends Component {
//   state = {
//     phones: [],
//   };
//   addTask = (contacts, name) => {
//     const phone = {
//       contacts,
//       name,
//       completed: false,
//     };
//     this.setState((prevState) => {
//       return {
//         phones: [...prevState.phones, phone],
//       };
//     });
//   };

//   render() {
//     const { tasks } = this.state;

//     return;
//     <>
//       <PhoneEditor  />

//       <PhoneBook onAddTask={this.addTask}/>
//     </>;
//   }
// }
