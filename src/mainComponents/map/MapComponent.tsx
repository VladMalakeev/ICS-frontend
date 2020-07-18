import React, {useState} from 'react'
import {DrawerListItem, DrawerListWrap, MapWrap} from "./mapStyles";
import {Drawer} from "antd";
import {MapTxt} from "../../texts/mapTxt";

export const Map = () => {
    const [visible, setVisible] = useState(true);

    return (
        <MapWrap id='map'>
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={() =>setVisible(false)}
                visible={visible}
                getContainer={false}
                style={{ position: 'absolute',zIndex:1001}}
                mask={false}
            >
                <DrawerListWrap>
                    <DrawerListItem>
                        <p className={'icsloc'}>{MapTxt.txt1}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'admin'}>{MapTxt.txt2}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'chem'}>{MapTxt.txt3}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'tcorp'}>{MapTxt.txt4}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'gym'}>{MapTxt.txt5}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'phys'}>{MapTxt.txt6}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'ttl'}>{MapTxt.txt7}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'gum'}>{MapTxt.txt8}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'bcorp'}>{MapTxt.txt9}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'hos4'}>{MapTxt.txt10}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'guk'}>{MapTxt.txt11}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'radio'}>{MapTxt.txt12}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'iee'}>{MapTxt.txt13}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'libr'}>{MapTxt.txt14}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'stadium'}>{MapTxt.txt15}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'dk'}>{MapTxt.txt16}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'met'}>{MapTxt.txt17}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'auto'}>{MapTxt.txt18}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'alma'}>{MapTxt.txt19}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'hos5'}>{MapTxt.txt20}</p>
                    </DrawerListItem>

                    <DrawerListItem>
                        <p className={'clin'}>{MapTxt.txt21}</p>
                    </DrawerListItem>
                </DrawerListWrap>
            </Drawer>
        </MapWrap>
    );
};