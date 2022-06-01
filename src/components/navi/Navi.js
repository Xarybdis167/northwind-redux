import React, { Component } from 'react'
import { Nav, NavItem, NavLink, } from 'reactstrap'
import CartSummary from '../cart/CartSummary'

export default class Navi extends Component {
  render() {
    return (
        <div>
        <Nav pills>
          <NavItem>
            <NavLink
              active
              href="#"
            >
              Link
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="#">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Another Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
            >
              Disabled Link
            </NavLink>
          </NavItem>

          <CartSummary></CartSummary>
          
        </Nav>
      </div>
    )
  }
}
