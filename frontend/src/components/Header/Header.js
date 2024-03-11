import './Header.css'
function Header() {
    return (
      <div className="Header">       
        <div className='container'>
          <div className="image"><img src='https://raw.githubusercontent.com/ArmaanSeth/Images/main/profile.jpg'/></div>
          <div className="text">Designing the future, from data to decision!</div>
        </div>
        <button className='btn'>LETS CONNECT W/ ME</button>
      </div>
      
    );
  }
  
export default Header;