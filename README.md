# microservice template

First run the server:
``` Powershell
npm install
yarn dev
```
Unlike REST, the Remote Procedure Call are type-safe, but they are regular HTTP under the hood. You can see all requests in the network inspector,

Then, come to gRPC testing window: (run command in bash)
```Bash
grpcui \
  -import-path=protofiles/ \
  -proto=ping/v1/ping.proto \
  -plaintext localhost:3000
```

Make changes in .proto files to add new entities and in index.ts to see changes

Keep updating the ping.proto file for data requests 
also keep updating the requests on index.ts in order to see the request fillers at testing screen
