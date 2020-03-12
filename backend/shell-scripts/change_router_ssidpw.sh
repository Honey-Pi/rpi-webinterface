#! /bin/bash

ssid=$1;
pw=$2;

sudo sed -i "s/psk=.*/psk=\"$pw\"/" /etc/wpa_supplicant/wpa_supplicant.conf;
sudo sed -i "s/^[[:blank:]]*ssid=.*/ssid=\"$ssid\"/" /etc/wpa_supplicant/wpa_supplicant.conf;

# connect to wifi without reboot
#sudo wpa_cli -i wlan0 reconfigure
