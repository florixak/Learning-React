import "./CoreConcepts.css";
import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

        {/*CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept
                title={conceptItem.title}
                description={conceptItem.description}
                image={conceptItem.image}
              />
            ))*/}
      </ul>
    </section>
  );
};

export default CoreConcepts;
