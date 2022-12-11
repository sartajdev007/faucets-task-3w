import React from 'react';
import '../Table.css'



const EthTable = () => {
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
                        <td className="td">12.30 AM</td>
                        <td className="td">487</td>
                        <td className="td">4s8er5s5fe57rjmxnfuewrurks</td>
                    </tr>
                    <tr>
                        <td className="td">2</td>
                        <td className="td">10.30 AM</td>
                        <td className="td">875</td>
                        <td className="td">sf7s7ers4e7r7wser</td>
                    </tr>
                    <tr>
                        <td className="td">3</td>
                        <td className="td">11.30 AM</td>
                        <td className="td">797</td>
                        <td className="td">se4s7er7</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EthTable;