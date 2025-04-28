function generateInvoice() {
	const clientName = document.getElementById("clientName").value;
	const projectDesc = document.getElementById("projectDesc").value;
	const amount = document.getElementById("amount").value;
	
	const invoiceHTML = `
		<div class="invoice">
			<h2>Scroll of Charges</h2>
			<p><strong>Client (Noble House):</strong> ${clientName}</p>
			<p><strong>Quest Undertaken:</strong> ${projectDesc}</p>
			<p><strong>Reward in Gold:</strong> $${amount}</p>
			<p><em>Stamped by the Guild of Marauders:</em></p>
		</div>
	`;

	document.getElementById("invoiceOutput").innerHTML = invoiceHTML;
	document.getElementById("invoice").innerHTML = invoiceHTML;
}

window.downloadPDF = async function () {
	const { jsPDF } = window.jspdf;
	const doc = new jsPDF({
		orientation: "portrait",
		unit: "pt",
		format: "letter"
	});

	const clientName = document.getElementById("clientName").value;
	const projectDesc = document.getElementById("projectDesc").value;
	const amount = document.getElementById("amount").value;

	doc.setFont("Times", "Bold");
	doc.setFontSize(24);
	doc.text("Scroll of Charges", 220, 80);

	doc.setFontSize(14);
	doc.setFont("Times", "Normal");
	doc.text(`Client (Noble House): ${clientName}`, 100, 150);
	doc.text(`Quest Undertaken: ${projectDesc}`, 100, 180);
	doc.text(`Reward in Gold: $${amount}`, 100, 210);
	doc.text("Stamped by the Guild of Marauders:", 100, 270);

	// Wax Seal Image
	const waxSealUrl = "https://st.depositphotos.com/3643473/5136/i/950/depositphotos_51362339-stock-illustration-wax-seal.jpg"; // Example wax seal (transparent)
	const img = new Image();
	img.src = waxSealUrl;

	img.onload = function () {
		doc.addImage(img, "PNG", 200, 400, 200, 200); // Position and size of seal
		doc.save("scroll-of-invoice.pdf");
	};
};
