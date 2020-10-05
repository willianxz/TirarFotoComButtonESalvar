var capture;
var buttonTirarFoto;
var buttonSalvarFoto;
var fotoTirada;
var modo = 0;
var confirmarTakeSnap = false;


function setup() {
 createCanvas(windowWidth, windowHeight);
 capture = createCapture(VIDEO);
 capture.hide();
 
 buttonTirarFoto = createButton("Tirar Foto");
 buttonTirarFoto.position(width/2, height - 60); 
 buttonTirarFoto.mousePressed(takeSnap);
 
 buttonSalvarFoto = createButton("Salvar Foto");
 buttonSalvarFoto.position(width/2 - 100, height - 60);
 buttonSalvarFoto.mousePressed(saveSnap);
}

function draw() {    
  if(modo == 0){ 
    image(capture, width/2 + 25, 0);   
  }else if(modo == 1){
    background(255);
    image(fotoTirada, 0, 0, width, height);
    saveCanvas("minhaFoto", "jpg");
    background(255);
    modo = 0;
  }
}

function takeSnap(){
 tint(255);
 image(capture, 20, 0);
 fotoTirada = capture.get();
 image(fotoTirada, 20, 0);
 
 //Tive que usar esse codigo abaixo anteriormente para a camera não travar ao usar o capture.get().
// capture = createCapture(VIDEO); consegui evitar de usar esse codigo que suja cada vez mais o html com novas tags de video
 //capture.hide(); colocando o tint ali em cima.
 
 confirmarTakeSnap = true;
}

function saveSnap(){
  if(confirmarTakeSnap){
   modo = 1;
  }
}
