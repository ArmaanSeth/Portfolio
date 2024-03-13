import React, { useState , useEffect} from 'react';
import './About.css'
function Typing(){
    const [text, setT] = useState("");
    const f = () => console.log("");
    const t = "Hi, I am Armaan Seth, an AI/ML developer.";
    function type(s = 100, i = 0, d = 0) {
      setInterval(
        () => (
          d == 0 ? i++ : i--,
          i >= t.length && d == 0 ? (d = 1) : i == 0 ? (d = 0) : 0,
          setT(t.slice(0, i))
        ),
        s
      );
    }
    useEffect(() => {
      type();
      console.log("hiop")
    }, []);
  
    return (
      <h1 id="hip" onClick={f} className="text-yellow-500 h-20 w-full text-4xl mt-5">
        {text+'|'}
      </h1>
    );
}
function About() {
  return (
      <div className="About" id='about'>    
        <h1>About</h1>
        <div className='about-container'>
            <div className='about-image'><img src='https://raw.githubusercontent.com/ArmaanSeth/Images/main/the-blobs-live-on-waving.gif'/></div>
            <div className="animation"> 
              <Typing/>
            </div>        
        </div>        
        <div className="about" >I am currently pursuing my B-Tech degree in Computer Science and Engineering with a major in Artificial Intelligence and Machine Learning (AI/ML) at Maharaja Surajmal Institute of Technology, Delhi. With a fervent enthusiasm for exploring diverse tech stacks, my focus lies primarily within AI/ML. Recently, I have been tinkering with Generative AI and Natural Language Processing.
        <br/>
        <br/>
        <br/>
        <a className="resume-btn" href='https://drive.google.com/file/d/1XtNCOhBQgzhEvrnjLzQCqY7DTJ-CHSNi/view?usp=drive_link'>Resume <i class="fa-solid fa-up-right-and-down-left-from-center"></i></a>
        <br/>
        <br/>
        </div>    
        
      </div>
    );
  }
  
export default About;