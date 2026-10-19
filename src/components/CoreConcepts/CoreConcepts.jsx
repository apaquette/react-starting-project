import CoreConcept from "./CoreConcept";
import Section from "../section";

function CoreConcepts({core_concepts}){
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
            {core_concepts.map(concept => (
            <CoreConcept key={concept.title} {...concept}/>
            ))}
            </ul>
        </Section>
    )
}

export default CoreConcepts;