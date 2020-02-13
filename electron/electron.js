/**
 * Created by jykj on 2019/5/30.
 */
const {app, BrowserWindow, Menu} = require('electron')
const client = require('electron-connect').client;
const appName = app.getName();

const debugMode = false;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
    // Create the browser window.

    /*隐藏electron创听的菜单栏*/
    Menu.setApplicationMenu(null)
    mainWindow = new BrowserWindow({
      // transparent: true,
      title: appName === 'w3' ? '99视讯管理后台' : '99在线管理后台',
      frame: true,
      opacity: 1,
      // titleBarStyle: 'hidden',
      maximizable: true,
      width: 960,
      height: 540,
      minWidth: 960,
      minHeight: 540,
      alwaysOnTop: false,
      closable: true,
      resizable: true,
      fullscreenable: true,
      icon: './resources/app/assets/icon/icon-cms.jpg',
      webPreferences: {
        nodeIntegration: true
      }
    })
    // and load the index.html of the app.
    mainWindow.loadFile(`index.html`)

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
  if (debugMode) {
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  }

  //阻止更改title
  mainWindow.on('page-title-updated', function (event, title) {
    event.preventDefault();
  });

  initMainListener();

  client.create(mainWindow);
}
function initMainListener() {
  ipcMain.on('ELECTRON_BRIDGE_HOST', (event, msg) => {
    console.log('msg received', msg);
    if (msg === 'ping') {
      event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
    }
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    // TODO perhaps hook this and wait for message bus before quitting?
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (applicationRef === null) {
    createWindow();
  }
});
