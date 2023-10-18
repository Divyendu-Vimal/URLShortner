# URLShortner
## A URL shortner service that takes in a valid URL and returns a shortened URL,redirecting the user to the previously provided URL.

-->It also keeps track of total visits/clicks on the URL.
-->It uses NodeJS, Express, nanoID and MongoDB and EJS for server side rendering.
-->For best Instustrial practices it follows MVC patten i.e Model View Controller.

##**Architecture Used**
1-Use the GET route to render the initial page of the website using EJS
2-The user enters the URL on the initial form
3-The data is fetched as soon as the submit button is clicked by the POST route and is then stored in the database
4-For the URL a shortUrl is assigned by the use of inbuilt framework of nodejs named nanoID/shortURL and is stored in database.
5-Routes used
  1-POST/URL-Generates a new short URL and returns the shortened URL in the format example.com/random-id.
  2-GET/:id-Redirects the user to the original URL.
  3-GET/URL/analytics/:id-Returns the clicks for the provided short id.


##**Flow control**
User Enters URL-->Fetch the URL entered by user-->Find short URL using nanoid-->Store in DB-->Fetch from DB-->Redirect to new Url-->Show Analytics
