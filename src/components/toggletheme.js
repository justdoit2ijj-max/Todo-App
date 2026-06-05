import { state } from "../state";

export function toggleImg() {
    const bgImg = document.getElementById('bg-img');
    const themeIcon = document.querySelector('#toggle-theme-btn img');
    const screenSize = window.innerWidth > 1024 ? "desktop" : "mobile";

    state.themeImg = `./images/bg-${screenSize}-${state.themeType}.jpg`;

    if (bgImg) bgImg.src = state.themeImg;
    if (themeIcon) {
        themeIcon.src = state.themeType === "dark"
            ? "./images/icon-sun.svg"
            : "./images/icon-moon.svg";
        themeIcon.alt = state.themeType === "dark" ? "sun icon" : "moon icon";
    }
}
export function toggleThemeType() {
    state.themeType = state.themeType === "dark" ? "light" : "dark";
}
export function toggleTheme() {
    document.documentElement.classList.toggle('light', state.themeType === "light")
}
