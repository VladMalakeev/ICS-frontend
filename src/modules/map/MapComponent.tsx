import React, {useEffect, useState} from 'react'
import {DrawerListItem, DrawerListWrap, MapBlock, MapWrap, DriverCloseButton} from "./mapStyles";
import {Drawer,Tooltip } from "antd";
import {RightCircleFilled, LeftCircleFilled} from "@ant-design/icons";
import {MapList} from "../../mockData/map";


export const Map = (props:any) => {
    const MobileMapSize = 900;
    const [drawerIsOpen, changeDrawerState] = useState(window.innerWidth > MobileMapSize);

    useEffect(() => {
        window.addEventListener('resize', checkInnewWidth);
        console.log('test')
        return () => {
            window.removeEventListener('resize', checkInnewWidth);
        }
    });
    const checkInnewWidth = () => {
        if(window.innerWidth > MobileMapSize && !drawerIsOpen){
            changeDrawerState(true);
        }else if(window.innerWidth < MobileMapSize && drawerIsOpen){
            changeDrawerState(false);
        }
    };


    return (                  
            <MapWrap>   
                <MapBlock id='map'></MapBlock>
             
            <Drawer
                width={290}
                placement="left"
                closable={false}
                onClose={() =>changeDrawerState(false)}
                visible={drawerIsOpen}
                getContainer={false}
                bodyStyle={{padding:'0 10px 10px 10px'}}
                style={{ position: 'absolute',zIndex:1001}}
                mask={false}
                closeIcon={null}
            >
                {window.innerWidth < MobileMapSize &&
                    <DriverCloseButton isOpen={drawerIsOpen}>
                            <LeftCircleFilled style={{fontSize:'25px'}} onClick={() =>changeDrawerState(!drawerIsOpen)} />
                    </DriverCloseButton>
                }
                <DrawerListWrap  showClosedBtn={drawerIsOpen && window.innerWidth < MobileMapSize}>
                    {MapList.map(item => {
                        return (
                            <DrawerListItem 
                                onClick={() => window.innerWidth < MobileMapSize ? changeDrawerState(false): null}
                                key={item.key} 
                                to={`#${item.link}`} 
                                className={`${item.link}`} 
                                active={props.location.hash === `#${item.link}`}
                                isOpen={drawerIsOpen}
                                id={item.link}
                                smooth={true}
                            >
                                {item.ico}
                              <span>{item.name}</span>
                            </DrawerListItem>
                        )
                    })}

                </DrawerListWrap>
            </Drawer>
            <Drawer
                width={50}
                placement="left"
                closable={false}
                onClose={() => changeDrawerState(true)}
                visible={!drawerIsOpen}
                getContainer={false}
                bodyStyle={{padding:'0 10px 10px 10px'}}
                style={{ position: 'absolute',zIndex:1001}}
                mask={false}
                closeIcon={null}
            >
                {!drawerIsOpen &&
                    <DriverCloseButton>
                        <RightCircleFilled style={{fontSize:'25px'}} onClick={() =>changeDrawerState(!drawerIsOpen)} />
                    </DriverCloseButton>
                }
                <DrawerListWrap showClosedBtn={!drawerIsOpen && window.innerWidth < MobileMapSize}>
                
                    {MapList.map(item => {
                        return (
                            <DrawerListItem 
                                key={item.key} 
                                to={`#${item.link}`} 
                                className={`${item.link}`} 
                                active={props.location.hash === `#${item.link}`}
                                isOpen={drawerIsOpen}
                                id={item.link}
                                smooth={true}
                            >
                               <Tooltip title={item.name} color={'blue'} placement="left" arrowPointAtCenter={true}>
                                   {item.ico}
                                </Tooltip> 
                            </DrawerListItem>
                        )
                    })}

                </DrawerListWrap>
            </Drawer>
        </MapWrap>
    );
};