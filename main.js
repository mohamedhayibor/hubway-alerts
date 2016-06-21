'use strict';
/* Reverse engineering mainly from repo active-collab-desktop
*/

const electron = require('electron');
const ipc = electron.ipcMain;

// check if really needed
const Menu = electron.Menu;
const {app} = electron;
const { BrowserWindow } = electron;

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({width: 550, height: 300 });

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
