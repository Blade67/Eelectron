const { app, BrowserWindow } = require('electron');
import path from 'path';

let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    win.loadURL(path.join('file://', __dirname, '/index.html'))

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', () => {
    createWindow()
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})