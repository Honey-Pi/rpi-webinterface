#! /bin/bash

ssid=$1;
pw=$2;

# updates ssid and pw for honeypi

sudo sed -i "s/^wpa_passphrase=.*/wpa_passphrase="$pw"/" /etc/hostapd/hostapd.conf;
sudo sed -i "s/^ssid=.*/ssid="$ssid"/" /etc/hostapd/hostapd.conf;
