## How to use website step by step

### 1. Register

* Head to [registration page](https://flashcards-jj.com/register)
* Type in username (doesn't have to be unique), an email and password.

* Email has to be unique and password has to be at least 8 characters long.

* After registration you will be redirected to main page of website.

### 2. Create a new set

* From main page you can navigate to the [Learning Set](https://flashcards-jj.com/sets) section. There you can click on create set button at the bottom of the screen. 

* Now on the set edit page enter the title of the set and optionally a description.

* In the bottom section you can add individual flashcards. During practice session "Term" will be visible and your task will be typing in corresponding definition.

* In order to add more cards click "Add Term" button at the bottom of the screen. If you want to delete card click trash icon on the top right corner of given card.

* After you finish adding flashcards click Save button in the bottom right corner of the page.

### 3. Create a new session

* Navigate to the [Session Section](https://flashcards-jj.com/sessions) and click "Create a session" button at the bottom of the screen.

* Add a title and optionally a description of the session. From the list of available sets select ones you want to add by clicking on white square next to the set title.

* Finally click "Create Session" button at the bottom of the screen. This will redirect you to page, where you can start practicing your session.

### 4. Learning Loop

* Once in session there are two sections. Top section contains session progress and bottom section shows current card.

* Each colored bar in top section indicates the bucket that flash card has to go through. Highlighted bar indicates the stage that current card originated from.

![image](https://user-images.githubusercontent.com/19439874/149222494-d07d9882-912e-40a0-9344-7ae4e2b832a4.png)

* View cards lets you see all cards in current session and the progress you have made so far. 

* In the bottom section you can see term and place for you to type in definition.

* If you guess correctly border will change its color into green and you will be able to go to the next flashcard. Correctly guessed flash cards will advance to the next bucket.

![image](https://user-images.githubusercontent.com/19439874/149223234-66262f8c-0250-4c87-92cb-22780e2ed499.png)

* If you guess incorrectly definition will be shown as placeholder and you will have to type it in. Only once you type it in correctly will you be able to advance to next flash card. Incorrectly guessed flash cards will be moved into lower bucket

![image](https://user-images.githubusercontent.com/19439874/149223378-09145649-0f7b-4df6-a81a-067b82fbbd70.png)

## Technical Documentation

## Styling

For styling I have decided to make use of react-bootstrap, which sped up development of the project significantly. 

### Use of Redux

Website uses redux mainly in order to manage user authentication. In addition it uses redux in order to manage some of the requests to the back end. 

### Hosting

The website is currently hosted on netlify at free tier of the service and due to that has some limitations, especially when it comes to scaliability. In order to get the best performance possible out of the setup, frontend, backend and database are all hosted on European servers minimising latency. 

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
