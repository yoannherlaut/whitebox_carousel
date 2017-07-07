
class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Head/>
        <Carousel />
        <Images/>
      </div>
    );
  }
}

class Head extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <header>
        <div className="menu_block">
          <div className="container clearfix">
            <div className="logo pull-left">
              <a href="./" ><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span> <span className="b4">box</span></a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}


class Carousel extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <section id="home" className="padbot0">

        <div className="flexslider top_slider">
          <ul className="slides">
            <li className="slide1 flex-active-slide">
              <div className="flex_caption1">
                <p className="title1 captionDelay2 FromTop">Lyon</p>
                <p className="title2 captionDelay4 FromTop">vacances été</p>
                <p className="title3 captionDelay6 FromTop">2017</p>
                <p className="title4 captionDelay7 FromTop">Vacance au calme dans une petite maison de campagne</p>
              </div>
            </li>
            <li className="slide2">
              <div className="flex_caption1">
                <p className="title1 captionDelay6 FromLeft">Bretagne</p>
                <p className="title2 captionDelay4 FromLeft">weekend de mai</p>
                <p className="title3 captionDelay2 FromLeft">2016</p>
                <p className="title4 captionDelay7 FromLeft">Un moment de detente en famille</p>
              </div>
            </li>
            <li className="slide3">
              <div className="flex_caption1">
                <p className="title1 captionDelay1 FromBottom">Biarritz</p>
                <p className="title2 captionDelay2 FromBottom">Anniversaire Théo</p>
                <p className="title3 captionDelay3 FromBottom">2016</p>
                <p className="title4 captionDelay5 FromBottom">Surf and fun entre amis</p>
              </div>
            </li>
          </ul>
        </div>

      </section>
    );
  }
}

class Images extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div id="carousel">
        <ul className="slides">
          <li data-target="slide1" className="flex-active-slide"><img src="images/slider/slide1_bg.jpg" alt="" /></li>
          <li data-target="slide2"><img src="images/slider/slide2_bg.jpg" alt="" /></li>
          <li data-target="slide3"><img src="images/slider/slide3_bg.jpg" alt="" /></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
        <App/>
          ,
  document.getElementById('page')
);
