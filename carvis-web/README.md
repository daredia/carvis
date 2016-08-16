# Carvis

> Pithy project description

## Team

Built by `@alexcstark`, `@cpruijsen`, `@daredia`, `@JasonArkens17` as our final project `@hackreactor` .

## Stack

Built using Node, Express, React, PostgreSQL with Redux, React-Router and Redis.

Deployment: Docker, AWS EC2, AWS Lambda.
Build tools: NPM scripting, Webpack, ESlint.
Testing: TravisCI, Mocha, Chai, Karma.

APIs: Uber, Lyft, Google Places, Twilio.
Client side: web app and Amazon Alexa Skill.

Tools used for reverse-engineering: [Charles Proxy](https://www.charlesproxy.com/), [APKtool](https://ibotpeaches.github.io/Apktool/), [APK extractor](https://play.google.com/store/apps/details?id=com.ext.ui&hl=en), [SSL Kill Switch 2](https://github.com/nabla-c0d3/ssl-kill-switch2), [Cydia](https://cydia.saurik.com/).

### Installing Dependencies

From within the root directory:
```sh
npm install
```

If you're a member of the Complex-Joins team, update your secret config (create an empty file /secret/config.js first if you haven't already):
```sh
npm run setup
```
***These files contain the private/undocumented api endpoints uber and lyft’s apps use to communicate with their servers. You can find these yourself by reverse engineering their apps, or go through the approval flow to use their official api endpoints. Refer to the reverse engineering tools listed above.***

### Usage

Run the following command for hot building of front and back end
```sh
npm run start:dev
```


Run the following command for a static build
```sh
npm start
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.