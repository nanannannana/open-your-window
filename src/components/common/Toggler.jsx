import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Navbar from './Navbar';
import './Toggler.css';

export default function Toggler() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        size={40}
        color="#4FD1C5"
        easing="ease-in"
        rounded
        // onToggle={(toggled) => {
        //   toggled ? console.log('isOpen') : console.log('NotOpen');
        // }}
      />
      <br />
      {isOpen && <Navbar />}
    </>
  );
}
