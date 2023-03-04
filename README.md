# How to Run an App

- step 1:
create a virtual environment in your PC
run each command in terminal

Windows:
1) Installing virtual environment:
> py -m pip install --user virtualenv

2) Create virtual environment:
> py -m venv env

3) Activate virtual environment:
> .\env\Scripts\activate

Mac OS:
1) Installing virtual environment:
> python3 -m pip install --user virtualenv

2) Create virtual environment:
> python3 -m venv env

3) Activate virtual environment:
> source env/bin/activate

- step 2:
run below command in terminal
> pip install -r requirements.txt

- step 3:
run below command in terminal
> python app.py

- step 4:
goto port localhost:5000/ in your browser for viewing app.

## Note:
if you want to deactivate virtual environment simply run
> deactivate

whenever you install any new package in app please run this command
> pip freeze > requirements.txt
