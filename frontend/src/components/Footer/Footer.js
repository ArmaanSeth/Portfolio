import './Footer.css'
function Footer() {
    return (
      <div className="Footer" id='footer'>     
        <h1>Communication matters to start good things/</h1>  
        <h3>I'm currently available for freelance worldwide. Feel free to contact me if you want to collaborate on future projects or have a little chat.</h3>
        <a href='mailto:seth.armaanseth@gmail.com' className='mail-btn'>Send me a mail!</a>
        <div className='icons'>
            <a href='https://medium.com/@seth.armaanseth'><i class="fa-brands fa-medium"></i></a>
            <a href='https://twitter.com/ARMAANSETH12'><i class="fa-brands fa-x-twitter"></i></a>
            <a href='https://www.kaggle.com/armaanseth6702' className='ha'><h6>🤗</h6></a>
            <a href='https://www.linkedin.com/in/armaan-seth-297195220/'><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://github.com/ArmaanSeth'><i class="fa-brands fa-github"></i></a>
            <a href='https://www.kaggle.com/armaanseth6702'><i class="fa-brands fa-kaggle"></i></a>
        </div>
      </div>
      
    );
  }
  
export default Footer;