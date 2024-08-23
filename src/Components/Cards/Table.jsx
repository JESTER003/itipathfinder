import React from 'react'

const Table = () => {

    infoarr = [
        {
            
        }
    ]
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table-auto w-full text-left border ">
                <thead className='border'>
                    <tr>
                        <th className="px-4 py-2">Rank</th>
                        <th className="px-4 py-2">College</th>
                        <th className="px-4 py-2">Ranking</th>
                        <th className="px-4 py-2">Cutoff</th>
                        <th className="px-4 py-2">Application Deadline</th>
                        <th className="px-4 py-2">Fees</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2">#1</td>
                        <td className="px-4 py-2">IIT MADRAS - Indian institute of Technology - [ IITM ] </td>
                        <td className="px-4 py-2">NIRF Ranking 1</td>
                        <td className="px-4 py-2">CAT - 2022 Cutoff <strong>401</strong></td>
                        <td className="px-4 py-2">27 Apr - 18 Jun 2024</td>
                        <td className="px-4 py-2">₹50,000</td>
                    </tr>
                    {/* Add more rows here */}
                </tbody>
            </table>
        </div>
    )
}

export default Table