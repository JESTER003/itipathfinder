import React from 'react'

const Table = () => {

    let infoarr = [
        {
            rank: 1,
            college: "IIT Delhi",
            ranking: "NIRF Ranking 1",
            cutoff: "CAT - 2022 Cutoff **401**",
            applicationDeadline: "27 Apr - 18 Jun 2024",
            fees: "₹50,000"
        },
        {
            rank: 2,
            college: "IIT Bombay",
            ranking: "NIRF Ranking 2",
            cutoff: "CAT - 2022 Cutoff **395**",
            applicationDeadline: "20 Apr - 15 Jun 2024",
            fees: "₹45,000"
        },
        {
            rank: 3,
            college: "IIT Madras",
            ranking: "NIRF Ranking 3",
            cutoff: "CAT - 2022 Cutoff **388**",
            applicationDeadline: "25 Apr - 17 Jun 2024",
            fees: "₹42,000"
        },
        {
            rank: 4,
            college: "IIT Kanpur",
            ranking: "NIRF Ranking 4",
            cutoff: "CAT - 2022 Cutoff **382**",
            applicationDeadline: "22 Apr - 16 Jun 2024",
            fees: "₹40,000"
        },
        {
            rank: 5,
            college: "IIT Kharagpur",
            ranking: "NIRF Ranking 5",
            cutoff: "CAT - 2022 Cutoff **375**",
            applicationDeadline: "28 Apr - 19 Jun 2024",
            fees: "₹38,000"
        },
        {
            rank: 6,
            college: "BITS Pilani",
            ranking: "NIRF Ranking 6",
            cutoff: "CAT - 2022 Cutoff **368**",
            applicationDeadline: "24 Apr - 18 Jun 2024",
            fees: "₹35,000"
        },
        {
            rank: 7,
            college: "IIT Roorkee",
            ranking: "NIRF Ranking 7",
            cutoff: "CAT - 2022 Cutoff **362**",
            applicationDeadline: "26 Apr - 20 Jun 2024",
            fees: "₹32,000"
        },
        {
            rank: 8,
            college: "IIT Guwahati",
            ranking: "NIRF Ranking 8",
            cutoff: "CAT - 2022 Cutoff **355**",
            applicationDeadline: "29 Apr - 21 Jun 2024",
            fees: "₹30,000"
        },
        {
            rank: 9,
            college: "NIT Trichy",
            ranking: "NIRF Ranking 9",
            cutoff: "CAT - 2022 Cutoff **348**",
            applicationDeadline: "23 Apr - 17 Jun 2024",
            fees: "₹28,000"
        },
        {
            rank: 10,
            college: "NIT Warangal",
            ranking: "NIRF Ranking 10",
            cutoff: "CAT - 2022 Cutoff **342**",
            applicationDeadline: "30 Apr - 22 Jun 2024",
            fees: "₹25,000"
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
                <tbody className='mt-5'>
                    {infoarr.map((info,index) => (
                        <tr key={index} className='border '>
                            <td className="px-4 py-2">{info.rank}</td>
                            <td className="px-4 py-2">{info.college}</td>
                            <td className="px-4 py-2">{info.ranking}</td>
                            <td className="px-4 py-2">{info.cutoff}</td>
                            <td className="px-4 py-2">{info.applicationDeadline}</td>
                            <td className="px-4 py-2">{info.fees}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Table