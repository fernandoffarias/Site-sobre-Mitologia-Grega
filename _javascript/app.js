// ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// filtro (todos/escultura/pintura)
const buttons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");

buttons.forEach((b) => {
  b.addEventListener("click", () => {
    buttons.forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.filter;
    cards.forEach((c) => {
      const show = f === "all" || c.dataset.type === f;
      c.style.display = show ? "" : "none";
    });
  });
});

// lightbox (zoom)
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightImg");
const close = document.getElementById("closeLb");

document.querySelectorAll(".figure img").forEach((img) => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
  });
});

function closeLb() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  lbImg.removeAttribute("src");
}

close.addEventListener("click", closeLb);
lb.addEventListener("click", (e) => {
  if (e.target === lb) closeLb();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLb();
});
