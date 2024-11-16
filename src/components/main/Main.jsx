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
      <section className="top-articles"></section>
    </section>
  );
}

export default Main;
