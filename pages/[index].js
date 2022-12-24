import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://www.dnd5eapi.co/api/spells/");
  const dataFetch = await res.json();
  const data = dataFetch.results;

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { index: ninja.index },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.index;
  const res = await fetch("https://www.dnd5eapi.co/api/spells/" + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <div>
        <header className="header-design">
          <div className="footer-wave" />
        </header>
        <div className="pset">
          <div className="container">
            <div className="row listar-feature-items">
              <div
                className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                data-aos="fade-zoom-in"
                data-aos-group="features"
                data-line-height="25.2px"
              >
                <div className="listar-feature-item listar-feature-has-link">
                  <div className="listar-feature-item-inner">
                    <div className="listar-feature-right-border" />
                    <div className="listar-feature-block-content-wrapper">
                      <div className="listar-feature-icon-wrapper">
                        <div className="listar-feature-icon-inner">
                          Range: {ninja.range}
                        </div>
                      </div>
                      <div
                        className="listar-feature-content-wrapper"
                        style={{ paddingTop: "0px" }}
                      >
                        <div className="listar-feature-item-title listar-feature-counter-added">
                          <span>
                            <span> Level: {ninja.level}</span>
                            {ninja.name}{" "}
                          </span>
                        </div>
                        <div className="listar-feature-item-excerpt">
                          {ninja.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="goBack">
        <Link href="/">Go Back To Spells List</Link>
      </div>
    </div>
  );
};

export default Details;
