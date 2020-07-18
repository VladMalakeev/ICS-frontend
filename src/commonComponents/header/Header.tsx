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
import {CloseOutlined} from "@ant-design/icons/lib";
import {HeaderTexts} from '../../texts/headerTxt'

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
                    <HeaderLink><NavLink to={'/applicants/news'}>{HeaderTexts.txt1}</NavLink></HeaderLink>
                    <HeaderLink><NavLink to={'/students/news'}>{HeaderTexts.txt2}</NavLink></HeaderLink>
                    <HeaderLink><NavLink to={'/graduates/news'}>{HeaderTexts.txt3}</NavLink></HeaderLink>
                </HeaderLeftLinks>

                <LogoLink to={'/'}> <Logo src={logo}/></LogoLink>
                <HamburgerWrap>
                    <Hamburger color={'white'} toggled={visible} toggle={setVisible} />
                </HamburgerWrap>

                <HeaderRightLinks>
                    <HeaderLink><NavLink to={'/bulletin-board'}>{HeaderTexts.txt4}</NavLink></HeaderLink>
                    <HeaderLink><a href={'tel:+380662542323'}>{HeaderTexts.txt5}</a></HeaderLink>
                </HeaderRightLinks>
            </HeaderWrap>

            <Drawer
                placement="left"
                closable={true}
                closeIcon={<CloseOutlined style={{fontSize:'26px', color:'white'}} />}
                onClose={onClose}
                visible={visible}
                width={'100%'}
                drawerStyle={{background:'linear-gradient(216.51deg, #08238C 26.5%, #1266BB 95.77%)'}}
            >
                <DriverLinks>
                    <HeaderLink><a href={'tel:+380662542323'}>{HeaderTexts.txt5}</a></HeaderLink>
                </DriverLinks>

                <DriverSeparator/>

                <DriverLinks>
                    <HeaderLink onClick={onClose}><NavLink to={'/applicants/news'}>{HeaderTexts.txt1}</NavLink></HeaderLink>
                    <HeaderLink onClick={onClose}><NavLink to={'/students/news'}>{HeaderTexts.txt2}</NavLink></HeaderLink>
                    <HeaderLink onClick={onClose}><NavLink to={'/graduates/news'}>{HeaderTexts.txt3}</NavLink></HeaderLink>
                </DriverLinks>

                <DriverSeparator/>

                <DriverLinks>
                    <HeaderLink onClick={onClose}><NavLink to={'/bulletin-board'}>{HeaderTexts.txt4}</NavLink></HeaderLink>
                </DriverLinks>
            </Drawer>
            </>
    );
};