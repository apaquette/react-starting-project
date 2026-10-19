import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts core_concepts={CORE_CONCEPTS} />
        <Examples examples={EXAMPLES} />
      </main>
    </>
  );
}
