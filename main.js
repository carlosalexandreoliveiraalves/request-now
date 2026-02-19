const { app, BrowserWindow, globalShortcut } = require('electron');

let appWindow;

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#061E29',
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
  appWindow.on('focus', () => {
    // Intercepta Ctrl + R (Reload normal)
    globalShortcut.register('CommandOrControl+R', () => {
      console.log('Reloading to index.html...');
      if (appWindow) appWindow.loadFile('dist/request-now-app/browser/index.html');
    });

    // Intercepta Ctrl + Shift + R (Hard Reload)
    globalShortcut.register('CommandOrControl+Shift+R', () => {
      console.log('Hard Reloading to index.html...');
      if (appWindow) appWindow.loadFile('dist/request-now-app/browser/index.html');
    });

    // Intercepta F5
    globalShortcut.register('F5', () => {
      console.log('F5 Reloading...');
      if (appWindow) appWindow.loadFile('dist/request-now-app/browser/index.html');
    });
  });

  appWindow.on('blur', () => {
    globalShortcut.unregisterAll();
  });

  appWindow.on('closed', function () {
    appWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
