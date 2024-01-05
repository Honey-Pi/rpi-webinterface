#! /bin/bash

if [ -z "$1" ] ; then
    echo "Missing argument mode."
    exit 1
elif [ -z "$2" ] ; then
    echo "Missing argument wittyPi version."
    exit 1
else
    mode=$1
    wittyPi_version=$2

    # detect witty Pi install path
    if [ -e /home/pi/wittyPi ] ; then
        # Only WittyPi 2 or Mini use the capital letter in wittyPi
        wittyPi_version=2 # user selected wrong WittyPi version?
        path='/home/pi/wittyPi'
    elif [ -e /home/pi/wittypi ] ; then
        path='/home/pi/wittypi'
    else
        echo "Warning: No WittyPi installation found."
        path='/home/pi/wittypi'
        mkdir -p "$path" # create folder for the HoneyPi wittypi.py controller so it can place the schedule there
    fi

    # change path to wittyPi folder
    cd $path

    # Check if WittyPi software is installed (or if it's just a blank folder)
    # In case if it's just a blank folder, then the HoneyPi wittyPi.py controller will be used.
    if [ -f ./wittyPi.sh ]; then # wittyPi.sh does not exist
        echo "Info: $path/wittyPi.sh exists - use WittyPi UUgear software to sync schedule. "
    else
        echo "Info: Cancel change_wittypi.sh because wittyPi.sh is not installed. Use HoneyPi wittypiy.py controller instead."
        sudo cp /var/www/html/backend/schedule.wpi $path/schedule.wpi
        exit 1
    fi


    if [ $mode -eq 0 ] ; then
        # mode=0: clear current schedule
        if [ $wittyPi_version -eq 2 ] ; then
            (sleep 6; echo 7; echo 4; echo 8) | sudo ./wittyPi.sh
        elif [ $wittyPi_version -eq 3 ] ; then
            (sleep 6; echo 10; echo 6; echo 11) | sudo ./wittyPi.sh
        elif [ $wittyPi_version -eq 4 ] ; then
            # reset all startup and shutdown schedules as well as all other thresholds in Witty Pi 4
            (sleep 3; echo 12; echo 8; echo 13) | sudo ./wittyPi.sh
        fi
    elif [ $mode -eq 1 ] ; then
        # mode=1: transfer local schedule to the wittyPi module and run it
        sudo cp /var/www/html/backend/schedule.wpi $path/schedule.wpi
        if [ $wittyPi_version -eq 4 ] ; then
            # Synchronize with network time (only in Witty Pi 4)
            (sleep 3; echo 3; echo 13) | sudo ./wittyPi.sh
        else
            # Sync time
            sudo ./syncTime.sh
        fi
        # set schedule script
        sudo ./runScript.sh
    elif [ $mode -eq 2 ] ; then
        # enable dummyload to keep powerbank alive (supported by wittyPi 3)
        if [ -z "$2" ] ; then
            echo "Missing dummyload argument."
            exit 1
        else
            dummyload=$3 # default: 10-15
            if [ $wittyPi_version -eq 3 ] ; then
                (sleep 6; echo 9; echo 5; echo $dummyload; echo 11) | sudo ./wittyPi.sh
            else
                # in Witty Pi 4 a bit hidden (11. View/change other settings...)
                (sleep 3; echo 11; echo 5; echo $dummyload; sleep 1; echo 13) | sudo ./wittyPi.sh
            fi
        fi
    elif [ $mode -eq 3 ] ; then
        # reset dummyload to default
        (sleep 6; echo 9; echo 5; echo 0; echo 11) | sudo ./wittyPi.sh
    fi

fi

exit 0
