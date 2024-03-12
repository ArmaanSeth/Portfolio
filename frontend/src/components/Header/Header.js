import './Header.css'
function Header() {
    return (
      <div className="Header">       
        <div className='container'>
          <div className="image"><img src='https://raw.githubusercontent.com/ArmaanSeth/Images/main/profile.jpg'/></div>
          <div className="text">Designing the future, from data to decision!</div>
        </div>
        <a className='btn' href='#footer'>LET'S CONNECT W/ ME</a>
      </div>
      
    );
  }
  
export default Header;