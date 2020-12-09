#! /bin/bash

if [ -z "$1" ] ; then
	echo "Missing argument."
	exit 1
else
	mode=$1

    # detect wittyPi version
    if [ -e /home/pi/wittyPi ] ; then
        # WittyPi 2 or Mini
        wittyPi=2
        path='/home/pi/wittyPi'
	elif [ -e /home/pi/wittypi ] ; then
        # WittyPi 3 or 3 Mini
        wittyPi=3
        path='/home/pi/wittypi'
    else
        echo "Error: No WittyPi installation found."
        exit 1
	fi

    # change path to wittyPi folder
    cd $path

    if [ $mode -eq 0 ] ; then
        # mode=0: clear current schedule
        if [ $wittyPi -eq 2 ] ; then
            (sleep 6; echo 7; echo 4; echo 8) | sudo ./wittyPi.sh
        elif [ $wittyPi -eq 3 ] ; then
            (sleep 6; echo 10; echo 6; echo 11) | sudo ./wittyPi.sh
        fi
    elif [ $mode -eq 1 ] ; then
        # mode=1: transfer local schedule to the wittyPi module and run it
        sudo cp /var/www/html/backend/schedule.wpi $path/schedule.wpi
        # Sync time
        sudo ./syncTime.sh
        # set schedule script
        sudo ./runScript.sh
	elif [ $mode -eq 2 ] ; then
		# enable dummyload to keep powerbank alive (supported by wittyPi 3)
		(sleep 6; echo 9; echo 5; echo 10; echo 11) | sudo ./wittyPi.sh
	elif [ $mode -eq 3 ] ; then
		# reset dummyload to default
		(sleep 6; echo 9; echo 5; echo 0; echo 11) | sudo ./wittyPi.sh
    fi

fi

exit 0
