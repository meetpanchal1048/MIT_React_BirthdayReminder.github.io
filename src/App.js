import { useState } from "react";
import data from "./data";
import { List } from "./List";

function App() {
  const [people,setPeople] = useState(data)
  return (
    <main>
      <section className="container text-center">
        <div className="card bg-dark mw-75">
          <div className="card-body">
            <h3 className="card-title text-light fs-1">{people.length} Birthday's Today....!</h3>
            <List people={people}/>
            <button className="btn btn-danger w-25" onClick={() => setPeople([])}>Clear All</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App;
