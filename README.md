# microservice template

```Bash
#for http/1
evans \
  --path=protofiles/ \
  --proto=ping/v1/ping.proto \
  --host localhost \
  --port 3000 --web

#for http/2
evans \
  --path=protofiles/ \
  --proto=ping/v1/ping.proto \
  --host localhost \
  --port 3000

grpcui \
  -import-path=protofiles/ \
  -proto=ping/v1/ping.proto \
  -plaintext localhost:3000
```
