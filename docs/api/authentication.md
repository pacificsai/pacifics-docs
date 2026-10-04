---
sidebar_position: 2
---

# Authentication

The Pacifics API authenticates requests with a bearer token.

## Create a token

1. Go to **Settings → API Tokens**.
2. Create a token and copy it — it is shown only once.
3. Store it securely as a secret.

## Use the token

Send the token in the `Authorization` header:

```bash
curl https://api.pacifics.in/v1/attack-paths \
  -H "Authorization: Bearer $PACIFICS_API_TOKEN"
```

## Rotation

Rotate tokens regularly and revoke any that are no longer in use.
