import userPhoto from "../../imgs/userPhoto.png";
import img1 from "../../imgs/facebook.png";
import img2 from "../../imgs/twitter.png";
import img3 from "../../imgs/youtube.png";
import img4 from "../../imgs/pinterest.png";
import img5 from "../../imgs/behance.png";
import "./Content.css";
import "../Layouts/Layout.css";
import EditorChoice from "../EditorChoice/EditorChoice";

const Content = () => {
  return (
    <>
      <section>
        <div className="container">
          <article>
            <div style={{ display: "flex", gap: "2rem", marginTop: "5rem" }}>
              <span style={{ display: "flex", gap: "1rem" }}>
                <p>08.08.2021</p>
                <p>-</p>
                <span style={{ display: "flex" }}>
                  <p style={{ marginRight: "0.2rem" }}> 4 </p>
                  <p> minutes</p>
                </span>
              </span>
              <span style={{ padding: "0 5rem" }}>
                <p>
                  Seamlessly syndicate cutting-edge architectures rather than
                  collaborative collaboration and idea-sharing. Proactively
                  incubate visionary interfaces whereas premium benefits.
                  Seamlessly negotiate ubiquitous leadership skills rather than
                  parallel ideas. Dramatically visualize superior interfaces for
                  best-of-breed alignments. Synergistically formulate
                  performance based users through customized relationships.
                  Interactively deliver cross-platform ROI via granular systems.
                  Intrinsicly enhance effective initiatives vis-a-vis orthogonal
                  outsourcing. Rapidiously monetize market-driven opportunities
                  with multifunctional users. Collaboratively enhance visionary
                  opportunities through revolutionary schemas. Progressively
                  network just in time customer service without real-time
                  scenarios. Synergistically drive e-business leadership with
                  unique synergy. Compellingly seize market positioning ROI and
                  bricks-and-clicks e-markets. Proactively myocardinate timely
                  platforms through distributed ideas. Professionally optimize
                  enabled core competencies for leading-edge sources.
                  Professionally enhance stand-alone leadership with innovative
                  synergy. Rapidiously generate backend experiences vis-a-vis
                  long-term high-impact relationships. Authoritatively supply
                  market-driven mindshare and bricks-and-clicks opportunities.
                  Holisticly create diverse innovation through adaptive
                  communities. Efficiently empower seamless meta-services with
                  impactful opportunities. Distinctively transition virtual
                  outsourcing with focused e-tailers.
                  <p
                    style={{
                      fontSize: "36px",
                      color: "#D4A373",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <strong>
                      “ Monotonectally seize superior mindshare rather than
                      efficient technology. ”
                    </strong>
                  </p>
                  Compellingly enhance seamless resources through competitive
                  content. Continually actualize 24/365 alignments for
                  resource-leveling platforms. Energistically enhance high
                  standards in models and professional expertise. Intrinsicly
                  iterate extensible metrics for prospective opportunities.
                  Continually develop leading-edge experiences through quality
                  e-services.
                </p>
              </span>
            </div>
            <div className="categories">
              <h3>ADVENTURE</h3>
              <h3>PHOTO</h3>
              <h3>DESIGN</h3>
            </div>

            <hr />

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ width: "2rem" }}>
                  <img src={userPhoto} alt="" />
                </div>
                <div>
                  <h3>By Jennifer Lawrence</h3>
                  <p style={{color: "#495057"}}>Thinker & Designer</p>
                </div>
              </div>
              <div>
                <ul style={{ display: "flex" }}>
                  <div className="social-icon">
                    <img src={img1} />
                  </div>
                  <div className="social-icon">
                    <img src={img2} />
                  </div>
                  <div className="social-icon">
                    <img src={img3} />
                  </div>
                  <div className="social-icon">
                    <img src={img4} />
                  </div>
                  <div className="social-icon">
                    <img src={img5} />
                  </div>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
      <EditorChoice />
    </>
  );
};

export default Content;
