function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  // ou
  html.classList.toggle("light")
}

//Animar elementos ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const profile = document.getElementById("profile")
  const linksList = document.querySelector("ul")
  const socialLinks = document.querySelector("#social-links")
  const footer = document.querySelector("footer")

  if (profile) profile.classList.add("animate")
  if (linksList) linksList.classList.add("animate")
  if (socialLinks) socialLinks.classList.add("animate")
  if (footer) footer.classList.add("animate")
})

//Efeito Parallax no Fundo
function parallax(event) {
  //Pegar a posição do mouse em pixels
  const posX = event.clientX // 0 = esquerda da tela
  const posY = event.clientY // 0 = topo da tela

  //Converter para porcentagem (0 a 100%)
  const percentX = (posX / window.innerWidth) * 100
  const percentY = (posY / window.innerHeight) * 100

  //Calcular o deslocamento (-25px a +25px)
  //(percentX - 50) = -50 a +50
  //÷ 50 = -1 a +1
  //× 25 = -25px a +25p
  const moveX = ((percentX - 50) / 50) * 50
  const moveY = ((percentY - 50) / 50) * 50

  //Aplicar o movimento ao fundo
  const parallaxBg = document.getElementById("parallax-bg")
  if (parallaxBg) {
    parallaxBg.style.transform = `translate(${moveX}px, ${moveY}px)`
  }
}

//Ativar o listener quando o mouse se mexe
document.addEventListener("mousemove", parallax)
