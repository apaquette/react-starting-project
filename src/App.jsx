import Header from "./Header.jsx";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
        <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept {...concept}/>
          ))}
          </ul>
        </section>
          {/* <h2>Time to get started!</h2> */}
      </main>
    </div>
  );
}

export default App;
