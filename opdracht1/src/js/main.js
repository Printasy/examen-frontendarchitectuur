// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
//eigen code

// Tellermodule

const exCounter = (function () {
    let count = 0;
    function increment7() {
        count = count+7;
        render();
    }
    function increment33() {
        count = count+33;
        render();
    }
    function reset() {
        count = 0;
        render();
    }
    function render() {
        document.querySelector("#time_display").textContent = count;
    }
    return {
        increment7,
        increment33,
        reset
    };
})();
document
    .querySelector("#btn_brief")
    .addEventListener("click", exCounter.increment7);
document
    .querySelector("#btn_shift")
    .addEventListener("click", exCounter.increment33);
document
    .querySelector("#btn_zero")
    .addEventListener("click", exCounter.reset);

