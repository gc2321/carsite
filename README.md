Run docker containers
```
docker compose up -d
```

Run database migration
```
dotnet ef database upate
```

Drop Database
```
dotnet ef database drop
```

Rabbit Mq: localhost:15672

```
login: guest
pw: guest
```

Docker build image

```
docker compose build identity-svc
```