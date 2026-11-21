import axios from "axios";

const API = axios.create({
  baseURL: "/invoices",
  withCredentials: true,
});

const saveInvoice = async (formData) => {
  const response = await API.post("/save", formData);
  return response.data;
};

const getMyInvoices = async () => {
  const response = await API.get("/my-invoices");
  return response.data;
};

const downloadInvoice = async (invoiceId) => {
  const response = await API.post(
    "/download",
    { invoiceId },
    { responseType: "blob" }
  );

  return response.data;
};

export default {
  saveInvoice,
  getMyInvoices,
  downloadInvoice,
};