Running benchmarks

- Run the server

```shell
npm start
```

- Run the benchmark

```shell
autocannon -m 'POST' -H 'content-type=application/json' -b '{ "url": "https://www.google.com/hello-world?query=search#value" }' http://localhost:3000
```

