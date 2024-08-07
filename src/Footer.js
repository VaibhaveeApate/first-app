import {Link} from 'react-router-dom';
function Footer(){
    return (
      <>
      <body class="d-flex h-100 text-center text-bg-dark" data-new-gr-c-s-check-loaded="14.1188.0" data-gr-ext-installed="">
      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3"  data-bs-theme="dark">
      
      
      <Link className="nav-link" to="/">Home</Link>
      
      <li className="nav-item">
        <Link className="nav-link" to="/add">AddQuestion</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/manage">ManageQuestions</Link>
      </li>
          
      
    </ul>
    <div data-testid="footer-content">
    <p className="text-center text-body-secondary"  data-bs-theme="dark" >© Quiz App </p>
    </div>
  </footer>
</div>
</body>
      </>
 
    )
  }


export default Footer;