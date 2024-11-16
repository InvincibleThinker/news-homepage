import "./Main.css";

function Main() {
  return (
    <section className="main-content">
      <main className="main">
        <img
          src="./src/assets/images/image-web-3-desktop.jpg"
          alt="article thumbnail"
          className="thumbnail"
        />
        <h1 className="article-title">The Bright Future of Web 3.0?</h1>
        <div className="description">
          <p className="article-description">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <p className="readmore">READ MORE</p>
        </div>
      </main>
      <aside className="side-new">
        <h1 className="new-title">New</h1>
        <div className="new-items">
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <hr />
        <div className="new-items">
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr />
        <div className="new-items">
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </aside>
      <section className="top-articles">
        <div className="top-items item1">
          <img
            src="./src/assets/images/image-retro-pcs.jpg"
            alt="retro pcs"
            className="top-art"
          />
          <div className="art-des">
            <h1 className="art-rate">01</h1>
            <p className="art-title">Reviving Retro PCs</p>
            <p className="art-desc">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="top-items item2">
          <img
            src="./src/assets/images/image-top-laptops.jpg"
            alt="Top Laptops"
            className="top-art"
          />
          <div className="art-des">
            <h1 className="art-rate">02</h1>
            <p className="art-title">Top 10 Laptops of 2022</p>
            <p className="art-desc">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="top-items item3">
          <img
            src="./src/assets/images/image-gaming-growth.jpg"
            alt="gaming growth"
            className="top-art"
          />
          <div className="art-des">
            <h1 className="art-rate">03</h1>
            <p className="art-title">The Growth of Gaming</p>
            <p className="art-desc">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Main;
