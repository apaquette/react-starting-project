import { useState } from "react";
import TabButton from "../TabButton";

function Examples({examples}){
    let [ selectedTopic, setSelectedTopic ] = useState();

    function selectHandler(clickedButton){
    setSelectedTopic(clickedButton);
    }


    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic){
    tabContent = (
            <div id="tab-content">
                <h3>{examples[selectedTopic].title}</h3>
                <p>{examples[selectedTopic].description}</p>
                <pre>
                <code>
                    {examples[selectedTopic].code}
                </code>
                </pre>
            </div>
            )
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
            {Object.entries(examples).map(([key, section]) => (
                <TabButton isSelected={selectedTopic === key} onClick={() => selectHandler(key)} key={key}>{section.title}</TabButton>
            ))}
            </menu>
            {tabContent}
        </section>
    );
}

export default Examples