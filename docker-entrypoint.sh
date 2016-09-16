#!/bin/bash
echo "Go to root path $HOME_APPS/training/"
cd "$HOME_APPS/training/"

if [ ! -d "node_modules" ]
	then
		echo "Install server dependencies"
		npm install
	fi

exec "$@"
