#!/bin/bash
NAME="Trading"
export PATH="$PATH:/C:/Users/belga/AppData/Local/Programs/Python/Python38-32"

echo "Starting $NAME as django project"
python --version
cd backend
python -m venv antenv
source antenv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
cd getData
ls
python manage.py migrate && python manage.py runserve

