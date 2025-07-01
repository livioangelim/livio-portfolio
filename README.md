# Livio Angelim Mororo - Software Engineer Portfolio

Hey there, welcome to my personal portfolio website! This is where I showcase my projects, skills, and professional background as a **Software Engineer**. This website serves as a digital resume and a comprehensive collection of my work, highlighting my expertise in **back-end**, and **full-stack development**. It also reflects the knowledge I gained during my **Bachelor's Degree in Computer Science** at **Western Governors University (WGU)**, including areas like **Artificial Intelligence (AI)**, **DevOps** and **cloud computing**.

## Features

- **Responsive Design**: The portfolio is fully responsive, ensuring it looks great on any device, including desktops, tablets, and mobile phones.
- **Interactive Navbar**: A sticky and interactive navbar for smooth navigation through different sections of the website.
- **Combined Hero & Bio Section**: An engaging introduction with an animated expandable bio that reveals detailed professional information when hovered.
- **Project Section**: Showcases some of the real-world projects I've worked on, complete with project descriptions, links, and technologies used.
- **Smooth Scroll & Transitions**: Smooth scrolling experience and CSS transitions to give a modern and fluid feel to the site.
- **Multilingual Support**: Full website translation in English, French, Portuguese, and Spanish with language preference persistence.
- **Enhanced Project Showcase**: Interactive project cards with detailed modal views featuring repositories, documentation, demos, and videos.
- **Dark/Light Theme Toggle**: A customizable theme system allowing users to switch between dark and light modes, with preference saved for future visits.
- **Project Filtering System**: Advanced filtering capabilities to sort projects by technology, type, or category for easier navigation.
- **Lazy Loading**: Performance optimization through lazy loading of images and videos, improving page load speed and user experience.
- **SEO Optimized**: Comprehensive metadata including Open Graph and Twitter Card support for better search engine visibility and social sharing.

## Recent Improvements

### April 2025 Update - Phase 1: Enhanced Content

#### 1. Project Filtering Improvements
- Enhanced project filtering functionality to allow toggling of all filter buttons including the "All" filter
- Improved filter button behavior for more intuitive user interaction
- Updated filter logic to provide consistent selection/deselection behavior across all filters
- Fixed edge case scenarios where filter state could become inconsistent

#### 2. SEO Optimization
- Added comprehensive meta tags for improved search engine indexing
- Implemented Open Graph and Twitter Card metadata for better social media sharing
- Added canonical URL to prevent duplicate content issues
- Enhanced title and description tags with relevant keywords

#### 3. Enhanced Project Descriptions
- Expanded all project descriptions with "Challenges" and "Solutions" sections
- Added detailed technical problem descriptions and innovative solutions
- Improved technology stack listings to showcase technical depth
- Enhanced presentation of project accomplishments with quantifiable metrics

#### 4. Contact Form Implementation
- Created a responsive contact form with fields for name, email, subject, and message
- Implemented form validation and user feedback mechanisms
- Added contact information and location details
- Integrated social media links for additional contact options
- Styled to match the overall design aesthetic

#### 5. Articles Section Implementation
- Added a dedicated articles section to showcase technical writing and thought leadership
- Implemented responsive article cards with images, titles, descriptions, and metadata
- Created an intelligent filtering system by article tags (AI, Algorithms, Culture, etc.)
- Added "Read Article" buttons linking to the original publication sources
- Integrated with the translation system for multilingual article content
- Implemented lazy loading for article images to improve performance
- Added empty state handling when no articles match selected filters

#### 6. Initial Multilingual Support (April 2025 - Phase 0)
- Added complete translations in **English**, **French**, **Portuguese**, and **Spanish**
- Implemented a language switcher in the navigation bar
- Created a system to persist language preferences using localStorage
- Structured translations in a maintainable data format

#### 7. Modern UI Redesign (April 2025 - Phase 0)
- Redesigned with inspiration from professional developer portfolios
- Added subtle animations and hover effects
- Enhanced typography and color scheme
- Improved spacing and section layouts
- Added decorative styling to profile image

### April 2025 Update - Phase 2: Performance & User Experience

#### 1. Dark/Light Theme Toggle Implementation
- Added a theme toggle switch in the navigation bar
- Implemented comprehensive theme styling across all page elements
- Created smooth transition animations between themes
- Developed theme preference persistence using localStorage
- Included automatic theme detection based on user's system preferences

#### 2. Project Filtering System Enhancement
- Implemented multi-criteria filtering for the projects section
- Created interactive filter buttons with visual feedback
- Added the ability to filter projects by technology stack, project type, and complexity
- Designed intuitive toggling behavior for all filter buttons including the "All" filter
- Optimized filter logic for consistent selection/deselection behavior

#### 3. Lazy Loading Implementation
- Created a dedicated lazy loading system (lazyLoad.js) for optimal performance
- Implemented the Intersection Observer API for efficient resource loading
- Added support for lazy loading of images, videos, and iframes
- Included fallback mechanisms for browsers without Observer API support
- Optimized to refresh lazy loading for dynamically added content
- Added placeholder images during the loading process

### April 2025 Update - Phase 3: UI Refinement

#### 1. Combined Hero and About Sections
- Merged the Home and About sections into a single cohesive section for a more streamlined experience
- Added an elegant expandable bio that reveals detailed professional information when hovering for 1 second
- Placed the rectangular profile image with animated border effect on the right side
- Emphasized key skills and qualifications with highlighted turquoise text
- Maintained full multilingual support for the expanded bio content

#### 2. Streamlined Contact Section
- Simplified the contact section to focus on essential communication channels
- Enhanced the social media icons (LinkedIn and GitHub) with larger size and improved spacing
- Added a clickable email link with color transition effect on hover
- Removed the contact form for a cleaner, more direct approach to communication

## Technologies Used

- **HTML5, CSS3, JavaScript**: For building the structure, layout, and interactions.
- **Font Awesome**: For adding social media icons and other vector icons.
- **Google Fonts (Inria Sans, Inter, Kanit)**: For modern and clean typography.
- **Custom JavaScript (script.js)**: Manages the interactive components such as sticky navbar, scroll effects, skill animations, language switching, project modals, form handling, theme toggling, and lazy loading.

## Sections Overview

### 1. **Hero Section with Expandable Bio**
The hero section features a welcoming message introducing myself as a **Software Engineer** along with my profile image. When hovering over the introduction text for one second, it expands to reveal a comprehensive bio highlighting my dual background in **Computer Science** and **Social Communication - Journalism**, my work in **AI/ML development**, **cloud-native architectures**, and my transition from journalism to software engineering.

### 2. **Projects Section**
A collection of projects with detailed descriptions, challenges faced, solutions implemented, technology stacks, and links to repositories, documentation, demos, and videos where available. Each project is presented in a card format with a detailed view accessible through interaction.

### 3. **Articles Section**
A showcase of my technical articles covering topics in software engineering, AI, and technology trends. The articles are filterable by topic and include links to the original publications.

### 4. **Contact Section**
A streamlined section that provides my direct contact information, including email address and location, along with links to my professional profiles on LinkedIn and GitHub.

## Further Enhancements

### Semi-Automated Content Updates

To keep the portfolio's content current with minimal manual effort, a semi-automated workflow has been implemented to add new articles from LinkedIn.

**How it Works:**

1.  **Manual Trigger**: The process is initiated by manually running a **GitHub Actions workflow**. This is done from the repository's "Actions" tab, where the URL of the new LinkedIn article is provided as an input.
2.  **Data Scraping & Processing**: The workflow executes a script that:
    *   Fetches the content of the article URL.
    *   Parses the HTML to extract the title, description, and publication date.
    *   Uses a translation API (e.g., DeepL, Google Translate) to generate translations for the title and description in French, Portuguese, and Spanish.
3.  **File Updates**: The script then reads the `js/articles.js` file, creates a new JavaScript object for the article, and appends it to the `articlesData` array.
4.  **Pull Request Creation**: Finally, the workflow commits the updated `js/articles.js` file to a new branch and automatically opens a pull request.

This system streamlines content updates by automating the most tedious parts of the process while still allowing for a final review before changes go live. Merging the pull request automatically deploys the updated portfolio to GitHub Pages.

## How to View the Portfolio
The portfolio is publicly accessible online. You can explore the live version by visiting the following URL:
[Live Portfolio](https://livioangelim.github.io/livio-portfolio/)

## How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/livioangelim/lvo-portfolio.git
   cd lvo-portfolio
   ```

2. **Open the `index.html`** file in your browser:
   ```bash
   open index.html
   ```

3. **Optional: Use a local server** if you want a smoother development experience. For example, you can use Python's HTTP server:
   ```bash
   python3 -m http.server
   ```

4. Open your browser and navigate to:
   ```bash
   http://localhost:8000
   ```

## Project Structure

```
livio-portfolio/
├── js/
│   ├── translations.js     # Stores text translations
│   ├── articles.js         # Articles data
│   ├── projects.js         # Project data
│   ├── lazyLoad.js         # Lazy Loading implementation
│   └── script.js           # Main JavaScript functionality
├── images/
│   ├── articles/           # Image assets subdirectory for articles
│   ├── projects/           # Image assets subdirectory for projects   
│   ├── lvo-dark.jpg        # Logo file
│   ├── lvo-light.jpg       # Logo file
│   └── livio.png           # Profile picture
├── style.css               # Main CSS styles
├── index.html              # Main HTML file (the single page)
└── README.md               # Project documentation file
```

## License
All content, code, and assets in this repository are All Rights Reserved. You may not copy, modify, or distribute any part of this project without explicit permission from the author.