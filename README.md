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

#### :four: Step 04: Capture Request and Response from Wireshark

Analyzing the Wireshark captures for the HTTP endpoint, you can observe that the communication between the client and server occurs in plain text. The lack of encryption in HTTP allows for easy inspection of the transmitted data. Both the client's request and the server's response are visible, making it susceptible to eavesdropping.

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

#### :keycap_ten: Step 10: Capture Request and Response from Wireshark

In contrast, when analyzing the Wireshark captures for the HTTPS endpoint, you'll notice a significant difference. The data exchanged between the client and server is encrypted, thanks to the use of HTTPS. The TLS handshake process, reflected in the captured packets, establishes a secure channel for communication. The visibility into the actual content of the communication is limited due to encryption.

## :microscope: Observations:

### Key Differences:

- **HTTP (Step 04):**

  - **Visibility:** The lack of encryption in HTTP facilitates transparent communication, but it compromises security. Both the request and response are easily readable.

- **HTTPS (Step 10):**

  - **Encryption:** The TLS handshake process and subsequent data exchange in HTTPS ensure that the transmitted information is encrypted. This encryption provides confidentiality and integrity but limits direct visibility into the data.

### Trade-off Between Security and Visibility:

The contrast between HTTP and HTTPS highlights the trade-off between security and visibility. While HTTP offers transparency, it compromises security. HTTPS, with its encryption, provides a secure channel but limits direct visibility into the transmitted data.

### Conclusion:

🚀 The lab experience underscores the importance of adopting secure communication practices. Choosing between HTTP and HTTPS should be driven by the nature of the data being transmitted and the security requirements of the application. HTTPS, with its encryption mechanisms, is recommended for securing sensitive information and preventing unauthorized access.

## :books: References

1. [Node.js tutorial in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
2. [How to create a REST API with Node.js and Express](https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/)
3. [Routing ExpressJs](https://expressjs.com/en/guide/routing.html)
4. [Creating HTTPS Endpoint](https://adamtheautomator.com/https-nodejs/)
5. [How to Secure Your NodeJS App with HTTPS and SSL Certificates](https://medium.com/@anandam00/how-to-secure-your-nodejs-app-with-https-and-ssl-certificates-e3afcd4533e9)
6. [How to Create an HTTPS NodeJS Web Service with Express](https://adamtheautomator.com/https-nodejs/)
7. [HTTP/HTTPS Analysis Using Wireshark](https://medium.com/devops-world/http-https-analysis-using-wireshark-cbe07c23520)
