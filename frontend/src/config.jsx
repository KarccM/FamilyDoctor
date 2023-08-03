import { atom } from "recoil";

let defaultTheme = "light";
if (typeof window !== "undefined") {
    const savedTheme = window.localStorage.getItem("THEME"); // save the users prefered mode
    if (savedTheme) {
        defaultTheme = savedTheme;
    } else {
        const isDarkMode =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches; //get the default prefered mode
        defaultTheme = isDarkMode ? "dark" : "light";
    }
}

export const atomTheme = atom({
    key: "theme",
    default: defaultTheme,
});
let defaultLang = "ar";

export const atomLang = atom({
    key: "lang",
    default: defaultLang,
});
