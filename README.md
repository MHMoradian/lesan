# Why **Lesan**?

Even though _**NoSQL**_ is very fast, its complexities are very troublesome for large-scale projects. On the other hand, _**GraphQL**_ shines in client-server connectivity but it has several weaknesses and is somewhat complex, adding another layer of complexity to the project. That’s why we created **LESAN**.

# Benchmarks

![best-results](https://github.com/MiaadTeam/benchmark/assets/6236123/4146e561-55a3-4fd0-a6bb-61a37bb37532)
<svg fill="none" viewBox="0 0 700 300" width="700" height="300" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        :root {
          --background-color: #fff;
          --chart--background-color: #ffb454;
        }

        .animation-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 1.25rem !important;
          margin-bottom: 4rem;
        }

        .animation-item {
          display: flex;
        }

        .animation-item .title {
          width: 16rem;
        }

        .animation-item .details {
          width: calc(100% - 16rem);
          position: relative;
        }

        .animation-item .details .chart {
          display: inline-block;
          height: 100%;
          background-color: var(--chart--background-color);
        }

        .animation-item .details .time {
          position: absolute;
          left: 0;
        }

        .animation-item.lesan {
        	font-size: 1.4rem;
        	font-style: italic;
        	font-weight: bold;
        }

        .animation-item.lesan .details .time {
          left : 1%;
        }

        .animation-item.prisma-postgres .details .time {
          animation: prisma-postgres-time 1649ms linear forwards;
        }

        .animation-item.prisma-postgres-graphql .details .time {
          animation: prisma-postgres-graphql-time 1973ms linear forwards;
        }

        .animation-item.mongoose-no-sort .details .time {
          animation: mongoose-no-sort-time 5896ms linear forwards;
        }

        .animation-item.mongoose-sort .details .time {
          animation: mongoose-sort-time 94106ms linear forwards;
        }

        .animation-item.lesan .details .chart {
          width: 0.130%;
          animation: lesan 130ms linear forwards;
        }

        .animation-item.prisma-postgres .details .chart {
          width: 1.649%;
          animation: prisma-postgres 1649ms linear forwards;
        }

        .animation-item.prisma-postgres-graphql .details .chart {
          width: 1.973%;
          animation: prisma-postgres-graphql 1973ms linear forwards;
        }

        .animation-item.mongoose-no-sort .details .chart {
          width: 5.896%;
          animation: mongoose-no-sort 5896ms linear forwards;
        }

        .animation-item.mongoose-sort .details {
          position: relative;
          display: flex;
        }

        .animation-item.mongoose-sort .details .chart {
          width: 100%;
          animation: mongoose-sort 94106ms linear forwards;
        }

        .animation-item.mongoose-sort .details .line {
          position: absolute;
          transform: translateX(-100%);
          bottom: 0;
          width: 1px;
          height: 12rem;
          background-color: var(--chart--background-color);
          animation: line-bar 94106ms linear forwards;
        }

        .animation-item.mongoose-sort .details .line::after {
          position: absolute;
          top: 0;
          transform: translateY(-100%);
          left: -0.4rem;
          content: counter(count) "s";
          animation: line-bar 94106ms linear forwards;
          animation: counter 94106ms linear forwards;
        }

        @keyframes prisma-postgres-time {
          0% {
            left: 0;
          }
          100% {
            left: 2.4%;
          }
        }

        @keyframes prisma-postgres-graphql-time {
          0% {
            left: 0;
          }
          100% {
            left: 2.7%;
          }
        }

        @keyframes mongoose-no-sort-time {
          0% {
            left: 0;
          }
          100% {
            left: 7%;
          }
        }

        @keyframes mongoose-sort-time {
          0% {
            left: 0;
          }
          100% {
            left: 100%;
          }
        }
        /* the counter animation */
        @keyframes counter {
          0% {
            content: "0s";
          }

          1.06% {
            content: "1s";
          }

          2.13% {
            content: "2s";
          }

          3.19% {
            content: "3s";
          }

          4.25% {
            content: "4s";
          }

          5.31% {
            content: "5s";
          }

          6.38% {
            content: "6s";
          }

          7.44% {
            content: "7s";
          }

          8.5% {
            content: "8s";
          }

          9.56% {
            content: "9s";
          }

          10.63% {
            content: "10s";
          }

          11.69% {
            content: "11s";
          }

          12.75% {
            content: "12s";
          }

          13.81% {
            content: "13s";
          }

          14.88% {
            content: "14s";
          }

          15.94% {
            content: "15s";
          }

          17% {
            content: "16s";
          }

          18.06% {
            content: "17s";
          }

          19.13% {
            content: "18s";
          }

          20.19% {
            content: "19s";
          }

          21.25% {
            content: "20s";
          }

          22.32% {
            content: "21s";
          }

          23.38% {
            content: "22s";
          }

          24.44% {
            content: "23s";
          }

          25.5% {
            content: "24s";
          }

          26.57% {
            content: "25s";
          }

          27.63% {
            content: "26s";
          }

          28.69% {
            content: "27s";
          }

          29.75% {
            content: "28s";
          }

          30.82% {
            content: "29s";
          }

          31.88% {
            content: "30s";
          }

          32.94% {
            content: "31s";
          }

          34% {
            content: "32s";
          }

          35.07% {
            content: "33s";
          }

          36.13% {
            content: "34s";
          }

          37.19% {
            content: "35s";
          }

          38.25% {
            content: "36s";
          }

          39.32% {
            content: "37s";
          }

          40.38% {
            content: "38s";
          }

          41.44% {
            content: "39s";
          }

          42.51% {
            content: "40s";
          }

          43.57% {
            content: "41s";
          }

          44.63% {
            content: "42s";
          }

          45.69% {
            content: "43s";
          }

          46.76% {
            content: "44s";
          }

          47.82% {
            content: "45s";
          }

          48.88% {
            content: "46s";
          }

          49.94% {
            content: "47s";
          }

          51.01% {
            content: "48s";
          }

          52.07% {
            content: "49s";
          }

          53.13% {
            content: "50s";
          }

          54.19% {
            content: "51s";
          }

          55.26% {
            content: "52s";
          }

          56.32% {
            content: "53s";
          }

          57.38% {
            content: "54s";
          }

          58.44% {
            content: "55s";
          }

          59.51% {
            content: "56s";
          }

          60.57% {
            content: "57s";
          }

          61.63% {
            content: "58s";
          }

          62.7% {
            content: "59s";
          }

          63.76% {
            content: "60s";
          }

          64.82% {
            content: "61s";
          }

          65.88% {
            content: "62s";
          }

          66.95% {
            content: "63s";
          }

          68.01% {
            content: "64s";
          }

          69.07% {
            content: "65s";
          }

          70.13% {
            content: "66s";
          }

          71.2% {
            content: "67s";
          }

          72.26% {
            content: "68s";
          }

          73.32% {
            content: "69s";
          }

          74.38% {
            content: "70s";
          }

          75.45% {
            content: "71s";
          }

          76.51% {
            content: "72s";
          }

          77.57% {
            content: "73s";
          }

          78.63% {
            content: "74s";
          }

          79.7% {
            content: "75s";
          }

          80.76% {
            content: "76s";
          }

          81.82% {
            content: "77s";
          }

          82.89% {
            content: "78s";
          }

          83.95% {
            content: "79s";
          }

          85.01% {
            content: "80s";
          }

          86.07% {
            content: "81s";
          }

          87.14% {
            content: "82s";
          }

          88.2% {
            content: "83s";
          }

          89.26% {
            content: "84s";
          }

          90.32% {
            content: "85s";
          }

          91.39% {
            content: "86s";
          }

          92.45% {
            content: "87s";
          }

          93.51% {
            content: "88s";
          }

          94.57% {
            content: "89s";
          }

          95.64% {
            content: "90s";
          }

          96.7% {
            content: "91s";
          }

          97.76% {
            content: "92s";
          }

          98.82% {
            content: "93s";
          }

          100% {
            content: "94.106s";
          }
        }

        /* the line-bar animation */
        @keyframes line-bar {
          from {
            left: 0;
          }

          to {
            left: 100%;
          }
        }

        /* chart animations */
        @keyframes lesan {
          from {
            width: 0;
          }

          to {
            width: 0.130%;
          }
        }

        @keyframes prisma-postgres {
          from {
            width: 0;
          }

          to {
            width: 1.649%;
          }
        }

        @keyframes prisma-postgres-graphql {
          from {
            width: 0;
          }

          to {
            width: 1.973%;
          }
        }

        @keyframes mongoose-no-sort {
          from {
            width: 0;
          }

          to {
            width: 5.896%;
          }
        }

        @keyframes mongoose-sort {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }
      </style>

      <div class="animation-container">
        <section class="animation-item lesan">
          <span class="title">Lesan</span>
          <div class="details">
            <span class="chart"></span>
            <span class="time">0.130s</span>
          </div>
        </section>
        <section class="animation-item prisma-postgres">
          <span class="title">Prisma Postgres</span>
          <div class="details">
            <span class="chart"></span>
            <span class="time">1.649s</span>
          </div>
        </section>
        <section class="animation-item prisma-postgres-graphql">
          <span class="title">Prisma Postgres GraphQL</span>
          <div class="details">
            <span class="chart"></span>
            <span class="time">1.973s</span>
          </div>
        </section>
        <section class="animation-item mongoose-no-sort">
          <span class="title">Mongoose Not Sort</span>
          <div class="details">
            <span class="chart"></span>
            <span class="time">5.896s</span>
          </div>
        </section>
        <section class="animation-item mongoose-sort">
          <span class="title">Mongoose Sort</span>
          <div class="details">
            <span class="line"></span>
            <span class="chart"></span>
            <span class="time">94.106s</span>
          </div>
        </section>
      </div>
    </div>
  </foreignObject>
</svg>
 
 We use this formula to calculate the difference : (B - A) ÷ A * 100  
 As you see on the chart:
 - [Lesan](https://github.com/MiaadTeam/lesan) return data to client `1168%` faster than the `prisma-express-rest`. Which uses `postgres` as a database.
 - [Lesan](https://github.com/MiaadTeam/lesan) return data to client `1417%` faster than the `prisma-express-graphql`. Which uses `postgres` as a database.
 - [Lesan](https://github.com/MiaadTeam/lesan) return data to client `4435%` faster than the `mongoose-express-rest` (Note that we did not sort in this query)
 - [Lesan](https://github.com/MiaadTeam/lesan) return data to client `72289%` faster than the `mongo-express-rest` (Note that we did not sort in this query)
 - [Lesan](https://github.com/MiaadTeam/lesan) return data to client `298971%` faster than the `mongoose-express-rest` (used sortby)

**Maybe we created the most performant framework in the world!** [see more detailed benchmark](https://github.com/MiaadTeam/benchmark)

# Documantation
  - [Introduction](https://miaadteam.github.io/lesan/introduction.html)
  - [Installation](https://miaadteam.github.io/lesan/installation.html)
  - [Getting start](https://miaadteam.github.io/lesan/getting_start.html)
  - [Mannage relations](https://miaadteam.github.io/lesan/mannage_relations.html)
  - [Other functions](https://miaadteam.github.io/lesan/other_functions.html)
  - [Playground](https://miaadteam.github.io/lesan/playground.html)
  - [Folder Structure](https://miaadteam.github.io/lesan/folder_structure.html)
  - [Microservice or Monolithic](https://miaadteam.github.io/lesan/microservice-monolithic.html)
  - [Manage replica](https://miaadteam.github.io/lesan/manage_replica.html)

# A little trip
### Look below code:

Create a file called `mod.ts` and paste the code below into it:

```typescript
import {
  ActFn,
  Document,
  Filter,
  lesan,
  MongoClient,
  number,
  object,
  ObjectId,
  optional,
  size,
  string,
} from "https://deno.land/x/lesan@vx.x.x/mod.ts"; // Please replace `x.x.x` with the latest version in [releases](https://github.com/MiaadTeam/lesan/releases)

const coreApp = lesan();

const client = await new MongoClient("mongodb://127.0.0.1:27017/").connect();

const db = client.db("civil");

coreApp.odm.setDb(db);

// ================== MODEL SECTION ==================
// ------------------ Country Model ------------------
const countryPure = {
  name: string(),
  population: number(),
  abb: string(),
};
const countryRelations = {};
const countries = coreApp.odm.newModel(
  "country",
  countryPure,
  countryRelations,
);

// ------------------ User Model ------------------
const userPure = {
  name: string(),
  age: number(),
};
const users = coreApp.odm.newModel("user", userPure, {
  country: {
    optional: false,
    schemaName: "country",
    type: "single",
    relatedRelations: {
      users: {
        type: "multiple",
        limit: 50,
        sort: {
          field: "_id",
          order: "desc",
        },
      },
    },
  },
});

// ================== FUNCTIONS SECTION ==================
// ------------------ Country Founctions ------------------
// ------------------ Add Country ------------------
const addCountryValidator = () => {
  return object({
    set: object(countryPure),
    get: coreApp.schemas.selectStruct("country", { users: 1 }),
  });
};

const addCountry: ActFn = async (body) => {
  const { name, population, abb } = body.details.set;
  return await countries.insertOne({
    doc: {
      name,
      population,
      abb,
    },
    projection: body.details.get,
  });
};

coreApp.acts.setAct({
  schema: "country",
  actName: "addCountry",
  validator: addCountryValidator(),
  fn: addCountry,
});

// ------------------ Get Countries  ------------------
const getCountriesValidator = () => {
  return object({
    set: object({
      page: number(),
      limit: number(),
    }),
    get: coreApp.schemas.selectStruct("country", 1),
  });
};

const getCountries: ActFn = async (body) => {
  let {
    set: { page, limit },
    get,
  } = body.details;

  page = page || 1;
  limit = limit || 50;
  const skip = limit * (page - 1);

  return await countries
    .find({ projection: get, filters: {} })
    .skip(skip)
    .limit(limit)
    .toArray();
};

coreApp.acts.setAct({
  schema: "country",
  actName: "getCountries",
  validator: getCountriesValidator(),
  fn: getCountries,
});

// ------------------ User Founctions ------------------
// --------------------- Add User ----------------------
const addUserValidator = () => {
  return object({
    set: object({
      ...userPure,
      country: string(),
    }),
    get: coreApp.schemas.selectStruct("user", 1),
  });
};
const addUser: ActFn = async (body) => {
  const { country, name, age } = body.details.set;

  return await users.insertOne({
    doc: { name, age },
    projection: body.details.get,
    relations: {
      country: {
        _ids: new ObjectId(country),
        relatedRelations: {
          users: true,
        },
      },
    },
  });
};

coreApp.acts.setAct({
  schema: "user",
  actName: "addUser",
  validator: addUserValidator(),
  fn: addUser,
});

// --------------------- Get Users ----------------------
const getUsersValidator = () => {
  return object({
    set: object({
      page: number(),
      take: number(),
      countryId: optional(size(string(), 24)),
    }),
    get: coreApp.schemas.selectStruct("user", { country: 1 }),
  });
};
const getUsers: ActFn = async (body) => {
  let {
    set: {
      page,
      limit,
      countryId,
    },
    get,
  } = body.details;

  page = page || 1;
  limit = limit || 50;
  const skip = limit * (page - 1);
  const filters: Filter<Document> = {};
  countryId && (filters["country._id"] = new ObjectId(countryId));

  return await users
    .find({ projection: get, filters })
    .skip(skip)
    .limit(limit)
    .toArray();
};

coreApp.acts.setAct({
  schema: "user",
  actName: "getUsers",
  validator: getUsersValidator(),
  fn: getUsers,
});

// ================== RUM SECTION ==================
coreApp.runServer({ port: 1366, typeGeneration: false, playground: true });
```

> Please replace `x.x.x` in the import link with the latest version in [releases](https://github.com/MiaadTeam/lesan/releases)

Now run this command in the terminal:

```bash
deno run -A mod.ts
```

You should see this messsage:

```bash
HTTP webserver running.
please send a post request to http://localhost:1366/lesan
you can visit playground on http://localhost:1366/playground

Listening on http://localhost:1366/
```

Now you can visit the playground at `http://localhost:1366/playground` and send requests to the server for `addCountry`, `addUser`, and `getUsers`.
<img width="1672" alt="Screen Shot 1402-04-26 at 20 47 05" src="https://github.com/MiaadTeam/lesan/assets/6236123/7edb3be1-6180-4f3e-b00c-161aa2c3c8cd">

alternativly you can send post request to `http://localhost:1366/lesan` with `postman` include the following in JSON format inside the body in order to retrieve the desired data:

```JSON
{
  "service": "main",
  "model": "country",
  "act": "addCountry",
  "details": {
    "set": {
      "name": "Iran",
      "population": 85000000,
      "abb": "IR"
    },
    "get": {
      "_id": 1,
      "name": 1,
      "population": 1,
      "abb": 1
    }
  }
}
```

![Screen Shot 1402-04-25 at 18 24 16](https://github.com/MiaadTeam/lesan/assets/6236123/7e9c7c93-cf08-4120-9c44-df93475c108f)

We handle all relationships between the data and `embed` everything. You can also control the level of penetration into the `action get` depth. On the `client-side`, you can describe what you want and get back exactly what you described.
