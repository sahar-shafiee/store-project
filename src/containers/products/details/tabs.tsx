// node libraries
import React, { useState, useRef, useEffect } from 'react';
// components
import Specification from './specification';
import AboutProduct from './aboutProduct';
import Comments from './comments';
// methods
import { clickOnTabs } from './methods/clickOnTabs';
// interface
import { init } from './inteface';

const Tabs: React.FC<init> = ({ productData }) => {

    let [tabValue, setTabValue] = useState<number>(0);
    let firstTab = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        firstTab.current?.click();
    }, []);

    return (
        <div className="wrapperTabs mt-3 p-4">
            <div className="wrapperLink">
                <span ref={firstTab} onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                    setTabValue(1);
                    clickOnTabs(event);
                }}>مشخصات</span>&nbsp;
                <span onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                    setTabValue(2);
                    clickOnTabs(event);
                }}>درباره محصول</span>&nbsp;
                <span onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                    setTabValue(3);
                    clickOnTabs(event);
                }}>دیدگاه خریداران</span>&nbsp;
            </div>
            {tabValue === 1 && <Specification productData={productData} />}
            {tabValue === 2 && <AboutProduct productData={productData} />}
            {tabValue === 3 && <Comments productData={productData} />}
        </div>
    )
}
// export
export default Tabs;