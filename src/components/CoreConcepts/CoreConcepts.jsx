import CoreConcept from "./CoreConcept";
import Section from "../Section";

export default function CoreConcepts({core_concepts}){
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
