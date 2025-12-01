// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

class SettingsSingleton {
    static instance;
    constructor() {
        if (SettingsSingleton.instance) {
            return SettingsSingleton.instance;
        }
        // default instellingen
        this.email = true;
        this.popup = true;
        this.interval = 15;
        SettingsSingleton.instance = this;
    }
    setEmail(email) {
        this.email = email;
    }
    setPopup(popup) {
        this.popup = popup;
    }
    setInterval(interval) {
        this.interval = interval;
    }

    getEmail() {
        return this.email;
    }
    getPopup() {
        return this.popup;
    }
    getInterval() {
        return this.interval;
    }
}
// één keer aanmaken
const appSettings = new SettingsSingleton();
// UI-logica ernaast
function saveSettingsFromUI() {
    const emailSetting = document.querySelector("#notify_email");
    const popupSetting = document.querySelector("#notify_popup");
    const intervalSetting = document.querySelector("#notify_interval")
    appSettings.setEmail(boolean(emailSetting.value));
    appSettings.setPopup(boolean(popupSetting.value));
    appSettings.setInterval(intervalSetting.value);
    console.log(appSettings.setEmail(emailSetting.value), appSettings.setPopup(popupSetting.value),appSettings.setInterval(intervalSetting.value))

    showSettingsInUI();

}
function showSettingsInUI() {
    document.querySelector("#notify_output").textContent =
        `Ontvangen-emails : ${appSettings.getEmail()} ; Ontvangen-popups : ${appSettings.getPopup()} ; Interval : ${appSettings.getInterval()}`
}

// event listeners

document.querySelector("#btn_notify_save").addEventListener("click", saveSettingsFromUI);
document.querySelector("#btn_notify_show").addEventListener("click", showSettingsInUI);
