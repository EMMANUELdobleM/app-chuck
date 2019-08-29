#!/bin/bash

git remote add origin git@github.com:EMMANUELdobleM/app-chuck.git

if [ $? -eq 0 ];then
	echo "el repositorio remoto se configuro con exito"
	git remote -v
else
	echo $?
	git remote -v
fi
