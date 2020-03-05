#! /bin/bash

ssid=$1;
pw=$2;

sudo sed -i "s/psk=.*/psk=\"$pw\"/" /etc/wpa_supplicant/wpa_supplicant.conf;
sudo sed -i "s/ssid=.*/ssid=\"$ssid\"/" /etc/wpa_supplicant/wpa_supplicant.conf;
