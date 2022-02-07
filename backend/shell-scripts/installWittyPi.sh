#!/bin/bash

# install WittyPi into home directory
export PWD=/home/pi
cd /home/pi

if [ -z "$1" ] ; then
    echo "Missing argument wittyPi."
    exit 1
else
    wittyPi=$1

    # update to latest wiringpi version (required for raspbian buster)
    wget https://project-downloads.drogon.net/wiringpi-latest.deb
    dpkg -i wiringpi-latest.deb
    rm wiringpi-latest.deb

    # fix monitor issue with raspberry 4 and wittypi 3 mini
    if grep -q '^hdmi_safe=1' /boot/config.txt; then
      echo 'Seems hdmi_safe parameter already set, skip this step.'
    else
      echo 'hdmi_safe=1' >> /boot/config.txt
    fi

    # Run the installer provided from WittyPi
    if [ $wittyPi -eq 2 ] ; then
        sh /var/www/html/backend/shell-scripts/installWittyPi2.sh
        # make sure the schedule script gets executed after the time synchronization is fully done
        sed -i 's/sleep 3/sleep 17/g' /home/pi/wittyPi/daemon.sh
    elif [ $wittyPi -eq 3 ] ; then
        sh /var/www/html/backend/shell-scripts/installWittyPi3.sh
        # make sure the schedule script gets executed after the time synchronization is fully done
        sed -i 's/sleep 3/sleep 17/g' /home/pi/wittypi/daemon.sh
    fi

fi

exit 0
