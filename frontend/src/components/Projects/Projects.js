import './Projects.css'
import project_list from './project_list';
function createCard(project){
    return(
        <div className='card'>
            <h3>{project.heading}</h3>
            <div className='card-image'>
                <img src={project.img}/>
            </div>
            <p>{project.des}</p>
            <div className='card-footer'>
                <button className='card-btn' href={project.glink}><i class="fa-brands fa-github"></i> GitHub</button>
                <button className='card-btn' href={project.wlink}><i class="fa-solid fa-globe"></i> WebLink</button>
            </div>
        </div>
    )
}
function Projects() {
    return (
      <div className="Projects">       
        <h1>Projects</h1>
        <div className='projects-container'>
            {project_list.map(createCard)}
        </div>
      </div>
      
    );
  }
  
export default Projects;