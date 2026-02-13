const { app, BrowserWindow } = require('electron');

let appWindow;

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#6c15c6', 
      symbolColor: '#ffffff', 
      height: 40, 
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  appWindow.loadFile('dist/request-now-app/browser/index.html');

  appWindow.webContents.openDevTools();

  appWindow.on('closed', function () {
    appWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();
});
