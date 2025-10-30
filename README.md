# 🌀 Loopin Server

**Loopin** is a modern **social media chatting platform** built with scalability and performance in mind.  
It enables users to **create connections, chat in real-time**, and even interact with an integrated **AI-powered chatbot (similar to Meta AI in WhatsApp)** for instant assistance, fun, and intelligent conversations.

---

## 🚀 Features

### 👥 Social Features
- Create an account and build your social connections.
- Send and accept connection requests.
- See connection status and manage your network.

### 💬 Chat System
- Real-time one-to-one messaging.
- Seen/delivered message indicators.
- Online/offline user status.
- Chat history and message persistence.

### 🤖 AI Chat Integration
- Talk with an in-built **AI assistant** (like Meta AI in WhatsApp).
- Ask questions, get recommendations, or have fun conversations.
- Seamlessly integrated into the chat UI — no separate screen needed.

### 🔐 Authentication & Security
- JWT-based authentication.
- Google sign-in (Firebase Authentication).
- Password hashing with bcrypt.
- Role-based access for secure endpoints.

### ☁️ Cloud & Storage
- Firebase Cloud for authentication and push notifications.
- MongoDB for scalable, flexible data storage.
- Secure environment variable configuration for API keys and credentials.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB + Mongoose |
| **Authentication** | Firebase Auth / JWT |
| **AI Assistant** | OpenAI API / Gemini API Integration |
| **Real-time Chat** | Socket.IO |
| **Deployment** | Render / Vercel / AWS (optional) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/praveen93634/loopinServer.git
cd loopinServer
