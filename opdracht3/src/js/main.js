// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const EventBus = {
    listeners: {},
    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },
    publish(eventName, data) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(data));
    }
};
// Observer: luistert naar "MESSAGE"
EventBus.subscribe("MESSAGE", function (payload) {
    const list = document.querySelector("#log_list");
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `[${new Date().toLocaleTimeString()}] ${payload.text}`;
    list.appendChild(li);
    console.log(list);
});
// Publisher: stuurt MESSAGE event
document
    .querySelector("#btn_send")
    .addEventListener("click", () => {
        const input = document.querySelector("#team_name");
        const teamNaam = input.value.trim();
        const aantal = document.querySelector("#team_value");
        const waarde = parseInt(aantal.value.trim());
        if (!teamNaam) return;
        EventBus.publish(teamNaam, {waarde});
        input.value = "";
        aantal.value = "";
    });