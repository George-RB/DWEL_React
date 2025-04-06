import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <img src="./img/logo/logo.png" alt="DWEL logo" className="logo" />
          <nav className="menu">
            <a href="#!">Main</a>
            <a href="#!">About us</a>
            <a href="#!">Contacts</a>
            <button className="btn-register">Registration</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Learn to earn</h1>
            <p>Learn and earn money easily with DWEL</p>
            <button className="btn-details">More Details</button>
          </div>
        </section>

        <section className="grid">
          <div className="container">
            <article className="grid-block">
              <h2>About us</h2>
              <p>
                Our team consists of professionals who make education accessible
                to everyone.
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
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 DWEL. All rights reserved.</p>
        </div>
      </footer>

      <div id="modal" className="modal hidden">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <h2>Registration</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
