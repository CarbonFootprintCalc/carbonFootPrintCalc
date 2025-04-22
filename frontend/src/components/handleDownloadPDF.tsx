
import html2pdf from "html2pdf.js";

export const handleDownloadPDF = () => {
  const element = document.getElementById("report-content");
  if (!element) return;

  const opt = {
    margin: 0.5,
    filename: "Final_Emissions_Report.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
};
