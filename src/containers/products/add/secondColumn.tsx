// node libraries
import React, { useRef } from 'react';
// methods
import { activeInput } from './methods/activeInput';
// image
import upload from '../../../assets/image/product/upload.png';
// interface
import { Columns } from './interface';

const SecondColumn: React.FC<Columns> = ({ editData }) => {

    let inputFile = useRef<HTMLInputElement>(null);

    return (
        <div className="secondDiv">
            <div className="wrapperUpload">
                <label>تصویر محصول</label>
                <img src={upload} className="upload" alt="upload" onClick={() => {
                    inputFile.current?.click();
                }} />
                <span>{inputFile.current?.files && inputFile.current?.files[0].name}</span>
                <input ref={inputFile} type="file" id="image" />
            </div>
            <label>قیمت</label>
            <input type="nummber" id="price" defaultValue={editData?.price} /><br />
            <div>
                <input type="checkbox" className="checkbox" name="discountedPrice" onClick={() => {
                    activeInput();
                }} />
                <input type="number" id="discountedPrice" className="sales inputSale" placeholder="قیمت محصول با تخفیف" defaultValue={editData?.discountedPrice} disabled /><br />
            </div>
            <label>موجودی</label>
            <input type="nummber" id="number" defaultValue={editData?.number} /><br />
        </div>
    );
}
// export
export default SecondColumn;