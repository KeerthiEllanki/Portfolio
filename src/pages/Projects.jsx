import React from "react";

const projects = [
    {
        title: "Rescue Spot",
        stack: "Python · FastAPI · React · Leaflet.js · OSMnx · GeoPandas · Firebase Auth · Firestore",
        description: [
            "A geospatial intelligence platform designed for emergency shelter and resource siting, leveraging optimization algorithms and real-world GIS datasets. The system integrates graph-based reasoning through OSMnx to support coverage maximization strategies inspired by the Max-Coverage Location Problem. Interactive geospatial visualizations built with Leaflet.js display shelters, road networks, and coverage radii with real-time responsiveness. A FastAPI backend handles spatial queries, computes analytical results, and manages geo-feature storage using Firestore. The platform incorporates data cleaning, validation, and preprocessing pipelines for shapefiles and OpenStreetMap datasets, along with a secure authentication workflow powered by Firebase Auth and a scalable Firestore schema tailored for geospatial entities."
        ],
    },
    {
        title: "Luckie Jambles",
        stack: "React · Python FastAPI · SQLAlchemy · MSSQL · Microsoft Entra ID · Slack API",
        description: [
            "A scalable enterprise learning platform featuring gamified progression, multi-domain quiz modules, and a real-time leaderboard system. The platform incorporates randomized question-generation logic to ensure diversity across quiz levels in areas such as web development and AI. Secure single sign-on is enabled through Microsoft Entra ID (Azure AD), following enterprise-grade OAuth authentication patterns. A Slack-integrated badge automation workflow delivers instant achievement notifications, enhancing team engagement and visibility. The backend is powered by SQLAlchemy models and FastAPI endpoints that manage quiz tracking, user progression, and ranking algorithms, while the responsive React interface provides optimized state management and dynamic rendering for multi-level learning experiences.",
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="p-10 w-full">
            <h2 className="text-4xl font-bold mb-16 text-sky-900 inline-block">
                PROJECTS
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="
                            
                            p-6 rounded-2xl shadow-sm border text-left
                            bg-sky-900 text-white border-sky-700 transform=gpu
                            transition-all duration-300 ease-out 
                            hover:shadow-xl hover:bg-white hover:text-sky-700 hover:border-sky-600 
                            hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                    >
                        <h3 className="text-2xl font-bold">
                            {project.title}
                        </h3>

                        <p className="mt-1 text-l font-semibold opacity-90">
                            {project.stack}
                        </p>

                        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                            {project.description.map((line, idx) => (
                                <div key={idx}>{line}</div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
