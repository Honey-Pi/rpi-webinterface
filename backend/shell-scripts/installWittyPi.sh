#!/bin/bash

cd /home/pi/

if [ -z "$1" ] ; then
	echo "Missing argument wittyPi."
else
	wittyPi=$1

    get https://project-downloads.drogon.net/wiringpi-latest.deb
    sudo dpkg -i wiringpi-latest.deb

    if [ $wittyPi -eq 2 ] ; then
        sudo sh /var/www/html/backend/installWittyPi2.sh
    elif [ $wittyPi -eq 3 ] ; then
        sudo sh /var/www/html/backend/installWittyPi3.sh
    fi

fi
