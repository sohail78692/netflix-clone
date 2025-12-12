# Netflix Clone

A fully functional Netflix UI clone built with React and Vite. This project is created for **educational purposes only** to demonstrate modern web development techniques and is not affiliated with, endorsed by, or connected to Netflix, Inc. in any way.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 Table of Contents

- [Disclaimer](#-disclaimer)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## ⚠️ Disclaimer

**This project is for educational and demonstration purposes only.**

- This is **NOT** the official Netflix application
- This project is **NOT** affiliated with, endorsed by, or connected to Netflix, Inc.
- All Netflix logos, trademarks, and branding elements are property of Netflix, Inc.
- This clone does **NOT** provide access to Netflix's actual content library
- No copyrighted content from Netflix is stored or distributed through this project
- The movie/TV show data is sourced from [TMDB (The Movie Database)](https://www.themoviedb.org/) API
- This project should **NOT** be used for commercial purposes
- Users should refer to the official [Netflix website](https://www.netflix.com) for actual streaming services

**By using this project, you acknowledge that:**
1. This is a learning resource for web development
2. You will not use this for any commercial purposes
3. You will not misrepresent this as an official Netflix product

## ✨ Features

### Authentication
- Demo login/signup system (no real authentication)
- Session persistence with localStorage
- User profile display

### Browse Experience
- Dynamic hero banner with random featured content
- Multiple content categories (Trending, Top Rated, Action, Comedy, etc.)
- Horizontal scrolling carousels with smooth navigation
- Dedicated pages for TV Shows, Movies, and New & Popular

### Search & Discovery
- Real-time search functionality
- Search results with movie/TV show cards
- Filter by media type

### Movie/Show Details
- Modal with detailed information
- Embedded YouTube trailers (when available)
- Cast and genre information
- Match percentage and metadata

### My List & Interactions
- Add/remove titles to personal list
- Like/unlike functionality
- Persistent storage (survives page refresh)

### Video Playback
- Full-screen video player
- YouTube trailer integration
- Mute/unmute controls
- Keyboard shortcuts (ESC to close)

### UI/UX
- Responsive design (mobile, tablet, desktop)
- Netflix-style dark theme
- Smooth animations and transitions
- Loading states and error handling

### Footer Pages
- Audio Description info
- Help Center
- Gift Cards
- Media Center
- Investor Relations
- Jobs/Careers
- Terms of Use
- Privacy Policy
- Legal Notices
- Cookie Preferences
- Corporate Information
- Contact Us

## 🎬 Demo

To run the demo locally, follow the [Installation](#-installation) instructions below.

**Demo Login:** Use any email (e.g., `demo@test.com`) and password (min 4 characters) to access the app.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Styling:** CSS3 (Custom styles, no UI framework)
- **API:** TMDB (The Movie Database)
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** localStorage for persistence

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/sohail78692/netflix-clone
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Usage

1. **Login:** Enter any email and password (min 4 characters) on the login page
2. **Browse:** Scroll through different categories on the home page
3. **Navigate:** Use the navbar to switch between Home, TV Shows, Movies, New & Popular, and My List
4. **Search:** Click the search icon and type to find specific titles
5. **View Details:** Click on any title to see more information and watch the trailer
6. **My List:** Click the + button to add titles to your list
7. **Like:** Click the thumbs up button to like titles
8. **Play:** Click the Play button to watch trailers in full-screen mode
9. **Sign Out:** Click your profile avatar and select "Sign Out"

## 🔗 API Reference

This project uses the [TMDB API](https://developers.themoviedb.org/3) for movie and TV show data.

### Endpoints Used

| Endpoint | Description |
|----------|-------------|
| `/trending/all/week` | Get trending content |
| `/discover/tv` | Discover TV shows |
| `/movie/top_rated` | Get top-rated movies |
| `/discover/movie` | Discover movies by genre |
| `/tv/popular` | Get popular TV shows |
| `/movie/now_playing` | Get now playing movies |
| `/movie/upcoming` | Get upcoming movies |
| `/search/multi` | Search movies and TV shows |
| `/{type}/{id}` | Get details with videos and credits |

### TMDB Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.

![TMDB Logo](https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg)

## 📁 Project Structure

```
netflix-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Banner.jsx          # Hero banner component
│   │   ├── Banner.css
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── Footer.css
│   │   ├── FooterPages.jsx     # Footer page modals
│   │   ├── FooterPages.css
│   │   ├── Login.jsx           # Login/Signup page
│   │   ├── Login.css
│   │   ├── MovieModal.jsx      # Movie details modal
│   │   ├── MovieModal.css
│   │   ├── MovieRow.jsx        # Horizontal movie carousel
│   │   ├── MovieRow.css
│   │   ├── MyList.jsx          # My List page
│   │   ├── MyList.css
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Navbar.css
│   │   ├── SearchResults.jsx   # Search results page
│   │   ├── SearchResults.css
│   │   ├── VideoPlayer.jsx     # Full-screen video player
│   │   └── VideoPlayer.css
│   ├── services/
│   │   └── tmdb.js             # TMDB API configuration
│   ├── App.jsx                 # Main application component
│   ├── App.css
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! This is an educational project, and improvements are appreciated.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- [Netflix](https://www.netflix.com) - For the UI/UX inspiration
- [TMDB](https://www.themoviedb.org) - For providing the free movie database API
- [React](https://reactjs.org) - For the amazing frontend library
- [Vite](https://vitejs.dev) - For the blazing fast build tool
- [React Icons](https://react-icons.github.io/react-icons/) - For the icon library

---

## 📧 Contact

If you have any questions about this project, feel free to open an issue.

---

<p align="center">
  <b>⭐ Star this repository if you found it helpful!</b>
</p>

<p align="center">
  Made with ❤️ for learning purposes
</p>
