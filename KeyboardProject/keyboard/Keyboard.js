const Keyboard = {
    elements: {
        main: null,
        keysContainer:null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {

    },

    _createkeys() {

    },

    triggerEvent(handlerName) {
        console.log("Event triggered! Event name: " + handlerName);
    },

    _toggleCapsLock() {
        console.log("Capslock toggled!");
    },

    open(initialValue, oninput, onclose){

    },

    close(){

    }
};


window.addEventListener("DOMContentLoaded", function() {
    Keyboard.init();
});