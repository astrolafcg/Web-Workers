self.addEventListener("message", (ev) => {
    console.log("Ejecutando tarea de web worker con 'data': ", ev.data);
    let data = ev.data;
    switch (data) {
        case "Empezar":
            self.postMessage("Web Worker ha iniciado");
            break;
        case "Otra":
            self.postMessage("Otra tarea...");
            break;
        default:
            console.log("Invalid access, data: " + data);
            self.postMessage("Closing web worker");
            self.close();
    }
});