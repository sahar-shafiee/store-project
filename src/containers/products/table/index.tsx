// node libraries
import React from 'react';
// components
import Thead from './thead';
import Tbody from './tbody';

const Table: React.FC = () => {
    return (
        <table>
            <Thead />
            <Tbody />
        </table>
    );
}
// export
export default Table;