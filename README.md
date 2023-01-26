# Json Web Tokens

- JWTs are a secure way of transferring JSON information between client and server.
  - JWTs have 3 components
    - Header : type of encryption algorithm and type
    - ```json
          {
            "alg":"HS256",
            "typ":"JWT"
          }
      ```
    - Payload:
      - It consists of 3 parts
      - [Registered Claims](https://www.rfc-editor.org/rfc/rfc7519#section-4.1)
      - Public claims: These are user defined attributes.
      - Private claims: These are private claims that Server and client would like to share with each other.
      - CAUTION!! Payload and header can be read by anyone, hence critical information should not be put in these requests unless they are encrypted.
    - Signature: The signature is the algorithmic result of header, payload and a secret.
      - For example the HMAC SHA256 algorithm is used as follows.
      - ```js
        HMACSHA256(
        base64UrlEncode(header) + "." +
        base64UrlEncode(payload),
        secret)
        ```
      - This process allows us to verify the request was not tampered.
    - Structure: ``xxxx.yyyy.zzzz``
- The server stores a private key to encrypt the information.
```js
require('crypto').randomBytes(64).toString('hex')
```


# How to run

- Open a terminal.
- Navigate to the route folder.
- Run following commands. 
- ```npm install```
- ``node index.js``
