# Website Performance Optimization

## Part 1: Portfolio Project

In this part of the Web Performance Optimization project for Udacity's Front-End Nandogree, the challenge is to optimize an online portfolio for speed. It is necessary to optimize the critical rendering path and check the site's performance with PageSpeed Insights.

### Getting Started
1. To view the site, run a local server.
```
$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080
```
2. Open a browser and visit localhost:8080
3. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.
```
$> cd /path/to/your-project-folder
$> ./ngrok http 8080
```
4. Copy the public URL ngrok gives you and run it through PageSpeed Insights.

### Steps Taken to Optimize Website Performance
1. Add async attribute to analytics.js link
2. Change style.css from external file to internal css
3. Add media=print attribute to print.css link
4. Set up Grunt workflow to minify, resize and compress text and image files.

#### Results
93/100 for Mobile
95/100 for Desktop

## Part 2: Pizza Project

In this part of the project, the challenge is to optimize the pizza website to 60 fps.

### Getting Started
1. To view the site, run a local server.
```
$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8000
```
2. Open a browser and visit http://192.168.1.2:8000 or http://127.0.0.1:8000
3. Inspect the site using Chrome DevTools - On Mac - ⌘ + Shift + I.

### Steps Taken to Optimize Browser Rendering
1. Didn't need 200 pizzas animated, so set window size
2. Change querySelector to getElementBy because it's more efficient
3. Changes to function updatePositions:
* document.body.scrollTop calculation pulled out of the for loop
* store 5 numbers in an array and then move elements
* for loop to access array elements
4. Apply CSS hack background-visibility: hidden (from helper video) and will-change: transform (from course video)
