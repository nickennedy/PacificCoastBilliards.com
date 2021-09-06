import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,} from 'reactstrap';
import eightBall from '../images/eight-ball.png'

const NavBar = (props) => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const toggle = () => setDropdownOpen(prevState => !prevState);

        return (
            <section id='nav'>
            <h2 id='nav-logo'>MoveThatPoolTable.com</h2>
                <div id='nav-bar'>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle id="nav-btn">
                            <img id="eight-ball" src={eightBall} alt=""/>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Get A Free Quote Now</DropdownItem>
                            <DropdownItem>Home</DropdownItem>
                            <DropdownItem>Contact</DropdownItem>
                            <DropdownItem>About</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </section>
            
        );
    }

export default NavBar;