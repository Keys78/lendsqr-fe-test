## __Jobs finder__
A mini job finder app.

## Task
The task is to build a mini job finder web application with Vuejs, using provided samples API endpoint. The app should be able to
1. Search for jobs
2. View all available jobs 
3. View a single job.

# BrowserStack test screenshots
![Alt text](./src/assets/images/sc1.png?raw=true "Tests Screenhots")
![Alt text](./src/assets/images/sc2.png?raw=true "Tests Screenhots")
![Alt text](./src/assets/images/sc2.png?raw=true "Tests Screenhots")
![Alt text](./src/assets/images/sc3.png?raw=true "Tests Screenhots")
![Alt text](./src/assets/images/sc4.png?raw=true "Tests Screenhots")
![Alt text](./src/assets/images/sc5.png?raw=true "Tests Screenhots")
![Alt text](./src/assets/images/sc6.png?raw=true "Tests Screenhots")


## The Tools and Hows
- The vue app was created using vue 2,
- `Vuex` store was used for state management and `option-API` because of its flexibility.
- The HTTP library used is `axios`
- BASE_URL https://viewjobapi.herokuapp.com/job stored in the `.env` file and assessed in the `services` folder

## Challenges
One of the major challenges I experienced executing this task was the inability of the `API` to update the `page number` on `get request` even when the page was passed alongside the `query`.
This therefore rendered the paginaton which relies on the `API` returned `page number` ineffective.


## How to setup ?
1. Clone Project and `cd` to project directory >> `folderName`
2. Run `yarn install` in root folder to install dependencies
3. Type `yarn serve` in the root folder to initialise project on local dev. env.
4. Navigate to your browser http: [your port in dev.env] e.g. http://localhost:8080
5. To run tests cases, type  `yarn build` in your terminal/ssh client

- link to live `[https://emmanuel-anamen-assessment.vercel.app/](https://emmanuel-anamen-assessment.vercel.app/)

## API Reference

#### Get all jobs

```
 GET: https://viewjobapi.herokuapp.com/job
```

#### Get single job

```
GET: https://viewjobapi.herokuapp.com/job/id
```

#### Using Queries

```
GET: https://viewjobapi.herokuapp.com/job?keyword=javascript&resultPerPage=15&page=1
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `keyword` | `string` | **Required**. null |
| `resultPerPage` | `number` | **Required**. null |
| `page` | `number` | **Required**. null |

