# Personal Portfolio Website

## Overview

This is a modern, interactive personal portfolio website built with React, TypeScript, and Node.js. The application features a cosmic/space theme with animated elements, showcasing Mohammed Kaif's professional profile as a Computer Science Engineering student. The portfolio includes sections for about information, services, work samples, projects, certificates, and contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom cosmic theme variables
- **UI Components**: Radix UI components via shadcn/ui
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **Routing**: Wouter for client-side navigation
- **State Management**: React Query (@tanstack/react-query) for server state
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Data Storage**: Google Sheets integration (no database needed)
- **Form Processing**: Direct Google Sheets Web App integration
- **Development**: tsx for TypeScript execution

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Animated introduction with cosmic theme
3. **About Section**: Personal information with skills and experience
4. **Services Section**: Professional services offered
5. **Work Section**: Portfolio showcases
6. **Projects Section**: Technical projects with GitHub links
7. **Certificates Section**: External link to certificates page
8. **Contact Section**: Form with backend integration
9. **Interactive Elements**: 
   - Solar System background animations
   - Lightning trail mouse effects
   - Floating animations
   - Cosmic button effects

### Backend Components
1. **API Routes**: Express.js routes for contact form and CV download
2. **Database Layer**: Drizzle ORM with PostgreSQL schema
3. **Validation**: Zod schema validation for form inputs
4. **Storage**: In-memory storage implementation (extensible to database)

## Data Flow

1. **Client-Side Rendering**: React app serves from Vite dev server in development
2. **Form Submission**: Contact form data validated client-side and sent to `/api/contact`
3. **API Processing**: Express server validates with Zod schemas and processes requests
4. **Google Sheets Integration**: Form data sent directly to Google Sheets via Web App
5. **Response Handling**: API responses handled by React Query with toast notifications

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Animation**: Framer Motion, Embla Carousel
- **Database**: Drizzle ORM, Neon Database serverless
- **Validation**: Zod, React Hook Form with resolvers
- **Utilities**: date-fns, nanoid

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Database Tools**: Drizzle Kit for migrations
- **Replit Integration**: Vite plugins for Replit environment

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend (Vite) and backend (Express)
- **Hot Reload**: Vite HMR for frontend, tsx for backend TypeScript execution
- **Database**: Uses DATABASE_URL environment variable for PostgreSQL connection

### Production
- **Build Process**: `npm run build` compiles both frontend and backend
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Deployment**: Single process serves both static files and API routes
- **Database**: PostgreSQL via Neon Database with connection pooling

### Environment Configuration
- **Database**: Requires DATABASE_URL environment variable
- **Static Assets**: Served from `dist/public` in production
- **API Routes**: All backend routes prefixed with `/api`

## Changelog

Changelog:
- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.