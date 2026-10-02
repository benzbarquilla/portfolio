const certs = [
  {
    image: "assets/images/badges/1.png",
    title: "CCNA: Introduction to Networks",
    program: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/8892042d-008d-4cab-af19-feb07eee1ff7",
  },
  {
    image: "assets/images/badges/2.png",
    title: "CCNA Switching, Routing, and Wireless Essentials",
    program: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/64630541-5721-4b67-b557-b0620dd05dc1",
  },
  {
    image: "assets/images/badges/3.png",
    title: "Introduction to Cybersecurity",
    program: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/bfffb2f6-9bff-4c58-82b5-bbe2dc08c157",
  },
  {
    image: "assets/images/badges/4.png",
    title: "CCNA: Enterprise Networking, Security, and Automation",
    program: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/0856a5c5-4be6-4ed3-a4c0-09d4c47d2010",
  },
  {
    image: "assets/images/badges/5.png",
    title: "Employability Skills - JobReady",
    program: "Wadhwani Foundation",
    link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=69a291440a3fed6611f86469",
  },
];

const certGrid = document.getElementById("cert-grid");

function renderCerts() {
  certs.forEach((cert) => {
    const item = document.createElement("a");
    item.className = "cert-badge";
    item.href = cert.link;
    item.target = "_blank";
    item.rel = "noopener";
    item.title = `${cert.title} — ${cert.program}`; // tooltip on hover
    item.setAttribute("aria-label", `Verify ${cert.title} by ${cert.program}`);
    item.innerHTML = `
      <img src="${cert.image}" alt="${cert.title}" loading="lazy" />
      <span class="cert-name">${cert.title}</span>
    `;
    certGrid.appendChild(item);
  });
}

renderCerts();
