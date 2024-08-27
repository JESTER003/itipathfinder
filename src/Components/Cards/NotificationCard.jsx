import React from 'react'

const NotificationCard = (props) => {

    const news = [
        {
            title: "ITI Secures Major Contract for Defense Electronics",
            desc: "ITI Limited has bagged a significant contract to supply advanced defense electronics systems to the Indian Armed Forces.",
        },
        {
            title: "ITI Launches New Range of Telecom Products",
            desc: "ITI has introduced a new range of telecom products designed to meet the growing demands of the Indian market.",
        },
        {
            title: "ITI Collaborates with Global Tech Giant",
            desc: "ITI has formed a strategic partnership with a leading global technology company to jointly develop innovative solutions for the Indian market.",
        },
        {
            title: "ITI Expands Manufacturing Facilities",
            desc: "To meet increasing demand for its products, ITI has announced plans to expand its manufacturing facilities. ",
        },
        {
            title: "ITI Invests in Research and Development",
            desc: "ITI is committed to investing in research and development to stay at the forefront of technological advancements.",
        },
        {
            title: "ITI Reports Strong Financial Performance",
            desc: "ITI has announced its financial results for the latest quarter, which show strong growth in revenue and profitability.",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {news.map((value, index) => (
                <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4" key={index}>
                    <div className="bg-white shadow-lg rounded-xl p-6 h-full transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 uppercase basic-regular ">
                            {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed basic-regular">
                            {value.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NotificationCard