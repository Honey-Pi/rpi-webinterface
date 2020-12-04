#! /bin/bash

pw=$1;

sudo sed -i '/psk/s/^#psk*//' /etc/wpa_supplicant/wpa_supplicant.conf;
