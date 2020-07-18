import React from "react";
import Card from "./Card";
import icons from "../icons";

function App() {
  return (
    <div>
      <h1>
        <span>Icon Dictionary</span>
      </h1>

      <dl className="dictionary">
        {icons.map(iconary => (
          <Card
            key={iconary.id}
            emoji={iconary.emoji}
            name={iconary.name}
            meaning={iconary.meaning}
          />
        ))}
      </dl>
      <footer>&copy; copyright Iredafe Owolabi</footer>
    </div>
  );
}

export default App;
