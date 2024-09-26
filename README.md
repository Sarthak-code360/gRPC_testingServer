# microservice template

``` Powershell
npm install
yarn dev
```

```Bash
grpcui \
  -import-path=protofiles/ \
  -proto=ping/v1/ping.proto \
  -plaintext localhost:3000
```
Make change in .proto files to add new entities and in index.ts to see changes