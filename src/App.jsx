import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";


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
        <CoreConcepts core_concepts={CORE_CONCEPTS} />
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
