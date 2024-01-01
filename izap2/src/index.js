// const altura = document.querySelector('#altura')
// const peso = document.querySelector('#peso')
// const imcbutton = document.querySelector('#imcbutton')
// const condicao = document.querySelector('#condição')

// function imc_calc(altura, peso){
//   const string = altura;
//   const altura_int = Number(string.replace(',', '.'));
//   imc = peso / (altura_int**2);
//   return imc;
// }

// function estado_atual(sexfem,sexmas, imc_final){
//   if (sexfem == true){
//     if (imc_final < 19.1){
//       return "Abaixo do Peso"
//     }else if (imc_final >= 19.1 && imc_final <= 25.8){
//       return "Peso Normal"
//     }else if (imc_final >= 25.8 && imc_final <= 27.3){
//       return "Marginalmente Acima do Peso"
//     }else if (imc_final >= 27.3 && imc_final <= 32.3){
//       return "Acima do Peso Ideal"
//     }else if (imc_final > 32.3){
//       return "Obeso"
//     }
//   } else if (sexmas == true){
//     if (imc_final < 20.7){
//       return "Abaixo do Peso"
//     }else if (imc_final >= 20.7 && imc_final <= 26.4){
//       return "Peso Normal"
//     }else if (imc_final >= 26.4 && imc_final <= 27.8){
//       return "Marginalmente Acima do Peso"
//     }else if (imc_final >= 27.8 && imc_final <= 31.1){
//       return "Acima do Peso Ideal"
//     }else if (imc_final > 31.1){
//       return "Obeso"
//     }
//   }
// }

// function load() {
//   imcbutton.addEventListener('click', () => {
//     const imc_final = imc_calc(altura.value, peso.value);
//     const sexfem = !!document.querySelector('#feminino').checked;
//     const sexmas = !!document.querySelector('#masculino').checked;
//     condicao.value = estado_atual(sexfem, sexmas, imc_final);
//     });
// }

// load();


const nome = document.querySelector('#nome')
const send = document.querySelector("#send")
const postmensagem = document.querySelector("#postmensagem")


function name_msg(nome, send) {
    var name = nome.value;
    var msg = send.value;
    var frase =  name + ': '+ msg;

    return frase;
    
}


function load() {
    buttonsend.addEventListener('click', () => {
        const msg = name_msg(nome.value, send.value);
        postmensagem.value = msg;
        
    });
}

load()

export { name_msg }