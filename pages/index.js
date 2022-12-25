import React, { useState } from "react";
import Link from "next/link";

export default function Home({ allSpells }) {
  // Add favourites
  const [items, setItems] = useState([]);
  const addItem = (addedItem) => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        value: addedItem,
      },
    ]);
  };


  return (
    <>
      <main className="container">

      {/* Favourites List */}
      <ul className="awesome-list favourites">
          <h2>List of added spells (Favourites)</h2>
          {items.map((item) => (
            <li key={item.id}>
              {item.id + ')'} {item.value}
            </li>
          ))}
        </ul>
          

        {/* Single Spells listing */}
        <section className="awesome-list">
          <h2>List of spells</h2>
          {allSpells.map((spell) => (
            <div className="wrapItem" key={spell.url}>
              <Link
                href={spell.index}
                className="awesome-list-item"
                key={spell.url}
              >
                <span>{spell.name}</span>
              </Link>
              <button onClick={() => addItem(spell.name)}>+</button>
            </div>
          ))}
        </section>

      </main>
    </>
  );
}

export async function getStaticProps() {
  // Fetch spells via data.results
  const response = await fetch("https://www.dnd5eapi.co/api/spells");
  const data = await response.json();

  return {
    props: { allSpells: data.results },
  };
}
