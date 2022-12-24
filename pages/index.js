export default function Home({ allSpells }) {
  return (
    <>
      <main className="container">
        <section className="list-intro"></section>
        <section className="awesome-list">
          <h2>List of spells</h2>
          {allSpells.map((spell) => (
            <div className="awesome-list-item" key={spell.url}>
              <span>{spell.name}</span>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://www.dnd5eapi.co/api/spells");

  const data = await response.json();

  return {
    props: { allSpells: data.results },
  };
}
