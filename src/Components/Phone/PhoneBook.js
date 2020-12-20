import React from "react";

const PhoneBook = ({ contactList }) => {
  console.log(contactList);
  return (
    <>
      <ul>
        {contactList.map((el) => {
          console.log(el);
          return (
            <li key={el.id}> 
              <p>{el.name}</p>
              <p>{el.number}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PhoneBook;
