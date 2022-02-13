# rpi-webinterface [![Build](https://github.com/Honey-Pi/rpi-webinterface/actions/workflows/build.yml/badge.svg)](https://github.com/Honey-Pi/rpi-webinterface/actions/workflows/build.yml)

A modern and responsive webinterface written in Angular for HoneyPi maintenance. 

## Quick start
For guidance about installing HoneyPi on your Raspberry Pi please take a look into our [main repo](https://github.com/Honey-Pi/HoneyPi).

## Development
### First start
1. install `Node.js` together with `npm`
2. run ``npm install`` in ``rpi-webinterface/``
3. run ``ng serve``

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory. 

### Backend
A PHP-based backend is located at ``/backend/``. It is lightweight and does not require additional PHP modules. 

#### Controling your HoneyPi using the backend

Those who want to control their HoneyPi remotely can use the following URLs:
- http://honeypi.local/backend/control.php?start
- http://honeypi.local/backend/control.php?stop
- http://honeypi.local/backend/control.php?restart
- http://honeypi.local/backend/control.php?reboot
- http://honeypi.local/backend/control.php?shutdown

`http://honeypi.local` can be replaced by the IP address in the home network. Only works if connected to WiFi.

### Update Raspberry
Updating the webinterface to the latest release on your Raspberry Pi: By running the ``update.sh`` (located at the [HoneyPi main repo](https://github.com/Honey-Pi/HoneyPi#update-to-the-latest-release-also-beta-and-pre-release)) the ``/dist`` folder is copied into the webserver folder ``/var/www/html/``. 

## Translations (i18n)
The translation files are located at ```/src/assets/i18n/```

To add multi language we used ``i18n-editor``. You can download this simple tool from [here](https://github.com/jcbvm/i18n-editor/releases).

1. Download the i18n-editor, which includes a runable .exe or .jar file. 
2. Open that i18-editor tool. Go to `File`, then `Import Project`. There, select our 'i18n' folder (```/src/assets/i18n/```). 
3. Now you can add more languages and edit the translations.
