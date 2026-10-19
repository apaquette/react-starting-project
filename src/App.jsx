import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from './data.js';


function App() {
  let [ selectedTopic, setSelectedTopic ] = useState();

  function selectHandler(clickedButton){
    setSelectedTopic(clickedButton);
  }

  
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic){
    tabContent = (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
            )
  }


  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map(concept => (
            <CoreConcept key={concept.title} {...concept}/>
          ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.entries(EXAMPLES).map(([key, section]) => (
              <TabButton isSelected={selectedTopic === key} onClick={() => selectHandler(key)} key={key}>{section.title}</TabButton>
            ))}
          </menu>
            {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
