# Rpi-Webinterface [![Build](https://github.com/Honey-Pi/rpi-webinterface/actions/workflows/build.yml/badge.svg)](https://github.com/Honey-Pi/rpi-webinterface/actions/workflows/build.yml)

A modern and responsive webinterface for HoneyPi maintenance. 

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

By running the ``update.sh`` (located at the [HoneyPi main repo](https://github.com/Honey-Pi/HoneyPi)) the ``/dist`` folder is copied into the webserver folder ``/var/www/html/``. 

### Backend

A PHP-based backend is located at ``/backend/``. It is lightweight and does not require additional PHP modules. 

## Translations

The translation files are located at ```/src/assets/i18n/```

To add multi language we used ``i18n-editor``. You can download this simple tool from [here](https://github.com/jcbvm/i18n-editor/releases).

1. Download the i18n-editor, which includes a runable exe or jar file. 
2. File => Import Project: Select the 'i18n' folder. 
3. Now you can add more languages and edit the writings.
