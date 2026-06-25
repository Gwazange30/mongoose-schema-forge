# Implementation Plan - MongoDB Schema and Connection Setup

This plan outlines the steps to create a MongoDB data model and connection setup using Mongoose, as per the student instructions. The focus is on backend structure and schema validation.

## Scope Summary
- Initialize a Node.js project.
- Install `mongoose` and `dotenv`.
- Create a folder structure with `models/` and `config/` directories.
- Define a Mongoose schema for a "User" model with specific validation rules.
- Implement a database connection utility using environment variables.
- Provide a template environment file (`.env.example`).

## Non-Goals
- Setting up a live MongoDB server or cloud instance.
- Creating an Express.js server or API routes.
- Implementing frontend components or UI.

## Assumptions
- The project will reside in a new directory `build-database-schema` within the current workspace.
- CommonJS (`require`/`module.exports`) is preferred as per the instruction examples (though ESM is also possible, I will stick to the prompt's implied style for compatibility with the provided check script).

## Affected Areas
- **Backend Architecture**: New folder structure (`models/`, `config/`).
- **Dependencies**: `package.json` will be updated with `mongoose` and `dotenv`.
- **Environment**: New `.env.example` file.

## Ordered Phases

### Phase 1: Project Initialization
- Create the directory structure.
- Initialize `npm`.
- Install dependencies (`mongoose`, `dotenv`).
- **Owner**: `quick_fix_engineer` (Handling setup and simple file creation)

### Phase 2: Data Modeling
- Create `models/User.js`.
- Define `UserSchema` with:
    - `username`: String, required, unique, minlength.
    - `email`: String, required, unique.
    - `role`: String, enum (['student', 'instructor', 'admin']), default 'student'.
    - `age`: Number, min/max.
- Export the Mongoose model.
- **Owner**: `frontend_engineer` (Handling more complex logic/structure)

### Phase 3: Database Connection
- Create `config/db.js`.
- Implement `mongoose.connect` using `process.env.MONGO_URI`.
- Add success/error logging.
- Create `.env.example`.
- **Owner**: `frontend_engineer`

### Phase 4: Verification
- Run the provided sanity check commands from the user request.
- Run the full "Check Your Work" script block to ensure all 10 tests pass.
- **Owner**: `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. quick_fix_engineer — Initialize project and install dependencies.
2. frontend_engineer — Implement the Model and DB connection logic.
3. quick_fix_engineer — Finalize environment files and run verification tests.

**Per-agent instructions:**

### 1. quick_fix_engineer
- **Phases:** Phase 1
- **Scope:** 
    - Create directory `build-database-schema`.
    - Inside that directory, run `npm init -y`.
    - Run `npm install mongoose dotenv`.
    - Create empty directories `models` and `config` inside `build-database-schema`.
- **Files:** `package.json`, `models/`, `config/`
- **Depends on:** none
- **Acceptance criteria:** `package.json` exists with `mongoose` dependency; directories created.

### 2. frontend_engineer
- **Phases:** Phase 2, Phase 3
- **Scope:**
    - Create `build-database-schema/models/User.js` with a validated Mongoose schema (name, email, role, age).
    - Create `build-database-schema/config/db.js` with a connection function using `process.env.MONGO_URI`.
    - Use `module.exports` for exports to match the student instruction requirements.
- **Files:** `build-database-schema/models/User.js`, `build-database-schema/config/db.js`
- **Depends on:** Phase 1
- **Acceptance criteria:** Files contain valid JavaScript and Mongoose logic; `MONGO_URI` is used from environment.

### 3. quick_fix_engineer
- **Phases:** Phase 4
- **Scope:**
    - Create `build-database-schema/.env.example` with `MONGO_URI=`.
    - Run the verification script provided in the user request (STEP 4) and ensure all "PASS" markers are present.
- **Files:** `build-database-schema/.env.example`
- **Depends on:** Phase 2, 3
- **Acceptance criteria:** 10 "PASS" lines in terminal output.
