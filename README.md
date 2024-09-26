# microservice template

First run the server:
``` Powershell
npm install
yarn dev
```

Then, come to gRPC testing window: (run command in bash)
```Bash
grpcui \
  -import-path=protofiles/ \
  -proto=ping/v1/ping.proto \
  -plaintext localhost:3000
```

Make changes in .proto files to add new entities and in index.ts to see changes
