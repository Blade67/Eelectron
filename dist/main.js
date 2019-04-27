"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }); // win.loadFile('index.html');

  win.loadURL(_path["default"].join('file://', __dirname, '/index.html'));
  win.on('closed', function () {
    win = null;
  });
}

app.on('ready', function () {
  createWindow();
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (win === null) {
    createWindow();
  }
});