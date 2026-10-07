# BIHAR 360 — Backend API Foundation

> The Modular Monolith REST API powering BIHAR 360 — The Digital Atlas of Bihar.

---

## 1. What the Backend Is

The BIHAR 360 backend is a Node.js/Express.js service built as an independent, modular monolith. It provides a structured REST interface for geographical, cultural, and historical knowledge of Bihar, backed by PostgreSQL and managed with Drizzle ORM.

---

## 2. Why the Backend Is Separate from the Frontend

1. **Independent Lifecycle & Scaling:** The frontend is a static/SPA client served via edge CDN / Vite; the backend is an authoritative state and data retrieval engine.
2. **Security & Boundary Isolation:** Protects database credentials, service-side AI API keys, and rate limits behind server-side firewalls without bundling them into client-side JS.
3. **Decoupled Deployment:** Frontend releases can ship without restarting database connection pools, and backend migrations run independently.

---

## 3. Architecture

```text
Incoming HTTP Request
         │
         ▼
┌────────────────────────────────────────────────────────┐
│                      MIDDLEWARE                        │
│  ├── Request ID (UUID / Preserved Header)              │
│  ├── Secure CORS Policy                                │
│  ├── Request Body Limit (1MB JSON)                     │
│  ├── Boundary Validation (Zod Schemas)                 │
│  └── Centralized Error Handling                        │
└────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────┐
│   API ROUTER     │  /api/v1/health, /api/v1/...
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   CONTROLLER     │  HTTP status, response wrapping
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│    SERVICE       │  Business logic, domain operations
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   REPOSITORY/ORM │  Drizzle ORM query layer
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   POSTGRESQL     │  Persistent storage
└──────────────────┘
```

---

## 4. Technology Decisions

- **Runtime:** Node.js (v20+ / v22 LTS)
- **HTTP Engine:** Express.js 4.x
- **Database:** PostgreSQL 16
- **ORM:** Drizzle ORM + postgres.js driver
- **Boundary Validation:** Zod
- **Testing:** Vitest + Supertest
- **Containerization:** Docker + Docker Compose

*Explicitly excluded in this stage:* No Spring Boot, No MongoDB, No Redis, No Kafka, No Kubernetes, No Microservices.

---

## 5. JavaScript-First Architecture

This backend adopts a **pure JavaScript ES Module (`.js`)** architecture:
- **Idiomatic Modern JavaScript:** Native ES Modules (`import/export`), Promises, `async/await`, array transformations, closures, object destructuring, JSDoc annotations, and Express functional pipelines across all schemas, controllers, services, routes, scripts, and tests.
- **Zero-Transpile Execution:** Runs directly on Node.js (`node src/server.js`, `node --watch src/server.js`, `node scripts/seed.js`) with Drizzle ORM (`src/db/schema/*.js`) and Zod runtime boundary validation.

---

## 6. Local Setup

### Prerequisites
- Node.js >= 20.x
- npm >= 10.x
- Docker & Docker Compose (optional for local database container)

### Installation
```bash
cd backend
npm install
```

---

## 7. Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (`development`, `production`, `test`) | `development` |
| `PORT` | HTTP port | `5000` |
| `DATABASE_URL` | PostgreSQL connection URI | `postgresql://bihar360:bihar360@localhost:5432/bihar360` |
| `FRONTEND_URL` | Whitelisted frontend origin for CORS | `http://localhost:5173` |

---

## 8. PostgreSQL Setup with Docker Compose

To start local PostgreSQL:
```bash
docker compose up -d postgres
```

To stop:
```bash
docker compose down
```

Data persists in the named Docker volume `bihar360_pgdata`.

---

## 9. Database Migration & Seeding Commands

```bash
# Generate migration files from Drizzle schemas
npm run db:generate

# Apply pending migrations to PostgreSQL
npm run db:migrate

# Seed PostgreSQL from canonical Bihar 360 datasets (supports --dry-run)
npm run db:seed

# Open Drizzle Studio web GUI for database inspection
npm run db:studio
```

---

## 10. Normalized PostgreSQL Domain Schema (20 Tables)

- `districts` — All 38 administrative districts of Bihar with explicit `headquarters` and `division` fields (preserving distinctions: Rohtas ≠ Sasaram, East Champaran ≠ Motihari, West Champaran ≠ Bettiah, Nalanda District ≠ Nalanda Mahavihara, Madhubani ≠ Mithila).
- `places` — Landscapes, wildlife sanctuaries, and rivers foreign-keyed to `districts`.
- `heritage_sites` — UNESCO World Heritage sites and ASI monuments foreign-keyed to `districts`.
- `personalities` — Historical, spiritual, literary, and cultural figures foreign-keyed to origin `districts`.
- `foods` — Traditional Bihari dishes, GI-tagged delicacies, and seasonal preparations.
- `festivals` — Sacred and seasonal celebrations (Chhath Mahaparva, Sonepur Mela, Sama-Chakeva, Pitrapaksha).
- `arts_crafts` — GI-tagged visual arts and craft traditions foreign-keyed to origin `districts`.
- `interface_languages` — 23 pan-Indian UI languages (English + 22 Eighth Schedule languages) with native script and fallback cascade metadata.
- `bihar_languages` — Living linguistic and literary languages of Bihar (Maithili, Bhojpuri, Magahi, Angika, Bajjika, Urdu, Surjapuri, Hindi).
- `scripts` — Historical and living writing systems (Devanagari, Kaithi, Tirhuta / Mithilakshar, Nastaliq).
- `music_tracks` — Verified folk, classical, and ceremonial recordings with YouTube reference IDs.
- `history_eras` & `history_events` — Chronological eras and archaeological/epigraphic events.
- `journeys` & `journey_stops` — Curated multi-day travel trails and ordered route stops.
- `translations` — Interface localization key-value dictionary indexed by `(language_code, section)`.
- `media_assets` — Verified photographic and cartographic assets with license attribution.
- `discovery_entities` & `discovery_connections` — Universal search graph with typed aliases (`administrative_hq`, `modern_alias`, `alternate_spelling`, `historical_association`, `regional_context`, `cultural_reference`) and relational graph edges.
- `system_health` — Service telemetry and health probes.

---

## 11. Running Tests & Linting

```bash
# Run unit and integration tests with Vitest
npm test

# Run tests in watch mode
npm run test:watch

# Run syntax check
npm run build

# Run ESLint linter
npm run lint
```

---

## 12. API v1 Endpoints

### Base / Discovery
- `GET /` — Returns service metadata and API version.
- `GET /api/v1/health` — Returns application and database connection status.
- `POST /api/v1/health/echo` — Boundary validation echo endpoint.

### Domain Modules
- **Districts:** `GET /api/v1/districts` (`?region=`, `?division=`), `GET /api/v1/districts/:id`
- **Places & Rivers:** `GET /api/v1/places` (`?districtId=`, `?category=`, `?placeType=`), `GET /api/v1/places/:id`
- **Heritage Sites:** `GET /api/v1/heritage` (`?districtId=`, `?isUnesco=`), `GET /api/v1/heritage/:id`
- **Personalities:** `GET /api/v1/personalities` (`?eraPeriod=`, `?field=`, `?districtOrigin=`), `GET /api/v1/personalities/:id`
- **Foods / Cuisine:** `GET /api/v1/foods` (or `/api/v1/cuisine`), `GET /api/v1/foods/:id`
- **Festivals:** `GET /api/v1/festivals` (`?season=`, `?traditionCategory=`), `GET /api/v1/festivals/:id`
- **Arts & Crafts:** `GET /api/v1/arts` (`?districtId=`, `?category=`, `?giTag=`), `GET /api/v1/arts/:id`
- **Languages & Scripts:**
  - `GET /api/v1/languages/interface`
  - `GET /api/v1/languages/bihar`, `GET /api/v1/languages/bihar/:id`
  - `GET /api/v1/languages/scripts`, `GET /api/v1/languages/scripts/:id`
- **Music:** `GET /api/v1/music` (`?category=`, `?language=`, `?districtId=`), `GET /api/v1/music/:id`
- **History:** `GET /api/v1/history/eras`, `GET /api/v1/history/eras/:id`, `GET /api/v1/history/events`, `GET /api/v1/history/events/:id`
- **Journeys:** `GET /api/v1/journeys` (`?theme=`), `GET /api/v1/journeys/:id`
- **Translations:** `GET /api/v1/translations/:langCode`, `GET /api/v1/translations/:langCode/:section`
- **Media Assets:** `GET /api/v1/media`, `GET /api/v1/media/:id`
- **Universal Discovery:** `GET /api/v1/discovery/search` (`?q=`, `?type=`), `GET /api/v1/discovery/entities/:id`, `GET /api/v1/discovery/entities/:id/connections`

---

## 13. Error Handling & Request IDs

- **Uniform Responses:** All errors return `{ success: false, error: { message, code, details? } }`.
- **Request Tracing:** Every request receives or preserves an `X-Request-ID` header.
- **Production Safety:** Stack traces are suppressed in production mode.

---

## 14. CORS Configuration

CORS is restricted to `FRONTEND_URL` in production, with support for localhost development ports in development mode.

