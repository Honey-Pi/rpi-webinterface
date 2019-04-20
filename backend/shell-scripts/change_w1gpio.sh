#! /bin/bash

w1gpio=$1;

sed -i '/dtoverlay=w1-gpio/d' /boot/config.txt

if grep -q '^dtoverlay=w1-gpio' /boot/config.txt; then
  echo 'Error: Seems w1-gpio parameter already set, skip this step.'
else
  echo 'dtoverlay=w1-gpio,gpiopin='$w1gpio >> /boot/config.txt
fi
