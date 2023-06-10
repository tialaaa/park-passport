# Park Passport

### Abstract
Are you a goal-oriented outdoor adventurer? The Park Passport app helps people like you track how many US National Parks they have visited. Users can browse the parks list in a pleasing UI, collect badges for parks already visited, and see a live-updating display of their "Percent Visited" statistic. Using the National Park Service API, it provides additional information for each park to inspire and assist with planning future trips.

### Deployed Page
[Park Passport](https://the-park-passport.vercel.app/)

### Preview
![Park Passport preview](https://github.com/tialaaa/park-passport/assets/121128718/1b260ee4-6fdd-4044-9606-76d0d2a2fb3b)

### Context
Completed over 5 days, this was my final project of module 3 at the Turing School. The project was built to match the specifications of this project rubric - [Showcase Project](https://frontend.turing.edu/projects/module-3/showcase.html). I had four weeks of experience with React when starting this project.

### Contributors
Solo project by Tiala Young: [GitHub](https://github.com/tialaaa), [LinkedIn](https://www.linkedin.com/in/tialayoung/)

### Technologies Used
- React
- Router
- Fetch API
- CSS & JSX
- Cypress for end to end testing
- Vercel for deployment
- Git, GitHub, Github Projects

### Learning Goals
- Ideate and execute an MVP application to serve a niche audience of users.
- Showcase new technologies learned over the past four weeks - namely React, React Router, and Cypress.
- Utilize asynchronous JavaScript to send and receive data with an API.
- Perform thorough end-to-end testing.
- Implement a user interface that is easy to use, responsive, and follows best practices for accessibility.

### Wins & Challenges
Wins:
- Showcasing my understanding of React, including Routes for a multi-page site and PropTypes for typechecking.
- Utilizing environment variables and `.gitignore` to store protected API Keys for both client-side and testing usage.
- Implementing a responsive, user-friendly web app with 100% Lighthouse and WAVE scores for accessibility.

Challenges:
- The primary challenge was time. Even though my proposed minimum viable product was narrow in scope, there were many things for one person to consider and implement within a short period of time. 
- Correctly intercepting network requests to a URL containing multiple params and an API key added new complexity to my Cypress testing workflow.

### Future Features
Given additional time and resources, these features could be implemented to expand this project:
  - Use local storage to persist user’s saved list on every visit
  - Allow filtering the homepage list by the user’s visited versus non-visited parks
  - Add image gallery to the Details page, to utilize the full array of images provided by NPS API
  - Allow searching by park activities (included in NPS API data) to aid in planning future trips
  - Add a journal feature for users to store memories of their park experiences

### Installation Instructions
- Using the terminal, clone the [Front End Repo](https://github.com/tialaaa/park-passport) to your local machine.
- `cd` into park-passport directory.
- Run `npm i` to install all dependencies.
- Run `npm start` to launch the project locally.
- To open Cypress testing, run `npm run cypress`
