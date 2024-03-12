import './About.css'
function About() {
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid}";
      document.body.appendChild(css);
  };
  return (
      <div className="About" id='about'>    
        <h1>About</h1>
        <div className='about-container'>
            <div className='about-image'><img src='https://raw.githubusercontent.com/ArmaanSeth/Images/main/the-blobs-live-on-waving.gif'/></div>
            <div className="animation"> 
              <a href="" className="typewrite" data-period="2000" data-type='[ "Hi, I am Armaan Seth, an AI/ML developer." ]'>
                <span className="wrap"></span>
              </a>
            </div>        
        </div>        
        <div className="about" >I am currently pursuing my B-Tech degree in Computer Science and Engineering with a major in Artificial Intelligence and Machine Learning (AI/ML) at Maharaja Surajmal Institute of Technology, Delhi. With a fervent enthusiasm for exploring diverse tech stacks, my focus lies primarily within AI/ML. Recently, I have been tinkering with Generative AI and Natural Language Processing.
        <br/>
        <br/>
        <a className="resume-btn" href='https://drive.google.com/file/d/1XtNCOhBQgzhEvrnjLzQCqY7DTJ-CHSNi/view?usp=drive_link'>Resume <i class="fa-solid fa-up-right-and-down-left-from-center"></i></a>
        </div>    
        
      </div>
    );
  }
  
export default About;