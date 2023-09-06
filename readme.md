Running benchmarks

- Run the server

```shell
npm start
```

- Install autocannon (if needed)

```shell
npm i autocannon -g
```

- Run the benchmark

```shell
autocannon -m 'POST' -H 'content-type=application/json' -b '{ "url": "https://www.google.com/hello-world?query=search#value" }' http://localhost:3000
```

