function inss(salarioBruto) {
  var desconto = 0
  if (salarioBruto<=1659.38){
    desconto = salarioBruto*0.08
  }
  else if (salarioBruto<=2765.66) {
    desconto = salarioBruto*0.09
  }
  else if (salarioBruto<=5531.31) {
    desconto = salarioBruto*0.11
  }
  else if (salarioBruto>5531.31) {
    desconto = 604.44
  }
  else{
    desconto = "meo deos"
  }
  return desconto
}
function irpf(salarioBruto) {
  var desconto = 0
  if (salarioBruto<1903.99){
  desconto = 0
  }
  else if (salarioBruto<=2826.65) {
    desconto = (salarioBruto*0.075)-142.8
  }
  else if (salarioBruto<=3751.05) {
    desconto = (salarioBruto*0.15)-354.8
  }
  else if (salarioBruto<=4664.68) {
    desconto = (salarioBruto*0.225)-636.13
  }
  else if (salarioBruto>4664.68) {
    desconto = (salarioBruto*0.275)-869.36
  }
  return desconto
}
function inssP(salarioBruto){
  var desconto = "0%"
  if (salarioBruto<=1659.38){
    desconto = "8%"
  }
  else if (salarioBruto<=2765.66) {
    desconto = "9%"
  }
  else if (salarioBruto<=5531.31) {
    desconto = "11%"
  }
  else if (salarioBruto>5531.31) {
    desconto = "11%"
  }
  return desconto
}
function irpfP(salarioBruto) {
  var desconto = "0%"
  if (salarioBruto<1903.99){
  desconto = "0%"
  }
  else if (salarioBruto<=2826.65) {
    desconto = "7,5%"
  }
  else if (salarioBruto<=3751.05) {
    desconto = "15%"
  }
  else if (salarioBruto<=4664.68) {
    desconto = "22,5%"
  }
  else if (salarioBruto>4664.68) {
    desconto = "27,5%"
  }
  return desconto
}
function tabelaIR() {
  salarioB = parseFloat(document.getElementById('salario').value)
  nome = document.getElementById('nome').value
  salarioL = salarioB-(inss(salarioB)+irpf(salarioB))
  tabela = document.getElementById('tabela')
  tabelaV = tabela.innerHTML
  tabelaN = "<tr><td>"+nome+"</td><td>R$ "+salarioB+"</td><td>"+inssP(salarioB)+"</td><td>R$ "+inss(salarioB).toFixed(2)+"</td><td>"+irpfP(salarioB)+"</td><td>R$ "+irpf(salarioB).toFixed(2)+"</td><td>R$ "+salarioL.toFixed(2)+"</td></tr>";
  tabelaT = tabelaV + tabelaN
  tabela.innerHTML = tabelaT
}
