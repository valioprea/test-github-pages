const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 25;
const columns = canvas.width / fontSize;
const rainDrops = [];

for ( let i=0; i<columns; i++){
    rainDrops[i] = 1;
}

const draw = () => {

    //to add a black cover over
    context.fillStyle = '#0001';
    context.fillRect(0,0,canvas.width,canvas.height);

    context.fillStyle = "#0f0";
    context.font = fontSize + "px monospace";

    for( let j=0; j<rainDrops.length; j++){
        const text = String.fromCharCode(Math.random() * 128);
        context.fillText( text, j * fontSize, rainDrops[j] * fontSize );
        if( rainDrops[j]*fontSize > canvas.height && Math.random() > 0.975 ) {
            rainDrops[j] = 0;
        }
        rainDrops[j]++;
    }
};

setInterval(draw, 50);