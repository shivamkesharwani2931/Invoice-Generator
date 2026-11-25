# 🧾 Invoice Generator

A full-stack **MERN Invoice Generator** that allows users to create, customize, generate, download, and manage professional invoices. The application provides a simple interface for managing invoice details and securely storing generated PDF invoices.

🌐 **Live Demo:** [Invoice Generator](https://invoice-generator-zeta-gilt.vercel.app/)

📂 **GitHub Repository:** [Invoice-Generator](https://github.com/shivamkesharwani2931/Invoice-Generator)

---

## ✨ Features

- 🔐 **User Authentication** – Secure signup and login functionality.
- 📄 **Create Invoices** – Generate professional invoices with client and billing details.
- 🎨 **Invoice Templates** – Create invoices using customizable templates.
- 👤 **Client Details** – Add client name, email, and other relevant information.
- 💰 **Automatic Calculations** – Calculate invoice totals and amounts.
- 📥 **PDF Generation** – Generate and download invoices in PDF format.
- ☁️ **PDF Storage** – Store generated invoice PDFs in MongoDB using GridFS.
- 📂 **My Invoices** – Access and manage previously generated invoices.
- 🔒 **Protected Routes** – Restrict private pages to authenticated users.
- 📱 **Responsive UI** – User-friendly interface across different screen sizes.

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios
- Lucide React
- html2canvas-pro
- jsPDF / html2pdf.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Multer
- MongoDB GridFS
- Cookie Parser

### Deployment
- Vercel – Frontend Hosting
- Backend Hosting – Configure your backend deployment provider
- MongoDB – Database and PDF storage

## 📁 Project Structure

```text
Invoice-Generator/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── Services/
│   │   ├── Redux/
│   │   ├── Assets/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/shivamkesharwani2931/Invoice-Generator.git
```

```bash
cd Invoice-Generator
```

### 2. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

### 3. Setup Backend

Open another terminal:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Start the backend server:

```bash
npm start
```

**Note:** Update the environment variable names and API URL according to your backend configuration. Never commit your `.env` files or expose your database credentials and JWT secret.

## 🔄 Application Workflow

1. User registers or logs into the application.
2. User navigates to the invoice creation page.
3. User selects an invoice template.
4. User enters invoice details, including client information and billing items.
5. The application calculates the invoice amount.
6. User generates and downloads the invoice as a PDF.
7. The generated PDF is uploaded to the backend.
8. The backend stores invoice information and the PDF file in MongoDB.
9. User can access previously saved invoices from the My Invoices section.

## 🗄️ Database

The application uses MongoDB for storing user and invoice information.

**Invoice Information:**
- User reference
- Invoice number
- Client name
- Client email
- Total amount
- PDF file reference (GridFS)
- PDF filename
- Created and updated timestamps

GridFS is used to store PDF files separately from the invoice metadata, making it possible to retrieve previously generated invoices.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT authentication secret |
| `NODE_ENV` | Application environment |
| `VITE_API_URL` | Backend API base URL |

## 🚀 Future Improvements

- Email invoices directly to clients.
- Add invoice editing functionality.
- Add payment status tracking.
- Implement invoice analytics and reports.
- Add multiple currency support.
- Add invoice sharing through unique links.
- Improve invoice template customization.

## 👨‍💻 Contributors

Developed as a full-stack web development project using the MERN stack.

## 📜 License

This project is available for educational and personal development purposes.