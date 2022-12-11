import React from 'react';

const TestTable = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className='th'>Sr</th>
                        <th className='th'>Time</th>
                        <th className='th'>Amount</th>
                        <th className='th'>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">1</td>
                        <td className="td">08:30 AM</td>
                        <td className="td">748</td>
                        <td className="td">7s7effkeurusue4</td>
                    </tr>
                    <tr>
                        <td className="td">2</td>
                        <td className="td">10:23 AM	</td>
                        <td className="td">974</td>
                        <td className="td">sfe7r7sr4fer</td>
                    </tr>
                    <tr>
                        <td className="td">3</td>
                        <td className="td">11:10 AM</td>
                        <td className="td">874</td>
                        <td className="td">s4e7s8er</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TestTable;