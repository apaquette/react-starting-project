import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton.jsx";


function App() {
  function clickHandler(){}

  const TAB_BUTTONS = ["Components", "JSX", "Props", "Sate"]
  return (
    <div>
        <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((concept, index) => (
            <CoreConcept key={index} {...concept}/>
          ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {TAB_BUTTONS.map((label, index) => (
              <TabButton onClick={clickHandler} key={index}>{label}</TabButton>
            ))}
          </menu>
            
        </section>
      </main>
    </div>
  );
}

export default App;
