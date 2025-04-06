function GridSection() {
  return (
    <section className="grid">
      <div className="container">
        <article className="grid-block">
          <h2>About us</h2>
          <p>
            Our team consists of professionals who make education accessible to
            everyone.
          </p>
          <img src="./img/team.jpg" alt="Our team" />
        </article>
        <article className="grid-block">
          <h2>What we offer</h2>
          <p>
            Unique and engaging content to help you learn better and faster.
          </p>
          <img src="./img/offer.jpg" alt="Our offer" />
        </article>
        <article className="grid-block">
          <h2>Try it now</h2>
          <p>Watch a short preview of our interactive lessons.</p>
          <img
            src="./img/play.jpg"
            alt="Play preview video"
            className="play-preview"
            data-video="./img/videos/cat.mp4"
          />
        </article>
      </div>
    </section>
  );
}

export default GridSection;
