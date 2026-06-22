# AI Learning Assistant

An AI-powered learning platform that transforms study materials into structured learning resources. Upload PDFs, generate summaries, extract key points, create quizzes, and ask questions about your notes using Google Gemini AI.

---

## Live Demo

**Frontend:**
https://ai-learning-assistant-adarsh.vercel.app

**Backend API:**
https://ai-study-assistant-vssr.onrender.com

---

## Overview

AI Learning Assistant is a full-stack web application designed to help students learn more efficiently from their study materials.

Users can upload PDF notes, lecture slides, assignments, or study guides, and the application automatically generates:

* Concise summaries
* Important key points
* Practice quiz questions
* Context-aware answers to user questions

The application uses Google Gemini AI to analyze document content and create personalized learning resources.

---

## Features

### PDF Upload & Processing

* Upload PDF study materials
* Extract text automatically
* Store processed documents in a PostgreSQL database
* Manage uploaded learning resources

### AI-Powered Study Tools

* Generate concise summaries
* Extract important key points
* Automatically create quiz questions
* Ask questions about uploaded notes
* Receive AI-generated answers based on document content

### User Experience

* Modern responsive interface
* Loading states for AI processing
* Typewriter animation for generated content
* Active document selection
* Persistent document storage

### Cloud Deployment

* Frontend hosted on Vercel
* Backend hosted on Render
* PostgreSQL database hosted on Render
* Accessible from any device with internet access

---

## Core User Flow

1. Upload a PDF document.
2. The application extracts text from the PDF.
3. Google Gemini AI analyzes the content.
4. Study resources are automatically generated.
5. Users can:

   * View summaries
   * Review key points
   * Practice with quizzes
   * Ask questions about the material
6. Generated content is stored in the database for future access.

---

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

### AI Integration

* Google Gemini API

### PDF Processing

* Multer
* pdf-parse

### Deployment

* Vercel (Frontend)
* Render (Backend)
* Render PostgreSQL (Database)

---

## Project Architecture

```text
Frontend (React + Vite)
        │
        ▼
Backend API (Node.js + Express)
        │
        ▼
Prisma ORM
        │
        ▼
PostgreSQL Database

Backend
        │
        ▼
Google Gemini API
```

---


## API Endpoints

### Documents

```http
GET /documents/:id
DELETE /documents/:id
```

### Study Materials

```http
GET /summary/:id
GET /keypoints/:id
GET /quiz/:id
```

### Question Answering

```http
POST /ask/:id
```

### Upload

```http
POST /upload
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/adarshmishra25/AI_Study_Assistant.git
cd AI_Study_Assistant
```

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_database_url
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Run Prisma migrations:

```bash
npx prisma migrate deploy
```

Start backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend

npm install
npm run dev
```

---

## Future Enhancements

* User Authentication & Authorization
* Flashcard Generation
* Study Progress Tracking
* Learning Analytics Dashboard
* Retrieval-Augmented Generation (RAG)
* Vector Search using pgvector
* Multi-document Question Answering
* Personalized Learning Recommendations
* Dark/Light Theme Toggle

---

## Learning Outcomes

This project demonstrates:

* Full-Stack Development
* REST API Design
* PostgreSQL Database Management
* Prisma ORM
* PDF Processing
* AI Integration
* Prompt Engineering
* State Management in React
* Cloud Deployment
* Production Debugging
* API Integration
* Responsive UI Design

---

## Project Highlights

* AI-generated summaries, key points, and quizzes
* Context-aware question answering
* Persistent cloud database storage
* End-to-end deployment on Vercel and Render
* Modern responsive interface
* Real-world AI application architecture

---

## Author

**Adarsh Mishra**

GitHub: https://github.com/adarshmishra25

LinkedIn: https://www.linkedin.com/in/adarsh-mishra-0b0061305/

---

## License

This project is licensed under the MIT License.
