import React from "react";

function Card({ langage, description, startDate, subPage }) {
    // Calcul de l'expérience en années et mois
    function calculateExperience(startDate) {
        const start = new Date(startDate);
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        if (months < 0) {
            years -= 1;
            months += 12;
        }
        return { years, months };
    }

    const { years, months } = calculateExperience(startDate);
    const experience = `${years} ans${months > 0 ? ` et ${months} mois` : ""}`;

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
                position: "relative",
            }}
            title={`Commencé le : ${new Date(startDate).toLocaleDateString()}`}
        >
            <h2>{langage}</h2>
            <p>{description}</p>
            <p><strong>Expérience :</strong> {experience}</p>
            
            {subPage && subPage.length > 0 && (
                <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <h3>Technologies Associées / :</h3>
                    {subPage.map((subLangage, subIndex) => {
                        const { years, months } = calculateExperience(subLangage.startDate);
                        const subExperience = `${years} ans${months > 0 ? ` et ${months} mois` : ""}`;
                        return (
                            <div
                                key={`${subIndex}`}
                                style={{
                                    border: "1px solid gray",
                                    padding: "8px",
                                    marginTop: "5px",
                                    borderRadius: "5px",
                                }}
                                title={`Commencé le : ${new Date(subLangage.startDate).toLocaleDateString()}`}
                            >
                                <h4>{subLangage.name}</h4>
                                <p>{subLangage.description || "Pas de description disponible"}</p>
                                <p><strong>Expérience :</strong> {subExperience}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Card;
