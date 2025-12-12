import { FaTimes, FaUniversalAccess, FaQuestionCircle, FaGift, FaNewspaper, FaChartLine, FaBriefcase, FaFileContract, FaShieldAlt, FaGavel, FaCookie, FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './FooterPages.css';

function FooterPages({ page, onClose }) {
  if (!page) return null;

  const pages = {
    'audio-description': {
      title: 'Audio Description',
      icon: <FaUniversalAccess />,
      content: (
        <>
          <p className="page-intro">
            Audio Description provides a narration of key visual elements for people who are blind or have low vision.
          </p>
          <h3>What is Audio Description?</h3>
          <p>
            Audio Description (AD) is an additional audio track that describes visual elements of a show or movie that may not be apparent from the main audio alone. This includes actions, facial expressions, costumes, settings, and on-screen text.
          </p>
          <h3>How to Enable Audio Description</h3>
          <ul>
            <li>Start playing a title that offers Audio Description</li>
            <li>Select the Audio & Subtitles option from the player controls</li>
            <li>Select the Audio Description track (usually marked with "AD")</li>
            <li>Resume playback</li>
          </ul>
          <h3>Available Content</h3>
          <p>
            We're continuously adding more titles with Audio Description. Look for the AD symbol on titles that support this feature. Most Netflix Originals include Audio Description in multiple languages.
          </p>
          <div className="info-box">
            <h4>Supported Devices</h4>
            <p>Audio Description is available on most devices including Smart TVs, streaming devices, game consoles, mobile devices, and web browsers.</p>
          </div>
        </>
      )
    },
    'help-center': {
      title: 'Help Center',
      icon: <FaQuestionCircle />,
      content: (
        <>
          <p className="page-intro">
            Welcome to Netflix Help Center. Find answers to common questions and get support.
          </p>
          <div className="help-grid">
            <div className="help-card">
              <h4>Account & Billing</h4>
              <ul>
                <li>Update payment method</li>
                <li>Change your plan</li>
                <li>Cancel membership</li>
                <li>Request refund</li>
              </ul>
            </div>
            <div className="help-card">
              <h4>Watching Netflix</h4>
              <ul>
                <li>Supported devices</li>
                <li>Video quality settings</li>
                <li>Download shows</li>
                <li>Subtitles & audio</li>
              </ul>
            </div>
            <div className="help-card">
              <h4>Troubleshooting</h4>
              <ul>
                <li>Can't sign in</li>
                <li>Error codes</li>
                <li>Playback issues</li>
                <li>Network problems</li>
              </ul>
            </div>
            <div className="help-card">
              <h4>Quick Links</h4>
              <ul>
                <li>Reset password</li>
                <li>Update email</li>
                <li>Manage profiles</li>
                <li>Parental controls</li>
              </ul>
            </div>
          </div>
          <div className="contact-support">
            <h3>Still need help?</h3>
            <p>Our support team is available 24/7</p>
            <div className="support-buttons">
              <button className="support-btn">
                <FaPhone /> Call Us
              </button>
              <button className="support-btn">
                <FaEnvelope /> Live Chat
              </button>
            </div>
          </div>
        </>
      )
    },
    'gift-cards': {
      title: 'Gift Cards',
      icon: <FaGift />,
      content: (
        <>
          <p className="page-intro">
            Give the gift of endless entertainment with Netflix Gift Cards.
          </p>
          <div className="gift-cards-display">
            <div className="gift-card">
              <div className="gift-amount">$25</div>
              <p>~1 month of Standard</p>
            </div>
            <div className="gift-card featured">
              <div className="gift-amount">$50</div>
              <p>~3 months of Standard</p>
              <span className="popular-tag">Most Popular</span>
            </div>
            <div className="gift-card">
              <div className="gift-amount">$100</div>
              <p>~6 months of Standard</p>
            </div>
          </div>
          <h3>How It Works</h3>
          <ol>
            <li>Purchase a Netflix Gift Card online or at participating retailers</li>
            <li>Give the card or send the code to your recipient</li>
            <li>Recipient redeems at netflix.com/redeem</li>
            <li>Credit is applied to their account</li>
          </ol>
          <h3>Where to Buy</h3>
          <p>Netflix Gift Cards are available at major retailers including Amazon, Best Buy, Target, Walmart, and many grocery stores.</p>
          <div className="info-box">
            <h4>Terms & Conditions</h4>
            <p>Gift cards are non-refundable and cannot be redeemed for cash. No expiration date. Full terms at netflix.com/giftcardterms</p>
          </div>
        </>
      )
    },
    'media-center': {
      title: 'Media Center',
      icon: <FaNewspaper />,
      content: (
        <>
          <p className="page-intro">
            The official source for Netflix news, information, and media resources.
          </p>
          <h3>Latest News</h3>
          <div className="news-list">
            <div className="news-item">
              <span className="news-date">Dec 10, 2024</span>
              <h4>Netflix Announces New Original Series Lineup for 2025</h4>
              <p>Exciting new shows coming to Netflix next year including drama, comedy, and documentary series.</p>
            </div>
            <div className="news-item">
              <span className="news-date">Dec 5, 2024</span>
              <h4>Netflix Games Expands with 10 New Titles</h4>
              <p>Mobile gaming catalog grows with new additions across multiple genres.</p>
            </div>
            <div className="news-item">
              <span className="news-date">Nov 28, 2024</span>
              <h4>Year in Review: Most Watched Shows of 2024</h4>
              <p>A look back at the titles that captivated audiences around the world.</p>
            </div>
          </div>
          <h3>Press Resources</h3>
          <div className="resource-buttons">
            <button className="resource-btn">Press Releases</button>
            <button className="resource-btn">Media Assets</button>
            <button className="resource-btn">Brand Guidelines</button>
            <button className="resource-btn">Press Contact</button>
          </div>
        </>
      )
    },
    'investor-relations': {
      title: 'Investor Relations',
      icon: <FaChartLine />,
      content: (
        <>
          <p className="page-intro">
            Financial information and resources for Netflix investors.
          </p>
          <div className="stock-info">
            <div className="stock-card">
              <span className="stock-label">NFLX</span>
              <span className="stock-price">$487.32</span>
              <span className="stock-change positive">+2.45%</span>
            </div>
          </div>
          <h3>Financial Highlights</h3>
          <div className="financial-grid">
            <div className="financial-item">
              <span className="fin-label">Revenue (Q3 2024)</span>
              <span className="fin-value">$9.82B</span>
            </div>
            <div className="financial-item">
              <span className="fin-label">Subscribers</span>
              <span className="fin-value">282.7M</span>
            </div>
            <div className="financial-item">
              <span className="fin-label">Operating Margin</span>
              <span className="fin-value">22.4%</span>
            </div>
            <div className="financial-item">
              <span className="fin-label">Free Cash Flow</span>
              <span className="fin-value">$2.1B</span>
            </div>
          </div>
          <h3>Resources</h3>
          <div className="resource-buttons">
            <button className="resource-btn">Annual Reports</button>
            <button className="resource-btn">SEC Filings</button>
            <button className="resource-btn">Earnings Calls</button>
            <button className="resource-btn">Governance</button>
          </div>
        </>
      )
    },
    'jobs': {
      title: 'Jobs at Netflix',
      icon: <FaBriefcase />,
      content: (
        <>
          <p className="page-intro">
            Join our team and help shape the future of entertainment.
          </p>
          <h3>Why Netflix?</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Freedom & Responsibility</h4>
              <p>We believe in giving people freedom to do their best work with accountability.</p>
            </div>
            <div className="benefit-card">
              <h4>Competitive Compensation</h4>
              <p>Top-of-market pay, stock options, and comprehensive benefits.</p>
            </div>
            <div className="benefit-card">
              <h4>Unlimited PTO</h4>
              <p>Take the time you need to recharge and maintain work-life balance.</p>
            </div>
            <div className="benefit-card">
              <h4>Global Impact</h4>
              <p>Your work reaches 200+ million members in 190+ countries.</p>
            </div>
          </div>
          <h3>Open Positions</h3>
          <div className="jobs-list">
            <div className="job-item">
              <h4>Senior Software Engineer</h4>
              <p>Los Gatos, CA • Engineering</p>
            </div>
            <div className="job-item">
              <h4>Product Designer</h4>
              <p>Los Angeles, CA • Design</p>
            </div>
            <div className="job-item">
              <h4>Content Analyst</h4>
              <p>Remote • Content</p>
            </div>
            <div className="job-item">
              <h4>Data Scientist</h4>
              <p>New York, NY • Data Science</p>
            </div>
          </div>
          <button className="view-all-btn">View All Openings</button>
        </>
      )
    },
    'terms-of-use': {
      title: 'Terms of Use',
      icon: <FaFileContract />,
      content: (
        <>
          <p className="page-intro">
            These Terms of Use govern your use of the Netflix service. Last updated: January 1, 2024.
          </p>
          <h3>1. Membership</h3>
          <p>
            Your Netflix membership will continue until terminated. To use the Netflix service you must have Internet access and a Netflix ready device, and provide us with one or more Payment Methods.
          </p>
          <h3>2. Billing and Cancellation</h3>
          <p>
            The membership fee for the Netflix service and any other charges you may incur in connection with your use of the service, such as taxes and possible transaction fees, will be charged to your Payment Method on the specific payment date indicated on your account.
          </p>
          <h3>3. Netflix Service</h3>
          <p>
            You must be at least 18 years of age to become a member of the Netflix service. Individuals under the age of 18 may only utilize the service with the involvement of a parent or legal guardian.
          </p>
          <h3>4. Passwords & Account Access</h3>
          <p>
            You are responsible for any activity that occurs through your Netflix account. By allowing others to access your account, you agree to be responsible for ensuring that they comply with these Terms of Use.
          </p>
          <h3>5. Disclaimers of Warranties</h3>
          <p>
            THE NETFLIX SERVICE AND ALL CONTENT AND SOFTWARE ASSOCIATED THEREWITH ARE PROVIDED "AS IS" AND WITHOUT WARRANTY OF ANY KIND.
          </p>
          <div className="info-box">
            <p>For the complete Terms of Use, please visit netflix.com/terms</p>
          </div>
        </>
      )
    },
    'privacy': {
      title: 'Privacy Policy',
      icon: <FaShieldAlt />,
      content: (
        <>
          <p className="page-intro">
            This Privacy Statement explains how we collect, use, and share your personal information. Last updated: January 1, 2024.
          </p>
          <h3>Information We Collect</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email, payment method, phone number</li>
            <li><strong>Usage Information:</strong> Viewing history, search queries, interactions</li>
            <li><strong>Device Information:</strong> Device IDs, network information, browser type</li>
            <li><strong>Location Information:</strong> IP address based location data</li>
          </ul>
          <h3>How We Use Your Information</h3>
          <ul>
            <li>Provide and improve our services</li>
            <li>Personalize your experience and recommendations</li>
            <li>Process payments and prevent fraud</li>
            <li>Communicate with you about your account</li>
            <li>Analyze usage patterns and trends</li>
          </ul>
          <h3>Your Choices</h3>
          <p>
            You can access and update your personal information through your account settings. You can also request deletion of your data, with certain exceptions required by law.
          </p>
          <div className="privacy-controls">
            <button className="control-btn">Download My Data</button>
            <button className="control-btn">Delete Account</button>
            <button className="control-btn">Communication Preferences</button>
          </div>
        </>
      )
    },
    'legal-notices': {
      title: 'Legal Notices',
      icon: <FaGavel />,
      content: (
        <>
          <p className="page-intro">
            Important legal information regarding the Netflix service.
          </p>
          <h3>Copyright Notice</h3>
          <p>
            © 2024 Netflix, Inc. All rights reserved. Netflix and the Netflix logo are registered trademarks of Netflix, Inc. All content available through the Netflix service is protected by copyright.
          </p>
          <h3>Trademark Information</h3>
          <p>
            Netflix, the Netflix logo, and all associated marks are trademarks of Netflix, Inc. and its affiliates. Other company and product names may be trademarks of their respective owners.
          </p>
          <h3>DMCA Notice</h3>
          <p>
            If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our copyright agent with the required information as specified in the Digital Millennium Copyright Act.
          </p>
          <h3>Open Source Software</h3>
          <p>
            Netflix uses various open source software. Licenses and attributions for open source components used in our applications are available in the application settings.
          </p>
          <div className="info-box">
            <h4>Legal Department Contact</h4>
            <p>Netflix, Inc.<br />100 Winchester Circle<br />Los Gatos, CA 95032</p>
          </div>
        </>
      )
    },
    'cookie-preferences': {
      title: 'Cookie Preferences',
      icon: <FaCookie />,
      content: (
        <>
          <p className="page-intro">
            Manage your cookie preferences and learn how we use cookies.
          </p>
          <h3>What Are Cookies?</h3>
          <p>
            Cookies are small text files stored on your device that help us provide and improve our services, personalize content, and analyze our traffic.
          </p>
          <h3>Cookie Categories</h3>
          <div className="cookie-options">
            <div className="cookie-option">
              <div className="cookie-header">
                <h4>Essential Cookies</h4>
                <span className="always-on">Always On</span>
              </div>
              <p>Required for the website to function properly. Cannot be disabled.</p>
            </div>
            <div className="cookie-option">
              <div className="cookie-header">
                <h4>Performance Cookies</h4>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <p>Help us understand how visitors interact with our website.</p>
            </div>
            <div className="cookie-option">
              <div className="cookie-header">
                <h4>Functional Cookies</h4>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <p>Enable enhanced functionality and personalization.</p>
            </div>
            <div className="cookie-option">
              <div className="cookie-header">
                <h4>Advertising Cookies</h4>
                <label className="toggle">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <p>Used to deliver relevant advertisements and track ad performance.</p>
            </div>
          </div>
          <button className="save-preferences-btn">Save Preferences</button>
        </>
      )
    },
    'corporate-information': {
      title: 'Corporate Information',
      icon: <FaBuilding />,
      content: (
        <>
          <p className="page-intro">
            Learn about Netflix, Inc. and our global operations.
          </p>
          <h3>About Netflix</h3>
          <p>
            Netflix is one of the world's leading entertainment services with over 280 million paid memberships in over 190 countries enjoying TV series, films, and games across a wide variety of genres and languages.
          </p>
          <div className="company-stats">
            <div className="stat-item">
              <span className="stat-number">280M+</span>
              <span className="stat-label">Subscribers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">190+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">13,000+</span>
              <span className="stat-label">Employees</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1997</span>
              <span className="stat-label">Founded</span>
            </div>
          </div>
          <h3>Leadership</h3>
          <div className="leadership-list">
            <div className="leader-item">
              <strong>Ted Sarandos</strong> - Co-CEO
            </div>
            <div className="leader-item">
              <strong>Greg Peters</strong> - Co-CEO
            </div>
            <div className="leader-item">
              <strong>Spencer Neumann</strong> - CFO
            </div>
          </div>
          <h3>Headquarters</h3>
          <p>
            <FaMapMarkerAlt /> 100 Winchester Circle, Los Gatos, California 95032, USA
          </p>
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </>
      )
    },
    'contact-us': {
      title: 'Contact Us',
      icon: <FaEnvelope />,
      content: (
        <>
          <p className="page-intro">
            We're here to help. Choose the best way to reach us.
          </p>
          <div className="contact-methods">
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <h4>Call Us</h4>
              <p>Available 24/7</p>
              <a href="tel:000-800-919-1694">000-800-919-1694</a>
            </div>
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h4>Live Chat</h4>
              <p>Get instant help</p>
              <button className="start-chat-btn">Start Chat</button>
            </div>
          </div>
          <h3>Send Us a Message</h3>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your email" />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>Select a topic</option>
                <option>Account Issue</option>
                <option>Billing Question</option>
                <option>Technical Problem</option>
                <option>Content Feedback</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </>
      )
    }
  };

  const currentPage = pages[page];
  if (!currentPage) return null;

  return (
    <div className="footer-page-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="footer-page-content">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="page-header">
          <span className="page-icon">{currentPage.icon}</span>
          <h1>{currentPage.title}</h1>
        </div>
        <div className="page-body">
          {currentPage.content}
        </div>
      </div>
    </div>
  );
}

export default FooterPages;
