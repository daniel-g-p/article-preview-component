const button = document.querySelector(".button");
const body = document.querySelector("body");
const profile = document.querySelector("#profile");
const aside = document.querySelector("aside");

const socialPlatforms = [{
    network: 'facebook',
    svgCode: '<a href="https://www.facebook.com"><svg viewBox="0 0 24 24" id="facebook"><path d="M12.8,24H.2C0,24,0,24,0,23.8V.2C0,0,0,0,.2,0H23.8C24,0,24,0,24,.2V23.8c0,.17,0,.2-.2.2H16.53V15c0-.33,0-.33.3-.33H19.4c.17,0,.23,0,.27-.2.13-1.1.26-2.17.43-3.27,0-.3,0-.3-.27-.3H16.77c-.14,0-.24,0-.24-.2V8.33A1.32,1.32,0,0,1,18,7h2c.2,0,.27,0,.27-.27V3.8c0-.2-.07-.27-.27-.27H17.8a12.7,12.7,0,0,0-1.63.07,4.22,4.22,0,0,0-3.44,3.87c0,1.06,0,2.1,0,3.16,0,.2-.06.27-.26.27H9.83c-.2,0-.26.07-.26.27v3.26c0,.24.06.27.26.27H12.4c.3,0,.3,0,.3.33v8.64A.43.43,0,0,1,12.8,24Z"/></svg></a>',
    color: '#3A559E',
    website: 'https://www.facebook.com'
}, {
    network: 'twitter',
    svgCode: '<a href="https://www.twitter.com"><svg viewBox="0 0 28.4 24" id="twitter"><path d="M-0.3,21.3c3.1,0.3,6.2-0.6,8.7-2.5c-2.5-0.1-4.7-1.8-5.5-4.2c0.4,0.1,0.9,0.1,1.3,0.1c0.5,0,0.9-0.1,1.3-0.2c-1.5-0.3-2.9-1.3-3.7-2.6c-0.7-1-1-2.2-1-3.4c0.8,0.5,1.7,0.7,2.6,0.8C3.3,9.1,3.2,9,3.1,9C2.5,8.5,2,7.9,1.6,7.2C1.3,6.6,1,5.9,0.9,5.2c0-0.3,0-0.7,0-1.1c0-1,0.2-2,0.7-2.9c0.1-0.1,0.1-0.1,0.2,0c0.6,0.7,1.2,1.4,1.9,2C4.4,4,5.3,4.6,6.2,5.1c0.6,0.4,1.3,0.7,1.9,1C9,6.5,9.8,6.8,10.7,7c0.5,0.1,1,0.2,1.5,0.3c0.4,0.1,0.8,0.1,1.2,0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.1-0.1c-0.4-1.8,0.1-3.7,1.3-5.2c0.9-1.2,2.3-2,3.8-2.1c0.4-0.1,0.9-0.1,1.3,0c0.6,0.1,1.2,0.3,1.8,0.5C22.5,0.8,23,1,23.3,1.4c0.2,0.1,0.3,0.3,0.5,0.5c0,0,0.1,0.1,0.2,0.1c0.8-0.2,1.6-0.4,2.4-0.8c0.4-0.2,0.9-0.4,1.3-0.6c-0.4,1.4-1.3,2.6-2.5,3.3c0.2,0,0.4,0,0.6-0.1c0.2,0,0.5-0.1,0.7-0.1l0.7-0.2c0.2-0.1,0.4-0.1,0.7-0.2C28,3.1,28.2,3,28.4,2.9c-0.2,0.3-0.3,0.5-0.5,0.7c-0.4,0.5-0.8,0.9-1.2,1.3c-0.4,0.4-0.8,0.7-1.2,1c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.3,0,0.7,0,1v0.1c0,1.2-0.1,2.3-0.4,3.5c-0.7,2.8-2,5.4-3.8,7.5c-2.1,2.5-4.9,4.2-8,5.1c-0.8,0.2-1.7,0.4-2.5,0.5c-0.3,0-0.6,0.1-0.8,0.1c-0.7,0.1-1.4,0-2.1,0s-1-0.1-1.5-0.2C5.1,23.6,4,23.3,3,22.9c-0.8-0.3-1.5-0.7-2.2-1.1C0.4,21.7,0,21.5-0.3,21.3z"/></svg></a>',
    color: '#55ABED',
    website: 'https://www.twitter.com'
}, {
    network: 'pinterest',
    svgCode: '<a href="https://www.pinterest.com"><svg viewBox="0 0 24 24" id="pinterest"><path d="M21.47,4.64A12,12,0,0,0,.25,14.42a11.87,11.87,0,0,0,4.07,6.8,11.46,11.46,0,0,0,3.34,2c0-.3,0-.53-.07-.77a9.07,9.07,0,0,1,.1-2.7c.43-1.93.9-3.84,1.34-5.77a.68.68,0,0,0,0-.37,4.29,4.29,0,0,1-.16-2.5A2.62,2.62,0,0,1,9.89,9.41a1.49,1.49,0,0,1,2.44,1.1,5.29,5.29,0,0,1-.2,1.57c-.23.9-.5,1.77-.77,2.64a1.59,1.59,0,0,0,.1,1.23,2,2,0,0,0,2.2,1A3.4,3.4,0,0,0,16,15.25a7,7,0,0,0,.93-4.37,4.38,4.38,0,0,0-2.44-3.74,5.53,5.53,0,0,0-3.17-.57A5,5,0,0,0,7.26,9a4.83,4.83,0,0,0,.1,5.51.54.54,0,0,1,.06.4c-.06.4-.2.8-.3,1.2s-.16.36-.43.2A3.35,3.35,0,0,1,5.29,15a6.15,6.15,0,0,1-.9-4.27,6.63,6.63,0,0,1,3.17-5,8.44,8.44,0,0,1,7.91-.57,6.4,6.4,0,0,1,4,4.87,8.18,8.18,0,0,1-1.17,6,5.81,5.81,0,0,1-3,2.47,3.9,3.9,0,0,1-4.61-1.07c-.53,2.1-.93,4.21-2.27,6A12,12,0,0,0,21.47,4.64Z"/></svg></a>',
    color: '#E60023',
    website: 'https://www.facebook.com'
}];

button.addEventListener("click", event => {
    if (window.innerWidth >= 768) {
        if (!button.classList.contains("sharing")) {
            const shareTab = document.createElement("div");
            shareTab.id = "shareTab";
            shareTab.innerHTML = `<h3>SHARE</h3><span>${socialPlatforms[0].svgCode}${socialPlatforms[1].svgCode}${socialPlatforms[2].svgCode}</span>`;
            shareTab.classList.add("loading");
            button.append(shareTab);
            setTimeout(() => shareTab.classList.replace("loading", "loaded"), 0);
            button.classList.add("sharing");
        } else if (event.target === button || event.target === document.querySelector(".button svg") || event.target === document.querySelector(".button path")) {
            shareTab.classList.replace("loaded", "loading");
            button.classList.remove("sharing");
            setTimeout(() => document.querySelector("#shareTab").remove(), 250);
        };
    } else {
        if (!button.classList.contains("sharing")) {
            aside.classList.add("sharingMobile");
            button.classList.add("sharing");
            profile.innerHTML = `<h3>SHARE</h3><span>${socialPlatforms[0].svgCode}${socialPlatforms[1].svgCode}${socialPlatforms[2].svgCode}</span>`;
            profile.id = "shareTab";
        } else {
            aside.classList.remove("sharingMobile");
            button.classList.remove("sharing");
            profile.innerHTML = '<img src="avatar-michelle.jpg" alt="Michelle Profile Picture"><div><h2>Michelle Appleton</h2><p>28 Jun 2020</p></div></div>';
            profile.id = "profile";
        };
    };
});

window.addEventListener("resize", () => location.reload());