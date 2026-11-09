
import { useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

import { templates } from "../Data/templates";
import "../App.css";

export default function InvoicePreview({
  invoice,
  template = "modern",
}) {
  const invoiceRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const selectedTemplate = templates.find(
    (item) => item.id === template
  );

  const SelectedTemplate = selectedTemplate?.Component;

  const handleDownload = async () => {
    if (!invoiceRef.current || downloading) return;

    setDownloading(true);

    try {
      const element = invoiceRef.current;

      // Wait for images
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

      // Wait for fonts
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      // Generate canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: element.scrollWidth,
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const margin = 8;
      const pageWidth = 210;
      const pageHeight = 297;

      const contentWidth = pageWidth - margin * 2;
      const contentHeight = pageHeight - margin * 2;

      const imageHeight =
        (canvas.height * contentWidth) / canvas.width;

      const pageCanvasHeight =
        (canvas.width * contentHeight) / contentWidth;

      let position = 0;
      let page = 0;

      while (position < canvas.height) {
        const sliceHeight = Math.min(
          pageCanvasHeight,
          canvas.height - position
        );

        const pageCanvas = document.createElement("canvas");

        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeight;

        const context = pageCanvas.getContext("2d");

        context.drawImage(
          canvas,
          0,
          position,
          canvas.width,
          sliceHeight,
          0,
          0,
          canvas.width,
          sliceHeight
        );

        const imageData = pageCanvas.toDataURL("image/jpeg", 0.98);

        if (page > 0) {
          pdf.addPage();
        }

        const currentHeight =
          (sliceHeight * contentWidth) / canvas.width;

        pdf.addImage(
          imageData,
          "JPEG",
          margin,
          margin,
          contentWidth,
          currentHeight
        );

        position += sliceHeight;
        page++;
      }

      const fileName = String(
        invoice?.invoiceNumber || "INV-DRAFT"
      ).replace(/[^a-zA-Z0-9_-]/g, "_");

      pdf.save(`invoice-${fileName}.pdf`);

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
    <section className="invoice-preview-container min-w-0 w-full">

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
          <div
            ref={invoiceRef}
            className="invoice-document"
          >
            <SelectedTemplate invoice={invoice} />
          </div>
        ) : (
          <div className="p-6 text-center text-red-600">
            <p>Template not found.</p>
          </div>
        )}

      </div>

    </section>
  );
}
