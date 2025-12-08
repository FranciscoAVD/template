# Next.js Starter Template

This is a minimal starter template built with Next.js, providing a solid foundation for your web projects. It incorporates a modern tech stack focused on developer experience and performance.

## Core Technologies

### Styling

- **Tailwind CSS v4:** The primary utility-first CSS framework for rapid UI development.
- **Font System:** Utilizes the **Roboto font family** (Roboto, Roboto Serif, Roboto Mono) for a consistent typographic experience. **For improved readability with the Roboto family, the default line height for `p` tags has been increased to 200%.**
- **Responsive Typography:** A base typographical system is managed by the CSS variable `--text-scale`. It's currently set to a `major-third (1.333)` for harmonious heading and text sizing. Other predefined scales include `minor second (1.2)`, `major second (1.25)`, `perfect fourth (1.5)`, and the `golden ratio (1.618)`. Scales larger than a major third might require adjusting from a 6-header to a 4-header system for optimal display.

### Database

- **Drizzle ORM:** Handles database connections, queries, and schema management.
- **Drizzle Studio:** A graphical user interface (GUI) provided by Drizzle for database inspection and interaction.
- **PostgreSQL with Docker:** A `docker-compose.yml` file is included to easily spin up a PostgreSQL database container for local development.

### State Management

- **Zustand:** A fast and scalable bare-bones state-management solution.
- **Nuqs:** Manages state derived from URL query parameters.

### Validation

- **Zod:** Used for robust data validation across the application.
- **T3 Env:** Ensures compile-time validation of environment variables using Zod schemas, enhancing type safety and preventing common configuration errors.

## Utilities

- `src/lib/server-utils.ts`: Contains a utility for generating standardized API responses on the server.

## Available Scripts

1.  **`bun run generate-feature <feature-name>`** (or `bun run feat <feature-name>`):
    This script generates a new feature folder with a predefined, standardized structure. It helps maintain consistency across your project and speeds up feature development.

    The generated boilerplate will look like this:

    ```text
    src/
    ├── features/
    │   └── <feature-name>/
    │       ├── lib/
    │       │   ├── constants.ts
    │       │   ├── types.ts
    │       │   ├── schemas.ts
    │       │   └── utils.ts
    │       ├── stores/
    │       │   └── <feature-name>-store.ts
    │       ├── use-cases/
    │       └── components/
    ```

2.  **`bun run db:push`**:
    Applies schema changes to your database, updating it to match your Drizzle ORM definitions.

3.  **`bun run db:studio`**:
    Launches Drizzle Studio, providing a visual interface to interact with and manage your database.
