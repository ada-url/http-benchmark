Running benchmarks

- Install the dependencies
```shell
npm install
```

- Run the server

```shell
npm start
```

- Test the server (optional)

If you have curl, you can check that the server returns JSON:

```shell
 curl -d '{ "url": "https://www.google.com/hello-world?query=search#value" }'  -H 'Content-Type: application/json'  -X POST localhost:3000/href
```

- Run the benchmark in another shell

  - Install autocannon (if needed)

    ```shell
    npm i autocannon -g
    ```

  - Start the benchmark (URL parsing):

    ```shell
    autocannon -m 'POST' -H 'content-type=application/json' -b '{ "url": "https://www.google.com/hello-world?query=search#value" }' http://localhost:3000/href
    ```
  - Start the benchmark (trivial string return):

    ```shell
    autocannon -m 'POST' -H 'content-type=application/json' -b '{ "url": "https://www.google.com/hello-world?query=search#value" }' http://localhost:3000/simple
    ```

