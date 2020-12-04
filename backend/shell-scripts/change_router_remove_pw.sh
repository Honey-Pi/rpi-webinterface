#! /bin/bash

pw=$1;

sudo sed -i "s/psk=.*/#psk=\"$pw\"/" /etc/wpa_supplicant/wpa_supplicant.conf;
