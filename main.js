const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

let phpServer;

app.on('ready', () => {
    // 1. Start Laravel Local Server automatically
    phpServer = spawn('php', ['artisan', 'serve', '--port=8000']);

    const win = new BrowserWindow({ width: 1200, height: 800 });
    
    // 2. Wait a moment for server to start, then load it
    setTimeout(() => {
        win.loadURL('http://127.0.0.1:8000');
    }, 1000);
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  // Point this to your Laravel/React build index.html or local server
  win.loadURL('http://localhost:5173'); 
}
app.on('will-quit', () => {
    if (phpServer) phpServer.kill();
});

app.whenReady().then(createWindow);