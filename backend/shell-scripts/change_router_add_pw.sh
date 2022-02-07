#! /bin/bash

pw=$1;
sudo sed -i "/#nopsk/c\psk=\"$pw\"" /etc/wpa_supplicant/wpa_supplicant.conf;
