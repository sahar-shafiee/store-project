// node libraries
import React, { useEffect } from 'react';
// methods
import { clickOnBody } from './methods/clickOnBody';
import { openSlider } from './methods/openSlider';
// interface
import { PropsSlider } from './interface';

const Slider: React.FC<PropsSlider> = (props) => {
    useEffect(() => {
        openSlider(props.open);
    }, [props.open]);
    return (
        <>
            {props.open &&
                <div className="wrapperSlider" onClick={() => {
                    clickOnBody();
                    props.onClose();
                }}>
                    <div className="wrapperContent" onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        event.stopPropagation();
                    }}>
                        {props.children}
                    </div>
                </div>
            }
        </>
    );
}
// export
export default Slider;