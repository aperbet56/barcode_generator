// Récupération des différents éléments
const generateBtn = document.querySelector(".generate__btn");
const pdfBtn = document.querySelector(".pdf__btn");
const text = document.querySelector(".text__input");
const barcodeBox = document.querySelector("#barcode");
const resetBtn = document.querySelector(".reset__btn");

// Ecoute de l'événement "click" sur le bouton "générer"
generateBtn.addEventListener("click", () => {
  JsBarcode("#barcode", text.value);
  pdfBtn.style.display = "block";
  resetBtn.style.display = "block";
});

// Déclaration de la fonction generatePDF qui va permettre de générer un fichier pdf
const generatePDF = () => {
  let options = {
    margin: 10,
    filename: `${text.value}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // Nouvelle utilisation basée sur la promesse
  html2pdf().set(options).from(barcodeBox).save();
};

// Ecoute de l'événement "click" sur le bouton "télécharger en pdf" et appel de la fonction generateBtn
pdfBtn.addEventListener("click", generatePDF);

// Ecoute de l'événement "click" sur le bouton reset
resetBtn.addEventListener("click", () => {
  window.location.reload();
  text.value = "";
});
