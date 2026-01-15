# Portfolio - Hogan Ou

A modern, responsive personal portfolio website built with React and designed for Firebase hosting.

## Features

- 🎨 Modern, clean UI with smooth animations
- 📱 Fully responsive design
- ⚡ Fast and optimized
- 🎯 Showcases work experience, education, skills, and projects
- 📧 Contact form ready for Firebase integration

## Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with CSS Variables
- **Icons**: React Icons
- **Backend/Hosting**: Firebase (to be configured)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment to Firebase Hosting.

## Firebase Hosting

For detailed step-by-step instructions on hosting your portfolio on Firebase, see [HOSTING.md](./HOSTING.md).

### Quick Deploy

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init` (select Hosting, use existing project)
4. Deploy: `npm run deploy` (builds and deploys in one command)

Your portfolio will be live at `https://your-project-id.web.app`

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

All personal information is stored in the component files. Update the following files to customize:

- `src/components/Hero.js` - Hero section and social links
- `src/components/About.js` - About section content
- `src/components/Experience.js` - Work experience entries
- `src/components/Education.js` - Education details
- `src/components/Skills.js` - Skills and technologies
- `src/components/Projects.js` - Project showcase
- `src/components/Contact.js` - Contact information

## License

This project is open source and available under the MIT License.
