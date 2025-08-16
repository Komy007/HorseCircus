# Overview

This is a comprehensive multilingual investment proposal website for a Mongolian equestrian show in Siem Reap, Cambodia. The application serves as an interactive business plan presenting detailed investment opportunities through a sidebar navigation system. It features extensive business analysis sections including financial projections, risk management, marketing strategies, and location advantages. The site supports both Korean and English languages and includes interactive calculators and charts to showcase the investment potential of establishing the first Mongolian horse performance venue in Southeast Asia.

# Recent Changes

- **January 2025**: Transformed from simple proposal to comprehensive business plan format
- **Architecture Update**: Implemented sidebar navigation with 9 detailed sections
- **Content Expansion**: Added 8 new detailed business analysis pages covering all aspects of the investment
- **User Interface**: Removed booking and download features, focused on investment presentation
- **Navigation**: Single-page application with section-based navigation system

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application uses a modern React-based frontend architecture with the following key components:

- **React with TypeScript**: Type-safe component development using React 18 with TSX
- **Vite Build System**: Fast development server and optimized production builds
- **Wouter Routing**: Lightweight client-side routing for single-page application navigation
- **Tailwind CSS**: Utility-first styling framework with custom design tokens
- **Shadcn/ui Components**: Pre-built accessible UI components with Radix UI primitives

## Component Structure

The frontend follows a modular component architecture:

- **Page Components**: Main route handlers (Home, NotFound)
- **Feature Components**: Business-specific components (BusinessOverview, InvestmentPoints, RevenueModel)
- **UI Components**: Reusable interface elements from Shadcn/ui library
- **Context Providers**: Language switching and state management

## State Management

- **React Query**: Server state management and caching with TanStack Query
- **React Context**: Language preferences and application-wide state
- **React Hook Form**: Form state management with Zod validation
- **Local State**: Component-level state using React hooks

## Styling and Design

- **Custom Color Palette**: Mongolian-themed colors (oranges/earth tones) defined in CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Design System**: Consistent spacing, typography, and component styling
- **Dark Mode Support**: CSS variable-based theming infrastructure

## Backend Architecture

The backend uses a minimal Express.js setup:

- **Express Server**: RESTful API foundation with middleware support
- **Development Integration**: Vite middleware integration for hot reloading
- **Memory Storage**: In-memory data storage interface with extensible design
- **Route Structure**: Organized API routes with error handling middleware

## Data Storage Solutions

Currently implements an in-memory storage pattern with interfaces designed for easy migration:

- **Storage Interface**: Abstract CRUD operations for users and entities
- **Memory Implementation**: Development-friendly in-memory storage
- **Database Ready**: Drizzle ORM configuration for PostgreSQL migration
- **Schema Definition**: Type-safe database schemas using Drizzle and Zod

## Internationalization

- **Language Context**: React context for Korean/English language switching
- **Translation Helper**: Simple translation function for bilingual content
- **Content Structure**: Parallel content organization for both languages

## External Dependencies

- **Neon Database**: PostgreSQL database service (configured but not actively used)
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Radix UI**: Accessible component primitives for complex UI elements
- **Recharts**: Data visualization library for revenue charts and analytics
- **React Hook Form**: Form validation and submission handling
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Vite**: Modern build tool for fast development and optimized production builds