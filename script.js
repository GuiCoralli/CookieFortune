const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const openAnotherCookie = document.querySelector("#openAnotherCookie")
const openCookie = document.querySelector("#img1")

openCookie.addEventListener("click", raffleMessage)
openAnotherCookie.addEventListener("click", raffleMessage)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen2.classList.contains('hide')){
      raffleMessage()
  } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
      raffleMessage()
      }
  }
)

function raffleMessage() {
  toggleScreen()
  let randomNumber = Math.round(Math.random() * 10)

  switch(randomNumber) {
    case 0: screen2.querySelector("p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    break
    case 1: screen2.querySelector("p").innerText = "Nem todos os dias são bons, mas há algo bom em cada dia."
    break
    case 2: screen2.querySelector("p").innerText = "A adversidade é um espelho que reflete o verdadeiro eu."
    break
    case 3: screen2.querySelector("p").innerText = "Faça da alegria a maior certeza da sua vida, e o tempo se encarregará de permitir que grandes momentos aconteçam todos os dias."
    break
    case 4: screen2.querySelector("p").innerText = "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você."
    break
    case 5: screen2.querySelector("p").innerText = "Acredite no seu valor e prove a você mesmo que todos os sonhos são possíveis de alcançar."
    break
    case 6: screen2.querySelector("p").innerText = "Sinta carinho, goste, adore e ame! Mas, jamais precise de alguém pra ser feliz, além de você mesmo."
    break
    case 7: screen2.querySelector("p").innerText = "A vida trará coisas boas se tiveres paciência."
    break
    case 8: screen2.querySelector("p").innerText = "Defeitos e virtudes são apenas dois lados da mesma moeda."
    break
    case 9: screen2.querySelector("p").innerText = "Não há que ser forte. Há que ser flexível."
    break
    case 10: screen2.querySelector("p").innerText = "Não importa o tamanho da montanha, ela não pode tapar o sol."
    break
    default:
    break
    }
}
  
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}