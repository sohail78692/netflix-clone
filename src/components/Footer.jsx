import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import FooterPages from './FooterPages';
import './Footer.css';

function Footer() {
  const [activePage, setActivePage] = useState(null);

  const footerLinks = [
    { id: 'audio-description', label: 'Audio Description' },
    { id: 'help-center', label: 'Help Center' },
    { id: 'gift-cards', label: 'Gift Cards' },
    { id: 'media-center', label: 'Media Center' },
    { id: 'investor-relations', label: 'Investor Relations' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'terms-of-use', label: 'Terms of Use' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'legal-notices', label: 'Legal Notices' },
    { id: 'cookie-preferences', label: 'Cookie Preferences' },
    { id: 'corporate-information', label: 'Corporate Information' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    setActivePage(pageId);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-social">
          <a href="https://facebook.com/netflix" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://instagram.com/netflix" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com/netflix" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://youtube.com/netflix" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
        </div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="service-code">Service Code</button>
        <p className="copyright">&copy; 2024 Netflix Clone - Built with React</p>
      </footer>

      <FooterPages page={activePage} onClose={() => setActivePage(null)} />
    </>
  );
}

export default Footer;
