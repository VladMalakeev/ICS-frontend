import React from 'react'
import {
    FooterCopyrightWrap,
    FooterLink,
    FooterLinksWrap,
    FooterMapContent,
    FooterMapWrap,
    MapInfoBlock,
    MediaLinks
} from "./FooterStyles";
import {H2Black, Paragraph} from "../commomStyles";
import {FooterTexts} from "../../texts/footerTxt";
import {NavLink} from "react-router-dom";
import {Logo} from "../header/HeaderStyles";
import logo from "../../images/logo256.png";

export const Footer = () => {
    return (
        <>
            <FooterMapComponent/>
            <FooterLinksComponent/>
            <FooterCopyright/>
        </>
    )
};

export const FooterMapComponent = () => {
    return(
        <FooterMapWrap to={'/map'}>
            <H2Black style={{
                textAlign: 'center',
                width: '100%',
                marginBottom: '0',
                height: '15%'
            }}>{FooterTexts.txt1}</H2Black>
            <FooterMapContent>
                <MapInfoBlock>
                    <Paragraph style={{fontWeight: 'bold'}}>{FooterTexts.txt2}</Paragraph>
                    <Paragraph style={{marginBottom: '25px', width: '250px'}}>
                        <NavLink to={'/map'}>{FooterTexts.txt3}</NavLink>
                    </Paragraph>
                    <Paragraph style={{fontWeight: 'bold'}}>{FooterTexts.txt4}</Paragraph>

                    <Paragraph style={{marginBottom: '25px'}}>
                        <a href={"mailto:" + FooterTexts.txt5}>{FooterTexts.txt5}</a>
                    </Paragraph>

                    <Paragraph style={{fontWeight: 'bold'}}>{FooterTexts.txt6}</Paragraph>

                    <Paragraph style={{marginBottom: '25px'}}>
                        <a href={'tel:' + FooterTexts.txt7}>{FooterTexts.txt7}</a>
                    </Paragraph>
                </MapInfoBlock>
            </FooterMapContent>
        </FooterMapWrap>
    )
};

export const FooterLinksComponent = () => {
    return(
        <FooterLinksWrap>
            <Logo src={logo}/>
            <Paragraph style={{color:'white'}}>{FooterTexts.txt8}</Paragraph>
            <Paragraph style={{color:'white'}}>{FooterTexts.txt9}</Paragraph>
            <MediaLinks>
                <FooterLink href={'#'}>Instagram</FooterLink>
                <FooterLink href={'#'}>Facebook</FooterLink>
                <FooterLink href={'tel:'+FooterTexts.txt10}>{FooterTexts.txt10}</FooterLink>
            </MediaLinks>
        </FooterLinksWrap>
    )
};

export const FooterCopyright = () => {
    return(
        <FooterCopyrightWrap>
            <Paragraph style={{color:'white'}}>{FooterTexts.txt11}</Paragraph>
            <Paragraph style={{color:'white'}}>{FooterTexts.txt12}</Paragraph>
        </FooterCopyrightWrap>
    );
};