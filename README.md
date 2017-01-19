# Website Performance Optimization

## Part 1: Portfolio Project

In this part of the Web Performance Optimization project for Udacity's Front-End Nandogree, the challenge is to optimize an online portfolio for speed. It is necessary to optimize the critical rendering path and check the site's performance with PageSpeed Insights.

### Steps Taken to Optimize Website Performance
1. Add async attribute to analytics.js link
2. Change style.css from external file to internal css
3. Add media=print attribute to print.css link
4. Set up Grunt workflow to minify, resize and compress text and image files.

#### Results
95/100 for Mobile
96/100 for Desktop

## Part 2: Pizza Project

In this part of the project, the challenge is to optimize the pizza website to 60 fps.

### Steps Taken to Optimize Browser Rendering
1. Didn't need 200 pizzas animated, so set window size
2. Change querySelector to getElementBy because it's more efficient
3. Changes to function updatePositions:
* document.body.scrollTop calculation pulled out of the for loop
* store 5 numbers in an array and then move elements
* for loop to access array elements
4. Apply CSS hack background-visibility: hidden (from helper video) and will-change: transform (from course video)
