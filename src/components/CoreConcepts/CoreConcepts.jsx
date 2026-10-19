import CoreConcept from "./CoreConcept";

function CoreConcepts({core_concepts}){
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
            {core_concepts.map(concept => (
            <CoreConcept key={concept.title} {...concept}/>
            ))}
            </ul>
        </section>
    )
}

export default CoreConcepts;