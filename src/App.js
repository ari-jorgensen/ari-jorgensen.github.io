import './assets/css/main.css';

function App() {
  return (
    <div>
      <header id="header">
        <div className="inner">
          <div className="circle-pic-avatar"><img src="images/profile.jpg" alt=""/></div>
          <h1><strong>Hello, I am Ariana Jorgensen --<br />
            software engineer, chef, and dog-lover.</strong></h1>
        </div>
      </header>
      <div id="main">

        <section id="one">
          <header>
            <h2>Technical Skills & Areas of Interest</h2>
          </header>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C</li>
            <li>ReactJS/HTML/CSS</li>
            <li>Machine Learning</li>
            <li>Data Visualization</li>
            <li>Farm-to-table Cooking</li>
          </ul>
        </section>

        <section id="two">
          <header>
            <h2>Recent Work</h2>
          </header>
          <div className="row">
            <article className="col-6">
              <p><a href="https://fantasy-football-ari-j.netlify.app/">Fantasy Football Project</a></p>
              <p><a href="https://bl.ocks.org/ari-jorgensen/a8a735fc8a1bd49e1605085ccd3bfec7">Multi-Series Line Chart w/ Filtering & Brushing</a></p>
              <p><a href="https://bl.ocks.org/ari-jorgensen/afba1e0fa25aa54fdc1ea89c3902c009">US Choropleth Map w/ Tooltip</a></p>
              <p><a href="https://bl.ocks.org/ari-jorgensen/2d3d5f224002f290cd1a475a5c282163">Interactive Adjacency Matrix</a></p>
              <p><a href="https://bl.ocks.org/ari-jorgensen/3b6e34e20e48ddbfe72eaeab8da7271d">Interactive Node-Link Diagram</a></p>
            </article>
          </div>
        </section>

        <section id="three">
          <header>
            <h2>My Links</h2>
          </header>
          <div className="row">
            <article className="col-3">
              <ul className="actions">
                <li><a href="https://www.linkedin.com/in/ariana-jorgensen/" target="_blank" rel="noreferrer" className="button">LinkedIn</a></li>
                <li><a href="https://bl.ocks.org/ari-jorgensen" target="_blank" rel="noreferrer" className="button">Bl.ocks</a></li>
                <li><a href="https://github.com/ari-jorgensen" target="_blank" rel="noreferrer" className="button">Github</a></li>
              </ul>
            </article>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
