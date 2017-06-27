const {app} = require('electron')
const {BrowserWindow} = require('electron')
import {enableLiveReload} from 'electron-compile'

enableLiveReload()

app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        //titleBarStyle : 'hidden-inset'
    })
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})