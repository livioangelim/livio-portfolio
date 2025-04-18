# Livio Angelim Mororo - Software Engineer Portfolio

Hey there, welcome to my personal portfolio website! This is where I showcase my projects, skills, and professional background as a **Software Engineer**. This website serves as a digital resume and a comprehensive collection of my work, highlighting my expertise in **back-end**, and **full-stack development**. It also reflects the knowledge I gained during my **Bachelor's Degree in Computer Science** at **Western Governors University (WGU)**, including areas like **Artificial Intelligence (AI)**, **DevOps** and **cloud computing**.

## Features

- **Responsive Design**: The portfolio is fully responsive, ensuring it looks great on any device, including desktops, tablets, and mobile phones.
- **Interactive Navbar**: A sticky and interactive navbar for smooth navigation through different sections of the website.
- **Skills Section with Accordion Animation**: This section presents my technical skills, grouped into categories such as programming languages, frameworks, and cloud tools. Each category is collapsible to enhance user experience and maintain focus.
- **Project Section**: Showcases some of the real-world projects I've worked on, complete with project descriptions, links, and technologies used.
- **Smooth Scroll & Transitions**: Smooth scrolling experience and CSS transitions to give a modern and fluid feel to the site.
- **Multilingual Support**: Full website translation in English, French, Portuguese, and Spanish with language preference persistence.
- **Enhanced Project Showcase**: Interactive project cards with detailed modal views featuring repositories, documentation, demos, and videos.
- **Dark/Light Theme Toggle**: A customizable theme system allowing users to switch between dark and light modes, with preference saved for future visits.
- **Project Filtering System**: Advanced filtering capabilities to sort projects by technology, type, or category for easier navigation.
- **Lazy Loading**: Performance optimization through lazy loading of images and videos, improving page load speed and user experience.
- **Contact Form**: A dedicated contact section with a functional form for potential clients or employers to reach out directly.
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

#### 5. Initial Multilingual Support (April 2025 - Phase 0)
- Added complete translations in **English**, **French**, **Portuguese**, and **Spanish**
- Implemented a language switcher in the navigation bar
- Created a system to persist language preferences using localStorage
- Structured translations in a maintainable data format

#### 6. Modern UI Redesign (April 2025 - Phase 0)
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

## Technologies Used

- **HTML5, CSS3, JavaScript**: For building the structure, layout, and interactions.
- **Font Awesome**: For adding social media icons and other vector icons.
- **Google Fonts (Inria Sans, Inter, Kanit)**: For modern and clean typography.
- **Custom JavaScript (script.js)**: Manages the interactive components such as sticky navbar, scroll effects, skill animations, language switching, project modals, form handling, theme toggling, and lazy loading.

## Sections Overview

### 1. **Hero Section**
The hero section includes a welcoming message, introducing myself as a **Software Engineer**. It features my animated logo and is fully translated in all supported languages.

### 2. **About Me**
A brief introduction detailing my professional background, including skills in **Java, Python, C++, and JavaScript**. This section highlights my experience in both front-end and back-end development. It also includes social media icons for LinkedIn, GitHub and email, allowing people to connect with me on professional platforms.

### 3. **Skills Section**
This section uses an accordion to present my skills in an organized manner. It covers the following categories:

- **Programming Languages**: C++, Java, JavaScript, Python, TypeScript
- **Web Technologies**: HTML5, CSS3, Angular, React
- **Frameworks and Libraries**: Spring, Hibernate, Pandas, NumPy
- **Database Management**: MySQL, SQL Server, PostgreSQL, JPA/Hibernate
- **Operating Systems**: iOS, Linux, Windows
- **Software Development**: Object-Oriented Programming (OOP), Agile Development (Scrum, Kanban), Version Control (Git, GitHub), RESTful APIs, Test-Driven Development (TDD), Continuous Integration/Continuous Deployment (CI/CD)
- **Cloud and Virtualization**: AWS, Docker, Kubernetes, Azure
- **Scripting and Automation**: Bash, PowerShell, Ansible, Terraform, Jenkins, Postman

### 4. **Projects Section**
A collection of projects with detailed descriptions, challenges faced, solutions implemented, technology stacks, and links to repositories, documentation, demos, and videos where available. Each project is presented in a card format with a detailed view accessible through interaction.

### 5. **Contact Section**
A dedicated section that allows visitors to get in touch directly through a form. It includes my email address, location information, and additional social media links.

## Planned Future Improvements

### Phase 2: Advanced Functionality
- Create a blog section for technical articles
- Implement lazy loading for images and videos
- Add animations triggered by scroll position

### Phase 3: Performance Optimization (Planned for July 2025)
- Optimize image loading and compression
- Implement service workers for offline capability
- Add analytics to track user engagement
- Improve accessibility compliance

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
├── index.html              # Main HTML file
├── style.css               # Main CSS styles
├── script.js               # Core JavaScript functionality
├── js/                     # JavaScript modules
│   ├── translations.js     # Language translations
│   ├── projects.js         # Project data
│   └── lazyLoad.js         # Lazy loading functionality
├── images/                 # Image assets
│   ├── livio.jpg           # Profile picture
│   ├── pic1.jpg            # Project thumbnails
│   └── ...
└── README.md               # This documentation file
```

## License
All content, code, and assets in this repository are All Rights Reserved. You may not copy, modify, or distribute any part of this project without explicit permission from the author.