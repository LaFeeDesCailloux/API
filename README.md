<div id="top"></div>
<br />

<div align="center">
<a href="https://github.com/Minarox/API">
    <img src="https://avatars.githubusercontent.com/u/81223933?s=80" alt="Logo" width="auto" height="80" style="border-radius: 8px">
</a>

<h3 align="center">API</h3>

![API Version](https://img.shields.io/badge/Version-1.0.0-blue)&nbsp;
![Project License](https://img.shields.io/badge/License-MIT-green)

  <p align="center">
    Serverless API to send email coming of the contact form of the Website.
  </p>
</div>
<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#run-api">Run API</a></li>
        <li><a href="#deploy">Deploy</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

## About The Project

Serverless API to send email using [MailChannel's API](https://www.mailchannels.com/).

### Features

- Send email to a specific address with content

### Tech Stack

- [Javascript](https://www.javascript.com/)
    - [Cloudflare Workers](https://workers.cloudflare.com/)
    - [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

- Install [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/)

```bash
  curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  sudo apt-get install -y nodejs
```

- Install [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

```bash
  npm i -g @wrangler/latest
```

- Login to your [CloudFlare](https://cloudflare.com/) account through [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
````bash
  wrangler login
````

### Run API
- Start development server
````bash
  wrangler dev
````

### Deploy
- Publish to [Cloudflare Workers](https://workers.cloudflare.com/)
````bash
 wrangler publish
````

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [x] Send test mail with data
- [x] Deploy online
- [x] Connect to [Website](https://github.com/LaFeeDesCailloux/Website)

<p align="right">(<a href="#top">back to top</a>)</p>

## Author

[@Minarox](https://www.github.com/Minarox)

<p align="right">(<a href="#top">back to top</a>)</p>
