import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2 className="about-head">
          <u>About</u>
        </h2>

        <div className="columns">
          <div className="column is-one-third">
            <img
              src={require("../assets/unnamed.jpg")}
              className="cats"
              style={{ height: "300px" }}
            />
          </div>
          <div className="column is-one-third">
            <p>
              Graecis admodum ex cum, qui ex falli efficiantur. Est id veniam
              apeirian perpetua, ex mei nusquam gloriatur. Cu his iudico decore,
              ut solum vocent eloquentiam vim, mea tale persius dignissim ea. No
              est prompta omnesque reprehendunt. Eu eum ludus dicunt omittam.
              Congue vocibus sed in, in qui brute mundi. Munere omnium
              definitiones qui an, his te luptatum pericula scribentur. Mea ad
              dicta ignota nominavi. Omnes inermis pri no, graeco fierent
              principes ex vix. Falli timeam cum ex. Nisl consul facilisi vis
              id, erat pertinacia ei est. Dico vulputate argumentum cu eam, id
              solum recteque vel, quo te veri falli appetere. Cu est paulo
              regione elaboraret, sea at evertitur consequuntur. Sed noluisse
              deserunt ut, mel ullum malorum efficiendi ne. Vim te eius
              consectetuer. Ei his libris numquam, elit libris ocurreret te nam,
              mel ut consul commune imperdiet.
            </p>
          </div>
          <div className="column is-one-third">
            <p>
              Lorem ipsum dolor sit amet, est inani labitur et. Probo minimum
              singulis an est, tantas recusabo vis id. Per natum impedit no, eu
              quo utamur iisque percipitur. Munere integre numquam his in, eros
              accommodare eu duo. Et usu congue causae, ludus suscipiantur pro
              in. Ad patrioque mnesarchum constituam his, agam persecuti usu ne.
              Debet omnium ancillae eum et, at ferri omnesque est. Eu sint
              vocent probatus quo. Sit nisl voluptatum in, necessitatibus
              conclusionemque in vix, has ex populo epicuri reprehendunt.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
