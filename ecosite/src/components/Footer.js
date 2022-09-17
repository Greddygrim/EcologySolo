import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Menu</h4>
              <div className="footernav-links">
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/event">Events</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/login">Login</Link>
              </div>
            </div>
            <div class="footer-col">
              <h4>Follow us</h4>
              <div className="socialmedia-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">TikTok</a>
              </div>
            </div>
          </div>
          <div className="copy"> &copy; Copywrite 2022</div>
        </div>
      </footer>
    </div>
  );
};
