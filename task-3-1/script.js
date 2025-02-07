var inputImg = document.getElementById("file");
var img = document.getElementById("img");
var changes = document.getElementById("changes");
var submit = document.getElementById("submit");
var downloadBtn = document.getElementById("download");

let rotateAngle = 0;
let flipX = 1;
let skewX = 0;

inputImg.addEventListener("change", (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        img.src = event.target.result;
        resetTransform(); // Reset transformations when a new image is uploaded
    }

    reader.readAsDataURL(file); 
});

submit.addEventListener("click", () => {
    var value = changes.value;

    switch(value){
        case "rotate": 
            rotateAngle += 90;
            break;
        case "flip":
            flipX *= -1;
            break;
        case "skew":
            skewX = skewX === 0 ? 45 : 0; // Toggle skew between 0 and 45 degrees
            break;
        default:
            alert("Please select an option");
            return;
    }
    
    applyTransform();
});

function applyTransform() {
    img.style.transform = `rotate(${rotateAngle}deg) scaleX(${flipX}) skewX(${skewX}deg)`;
}

function resetTransform() {
    rotateAngle = 0;
    flipX = 1;
    skewX = 0;
    applyTransform();
}

downloadBtn.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = img.width;
    canvas.height = img.height;
    
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotateAngle * Math.PI) / 180);
    ctx.scale(flipX, 1);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.drawImage(img, 0, 0);
    
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});

