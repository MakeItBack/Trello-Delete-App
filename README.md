# Trello Cleanup<img width="100" align="right" src="img/Trello_trash.png">

<details>
<summary>Table of content</summary>
  
## Table of Content
- [Summary](#summary)
- [Technologies](#technologies)
- [Instructions](#instructions)
- [Status](#status)
- [License](#license)  

</details>

## Summary
When I wanted to do a bulk cleanup of old unwanted Trello boards there was no easy way to do this in the native Trello Apps. To delete multiple boards, each one needed to be closed individually and in two separate operations (close, delete). This was slow and tedious.<br>
**This web app that allows you to quickly and easily delete multiple Trello boards in one step.**<br>

## Technologies
[
<img align="left" height="32" width="32" alt="HTML5" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/html5.svg" />
<img align="left" height="32" width="32" alt="CSS3" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/css3.svg" />
<img align="left" height="32" width="32" alt="JavaScript" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/javascript.svg" />
<img align="left" height="32" width="32" alt="Sass" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/sass.svg" />
](https://github.com/MakeItBack/Learning-Tracker)<br>


This project was built using [Axios](https://github.com/axios/axios) to query the [Trello REST API](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/)


## Instructions

-  Clone this repo to your local machine.
-  Log into Trello (web) and find out [your own private API key and token](https://trello.com/app-key)
-  Create a new empty **keys.js file** in your new local project directory.
-  Save your key and token in your keys.js file, Assigned to **two variables: myKey** and **myToken**
-  Launch index.html in your browser.

<img width="800px" alt="keys file screenshot" src="img/keys_screenshot.jpg">

**Note: As a safety feature, starred boards cannot be deleted.**<br>
If you want to delete starred boards you need to unstar them in Trello first. Alternatively, edit the code to disable this feature.

This app is built with JavaScript and uses the [axios library](https://github.com/axios/axios) to query the [Trello API](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/).

![App screenshot](img/app_screenshot.jpg)

---

## Status
<a href="https://GitHub.com/MakeItBack/Trello-Delete-App/graphs/commit-activity"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>
<a href="https://GitHub.com/MakeItBack/Trello-Delete-App/commit"><img src="https://img.shields.io/github/last-commit/MakeItBack/Trello-Delete-App"></a>

## License


<a href="https://opensource.org/licenses"><img src="https://img.shields.io/github/license/MakeItBack/Trello-Delete-App?color=dodgerblue"></a><br>
This project is licensed under the terms of the BSD 3-clause "New" or "Revised" license.
