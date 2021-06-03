// node libraries
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// components
import Layout from '../../../components/layout';
// methods
import { activeInput } from './methods/activeInput';
// image
import upload from '../../../assets/image/product/upload.png';

const Add: React.FC = () => {
    let inputFile = useRef<HTMLInputElement>(null);
    return (
        <>
            <Layout />
            <form action="#" className="formAdd">
                <div className="firstDiv">
                    <label>عنوان محصول</label>
                    <input type="text" name="name" /><br />
                    <label>وزن خالص محصول</label>
                    <input type="number" name="weight" /><br />
                    <label>وزن محصول با بسته بندی</label>
                    <input type="number" name="weightPackaging" /><br />
                    <label>وضعیت</label>
                    <select name="status">
                        <option value="available">در دسترس</option>
                        <option value="soon">به زودی</option>
                        <option value="stopProduction">توقف تولید</option>
                    </select>
                </div>
                <div className="secondDiv">
                    <div className="wrapperUpload">
                        <label>تصویر محصول</label>
                        <img src={upload} className="upload" alt="upload" onClick={() => {
                            inputFile.current?.click();
                        }} />
                        <span>{inputFile.current?.files && inputFile.current?.files[0].name}</span>
                        <input ref={inputFile} type="file" name="image" />
                    </div>
                    <div>
                        <input type="checkbox" className="checkbox" name="discountedPrice" onClick={() => {
                            activeInput();
                        }} />
                        <input type="number" name="sales" className="sales inputSale" placeholder="قیمت محصول با تخفیف" disabled /><br />
                    </div>
                    <label>موجودی</label>
                    <input type="nummber" name="number" /><br />
                </div>
                <Link className="submit" to="/products">ثبت</Link>
            </form>
        </>
    );
}
// export
export default Add;