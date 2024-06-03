
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AksaRose/nexus">
    <img src="kunjiicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">KUNJI</h3>

  <p align="center">
    A URL shortener
    <br />
  
  </p>
</div>




<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
<img src="pro_working.PNG" alt="Logo" width="552" height="455">
</div>

This repository contains the code and resources for our group project - a URL shortening Chrome extension. With this extension, users can easily create shortened versions of long URLs for convenience and sharing. Whether you're a developer or just interested in how this extension works, this README will guide you through the project setup and usage.



## Developers
* Vinsu Susan Thomas : https://github.com/vinsu353
* Jamie mathew : https://github.com/jamieemathew
* Aksa Rose : https://github.com/AksaRose


### Built With
* HTML
* CSS
* JAVASCRIPT
* Dub.co API




<!-- GETTING STARTED -->
## Getting Started

## Configurations

 1. Clone this repository to your local machine:
 ```sh
   git clone https://github.com/AksaRose/nexus.git
   ```

 2. Sign up at :
  ```sh
   git https://app.dub.co/welcome
   ```
 3. Create a workspace 
   - Dub.co’s API is organized around workspaces. Each workspace has its own set of resources and permissions. To access a workspace’s resources, you need to include the workspaceId query parameter in your API requests like so:

   ```sh
   git https://api.dub.co/links?workspaceId=<Your-Workspace-ID>
   
   ```
  You can get your workspace ID under your Dub.co Workspace Settings.
 4. Authentication
  - Authentication to Dub.co’s API is performed via the Authorization header with a Bearer token. To     authenticate, you need to include the Authorization header with the 
    word Bearer followed by your token in your API requests like so:

   ```sh
   git Authorization: Bearer <Your-Token>
   
   ```
  You can create a new token/API key under your Dub.co Account Settings.

  <break>
 5. check out API documentation for further information.
    
   ```sh
   git https://dub.co/docs/api-reference/introduction
   
   ```
 
 
## How to run

1. Open Google Chrome.
2. Navigate to chrome://extensions/.
3. Enable "Developer mode" in the upper-right corner.
4. Click on the "Load unpacked" button.
5. Select the 'src' directory from the cloned repository.
6. The extension will now be installed and can be accessed from your Chrome toolbar.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Click on the extension icon in the Chrome toolbar to open the extension popup.
2. Paste your long URL into the input field.
3. Click the "SHORTEN" button to generate a shortened URL.
4. Select the shortened URL, right click and copy the URL.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




