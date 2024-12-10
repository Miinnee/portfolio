import React from "react";
import Card from "./Card";
import languagesData from "./langage.json";

function Presentation() {
    return (
        <div>
            {languagesData.languages.map((langage, index) => {
                return (
                    <Card
                        key={index}
                        langage={langage.name}
                        description={langage.description}
                        startDate={langage.startDate}
                        subPage={langage.sub_page} // Passage des sous-pages à Card
                    />
                );
            })}
        </div>
    );
}

export default Presentation;
