
import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

import { templates } from "../Data/templates";

import "../App.css";

export default function InvoicePreview({
  invoice,
  template = "modern",
}) {
  const invoiceRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  // Find selected template
  const selectedTemplate = templates.find(
    (item) => item.id === template
  );

  // Get selected template component
  const SelectedTemplate = selectedTemplate?.Component;

  // Download invoice PDF
  const handleDownload = async () => {
    if (!invoiceRef.current || downloading) return;

    setDownloading(true);

    try {
      const element = invoiceRef.current;

      // Wait for images to load
      const images = [...element.querySelectorAll("img")];

      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      // PDF filename
      const fileName = String(
        invoice?.invoiceNumber || "INV-DRAFT"
      ).replace(/[^a-zA-Z0-9_-]/g, "_");

      await html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `invoice-${fileName}.pdf`,

          image: {
            type: "jpeg",
            quality: 0.98,
          },

          html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            backgroundColor: "#ffffff",
            logging: false,
          },

          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },

          pagebreak: {
            mode: ["css", "legacy"],
          },
        })
        .from(element)
        .save();
    } catch (error) {
      console.error("PDF download failed:", error);

      alert(
        error?.message || "Unable to generate invoice PDF."
      );
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section className="invoice-preview-container">
      {/* Preview Toolbar */}
      <div className="invoice-preview-toolbar">
        <div>
          <h2>Invoice Preview</h2>
          <p>
            Template: {selectedTemplate?.name || template}
          </p>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading || !SelectedTemplate}
          className="invoice-download-btn"
        >
          {downloading
            ? "Generating PDF..."
            : "Download PDF"}
        </button>
      </div>

      {/* Invoice Preview */}
      <div className="invoice-preview-canvas">
        {SelectedTemplate ? (
          <div ref={invoiceRef}>
            <SelectedTemplate invoice={invoice} />
          </div>
        ) : (
          <div className="p-6 text-center text-red-600">
            <p>Template not found.</p>
            <p className="text-sm">
              Please select a valid invoice template.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
