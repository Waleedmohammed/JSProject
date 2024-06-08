function lunchBrowserSwitch(browser) {
    switch (browser) {
        case "Chrome":
            console.log("launching Chrome");
            break;
        case "FireFox":
            console.log("launching FireFox");
            break;
        case "Edge":
            console.log("launching Edge");
            break;
        default:
            console.log("Please pass supported Browser");
    }
}

lunchBrowserSwitch("Chrome");
lunchBrowserSwitch("FireFox");
lunchBrowserSwitch("Edge");
lunchBrowserSwitch("NA");