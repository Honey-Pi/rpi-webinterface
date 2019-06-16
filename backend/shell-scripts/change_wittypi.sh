#! /bin/bash

mode=$1

cd /home/pi/wittyPi

if [ $mode -eq 0 ] ; then
    (sleep 6; echo 7; echo 4; echo 8) | sudo ./wittyPi.sh
elif [ $mode -eq 1 ] ; then
    sudo cp /var/www/html/backend/schedule.wpi /home/pi/wittyPi/schedule.wpi
    # Sync time
    sudo ./syncTime.sh
    # set schedule script
    sudo ./runScript.sh
else
    echo "Missing argument."
fi

exit 1
