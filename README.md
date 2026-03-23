# Enigma Machine Server

## Overview  
This project is a Node.js server that simulates an Enigma machine, allowing users to encode and decode messages through HTTP endpoints. It models the behavior of the original Enigma device, including rotor transformations, reflector logic, and state changes with each character processed.

The goal of the project was to recreate the core mechanics of the Enigma machine in a way that is both accurate and accessible through a simple API.

---

## Features  
- Encode messages using Enigma-style rotor and reflector logic  
- Decode messages using the same configuration  
- Stateful rotor behavior (rotors advance with each character)  
- HTTP endpoints for interaction  
- Simple browser interface for testing via query parameters  

---

## Endpoints  

**Home**  
`/`  
Displays basic information about the server and how to use it  

**Encode**  
`/encode?message=yourmessagehere`  
Returns the encoded version of the input message  

**Decode**  
`/decode?message=yourmessagehere`  
Returns the decoded version of the input message  

---

## Tech Stack  
- Node.js  
- JavaScript  

---

## How to Run  

1. Install dependencies (if applicable)  
2. Start the server:

node server.js  

3. Open a browser and navigate to:

http://localhost:3001/encode?message=hello  

---

## Key Challenges  

**Stateful rotor behavior**  
Each character processed advances the rotor positions, which required careful handling to ensure consistent encoding and decoding across requests.

**Avoiding unintended mutation**  
Early versions of the implementation ran into issues where rotor configurations were being mutated during processing. This required restructuring how rotor state was stored and managed to ensure predictable behavior.

**Reflector logic**  
Implementing the reflector correctly was critical, since it guarantees that encoding and decoding are symmetric. Getting this right required careful mapping and validation.

**System design clarity**  
Separating concerns between encoding logic, configuration, and request handling made the system easier to reason about and extend.

---

## Notes  

This project was originally deployed, but the hosted version is no longer active. It can be run locally using the instructions above.