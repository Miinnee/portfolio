import React from "react";
import Header from "../component/Header";
import formationData from "../component/json/formation.json";
import FormationCard from "../component/FormationCard";

function Formation() {
    return (
        <div>
            <Header />
            <h1>Formation Page</h1>
            <div>
                {formationData.formation.map((formation, index) => (
                    <FormationCard
                        key={index}
                        titre={formation.titre}
                        sous_titre={formation.sous_titre}
                        ville={formation.ville}
                        adresse={formation.adresse}
                        code_postal={formation.code_postal}
                        date_debut={formation.date_debut}
                        date_fin={formation.date_fin}
                        global={formation.global}
                    />
                ))}
            </div>
        </div>
    );
}

export default Formation;
