import './TechStack.css'
import tech_logo from './tech_logo';
import lang_logo from './lang-logo';
function createLogo(logo){
    return (<li className='logo-image'>{logo.tag}</li>)
}

function TechStack() {
    return (     
      <div className="TechStack">   
        <div className='slider'>
            <ul className="stack-r">
                {lang_logo.map(createLogo)}
                {lang_logo.map(createLogo)}
            </ul>
        </div> 
        <div className='slider'>
            <ul className="stack-l">
                {tech_logo.map(createLogo)}
                {tech_logo.map(createLogo)}
            </ul>
        </div> 
        
      </div>
    );
  }
  
export default TechStack;