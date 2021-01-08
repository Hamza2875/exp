//import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardDeck} from 'react-bootstrap';
import {Figure} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';

import React, {  Fragment , useRef } from 'react';
import headerbg from './header-bg.png'; 
import { Button,Paper } from "@material-ui/core";
import { HoverButtonDiagonal } from "react-hover-button";
//console.log(headerbg.png);
import "../App.css";



const LandingPage = () => {
  const hoverBtn1 = useRef(null);
  const hoverBtn2 = useRef(null);
  const hoverBtn3 = useRef(null);

  return (
    <div className="container-fluid">
      <Fragment>
      <div>
      <img src={headerbg} alt="Logo" />
    <h2>A Paradise For Readers and Writers!</h2>
    <h3>AcePad connects a global community of readers and writers through the power of story.</h3>
    </div>

      <form  noValidate autoComplete="off" className="search" >
      <p><input type="text" size="60" maxlength="60"  /></p>
     
      <div ref={hoverBtn3} className="btn">
      <HoverButtonDiagonal width={90}  style={{background:"White" , height:"50px"}}  >
        Search
      </HoverButtonDiagonal>
    </div>
      </form>

      <div ref={hoverBtn1} className="hover1">
      <HoverButtonDiagonal width={300}  style={{maskColor:"White" ,color:"Black" }} >
        Start Reading!
      </HoverButtonDiagonal>
    </div>

    <div ref={hoverBtn2} className="hover2">
      <HoverButtonDiagonal width={300} style={{maskColor:"White",color:"Black"  }} >
        Start Writing!
      </HoverButtonDiagonal>
    </div>
    </Fragment>
      <br/>
      <br/>
      <br />
      <br />

      <Paper variant="outlined" />
      <Paper variant="outlined" square />
      
    
<br/>
      <h3>Existing Novels</h3> <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://kbimages1-a.akamaihd.net/7fd95d58-8d72-4ab1-98f4-eee7d0985547/1200/1200/False/ulysses-113.jpg"
              />
              <Card.Body>
                <Card.Title>Ulysses</Card.Title>
                <b>James Joyce</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://kbimages1-a.akamaihd.net/a098635c-0dca-4e78-afbd-d10528fd08df/1200/1200/False/jane-eyre-an-autobiography-20.jpg"
              />
              <Card.Body>
                <Card.Title>Jane Eyre</Card.Title>
                <b>Charlotte Brontë</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title>Lord of the Rings</Card.Title>
                <b>J. R. R. Tolkien</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>

            <br />
          </div>
          
        </div>
      </div>
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
<hr/>
<hr/>
<div>
      <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://austechitservices.weebly.com/uploads/1/0/4/4/104446497/editor/2017-04-12-18-46-06.jpg?1492189059" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a 
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://austechitservices.weebly.com/uploads/1/0/4/4/104446497/editor/2017-04-12-18-46-06.jpg?1492189059" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natu{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://austechitservices.weebly.com/uploads/1/0/4/4/104446497/editor/2017-04-12-18-46-06.jpg?1492189059" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
<hr/>
<hr/>
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
      <h3>
        <b>Popular Authors!</b>
      </h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Figure>
              <Figure.Image
                width={300}
                height={400}
                src="https://cdn.britannica.com/74/177874-131-62098C6C/Jules-Verne.jpg"
              />
              <Figure.Caption>
                <h5>
                  <b>Martin Lawrencec</b>
                </h5>
              </Figure.Caption>
              <Button variant="dark">Check Novels</Button>{" "}
            </Figure>
          </div>
          <div className="col-md-6">
            <Figure>
              <Figure.Image
                width={300}
                height={400}
                src="https://www.caltimes.org/wp-content/uploads/2020/02/Dr.-Sovak-copy-900x675.jpg"
              />
              <Figure.Caption>
                <h5>
                  <b>Charlotte Brontë</b>
                </h5>
              </Figure.Caption>
              <Button variant="dark">Check Novels</Button>{" "}
            </Figure>
          </div>
          <div className="col-md-6">
            <Figure>
              <Figure.Image
                width={300}
                height={400}
                src="https://fertilgold.com/wp-content/uploads/2020/03/Plehn-900x675.jpg"
              />
              <Figure.Caption>
                <h5>
                  <b>J. R. R. Tolkien</b>
                </h5>
              </Figure.Caption>
              <Button variant="dark">Check Novels</Button>{" "}
            </Figure>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <small>
              <b className="footer">@Copyright 2020</b>
            </small>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LandingPage;
