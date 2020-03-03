#!/bin/bash

# install WittyPi into home directory
cd /home/pi/

if [ -z "$1" ] ; then
	echo "Missing argument wittyPi."
else
	wittyPi=$1

    # update to latest wiringpi version (required for raspbian buster)
    wget https://project-downloads.drogon.net/wiringpi-latest.deb
    dpkg -i wiringpi-latest.deb
	rm wiringpi-latest.deb

    # Run the installer provided from WittyPi
    if [ $wittyPi -eq 2 ] ; then
        sh /var/www/html/backend/shell-scripts/installWittyPi2.sh
    elif [ $wittyPi -eq 3 ] ; then
        sh /var/www/html/backend/shell-scripts/installWittyPi3.sh
    fi

fi
