/* * ---------- Código da aula 
const nome = 'Larissa'
const notaPrimeiroBimestre = 9
const notaSegundoBimestre = 7
const notaTerceiroBimestre = 4
const notaQuartoBimestre = 2
const notaFinal =
  (notaPrimeiroBimestre +
    notaSegundoBimestre +
    notaTerceiroBimestre +
    notaQuartoBimestre) /4
  
const notaFixada = notaFinal.toFixed(1)
console.log(`Nota da(o) aluna(o) ${nome}: ${notaFixada}`) */

////////////////////////////////

/* ---------- Código aprimorado------------- */

function calcularMedia() {
    // Recebendo as notas e guardando as variáveis
    const bimestreUm = parseFloat(document.getElementById('b1').value)
    const bimestreDois = parseFloat(document.getElementById('b2').value)
    const bimestreTres = parseFloat(document.getElementById('b3').value)
    const bimestreQuatro = parseFloat(document.getElementById('b4').value)
  
    // calculando a media
    const mediaAnual = (
      (bimestreUm + bimestreDois + bimestreTres + bimestreQuatro) /
      4
    ).toFixed(1)
  
    // mostrando a média na tela
    const notaDoAluno = (document.getElementById('nota').innerHTML = mediaAnual)
  
    // exibir o status - aprovado ou reprovado
    // se a notaDoAluno for maior que 7, a mensagem mostra o status "Aprovado!"
    // caso menor que 7, a mensaagem mostra o satus "Reprovado!"
    if (notaDoAluno >= 7) {
      const statusDoAluno = (document.getElementById('status').innerHTML =
        'Aprovado!')
    } else {
      const statusDoAluno = (document.getElementById('status').innerHTML =
        'Reprovado!')
    }
  }