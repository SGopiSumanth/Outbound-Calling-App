# Calling App - PERN Stack
A outbound calling app that is developed with the help of Twilio APIs.
 - Backend - NodeJS, ExpressJS
 - Frontend - ReactJS
 - Database - Postgres


## Table of Contents

- [Prerequisites](#prerequisites)
- [Steps to run the app](#RunningApp)
- [About App](#About)


## Prerequisites
- NodeJs and Npm (https://nodejs.org/en/download/)

- PostgreSQL(https://www.postgresql.org/download/)

- Create a .env file in the backend root folder `backend/.env` and you can refer `.env_sample` file to know what to add to `.env` in your root folder.

- Create an account in `Twilio`(https://www.twilio.com/try-twilio) and buy a number. After creating the account, you should be able to see Account_SID, Auth_Token which should be entered in the env file.

- Create a database and enter the connection string for the postgres db in the format specified in env file.

## RunningApp
  If you want set up locally you can follow these steps.
  Clone the repository, open one terminal in backend root folder and one terminal in frontend folder and do the following.

  ### In Backend terminal

 - To install the dependencies
   ```shell
   $ npm install
   ```

 - After Setting up the database, create database tables running the command below, its advisable to run the command more than once and make sure your database is updated with the tables:
   ```shell
   $ npm run create-tables
   ```

 - Start server by running:
   ```shell
   $ npm run start
   ```

 ### In Frontend terminal

 - To install the dependencies
   ```shell
   $ npm install
   ```

 - To start the frontend app
   ```shell
   $ npm run start
   ```

## About
- Enter your Name and enter your Phone Number(Number you have bought in Twilio)
- Click Login and it navigates to next screen
- Enter the Phone Number(Number you want to call) and enter Duration of the call from the dropdown
- Click on call (If your twilio account is a trial version,then the Number you are calling should registered as verified number in Twilio or if you are using a paid account in Twilio, you can call any number)
- You can end the call by clicking  `End Call` or the call ends when the selected time is reached and you can see the time in the timer.