import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';
import React from "react";


export default class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <Link  href="/">Home</Link>
        <Link  href="/">About</Link>
        <Link  href="/">Contact</Link>
      </Menu>
    );
  }
}