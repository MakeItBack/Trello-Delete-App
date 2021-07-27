# Trello Delete Utility

**A web app that allows you to quickly and easily delete multiple Trello boards in one step.**<br>

#### Instructions
-  Clone this repo to your local machine.
-  Log into Trello (web) and find out [your own private API key and token](https://trello.com/app-key)
-  Create a new empty **keys.js file** in your new local project directory.
-  Save your key and token in your keys.js file, Assigned to **two variables: myKey** and **myToken**
-  Launch index.html in your browser.

<img width="800px" alt="keys file screenshot" src="https://github.com/MakeItBack/Trello-Delete-App/blob/main/keys_screenshot.jpg">


**Note: As a safety feature, starred boards cannot be deleted.**<br>
If you want to delete starred boards you need to unstar them in Trello first. Alternatively, edit the code to disable this feature.

This app is built with JavaScript and uses the [axios library](https://github.com/axios/axios) to query the [Trello API](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/).

![App screenshot](https://github.com/MakeItBack/Trello-Delete-App/blob/main/app_screenshot.jpg)

---

### License

This project is licensed under the terms of the BSD 3-clause "New" or "Revised" license.<br>
