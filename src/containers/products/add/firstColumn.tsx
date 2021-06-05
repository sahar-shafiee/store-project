// node libraries
import React from 'react';
// interface
import { Columns } from './interface';

const FirstColumn: React.FC<Columns> = ({ editData }) => {
    return (
        <div className="firstDiv">
            <label>عنوان محصول</label>
            <input type="text" id="name" defaultValue={editData?.name} /><br />
            <label>وزن خالص محصول</label>
            <input type="number" id="weight" defaultValue={editData?.weight} /><br />
            <label>وزن محصول با بسته بندی</label>
            <input type="number" id="weightPackaging" defaultValue={editData?.weightPackaging} /><br />
            <label>وضعیت</label>
            <select id="status" defaultValue={editData?.status}>
                <option value="available">در دسترس</option>
                <option value="soon">به زودی</option>
                <option value="stopProduction">توقف تولید</option>
            </select>
        </div>
    );
}
// export
export default FirstColumn;