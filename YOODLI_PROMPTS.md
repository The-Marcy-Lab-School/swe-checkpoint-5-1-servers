# Yoodli AI Interview Prompts

This document defines the 3 Yoodli roleplays for the Checkpoint 5.1 verbal assessment. Each roleplay is worth 6 points and includes an initial prompt, follow-up probes, and grading keywords.

---

## Roleplay 1: Explain Servers to a Non-Technical Person (6 pts)

**Scenario:** You're explaining to a friend who has never written code what happens when they type a URL into their browser and see a webpage.

### Initial Prompt
> "Imagine you're explaining to a friend who has never coded what happens when they type a URL into their browser and see a webpage. Walk them through the process."

### Follow-Up Probes
1. "What's the difference between a development server running on your computer and a deployed server that anyone can access?"
2. "What does it mean to 'deploy' an application?"

### Grading Keywords
Look for the fellow to mention or explain these concepts:
- **server** — a computer/program that listens for and responds to requests
- **client** — the browser or device making the request
- **request** and **response** — the two parts of the HTTP cycle
- **HTTP** — the protocol used for communication
- **URL / endpoint** — the address the client sends the request to
- **localhost** — the local development server address
- **hosting / deployment** — making the server publicly accessible
- **port** — the specific channel the server listens on

### Scoring Guide
| Score | Description |
|-------|-------------|
| 5-6 | Clearly explains the request-response cycle with accurate terminology. Answers follow-ups with concrete distinctions between dev and production environments. |
| 3-4 | Explains the general idea but misses key terms or is vague on dev vs. deployed differences. |
| 1-2 | Shows basic awareness but significant gaps in understanding. Struggles with follow-ups. |
| 0 | Unable to explain the concept or provides incorrect information. |

---

## Roleplay 2: Technical Interview — Express and Middleware (6 pts)

**Scenario:** You're in a technical interview and the interviewer asks about Express.js.

### Initial Prompt
> "Tell me about Express.js. What is it and what problem does it solve for Node.js developers?"

### Follow-Up Probes
1. "What is middleware in Express and how does it work?"
2. "Can you describe a real example of middleware you've used or built?"

### Grading Keywords
Look for the fellow to mention or explain these concepts:
- **framework / npm package** — Express is a framework installed via npm
- **endpoints / routes** — URL patterns the server responds to
- **controller** — a function that handles a request and sends a response
- **request (`req`) and response (`res`)** — the objects controllers work with
- **middleware** — a function that runs before the final controller
- **`next()`** — the function that passes control to the next middleware/controller
- **`express.static()`** — middleware for serving static files
- **`express.json()`** — middleware for parsing JSON request bodies

### Scoring Guide
| Score | Description |
|-------|-------------|
| 5-6 | Accurately describes Express as a framework, explains middleware with `next()`, and gives a specific real example (e.g., `logRoutes`, `express.static()`, `express.json()`). |
| 3-4 | Understands Express at a high level and can describe middleware but lacks precision on `next()` or gives a vague example. |
| 1-2 | Can name Express but struggles to explain what it does or how middleware works. |
| 0 | Unable to explain Express or middleware. |

---

## Roleplay 3: Technical Interview — REST and MVC (6 pts)

**Scenario:** The interviewer asks about API design patterns and code organization.

### Initial Prompt
> "What does it mean for an API to follow REST conventions?"

### Follow-Up Probes
1. "Walk me through the REST endpoints you would create for managing a collection of blog posts."
2. "How would you organize the server code using the MVC pattern?"

### Grading Keywords
Look for the fellow to mention or explain these concepts:
- **REST** — a convention for designing API endpoints
- **CRUD** — Create, Read, Update, Delete
- **HTTP methods** — GET (read), POST (create), PATCH/PUT (update), DELETE (delete)
- **URL patterns** — `/api/posts` for collections, `/api/posts/:id` for single resources
- **path parameters** — dynamic segments like `:id`
- **Model** — manages the data (the "database" layer)
- **View** — the user interface (the frontend)
- **Controller** — handles requests and coordinates between model and view
- **separation of concerns** — each layer has a single responsibility

### Scoring Guide
| Score | Description |
|-------|-------------|
| 5-6 | Accurately defines REST with correct HTTP method-to-CRUD mappings. Provides proper endpoint examples (e.g., `GET /api/posts`, `POST /api/posts`, `PATCH /api/posts/:id`). Explains MVC with clear layer responsibilities. |
| 3-4 | Understands REST generally but may confuse methods or miss path parameter conventions. Describes MVC but may be vague on what belongs in each layer. |
| 1-2 | Has heard of REST and MVC but cannot apply them concretely. Endpoint examples have significant errors. |
| 0 | Unable to explain REST or MVC. |

---

## General Yoodli Configuration Notes

- **Time limit per roleplay:** 3-5 minutes
- **Evaluation mode:** Keyword matching + overall coherence
- **Passing threshold:** 12/18 (67%) across all three roleplays
