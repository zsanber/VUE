# Introduction
Your task is to implement a secret server. The secret server can be used to store and share secrets using a random generated URL. But the secret can be read only a limited number of times after that it will expire and won’t be available. The secret may have a TTL (Time to live). After the expiration time the secret won’t be available anymore.
Write code that you can be proud of :)
# Task
Implementation: You have to implement the Secret Server API, with NodeJS + express.js framework on the backend + MongoDb (you can use any additonal library). It is recommended to store the data using encryption. Provide tests for the backend.
Build a minimal, but functional frontend in VueJS with the abilwqsxcity to create and view secrets (if the hash is known)
You can also (but not required) use Nuxt.js to serve the backend and frontend from the same process.
Share the code: Upload the code to any free git hosting environment (Github, Gitlab, etc....)
Running your code: Provide instructions how to run your code, docker-compose is preferred.
# API
**URL** : `/api/secret/[hash]`
**Method** : `GET`
**Auth required** : NO
**Response**
```json
{
  "hash": "[The hash of the string]",
  "secretText": "[The original text]",
  "createdAt": "[The Timestamp the secret was created]",
  "expiresAt": "[The Timestamp the secret if TTL is given]",
  "remainingViews": 0
}

```
**URL** : `/api/secret/`
**Method** : `POST`
**Auth required** : NO
**POST /secret**
```json
{
    "secret": "[This text that will be saved as a secret]",
    "expireAfterViews": "[The secret won't be available after the given number of views]",
    "expireAfter": "[The secret won't be available after the given time. The value is provided in minutes. 0 means never expires]"
}

```
**Response** : Same as `/api/secret/[hash]`

# Questions
It is totaly OK to ask if something is not clear.

