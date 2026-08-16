# ☁️ Cloudify — Distributed File Storage System

Cloudify is a full-stack distributed file storage system designed to provide reliable and scalable file storage using multiple cloud storage providers.

The main feature of Cloudify is **automatic storage failover**: if the primary storage provider becomes unavailable during an upload, Cloudify will attempt to store the file using a secondary provider.

---

## 🚀 Project Goal

The goal of Cloudify is to build a system where files can be uploaded, managed, and stored reliably while keeping track of their storage location and status.

### Planned Storage Architecture

```text
                    Cloudify
                       |
                File Storage Layer
                       |
              +--------+--------+
              |                 |
           AWS S3          Cloudinary
          Primary           Fallback
              |                 |
              +--------+--------+
                       |
                 Automatic
                   Failover
```

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* JavaScript
* HTML
* CSS

## Backend

* JavaScript
* Node.js
* Express.js
* Nodemon
* Multer

## Database

* MongoDB
* Mongoose

## Cloud Storage

* AWS S3 — Primary storage
* Cloudinary — Secondary/fallback storage

## Planned Security

* JWT authentication
* Environment variables for secrets
* Protected file routes
* File validation

---

# 📁 Project Structure

```text
distributed-file-storage/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │
│   │   ├── controllers/
│   │   │   └── file.controller.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── logger.middleware.js
│   │   │   └── upload.middleware.js
│   │   │
│   │   ├── models/
│   │   │   └── File.js
│   │   │
│   │   ├── routes/
│   │   │   └── file.routes.js
│   │   │
│   │   ├── services/
│   │   │   ├── file.service.js
│   │   │   └── file.storage.js
│   │   │
│   │   ├── utils/
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

> `node_modules` is intentionally not included in the repository.

---

# ✅ Current Progress

## Project Setup

* [x] Git repository initialized
* [x] GitHub repository connected
* [x] Client and server separated
* [x] React/Vite frontend created
* [x] Node.js/Express backend created
* [x] Nodemon configured
* [x] Environment variables introduced

## Backend Architecture

* [x] Express application created
* [x] `server.js` separated from `app.js`
* [x] Middleware architecture introduced
* [x] Logger middleware created
* [x] Express Router introduced
* [x] Routes separated from controllers
* [x] Controllers separated from services
* [x] Storage abstraction introduced
* [x] `async/await` implemented for asynchronous operations

## File Upload

* [x] Multer installed
* [x] `multipart/form-data` understood
* [x] Multer memory storage configured
* [x] `req.file` successfully received
* [x] File metadata successfully passed through:

```text
Multer
   ↓
Controller
   ↓
File Service
   ↓
File Storage
```

A real `.pptx` file of approximately 14.85 MB was successfully received during testing.

## Database

* [x] MongoDB installed locally
* [x] MongoDB service running
* [x] Mongoose installed
* [x] MongoDB connection established
* [x] `File` Mongoose model created
* [x] File metadata successfully saved to MongoDB

---

# 🧠 Current Architecture

The current upload flow is:

```text
Client
   |
   | multipart/form-data
   ↓
Express
   |
   ↓
Logger Middleware
   |
   ↓
Multer
   |
   ↓
req.file
   |
   ↓
File Controller
   |
   ↓
File Service
   |
   +-------> File Storage
   |
   +-------> MongoDB
```

MongoDB stores **file metadata**, while the actual file will eventually be stored in cloud storage.

---

# 🗄️ File Metadata

The current `File` model contains fields such as:

```text
originalName
size
mimeType
owner
storageLocation
storageKey
status
failoverUsed
createdAt
updatedAt
```

The purpose of these fields is to allow Cloudify to track the current state and storage location of every uploaded file.

For example:

```text
storageLocation: "aws"
```

means the currently usable copy is stored in AWS.

If AWS fails and Cloudinary successfully stores the file:

```text
storageLocation: "cloudinary"
failoverUsed: true
```

---

# ☁️ Planned AWS S3 Integration

AWS S3 will be the **primary storage provider**.

Planned flow:

```text
File Upload
     |
     ↓
File Storage Layer
     |
     ↓
AWS S3
     |
     ↓
Successful Upload
     |
     ↓
Save Metadata
```

AWS credentials will be stored in environment variables and will **not** be committed to GitHub.

---

# 🔄 Planned Automatic Failover

The core feature of Cloudify is automatic storage failover.

The planned behavior is:

```text
             Upload File
                  |
                  ↓
              AWS S3
                  |
            +-----+-----+
            |           |
         Success      Failure
            |           |
            ↓           ↓
          Done      Cloudinary
                        |
                   +----+----+
                   |         |
                Success    Failure
                   |         |
                   ↓         ↓
                 Done      Error
```

If the primary storage provider fails, Cloudify will automatically attempt the secondary provider.

The database will record the provider where the currently usable file is stored.

---

# 🔐 Planned Authentication

Authentication has not been implemented yet.

Planned features:

* User registration
* User login
* Password security
* JWT authentication
* Protected routes
* File ownership
* Authorization

Eventually:

```text
User
  |
  ↓
Authentication
  |
  ↓
JWT
  |
  ↓
Protected File API
```

---

# 🧪 Planned Testing

Cloudify will eventually test:

* Successful AWS upload
* AWS upload failure
* Automatic Cloudinary failover
* Cloudinary failure
* Both providers failing
* File validation
* Large files
* Unauthorized file access
* File deletion
* Database/storage consistency
* Duplicate upload scenarios

---

# 🗺️ Future Development Roadmap

### Phase 1 — Project Setup

* [x] Git/GitHub
* [x] React/Vite
* [x] Node.js/Express

### Phase 2 — Backend Architecture

* [x] Middleware
* [x] Routes
* [x] Controllers
* [x] Services
* [x] Storage abstraction

### Phase 3 — File Upload

* [x] Multer
* [x] Multipart form-data
* [x] File reception
* [x] File metadata

### Phase 4 — Database

* [x] MongoDB
* [x] Mongoose
* [x] File model
* [x] Metadata persistence

### Phase 5 — AWS S3

* [ ] AWS account setup
* [ ] IAM security setup
* [ ] S3 bucket
* [ ] AWS SDK
* [ ] AWS configuration
* [ ] Real file upload
* [ ] File access
* [ ] File deletion

### Phase 6 — Cloudinary

* [ ] Cloudinary account/setup
* [ ] Cloudinary configuration
* [ ] Cloudinary upload
* [ ] Cloudinary file access
* [ ] Cloudinary deletion

### Phase 7 — Automatic Failover

* [ ] Primary provider selection
* [ ] Failure detection
* [ ] Retry strategy
* [ ] AWS → Cloudinary failover
* [ ] Provider tracking
* [ ] Partial failure handling
* [ ] Duplicate prevention
* [ ] Recovery strategy

### Phase 8 — Authentication

* [ ] User model
* [ ] Registration
* [ ] Login
* [ ] JWT
* [ ] Protected routes
* [ ] File ownership

### Phase 9 — Frontend

* [ ] Login/register UI
* [ ] Dashboard
* [ ] File picker
* [ ] Upload progress
* [ ] File list
* [ ] File download/access
* [ ] Delete functionality
* [ ] Error handling

### Phase 10 — Security & Reliability

* [ ] File size limits
* [ ] File type validation
* [ ] Rate limiting
* [ ] CORS configuration
* [ ] Secure secrets
* [ ] Error handling
* [ ] Logging
* [ ] Health checks

### Phase 11 — Testing

* [ ] Unit tests
* [ ] API tests
* [ ] Storage tests
* [ ] Failover tests
* [ ] Failure simulations
* [ ] Security testing

### Phase 12 — Deployment

* [ ] Deploy backend
* [ ] Deploy frontend
* [ ] Production environment variables
* [ ] Production database
* [ ] AWS configuration
* [ ] Cloudinary configuration
* [ ] Monitoring

### Phase 13 — Documentation

* [ ] Complete README
* [ ] Architecture diagram
* [ ] API documentation
* [ ] Setup instructions
* [ ] Failover documentation
* [ ] Testing documentation
* [ ] Project screenshots/demo
* [ ] Resume/project description

---

# 🎯 Current Status

**Cloudify is currently at the transition between database integration and AWS S3 integration.**

The next immediate tasks are:

```text
AWS Account
    ↓
Secure IAM setup
    ↓
S3 Bucket
    ↓
AWS SDK
    ↓
AWS Storage Service
    ↓
Real File Upload
```

After AWS is working reliably, Cloudinary will be added as the secondary provider and the automatic failover mechanism will be implemented.

---

## Development Philosophy

Cloudify is being built incrementally rather than putting all functionality into a single backend file.

The architecture follows:

```text
Routes
   ↓
Controllers
   ↓
Services
   ↓
Storage / Database
```

This keeps the application modular and makes it easier to add multiple storage providers and implement automatic failover without rewriting the rest of the application.
