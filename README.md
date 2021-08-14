# Find the differences UI
## Introduction
This game project is inspired by the UI community accounts that often publish different interfaces in their posts, allowing users to choose a better interface. This interactive mode is loved by the designers, so I used this as an inspiration to make this little game.
[Game](https://s490607.github.io/Find-the-Differences-UI/)

The following is the web structure
[Figma](https://www.figma.com/file/9YuB46LLgnA6EexbmCLkBY/Find-the-Differences-UI?node-id=0%3A1)

## Tech Stack

**Front-end:** React, SCSS, Redux
**API:** Firebase, Goolgle Analytics

## Running App
If you wish to run the server, the first step is installing [Node.js](https://nodejs.org/en/)
### Download server need packages
```
npm install
```
### Start App

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
```
npm start
```
## Repo structure

```
/
├─ src/
│  ├─ actions/  # Redux Actions
│  │  └─ action.js # An object that describes the type of event that occurred and the information it carries (payload).
│  │
│  ├─ global/ # The scss that appear on every page.
│  │  ├─ global.scss/  # The main scss be used.
│  │  └─ normalize.scss/  # To initialization the web CSS.
│  │
│  ├─ icons/ # The icons are used on the social button and the identification of the answer after each question.
│  │  ├─ Correct.svg/ # Identify the answers.
│  │  ├─ Facebook.svg/ # Social button.
│  │  ├─ GitHub.svg/ # Social button.
│  │  ├─ Twitter.svg/ # Social button.
│  │  └─ Wrong.svg/ # Identify the answers.
│  │
│  ├─ media/ # These pictures are the example questions.
│  │  ├─ begin-correct.png/ # Correct.
│  │  └─ begin-wrong.png/ # Wrong.
│  │
│  ├─ mode/ # An object that switches the different questions.
│  │  ├─ begin.json/  # Examples questions.
│  │  ├─ formal.json/  # Formal questions.
│  │  └─ testBack.json/  # Developed questions.
│  │
│  ├─ pages/ # Handle all about the view.
│  │  └─ Home/  # Pages Home
│  │    └─ components/  # Components
│  │      └─ result/  # After answer all questions.
│  │        ├─ Input.js/  # Collect the user's information.
│  │        ├─ Score.js/  # Event about the score.
│  │        └─ index.js/  # result index
│  │      └─ test/    #
│  │        └─ Begin/ # Begin test
│  │          ├─ BeginContent.js/ # Handle with content about the example question.
│  │          └─ BeginTest.js/  # Example question's view.
│  │        └─ Formal/  # Formal test
│  │          ├─ FormalContent.js/  # Handle with content about the formal question.
│  │          └─ FormalTest.js/ # Formal question's view.
│  │        ├─ Footer.js/ # Question's loading bar.
│  │        ├─ Header.js/ # User score.
│  │        └─ index.js/  # test index
│  │    ├─ index.js/  # home index
│  │    └─ index.scss/ # home scss
│  │
│  ├─ reducer/  # Redux Reducers
│  │  ├─ scoreReducer.js/ # Handle the score that the user gets.
│  │  ├─ timeScoreArrayReducer.js/ # Handle the time that the user spends on each question.
│  │  └─ userAnswerArray.js/  # Record that the user's answer on each question.
│  │
│  ├─ store/  # Redux Store
│  │  └─ store.js/  # Handle all about Redux.
│  │
│  ├─ index.js/ # index
│  ├─ initFirebase.js/ # Init the Firebase.
│  └─ logo.svg/ # App logo.
└─ …  
```
