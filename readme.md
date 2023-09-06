Running benchmarks

- Install autocannon (if needed)

```shell
npm i autocannon -g
```

- Install the dependencies
```shell
npm install
```

- Run the server

```shell
npm start
```


- Run the benchmark in another shell

```shell
autocannon -m 'POST' -H 'content-type=application/json' -b '{ "url": "https://www.google.com/hello-world?query=search#value" }' http://localhost:3000
```

