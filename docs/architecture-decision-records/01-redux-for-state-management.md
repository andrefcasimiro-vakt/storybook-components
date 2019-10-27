# Redux For State Management

# Context

To develop the front end song editor, we use React, which offers local state for each component.

Since many components will need a shared state to communicate between each other (e. g. What is the bpm of the song, is the player paused, how many notes are selected in sequence N, etc.), we need to consider an alternative to the 'lifting-state-up' to avoid prop hell.

With React Hooks and Context, we now have the possibility to use shared state natively in React. This means less dependencies to worry about.

However, Redux has been proven to work, enforces immutability and good programming practices, and offers great debugging and state visualization with the Redux dev tools.

# Alternatives

### React Hooks

- Seems to still be in development phase (with new hooks being added), and also lacks a way to visualize state as easily as with Redux Devtools

### Apollo & GraphQL caching

### Sessions / Local Storage

# Decision

Having used Redux on previous iterations of the project, and already being a familiar tech, we choose to go with Redux for designing our global state.

# Approval

Approved by André
