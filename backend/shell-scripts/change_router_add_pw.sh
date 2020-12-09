#! /bin/bash

#sudo sed -i "s/#psk=.*/psk=\"$pw\"/" /etc/wpa_supplicant/wpa_supplicant.conf;

pw=$1;
sudo sed -i "/#nopsk/c\psk=\"$pw\"" /etc/wpa_supplicant/wpa_supplicant.conf;
