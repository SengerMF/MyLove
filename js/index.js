if( navigator.userAgent.match(/Android/i)){
document.getElementsByClassName('body')[0].style.display='none'
}

//Btn not

let div = document.getElementById('not')

div.addEventListener('mousemove', ()=>{
    let m_top = Math.floor((Math.random() * $('body').height()) + 1); 
    let m_left = Math.floor((Math.random() * $('body').width()) + 1);
    console.log(m_top, m_left);

    if(m_left>750 || m_left<100){m_left=600}
    if(m_top>390 || m_top<100){m_top=300}

    $("#not").css({
      'margin-top': m_top+ 'px',
      'margin-left':m_left+ 'px'
    });
})



//Fluid Meter
var fm = new FluidMeter();
fm.init({
  targetContainer: document.getElementById("fluid-meter"),
  fillPercentage: 20,
  options: {
    fontFamily: "Raleway",
    drawPercentageSign: false,
    drawBubbles: true,
    size: 300,
    borderWidth: 20,
    backgroundColor: "#e2e2e2",
    foregroundColor: "#fafafa",
    foregroundFluidLayer: {
      fillStyle: "red",
      angularSpeed: 250,
      maxAmplitude: 12,
      frequency: 30,
      horizontalSpeed: -150
    },
    backgroundFluidLayer: {
      fillStyle: "pink",
      angularSpeed: 150,
      maxAmplitude: 9,
      frequency: 30,
      horizontalSpeed: 150
    }
  }
});

//Verificador

var locker = 0;



//Increse 
var level = 20

var aux = false;


yes.addEventListener('mouseout', ()=>{
    if (aux==false){
    fm.setPercentage(20);}
    console.log('ok')
})

function openModal(){
  if(document.getElementsByClassName('yes')[0].innerHTML != 'Mensagem Secreta Destravada'){
    $('#myModal').modal('show');
    aux = true;
    
  }else{
    $('#myModalMSG').modal('show');
  }
}

function exitModal(){
$('#myModal').modal('hide');
$('#myMSG').modal('hide');
msg();
}

function not(){
  alert('Quase heem, não foi dessa vez, pare de insistir no erro mulher!');
}

function msg(){
  document.getElementsByClassName('not')[0].style.display = 'none';
  document.getElementsByClassName('yes')[0].style.display = 'none';

  document.getElementsByClassName('um')[0].style.display = 'block';
  document.getElementsByClassName('dois')[0].style.display = 'block';
  document.getElementsByClassName('tres')[0].style.display = 'block';
  document.getElementsByClassName('quatro')[0].style.display = 'block';
  document.getElementsByClassName('cinco')[0].style.display = 'block';

  document.getElementById('ask').innerText = 'Visite todos os itens abaixo para liberar uma surpresa!'

}

function finalMsg(){
  document.getElementsByClassName('ask')[0].style.marginTop = '400px';
  document.getElementsByClassName('ask')[0].style.fontSize = '45pt';
  document.getElementById('ask').innerHTML = 'EU TE AMO MIL MILHÕES!';
  document.getElementsByClassName('not')[0].style.display = 'none';
  document.getElementsByClassName('yes')[0].style.display = 'none';

  document.getElementsByClassName('um')[0].style.display = 'none';
  document.getElementsByClassName('dois')[0].style.display = 'none';
  document.getElementsByClassName('tres')[0].style.display = 'none';
  document.getElementsByClassName('quatro')[0].style.display = 'none';
  document.getElementsByClassName('cinco')[0].style.display = 'none';

  $('#myModal').modal('hide');
  $('#myVoltar').modal('hide');
  fm.setPercentage(90);
  alert('TANQUE DE AMOR CHEIO!')
  setInterval(heart, 200);

  }

function heart(){
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random()*100+'vw';
  heart.style.animationDuration = Math.random()*2+3;
  document.body.appendChild(heart);
  setTimeout(()=>{
    heart.remove();
  }, 3000)

  console.log('ok')
}

function finalUm(){
  $('#um').attr('style', function(i,s) { return s + 'color: black !important;' });
  $('#um').attr('style', function(i,s) { return s + 'border-color: black !important;' });
  $('#myMSG').modal('hide');
  level = level+15
  fm.setPercentage(level);
  alert('Nosso TANQUE DE AMOR aumentou!');
}
function finalDois(){
  $('#dois').attr('style', function(i,s) { return s + 'color: black !important;' });
  $('#dois').attr('style', function(i,s) { return s + 'border-color: black !important;' });
  $('#myDialogo').modal('hide');
  level = level+15
  fm.setPercentage(level);
  alert('Nosso TANQUE DE AMOR aumentou mais um pouco!');
}
function finalTres(){
  $('#tres').attr('style', function(i,s) { return s + 'color: black !important;' });
  $('#tres').attr('style', function(i,s) { return s + 'border-color: black !important;' });
  $('#myApoio').modal('hide');
  level = level+15
  fm.setPercentage(level);
  alert('TANQUE DO AMOR continua aumentando!');
}

function finalQuatro(){
  $('#quatro').attr('style', function(i,s) { return s + 'color: black !important;' });
  $('#quatro').attr('style', function(i,s) { return s + 'border-color: black !important;' });
  $('#myRespeito').modal('hide');
  level = level+15
  fm.setPercentage(level);
  alert('TANQUE DO AMOR quase chieo!');
}

function openUm(){
  $('#myMSG').modal('show');
  locker = locker+1;
}
function openDois(){
  $('#myDialogo').modal('show');
  locker = locker+1;
}
function openTres(){
  $('#myApoio').modal('show');
  locker = locker+1;
}
function openQuatro(){
  $('#myRespeito').modal('show');
  locker = 4;
}

function openCinco(){
  if(locker == 4){
    $('#myVoltar').modal('show');
  }else{
    alert('Ainda faltam algumas mensagens!');
  }
  
}