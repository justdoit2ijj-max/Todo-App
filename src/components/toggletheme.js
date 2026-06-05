import { state } from "../state";
import bgDesktopDark from "../../images/bg-desktop-dark.jpg";
import bgDesktopLight from "../../images/bg-desktop-light.jpg";
import bgMobileDark from "../../images/bg-mobile-dark.jpg";
import bgMobileLight from "../../images/bg-mobile-light.jpg";
import iconMoon from "../../images/icon-moon.svg";
import iconSun from "../../images/icon-sun.svg";

const themeImages = {
    desktop: {
        dark: bgDesktopDark,
        light: bgDesktopLight
    },
    mobile: {
        dark: bgMobileDark,
        light: bgMobileLight
    }
};

export function toggleImg() {
    const bgImg = document.getElementById('bg-img');
    const themeIcon = document.querySelector('#toggle-theme-btn img');
    const screenSize = window.innerWidth > 1024 ? "desktop" : "mobile";

    state.themeImg = themeImages[screenSize][state.themeType];

    if (bgImg) bgImg.src = state.themeImg;
    if (themeIcon) {
        themeIcon.src = state.themeType === "dark"
            ? iconSun
            : iconMoon;
        themeIcon.alt = state.themeType === "dark" ? "sun icon" : "moon icon";
    }
}
export function toggleThemeType() {
    state.themeType = state.themeType === "dark" ? "light" : "dark";
}
export function toggleTheme() {
    document.documentElement.classList.toggle('light', state.themeType === "light")
}
