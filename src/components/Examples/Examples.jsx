import {useState} from 'react'
import Tabs from "../Tabs";
import TabButton from "../TabButton";
import Section from "../Section";

export default function Examples({examples}){
    let [ selectedTopic, setSelectedTopic ] = useState(Object.keys(examples)[0]);

    function selectHandler(clickedButton){
        setSelectedTopic(clickedButton);
    }

    let buttons = (
        Object.entries(examples).map(([key, content]) => (
                    <TabButton 
                        isSelected={selectedTopic === key} 
                        onClick={() => selectHandler(key)} key={key}>
                            {content.title}
                    </TabButton>
                ))
    );
    let content = (
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
        
    return (
        <>
            <Section title="Examples" id="examples">
                <Tabs buttons={buttons}>
                    {content}
                </Tabs>
            </Section>
        </>
    );
}