import React from 'react';
import { Link } from 'react-router-dom';

function Footer2() {
  return (
    // <footer>
    //   <div className="text-center">All rights reserved</div>
    // </footer>
    <footer>
      <div className="design">
        <div className="col">
          <p id="design-text">
            Uniquely focused on information technology products, PC Parts offers
            more computers, electronics, networking and communication devices
            (more than 30,000 items in stock) than any other company.
          </p>
        </div>
        <div className="col">
          <h3>Connect</h3>
          <p>PC Parts</p>
          <p>Huge Selection & Lowest Prices</p>
          <p className="email-id">pcparts@email.com</p>
          <h4>123-4567-7890</h4>
        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Products </Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter Your Email" required />
            <button className="btn-secondary" type="submit"></button>
          </form>

          <div className="social-icons">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <hr />
      <p class="copyright">Copyright &copy; Diego Duran</p>
    </footer>
  );
}

export default Footer2;
