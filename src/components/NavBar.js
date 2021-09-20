import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,} from 'reactstrap';
import eightBall from '../images/eight-ball.png'
import PCB_Writing from '../images/PCB_Writing.png'

const NavBar = (props) => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const toggle = () => setDropdownOpen(prevState => !prevState);

        return (
            <section id='nav'>
                <img id='nav-logo' src={PCB_Writing} alt="" />
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