import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
};

export default App;
