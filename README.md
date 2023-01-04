## Lendsqr_
Loan App Simulation.

## Task Synopsis
The task is to build a loan app simulation web application with Reactjs, TypeScript & Scss, using provided samples API endpoint. The app should be able to
- Match the look and feel of the provided with a confidence level greater than 95% error margin
- Login visitor/admin
- See all users, stats as well as personal details.
- Sort and filter users based on the provided params.

# Lighthouse test screenshots
![Alt text](./images/lighthouse_test.png?raw=true "Tests Screenhots")


## Tools
- The application was created using Reactjs v16+,
- `Redux Toolkit` was used for state management because of its flexibility and larged scaled resources.
- The HTTP library used is `axios`
- BASE_URL `REACT_APP_USERS_API_URL` for API_endpoints was stored in the `.env` file and assessed in the `features` folder

## Challenges and Hows
- User account status
  The users account status wasn't amongst that data return by the users endpoint - 
```javascript
I worked around this by getting the difference in years between the user `createdAt` and `lastActiveDate` and
setting defined age range for params like so --
```
| Status             | Year Range                                                              |
| ----------------- | ------------------------------------------------------------------ |
| Active | <= 40  |
| Pending | > 40 <= 60 |
| Inactive | > 60 <= 90 |
| Blacklist | > 90 |

- Filter Call-to-Action Buttons
  The requirement to click on filter button before action can take place tad-bit from the user experience - 
```javascript
I upgraded this by removing the filter button, thus enabling the page to filter on-key-press for words in tandem with the defined paramas
```

- Activate and Deactivate User
  no endpoints was provided for user activation/deactivation,

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_USERS_API_URL`


## How to setup ?
- Clone Project and `cd` to project directory >> `folderName`
- Run `yarn` in root folder to install dependencies
- Follow the step above to setup .env file
- Navigate to your browser http: [your port in dev.env] e.g. http://localhost:3000
- To run tests cases, type  `yarn build` in your terminal/ssh client
- link to live `[https://emmanuelo-lendsqr-fe-test.vercel.app/](https://emmanuelo-lendsqr-fe-test.vercel.app/)

## API Reference

#### Get all users

```
 GET: REACT_APP_USERS_API_URL/users
```

#### Get single user

```
GET: REACT_APP_USERS_API_URL/id
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `users` | `object` | **Required**. null |
| `id` | `string` | **Required**. null |
