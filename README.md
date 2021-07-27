# Trello Delete Utility

**A web app that allows you to quickly and easily delete multiple Trello boards in one step.**<br>

To get this working for yourself:

-  Clone the repo to your local machine.
-  Log into Trello (desktop version) and find out [your own private API key and token](https://trello.com/app-key)
-  Create a new **keys.js file** in your new local project directory and save your key and token to **two variables - myKey** and **myToken**
-  

![Save API keys](#)

Note: As a safety feature, starred boards cannot be deleted. If you want to delete starred boards you either need to unstar them in Trello first or disable this feature altogether.

This app is built with JavaScript and uses the [axios library](https://github.com/axios/axios) to query the [Trello API](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/).

![App screenshot](https://github.com/MakeItBack/Trello-Delete-App/blob/main/app_screenshot.jpg)

---

### License

This project is licensed under the terms of the BSD 3-clause "New" or "Revised" license.<br>
