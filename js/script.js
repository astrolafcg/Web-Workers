let output = document.getElementById("output");
let worker;
document.addEventListener("DOMContentLoaded", init);

function init() {
    worker = new Worker("js/worker.js");
    worker.addEventListener("message", workerOutput);
    worker.addEventListener("error", workerError);
    worker.postMessage("Empezar");
    output.addEventListener("click", () => {
        worker.postMessage("Otra");
    });
}

function workerOutput(ev) {
    let data = ev.data;
    output.textContent += data + "\n";
}

function workerError(err) {

    console.log(err.message, err.filename);
}