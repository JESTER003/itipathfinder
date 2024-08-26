import React from 'react'

const Table = () => {

    let infoarr = [

        {
            rank: 1,
            college: "NITTTR Bhopal",
            shortForm: "NITTTR",
            ranking: "Top-tier",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://nitttrbpl.ac.in/"
        },
        {
            rank: 2,
            college: "Industrial Training Institute, Delhi",
            shortForm: "ITI Delhi",
            ranking: "High-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://itidelhi.admissions.nic.in/"
        },
        {
            rank: 3,
            college: "Industrial Training Institute, Mumbai",
            shortForm: "ITI Mumbai",
            ranking: "High-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://mumbai.dvet.gov.in/mumbai-city-institutes/iti-mumbai-11/" // Maharashtra State ITI Admissions
        },
        {
            rank: 4,
            college: "Industrial Training Institute, Bangalore",
            shortForm: "ITI Bangalore",
            ranking: "Medium-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://itiemp.karnataka.gov.in/page/AFFILIATION+INFO/NCVT%20Affiliated%20industrial%20Training%20Institutes%20(Govt%20GIA%20and%20Private)/Bengaluru+Division/en" // National Skill Development Corporation (NSDC)
        },
        {
            rank: 5,
            college: "Industrial Training Institute, Hyderabad",
            shortForm: "ITI Hyderabad",
            ranking: "Medium-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://www.ts.gov.in/departments/technical-education/" // Telangana State Technical Education Department
        },
        {
            rank: 6,
            college: "Industrial Training Institute, Kolkata",
            shortForm: "ITI Kolkata",
            ranking: "Medium-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://www.wbtetsd.gov.in/industrial_training/itis" // West Bengal Technical Education and Skill Development Corporation
        },
        {
            rank: 7,
            college: "Industrial Training Institute, Chennai",
            shortForm: "ITI Chennai",
            ranking: "Medium-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://www.tneb.in/iti-admission-2023-24.html" // Tamil Nadu Directorate of Technical Education
        },
        {
            rank: 8,
            college: "Industrial Training Institute, Pune",
            shortForm: "ITI Pune",
            ranking: "Low-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://dtet.maharashtra.gov.in/en/iti-admission-2023-24" // Maharashtra State ITI Admissions
        },
        {
            rank: 9,
            college: "Industrial Training Institute, Jaipur",
            shortForm: "ITI Jaipur",
            ranking: "Low-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://technedu.rajasthan.gov.in/ITI/" // Rajasthan Technical Education Department
        },
        {
            rank: 10,
            college: "Industrial Training Institute, Ahmedabad",
            shortForm: "ITI Ahmedabad",
            ranking: "Low-ranking",
            cutoff: "Estimated",
            applicationDeadline: "Varies",
            fees: "Varies",
            link: "https://school.gujarat.gov.in/school-information/school-search-by-school-code" // Gujarat State School Information System
        }

    ]
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table-auto w-full text-left border ">
                <thead className='border'>
                    <tr>
                        <th className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">Rank</th>
                        <th className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">College</th>
                        <th className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">Ranking</th>
                        <th className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">Cutoff</th>
                        <th className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">Application Deadline</th>
                        <th className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">Fees</th>
                    </tr>
                </thead>
                <tbody className='mt-5'>
                    {infoarr.map((info, index) => (
                        <tr key={index} className='border'>
                            <td className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">{info.rank}</td>
                            <td className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2"><a href={info.link} target='_blank' className='hover:text-blue-400'>{info.college}</a></td>
                            <td className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">{info.ranking}</td>
                            <td className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">{info.cutoff}</td>
                            <td className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">{info.applicationDeadline}</td>
                            <td className="lg:px-4 lg:py-2 px-2 py-1 md:px-3 md:py-2">{info.fees}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Table