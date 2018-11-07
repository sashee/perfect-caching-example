## Perfect caching example

Install the dependencies:

* ```npm i```

In one terminal, start the server:

* ```npm run start```

In another terminal, build the app:

* ```npm run build```
* Open [http://localhost:3000](http://localhost:3000)
* Refresh the page a few times:

```
Request to: /
Request to: /app.bundle.067d9a83397c90be2452.js
Request to: /
Request to: /
```

* Modify something in the ```index.js```
* ```npm run build```
* Refresh the browser again a few times:

```
Request to: /
Request to: /app.bundle.4dcaf4ded074c3c9d878.js
Request to: /
Request to: /
Request to: /
```