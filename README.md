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

# Overview
- To predict for one date: enter date in below marked section and click on submit, on the right side you will get the result.
- ![image](https://user-images.githubusercontent.com/104631814/222948063-fe1bf1ed-db03-45e7-b0af-c770a58f52c6.png)
   
- To predict for the range of date: enter start date and end date  in the below marked section and click on submit, on the right side you will get the result.
- ![image](https://user-images.githubusercontent.com/104631814/222948081-d7424e6a-a5a2-4fd0-b292-2975c0b0d492.png)
 
- To view the graph of currency comparison vs date and candle chart click on ‘graph’ (on the right corner).
- ![image](https://user-images.githubusercontent.com/104631814/222948091-143090fb-ac02-49b7-ba4a-9004b6e5d8f7.png)

- To visualize graphs for different time series you can click on specific time intervals as per your requirement from below marked section.
- ![image](https://user-images.githubusercontent.com/104631814/222948121-8f9bc8d1-7f63-445e-920c-8a5e5061aaae.png)

- To get a graph for specific time interval you may provide start and end date.
- ![image](https://user-images.githubusercontent.com/104631814/222948132-05d272a4-b25a-42dc-a719-925d2bd4bc3d.png)

REFERENCES
- [Dataset Source](https://in.investing.com/currencies/usd-inr-historical-data)
- [https://www.machinelearningplus.com](https://www.machinelearningplus.com/time-series/arima-model-time-series-forecasting-python/)
- [Chart JS](https://www.chartjs.org/)
- [For Candle Chart](https://unpkg.com/lightweight-charts@3.4.0/dist/lightweight-charts.standalone.production.js)
- [For Calendar](https://unpkg.com/flatpickr@2.0.5/index.html#:~:text=Disabling%20dates&text=getElementById(%22%23disableRange%22),using%20any%20logic%20you%20want.)
