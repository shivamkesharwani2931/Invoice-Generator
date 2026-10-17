import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Example pages
function Dashboard() {
  return (
    <div className="mx-auto min-h-[60vh] max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome to InvoicePro
      </h1>
      <p className="mt-3 text-gray-600">
        Create and manage your invoices with ease.
      </p>
    </div>
  );
}

function Invoices() {
  return <div className="min-h-[60vh] p-8">All Invoices</div>;
}

function CreateInvoice() {
  return <div className="min-h-[60vh] p-8">Create Invoice Page</div>;
}

function About() {
  return <div className="min-h-[60vh] p-8">About InvoicePro</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/create-invoice" element={<CreateInvoice />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;