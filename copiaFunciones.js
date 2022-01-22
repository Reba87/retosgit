
// DECLARANDO FUNCIONES DEJO EL VALOR AGREGADO POR SI HAY ALGUN ERROR.


function suma(op1,op2 =0) {
    let resultado = op1 + op2;
    return resultado
  }
  
  function resta(op1,op2 =0) {
    let resultado = op1 - op2;
    return resultado
  }
  
  function producto(op1,op2 =0) {
    let resultado = op1 * op2;
    return resultado
  }
  
  function division(op1,op2 =0) {
    let resultado = op1 / op2;
    return resultado
  }

  function cuadrado(op1){
    let resultado = op1 * op1
    return resultado
  }
  
module.exports = {suma,resta,producto,division,cuadrado}