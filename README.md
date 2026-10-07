# BIHAR 360 — The Digital Atlas of Bihar

> **NOT A WEBSITE ABOUT BIHAR. AN EXPERIENCE OF BIHAR.**

BIHAR 360 is an immersive digital atlas that brings Bihar's history, districts, heritage, people, languages, food, festivals, arts, music, landscapes, and journeys together into one interactive experience.

The project combines **interactive storytelling, structured cultural data, responsive design, accessibility, multilingual content, cross-section discovery, and a grounded AI guide** to create a digital cultural exploration platform for Bihar.

---

## ✨ Overview

BIHAR 360 is designed as a **digital cultural atlas + interactive museum + exploration platform** rather than a conventional tourism website.

Users can explore Bihar through multiple perspectives:

- 🗺️ **38 Districts**
- 🏛️ **Heritage & Archaeology**
- 👤 **People & Voices**
- 🍲 **Food & Culinary Traditions**
- 🎉 **Festivals**
- 🎨 **Arts & Crafts**
- 🗣️ **Languages & Scripts**
- 📜 **History & Historical Eras**
- 🌿 **Places & Natural Landscapes**
- 🎵 **Music & Soundscapes**
- 🧭 **Curated Journeys**
- 🤖 **AI Bihar Guide**
- 🔎 **Search & Discovery**
- 🌐 **Multilingual Experience**

---

# 🎯 Vision

The goal of BIHAR 360 is to represent Bihar as a **living cultural ecosystem** rather than reducing it to a collection of tourist destinations.

The platform connects:

**Culture · History · People · Geography · Food · Language · Art · Music · Travel · Technology · AI**

---

# 🚀 Core Features

## 🗺️ District Explorer

Explore Bihar district-by-district through structured cultural, historical, geographical, and visual information.

Features include:

- District discovery
- District dossiers
- Regional organization
- Interactive exploration
- Connected places
- Related heritage
- People and personalities
- Food and traditions
- Historical context

---

## 🏛️ Heritage

Explore Bihar's archaeological, architectural, and cultural heritage through an editorial archive.

Features include:

- Heritage discovery
- Categorized sites
- Historical context
- Detailed heritage views
- Related places
- Source-aware content

---

## 👤 People & Voices

Discover notable personalities connected with Bihar across different periods and fields.

The collection includes figures associated with:

- History
- Literature
- Science
- Politics
- Social movements
- Arts
- Culture
- Public life

---

## 🍲 Food

Explore Bihar's culinary traditions and regional specialties.

The food system includes structured information about:

- Regional dishes
- Ingredients
- Culinary traditions
- Regional associations
- GI-related information
- Food discovery

---

## 🎉 Festivals

Discover major festivals and living cultural traditions across Bihar.

Festival information is organized to support cultural discovery while maintaining distinctions between different traditions and regions.

---

## 🎨 Arts & Crafts

Explore traditional artistic practices and craft traditions from different parts of Bihar.

The experience focuses on the cultural context and regional identity behind each tradition.

---

## 🗣️ Languages & Scripts

Explore Bihar's linguistic landscape, including:

- Maithili
- Bhojpuri
- Magahi
- Angika
- Bajjika
- Urdu
- Surjapuri
- Hindi

The project distinguishes between **interface localization** and **cultural-language documentation** so that linguistic information is not incorrectly represented as translated interface content.

---

## 📜 History

Explore Bihar through historical eras, events, and turning points rather than presenting history as a simple chronological list.

The history system connects:

~~~text
Era
 ↓
Historical Events
 ↓
Places
 ↓
People
 ↓
Cultural Context
~~~

---

## 🌿 Places & Nature

Discover Bihar's natural and geographical heritage, including:

- Landscapes
- Rivers
- Sacred places
- Natural heritage
- Wildlife-related locations
- Geographical features

---

## 🧭 Journeys

Explore curated journeys that connect multiple places, cultural experiences, and historical contexts across Bihar.

Journeys are designed as narrative exploration paths rather than simple lists of destinations.

---

## 🎵 Music

Experience a curated collection of Bihar's musical traditions through an integrated global music player.

The player supports:

- Play / Pause
- Previous / Next
- Volume
- Mute
- Progress
- Playlist
- Expand / Minimize

Music is integrated through official YouTube embeds rather than downloading or redistributing audio files.

---

# 🔎 Discovery Engine

BIHAR 360 includes a structured discovery system that connects entities across different sections of the platform.

This enables relationships such as:

~~~text
District
   ↓
Place
   ↓
Heritage
   ↓
Person
   ↓
Food
   ↓
Festival
   ↓
Journey
~~~

The discovery system uses typed entities and relationships to support contextual exploration instead of isolated content pages.

---

# 🤖 AI Bihar Guide

BIHAR 360 includes an AI-powered conversational guide designed specifically for Bihar-related exploration.

The AI architecture uses a **grounded knowledge system** rather than treating the language model as the sole source of information.

## AI Architecture

~~~text
User Question
      ↓
Query Understanding
      ↓
Knowledge Retrieval
      ↓
Entity & Relationship Matching
      ↓
Context Construction
      ↓
Gemini
      ↓
Grounded Response
      ↓
Source References
~~~

The AI system includes:

- Canonical cultural entities
- Deterministic retrieval
- Typed relationships
- Multi-hop discovery
- Source-aware responses
- Bounded context/token budgets
- Security-conscious API key handling

The AI Guide is designed to support **cultural discovery and exploration** while keeping responses connected to the project's structured knowledge system.

---

# 🏗️ System Architecture

BIHAR 360 follows a modular full-stack architecture.

~~~text
                         BIHAR 360
                             │
              ┌──────────────┴──────────────┐
              │                             │
          FRONTEND                      BACKEND
              │                             │
        React / Vite                   Node.js
        JavaScript                     Express.js
        TypeScript                     REST APIs
        Tailwind CSS                   PostgreSQL
        Framer Motion                  Drizzle ORM
        React Router                   Zod
              │                             │
              └──────────────┬──────────────┘
                             │
                        AI SERVICES
                             │
                           Gemini
~~~

---

# 🛠️ Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | UI architecture |
| JavaScript / JSX | Application development |
| TypeScript | Typed application/configuration support |
| Vite | Development and build tooling |
| Tailwind CSS | Styling and responsive design |
| Framer Motion | Motion and interaction design |
| React Router | Client-side routing |
| Lucide | Interface icons |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | API framework |
| JavaScript (ES Modules) | Backend development |
| PostgreSQL | Relational database |
| Drizzle ORM | Database access and schema |
| Zod | Request and data validation |
| REST APIs | Frontend/backend communication |

## AI

| Technology | Purpose |
|---|---|
| Gemini | AI generation |
| Structured Knowledge | Grounding |
| Deterministic Retrieval | Context selection |
| Entity Relationships | Multi-hop discovery |

## Engineering

- Git
- GitHub
- Vitest
- Supertest
- ESLint
- Docker

---

# 🗄️ Data Architecture

The backend uses a relational PostgreSQL domain model.

The current domain includes entities for:

- Districts
- Places
- Heritage Sites
- Personalities
- Foods
- Festivals
- Arts & Crafts
- Interface Languages
- Bihar Languages
- Scripts
- Music Tracks
- Historical Eras
- Historical Events
- Journeys
- Journey Stops
- Translations
- Media Assets
- Discovery Entities
- Discovery Connections

The relational model uses constraints and relationships to preserve important domain distinctions rather than treating similarly named entities as interchangeable.

---

# ⚡ Performance

Performance is treated as part of the product architecture.

The frontend uses:

- Route-level lazy loading
- Code splitting
- Feature-level lazy loading
- Optimized image assets
- WebP media where appropriate
- Isolated music functionality
- Isolated discovery functionality
- Responsive media handling
- Reduced initial JavaScript
- Lazy-loaded AI Guide functionality

The application is designed to avoid loading every feature and resource into the initial bundle.

---

# 📱 Responsive Design

BIHAR 360 is designed across:

- Mobile
- Tablet
- Desktop
- Large screens

Dedicated responsive behavior is implemented for:

- Navigation
- District exploration
- Maps
- Modals
- AI Guide
- Music player
- Search
- Content grids
- Editorial sections

The mobile navigation uses a dedicated interaction model rather than simply shrinking the desktop navigation.

---

# ♿ Accessibility

Accessibility is treated as part of the interface architecture.

Implemented considerations include:

- Semantic navigation
- ARIA attributes
- Keyboard interaction
- Focus-visible states
- Accessible dialogs
- Escape-key handling
- Touch-friendly controls
- Accessible tabs and filters
- Reduced-motion support
- Skip navigation
- Responsive touch targets

---

# 🌐 Multilingual Architecture

BIHAR 360 distinguishes between two related but different concepts.

### Interface Languages

Languages used for the application's user interface and localization.

### Bihar's Linguistic Landscape

Languages and varieties documented as part of Bihar's cultural and linguistic identity.

This separation prevents cultural-language documentation from being incorrectly represented as translated interface content.

---

# 🔐 Security

Security considerations include:

- Environment-based secret management
- API key separation
- Request validation
- Centralized error handling
- Request IDs
- CORS configuration
- JSON payload limits
- Backend validation using Zod

Secrets should never be committed to the repository.

Example environment configuration:

~~~env
GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=your_database_url
~~~

---

# 📁 Project Structure

~~~text
BIHAR-360/
│
├── backend/
│   ├── src/
│   ├── drizzle/
│   ├── tests/
│   ├── scripts/
│   └── ...
│
├── public/
│
├── src/
│   ├── components/
│   ├── features/
│   ├── pages/
│   ├── context/
│   ├── data/
│   ├── ai/
│   └── ...
│
├── .env.example
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
~~~

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

- Node.js
- npm

## 1. Clone the repository

~~~bash
git clone https://github.com/Swetagupta05/BIHAR-360-The-Digital-Atlas-of-Bihar.git
~~~

~~~bash
cd BIHAR-360-The-Digital-Atlas-of-Bihar
~~~

## 2. Install dependencies

~~~bash
npm install
~~~

## 3. Configure environment variables

Create a `.env.local` file and add the required environment variables:

~~~env
GEMINI_API_KEY=your_gemini_api_key
~~~

For backend development, configure the PostgreSQL connection and other backend environment variables according to the backend configuration.

## 4. Start the development server

~~~bash
npm run dev
~~~

The application will be available at the local Vite development URL.

---

# 🧪 Testing & Validation

The project includes automated validation across multiple layers of the system.

Testing and validation cover areas including:

- Backend API behavior
- Request validation
- Database/domain integrity
- AI grounding
- Discovery relationships
- Content integrity
- Internationalization
- Frontend build validation

Backend testing uses:

~~~text
Vitest
Supertest
~~~

---

# 🗃️ Database

The backend uses **PostgreSQL with Drizzle ORM**.

The database workflow follows:

~~~text
Schema
  ↓
Drizzle Migration
  ↓
Seed Data
  ↓
Relational Constraints
  ↓
Application Services
~~~

The seed system uses deterministic identifiers and conflict-safe insertion to support repeatable database initialization.

---

# 🎨 Design Philosophy

BIHAR 360 intentionally avoids treating every section as the same UI template.

Different sections use different interaction languages:

| Section | Interaction Style |
|---|---|
| Homepage | Cinematic & atmospheric |
| Districts | Spatial & exploratory |
| History | Timeline progression |
| Journeys | Movement & discovery |
| Heritage | Editorial & archival |
| Food | Visual & tactile |
| Music | Rhythmic & immersive |
| AI Guide | Conversational & restrained |
| Navigation | Fast & functional |

Motion is used to communicate **place, story, hierarchy, and discovery** rather than being added purely as decoration.

The visual system prioritizes:

- Editorial whitespace
- Visual storytelling
- Clear hierarchy
- Contextual interactions
- Responsive composition
- Accessible motion
- Consistent interaction patterns

---

# 📊 Engineering Principles

The project follows several engineering principles:

- Separation of concerns
- Modular architecture
- Component-based UI
- Feature-oriented organization
- Responsive design
- Accessibility-first interaction
- Structured domain modeling
- API separation
- Deterministic data relationships
- Source-aware content
- Performance-conscious loading
- Secure environment configuration
- Maintainable code boundaries

---

# 🔭 Project Direction

Future development focuses on improving:

- Immersive storytelling
- Interaction design
- AI capabilities
- Frontend-backend integration
- Search and discovery
- Cultural data depth
- Performance
- Accessibility
- Deployment infrastructure

---

# 👩‍💻 Author

**Sweta Gupta**

Computer Science & Design  
Alard College of Engineering and Management, Pune

---

# 📌 Project

**BIHAR 360 — The Digital Atlas of Bihar**

> **Not a website about Bihar. An experience of Bihar.**

Built to explore Bihar through **culture, history, people, places, technology, and storytelling.**
