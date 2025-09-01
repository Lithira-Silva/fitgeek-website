# FitGeek - Modern Fitness Website

A modern, responsive fitness website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with a focus on user experience
- **Responsive Layout**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for seamless navigation
- **Component-Based**: Modular component architecture for maintainability

## Pages

- **Home**: Hero section, features overview, popular classes preview, and call-to-action
- **About**: Company story, values, team information, and statistics
- **Classes**: Comprehensive class listings with schedules and descriptions
- **Trainers**: Meet the team with detailed trainer profiles and specialties
- **Membership**: Pricing plans, corporate memberships, and FAQ
- **Contact**: Contact form, location information, hours, and map

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fitgeek
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Classes.tsx     # Classes page
│   ├── Trainers.tsx    # Trainers page
│   ├── Membership.tsx  # Membership page
│   └── Contact.tsx     # Contact page
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **PostCSS & Autoprefixer** - CSS processing

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Primary: Blue color palette
- Accent: Red color palette for highlights
- Custom fonts: Inter (body) and Poppins (headings)

### Components

All components are built using Tailwind utility classes and custom CSS classes defined in `src/index.css`.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory

3. Deploy the contents of `dist` to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@fitgeek.com
- Phone: (555) 123-4567
