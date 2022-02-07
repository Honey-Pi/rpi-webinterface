#! /bin/bash

sudo sed -i '/psk/c\#nopsk' /etc/wpa_supplicant/wpa_supplicant.conf;
