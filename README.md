# ip.cotyhamilton.com

```sh
curl ip.cotyhamilton.com # or https://ip.cotyhamilton.com
# 8.0.0.85
```

## run server

```sh
deno task dev
# deno serve: Listening on http://localhost:8000/
```

## deploy

```sh
# create configmap from app
kubectl create configmap deno-app --from-file=mod.ts=mod.ts --dry-run=client -o yaml > k8s/configmap.yaml

# deploy
kubectl apply -n ip -f k8s
```
