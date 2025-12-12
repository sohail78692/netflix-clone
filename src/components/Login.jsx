import { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    if (password.length < 4) {
      setError('Password must be at least 4 characters');
      return;
    }

    if (!isSignIn && !name) {
      setError('Please enter your name');
      return;
    }

    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Demo login - accept any credentials
      const user = {
        name: name || email.split('@')[0],
        email: email,
      };
      localStorage.setItem('netflix-user', JSON.stringify(user));
      onLogin(user);
    }, 1200);
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setError('');
    setName('');
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
        <div className="login-gradient"></div>
      </div>

      <header className="login-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          className="login-logo"
        />
      </header>

      <div className="login-container">
        <div className="login-form-wrapper">
          <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            {!isSignIn && (
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={name ? 'has-value' : ''}
                  autoComplete="name"
                />
              </div>
            )}

            <div className="form-group">
              <input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={email ? 'has-value' : ''}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={password ? 'has-value' : ''}
                autoComplete={isSignIn ? 'current-password' : 'new-password'}
              />
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <span className="loader"></span>
              ) : isSignIn ? (
                'Sign In'
              ) : (
                'Sign Up'
              )}
            </button>
          </form>

          <div className="login-help">
            <label className="remember-me">
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
            <a href="#" className="need-help">Need help?</a>
          </div>

          <div className="login-footer">
            <p>
              {isSignIn ? 'New to Netflix? ' : 'Already have an account? '}
              <span onClick={toggleForm}>
                {isSignIn ? 'Sign up now' : 'Sign in'}
              </span>
            </p>
            <p className="captcha-text">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
          </div>

          <div className="demo-notice">
            <p>Demo Mode: Use any email & password (min 4 chars) to login</p>
          </div>
        </div>
      </div>

      <footer className="login-page-footer">
        <div className="footer-content">
          <p>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
          <div className="footer-links">
            <a href="#">FAQ</a>
            <a href="#">Help Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Corporate Information</a>
          </div>
          <div className="language-selector">
            <select defaultValue="English">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
