#! /bin/bash

cd /home/pi/wittyPi
sudo cp /var/www/html/backend/schedule.wpi /home/pi/wittyPi/schedule.wpi
sudo timeout 2 ./runScript.sh
