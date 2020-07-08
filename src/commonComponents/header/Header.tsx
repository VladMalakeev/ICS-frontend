import React, {useEffect, useState} from "react";
import {
    DriverLinks, DriverSeparator,
    HamburgerWrap,
    HeaderLeftLinks,
    HeaderLink,
    HeaderRightLinks,
    HeaderWrap,
    Logo,
    LogoLink
} from "./HeaderStyles";
import logo from '../../images/logo256.png'
import {NavLink} from "react-router-dom";
import {Drawer} from "antd";
import Hamburger from 'hamburger-react'

export const Header = () => {
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        window.addEventListener('resize', checkDrawer)
    });

    const checkDrawer = () => {
        if(window.innerWidth > 1000 && visible){
            setVisible(false)
        }
    };

    return(
        <>
            <HeaderWrap>
                <HeaderLeftLinks>
                    <HeaderLink><NavLink to={'/applicants'}>АБИТУРИЕНТАМ</NavLink></HeaderLink>
                    <HeaderLink><NavLink to={'/students'}>СТУДЕНТАМ</NavLink></HeaderLink>
                    <HeaderLink><NavLink to={'/graduates'}>ВЫПУСКНИКАМ</NavLink></HeaderLink>
                </HeaderLeftLinks>

                <LogoLink to={'/'}> <Logo src={logo}/></LogoLink>
                <HamburgerWrap>
                    <Hamburger color={'white'} toggled={visible} toggle={setVisible} />
                </HamburgerWrap>

                <HeaderRightLinks>
                    <HeaderLink><NavLink to={'/bulletin-board'}>ДОСКА ОБЪЯВЛЕНИЙ</NavLink></HeaderLink>
                    <HeaderLink><span>+38(066)-254-23-23</span></HeaderLink>
                </HeaderRightLinks>
            </HeaderWrap>

            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={'100%'}
                drawerStyle={{background:'linear-gradient(216.51deg, #08238C 26.5%, #1266BB 95.77%)'}}
            >
                <DriverLinks>
                    <HeaderLink><span>+38(066)-254-23-23</span></HeaderLink>
                </DriverLinks>

                <DriverSeparator/>

                <DriverLinks>
                    <HeaderLink onClick={onClose}><NavLink to={'/applicants'}>АБИТУРИЕНТАМ</NavLink></HeaderLink>
                    <HeaderLink onClick={onClose}><NavLink to={'/students'}>СТУДЕНТАМ</NavLink></HeaderLink>
                    <HeaderLink onClick={onClose}><NavLink to={'/graduates'}>ВЫПУСКНИКАМ</NavLink></HeaderLink>
                </DriverLinks>

                <DriverSeparator/>

                <DriverLinks>
                    <HeaderLink onClick={onClose}><NavLink to={'/bulletin-board'}>ДОСКА ОБЪЯВЛЕНИЙ</NavLink></HeaderLink>
                </DriverLinks>
            </Drawer>
            </>
    );
};