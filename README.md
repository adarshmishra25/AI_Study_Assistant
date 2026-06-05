# AI Learning Assistant

An AI-powered learning platform that helps students transform study materials into structured learning resources. Users can upload PDFs, generate summaries, extract key points, create quizzes, and ask questions about their notes using AI.

---

## Overview

AI Learning Assistant is a full-stack web application designed to improve the learning experience by converting lecture notes, study materials, and PDFs into easy-to-understand content.

The application uses AI to analyze uploaded documents and generate useful study resources such as summaries, key concepts, quiz questions, and contextual answers based on the uploaded material.

---

## Features

### Document Processing

* Upload PDF files
* Extract text from uploaded PDFs
* Store and manage learning materials

### AI-Powered Learning Tools

* Generate concise summaries
* Extract important key points
* Generate quiz questions automatically
* Ask questions about uploaded notes
* Receive AI-generated answers based on document content

### User Experience

* Clean and responsive interface
* Fast document processing
* Easy navigation between learning resources

### Deployment

* Fully deployed online
* Accessible from any device with an internet connection

---

## Core User Flow

1. User uploads a PDF, lecture notes, or study material.
2. The system extracts text from the document.
3. AI processes the extracted content.
4. The user can:

   * Generate a summary
   * Generate key points
   * Generate quiz questions
   * Ask questions about the document
5. AI returns responses based on the uploaded material.

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* JSON Web Token (JWT)
* bcrypt

### Database

* PostgreSQL
* Prisma ORM

### AI Integration

* OpenAI API

### PDF Processing

* Multer (File Uploads)
* pdf-parse (PDF Text Extraction)

---

## Project Architecture

Frontend (React)
↓
Backend API (Node.js + Express)
↓
PostgreSQL Database (Prisma ORM)
↓
OpenAI API

---

## Future Enhancements

* User Authentication & Authorization
* Study History Tracking
* Flashcard Generation
* Progress Analytics
* Retrieval-Augmented Generation (RAG)
* Vector Search with pgvector
* Personalized Learning Recommendations
* Multi-document Question Answering

---

## Learning Outcomes

This project demonstrates:

* Full-Stack Development
* REST API Development
* Database Design
* PDF Processing
* AI Integration
* Prompt Engineering
* Frontend State Management
* Backend Architecture
* Deployment and Hosting

---

## Goal

The goal of this project is to provide students with an intelligent study assistant that simplifies learning by turning lengthy study materials into structured and interactive educational resources.
