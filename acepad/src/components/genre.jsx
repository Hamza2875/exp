import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from 'react-bootstrap';

import "../App.css";

const genre = () => {
    return (
      
        <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26dc3a28-4638-4342-bf3e-2fe6622e48cd/dbd1st9-0a647a39-2f7f-4ac1-a4f6-30f82a933639.jpg/v1/fill/w_1024,h_576,q_75,strp/john_wick_chapter_2_wallpaper_by_puffinkaaa_dbd1st9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC8yNmRjM2EyOC00NjM4LTQzNDItYmYzZS0yZmU2NjIyZTQ4Y2RcL2RiZDFzdDktMGE2NDdhMzktMmY3Zi00YWMxLWE0ZjYtMzBmODJhOTMzNjM5LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ppn8qr_Yrdm9IzGgblQacj0gfQbTeJx-L1-SMlD_cyc"
              />
              <Card.Body>
                <Card.Title>Action</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://moviesniper.com/wp-content/uploads/2020/02/hjjJbp9TssTdaMfkV8jKHpwPshV-1024x576.jpg"
              />
              <Card.Body>
                <Card.Title>Thriller</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://showbox.bet/wp-content/uploads/2017/08/The-Terminator-1024x576.jpg"
              />
              <Card.Body>
                <Card.Title>Fighting</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.wallpapertip.com/wmimgs/67-675316_1080p-cyber-crime-hd.jpg"
              />
              <Card.Body>
                <Card.Title>Crime</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://snowvillageinn.com/wp-content/uploads/2017/01/love-featured-1024x576.jpg"
              />
              <Card.Body>
                <Card.Title>Romace </Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.bhmpics.com/download/dying_light_survival_horror_game-1024x576.jpg"
              />
              <Card.Body>
                <Card.Title>Horror</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.bhmpics.com/download/dark_guitar_music-1024x576.jpg"
              />
              <Card.Body>
                <Card.Title>Musical</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://freegametips.com/wp-content/uploads/2020/12/1608680074_The-best-adventure-games-of-2020-1024x576.jpg"
              />
              <Card.Body>
                <Card.Title>Suspence</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title>Adventure</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://comedypreneur.com/wp-content/uploads/2019/10/Canva-Neon-Sign-on-Brick-Wall-background-comedy.-3d-rendering-2-1024x576.jpg"
              />
              <Card.Body>
                <Card.Title>Comedy</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
      </div>
    );
  };


export default genre;
