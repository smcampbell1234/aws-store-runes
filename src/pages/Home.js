import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaYoutubeSquare, FaFacebook, FaTwitterSquare  } from "react-icons/fa";

function Home() {
  const navigate = useNavigate()
  return (
    <div className="home-wrapper">
      <h2 className="home-header">Forbidden Runes</h2>
      <div>
        <img 
          className="home-splash-img" 
          src="https://cdn3.vectorstock.com/i/1000x1000/65/07/barbarian-on-white-vector-21166507.jpg" 
          alt="splash-img" 
          />
      </div>

      <div className="to-store" onClick={() => navigate('/store')}>
        <h1>I have nothing to sell you.</h1>
        <h1>To Store &#x2192;</h1>
      </div>


      <h2 className="home-header-gallery">Forbidden Gallery</h2>

      <div className="image-gallery">
        Gallery currently forbidden.
      </div>

      <h2 className="home-header-gallery">Forbidden Dungeons</h2>

      <div className="image-gallery">
        Dungeons currently forbidden.
      </div>


      <div className="to-store" onClick={() => navigate('/store')}>
        <h1>I still have nothing to sell you.</h1>
        <h1>To Store &#x2192;</h1>
      </div>

      <footer className="footer-wrapper">
        <div className="footer-icons">
          <a href="https://www.instagram.com/forbidden_runes/" target="_blank">
            <FaInstagram className="icon"/>
          </a>
          <a href="https://www.instagram.com/forbidden_runes/" target="_blank">
            <FaYoutubeSquare className="icon"/>
          </a>
        </div>
        <div>
          <div className="footer-copyright">
            Copyright (c) 2022 Forbiden Runes. All Rights Reserved.
          </div>
          <div className="footer-warning">
            Breach of copyright is punishable by death
          </div>
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/forbidden_runes/" target="_blank">
            <FaFacebook className="icon"/>
          </a>
          <a href="https://www.instagram.com/forbidden_runes/" target="_blank">
            <FaTwitterSquare className="icon"/>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
