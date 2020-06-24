const electron = require("electron");

const {app, BrowserWindow, Menu, ipcMain} = electron;

let ruangBangunWindow;


app.on("ready", ()=> {
    ruangBangunWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Aplikasi Ruang Bangun"
    });
   
    ruangBangunWindow.loadURL(`file://${__dirname}/Projek_UAS-Visual/menuBangunRuang.html`);
    ruangBangunWindow.on("closed", () => {


        app.quit();
        ruangBangunWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(mainMenu);
});


const menuTemplate = [{
    label: "File",
    submenu: [{
            label: "Quit",
            accelerator: process.platform === "darwin" ? "Command+Q" : 
            "Ctrl + Q",
            click(){
                app.quit();
                }
            }
        ]
    },

    {
        label: "View",
        submenu: [{role: "reload"}, {role: "toggledevtools"}]
    },
]
