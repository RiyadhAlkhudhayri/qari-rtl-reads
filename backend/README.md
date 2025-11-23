Simple backend for qari-rtl-reads

Endpoints:
- POST /users  { name }
- GET /users
- GET /users/:id
- PUT /users/:id        { name }
- PUT /users/:id/progress  { progress }
- DELETE /users/:id

Run:
- npm install
- npm start

Data stored in db.json using lowdb (JSON file). This is intentionally minimal for local development.
