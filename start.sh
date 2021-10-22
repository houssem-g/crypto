#!/bin/bash
NAME="Trading"
export PATH="$PATH:/C:/Users/belga/AppData/Local/Programs/Python/Python38-32"

echo "Starting $NAME as django project"
python --version
cd backend
source ./myenv/Scripts/activate 
cd getData
ls
exec python manage.py runserver
 