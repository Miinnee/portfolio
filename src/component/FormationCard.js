import React from "react";

function FormationCard({ titre, sous_titre, ville, adresse, code_postal, date_debut, date_fin, global }) {
    return (
        <div className="formation-card">
            <h1>{titre}</h1>
            <h2>{sous_titre}</h2>
            <h3>
                {ville}, {adresse}, {code_postal}
            </h3>
            <div>
                <p>
                    Dates : {date_debut} - {date_fin || "Présent"}
                </p>
            </div>
            {global && global.length > 0 && (
                <div className="formation-global">
                    <h4>Informations supplémentaires :</h4>
                    {global.map((item, index) => (
                        <div key={index}>
                            {/* Diplôme */}
                            {item.diplome && (
                                <div className="diplome-section">
                                    <h5>Diplôme :</h5>
                                    <p>{item.diplome.diplome}</p>
                                    <p>Spécialité : {item.diplome.specialite}</p>
                                </div>
                            )}

                            {/* Projets */}
                            {item.projets && item.projets.length > 0 && (
                                <div className="projet-section">
                                    <h5>Projets :</h5>
                                    {item.projets.map((projet, projIndex) => (
                                        <div key={projIndex} className="projet">
                                            <h4>{projet.name}</h4>
                                            <p>{projet.description}</p>
                                            <p>Date : {projet.date}</p>
                                            {projet.image_src && (
                                                    <img
                                                    src={process.env.PUBLIC_URL + projet.image_src.replace('%PUBLIC_URL%', '')}
                                                    alt={projet.name}
                                                    style={{ width: "100px", height: "auto" }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FormationCard;
