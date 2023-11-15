# 🚀 Secure HTTP HTTPS Exploration

## :bulb: Introduction

🎯 **AIM:** Learn fundamental principles of computer and network security by studying attacks on computer systems, networks, and the Web. Understand how these attacks work and how to prevent and detect them.

🎯 **OBJECTIVES:**

- To understand Hypertext Transfer Protocol Secure.
- To understand the cryptographic usage in the secure protocol.
- To understand the fundamental principles of API.

## :gear: Prerequisites

- Node.js installed
- Express.js installed

```bash
npm install express
```

- OpenSSL installed
  **Windows**

  - Download OpenSSL: [Windows OpenSSL Download](https://slproweb.com/products/Win32OpenSSL.html)
  - Add OpenSSL to system variables: `C:\OpenSSL-Win32\bin` (Update the path based on your installation)
  - Run the following command before using OpenSSL:

```bash
set OPENSSL_CONF=C:\Program Files\OpenSSL-Win64\bin\openssl.cfg
```

## :clipboard: Tasks

### :computer: HTTP Endpoint

#### :one: Step 01: Creating a HTTP Endpoint using Node

- [app.js](app.js)

#### :two: Step 02: Run Node Server

```bash
node app.js
```

#### :three: Step 03: Request from Server

Send a GET request to http://localhost:3000 (use your browser or Postman)

#### :four: Step 04: Capture Details

Capture Request and Response from Wireshark

### :lock: HTTPS Endpoint

#### :five: Step 05: SSL Key

Generate an SSL key size of 2048

```bash
openssl genrsa -des3 -out server.key 2048
```

#### :six: Step 06: SSL Certificate

Create an SSL certificate using that key

```bash
openssl req -nodes -sha256 -new -x509 -keyout server.key -out server.cert
```

#### :seven: Step 07: Creating a HTTPS Endpoint using Node

- [appNew.js](appNew.js)

#### :eight: Step 08: Run Node Server

```bash
node appNew.js
```

#### :nine: Step 09: Request from Server

Send a GET request to https://localhost:3000 (use your browser or Postman)

#### :keycap_ten: Step 10: Capture Details

Capture Request and Response from Wireshark

## :books: References

1. [Node.js tutorial in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
2. [How to create a REST API with Node.js and Express](https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/)
3. [Routing ExpressJs](https://expressjs.com/en/guide/routing.html)
4. [Creating HTTPS Endpoint](https://adamtheautomator.com/https-nodejs/)
5. [How to Secure Your NodeJS App with HTTPS and SSL Certificates](https://medium.com/@anandam00/how-to-secure-your-nodejs-app-with-https-and-ssl-certificates-e3afcd4533e9)
6. [How to Create an HTTPS NodeJS Web Service with Express](https://adamtheautomator.com/https-nodejs/)
7. [HTTP/HTTPS Analysis Using Wireshark](https://medium.com/devops-world/http-https-analysis-using-wireshark-cbe07c23520)
