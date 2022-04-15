# Getty Images API NodeJS SDK Sample App

An executable code sample to demonstrate use of the Getty Images NodeJS SDK.

+ Search for _beach_. Everyone likes a beach 🏖, right? (Well, except for [this guy](https://knowyourmeme.com/memes/i-dont-like-sand).)
+ Get details for the first image that is returned.

## Getting Started

### Requirements

+ NodeJS - We recommend the [current LTS release](https://nodejs.org/en/download/) which at this time is 16.14.2
+ Environment variables with API Key and Secret set

### Setting Environment Variables
#### macOS/Linux

```sh
export GETTY_API_KEY=MYAPIKEY
export GETTY_API_SECRET=MYAPISECRET
```

#### Windows

##### Command Prompt

```cmd
SET GETTY_API_KEY=MYAPIKEY
SET GETTY_API_SECRET=MYAPISECRET
```

##### Powershell

```pwsh
$env:GETTY_API_KEY=MYAPIKEY
$env:GETTY_API_SECRET=MYAPISECRET
```

##### Bash or WSL

See [macOS/Linux](#macoslinux)

### Install Dependencies

```sh
npm install
```

### Execute the Sample Code

```sh
node index.js
```

You should see some JSON with information about a nice beach photo dumped out to your console.
