const botaoTopo = document.getElementById("botao-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    botaoTopo.classList.add("visivel");
  } else {
    botaoTopo.classList.remove("visivel");
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
