window.addEventListener('load', () => {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // ctx.strokeStyle = "red";
    // ctx.strokeRect(100, 100, 200, 500);

    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition(e) {
        painting = false;
        ctx.beginPath();
    }

    function drow(e){
        if(!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', drow);

})
