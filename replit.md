# OptiTech Consulting Ltd - Strategic Business Consulting

## Overview

This is the official website for OptiTech Consulting Ltd, a strategic IT and business consulting firm. The site showcases the company's services including IT strategy & roadmapping, digital transformation, cybersecurity, system integration, disaster recovery, and technology training. It features a modern, responsive design with detailed service offerings, client testimonials across multiple industries (Banking, Healthcare, Education, etc.), and comprehensive contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18**: Modern React application with TypeScript support
- **Vite**: Build tool and development server for fast compilation and hot module replacement
- **React Router**: Client-side routing for single-page application navigation
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **shadcn/ui**: Pre-built, accessible UI components library built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with responsive layouts across all screen sizes

### Component Structure
- **Modular Components**: Reusable UI components following atomic design principles
- **Page-based Routing**: Dedicated pages for Home, About, Services, Industries, Testimonials, and Contact
- **Layout Components**: Header and Footer components providing consistent navigation and branding
- **UI Components**: Comprehensive set of shadcn/ui components including forms, cards, buttons, dialogs, and more

### State Management
- **React Query**: Server state management for API calls and data fetching
- **React Hooks**: Local component state management using useState, useEffect, and custom hooks
- **Context API**: Global state management through React Context for theming and toast notifications

### Styling System
- **Design Tokens**: Centralized color palette, typography, and spacing definitions
- **CSS Variables**: Dynamic theming support with light/dark mode capability
- **Custom Components**: Styled components following the brand identity with consulting-specific color scheme
- **Animation Support**: Smooth transitions and micro-interactions using CSS transitions

### Form Handling
- **React Hook Form**: Form state management and validation
- **EmailJS Integration**: Client-side email sending for contact forms without backend server
- **Form Validation**: Input validation with error handling and user feedback
- **Select Components**: Dropdown menus for service selection and budget ranges

### Development Tools
- **TypeScript**: Type safety with relaxed configuration for rapid development
- **ESLint**: Code linting with React-specific rules and TypeScript support
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## External Dependencies

### Email Service
- **EmailJS**: Third-party service for sending emails directly from the client-side contact form without requiring a backend server

### UI Framework
- **Radix UI**: Headless, accessible UI primitives that power the shadcn/ui components
- **Lucide React**: Icon library providing consistent iconography throughout the application

### Utilities
- **Class Variance Authority**: Utility for building variant-based component APIs
- **clsx**: Utility for conditionally joining CSS classes
- **date-fns**: Date manipulation and formatting library
- **React CountUp**: Animated number counting for statistics displays

### Development Dependencies
- **Vite Plugins**: React SWC plugin for fast compilation and development tools
- **TypeScript**: Type checking and development tooling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### Hosting & Deployment
- **Vercel**: Deployment platform with single-page application routing configuration
- **Static Assets**: Images and logos stored in the public directory for optimal loading