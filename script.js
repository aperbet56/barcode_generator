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
  let opt = {
    margin: 1,
    filename: `${text.value}.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 4 },
    jsPDF: { format: "a4", orientation: "l" },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(barcodeBox).save();
  window.location.reload;
};

// Ecoute de l'événement "click" sur le bouton "télécharger en pdf" et appel de la fonction generateBtn
pdfBtn.addEventListener("click", generatePDF);

// Ecoute de l'événement "click" sur le bouton reset
resetBtn.addEventListener("click", () => {
  window.location.reload();
  text.value = "";
});
