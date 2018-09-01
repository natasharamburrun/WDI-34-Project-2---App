![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# GA WDI-34  Project #2: A Full-stack Application
The WDI GA second project deliverable was to build a full-stack RESTful application that includes authenticated using Node.JS, ESJ and MongoDB

Visit app which is deployed on [Heroku](https://wd34hairstylistappproject.herokuapp.com/)


### Requirements (Brief)
Your app must:
* **Have at _least_ 2 models** – one representing a user and one that represents the main resource of your app, e.g. Restaurants
* **Include relationships** - embedded or referenced. Make sure you take the time to consider the best approach before building out your models.
* **The app should include authentication** - with encrypted passwords & an authorization flow.
* **Have complete RESTful routes** for at least one of your resources with all CRUD actions.
* **You must use SCSS** - as this is a key industry skill.
* **Include wireframes** - that you designed before building the app.
* Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* **Be deployed online** and accessible to the public.
---

#### Technologies Used
HTML | SCSS | JavaScript (ES6) | MongoDB | Express | EJS | Node.js | Mongoose

<hr/>

### Idea
I decided to build a platform for London hairdressers to showcase their portfolio of work and allow any user to access the app to obtain information about the salon and the hairstylist. This project allowed me to explore my creativity and focus on establishing the fundamentals in building an app.


<strong>Home Page</strong>: For my homepage, I used API Flickity to implement a carousel showing a variety of London salons.
<p align="center"><img src="https://i.imgur.com/wQ3hVW0.png" width="700"/></p>

<hr>

### The build
The express app was developed by building out the backend functions using Mongoose Database, Node.js, setting a MVC design (model, views and controllers) and testing each of the views using Insomnia a REST client. The  project was also built using EJS templating which injected the views on the front-end.

The project has three models user, portfolio and picture and covers the CRUD requirement. Each user registered can create, read, update and delete their profiles and pictures.

Created a database for seed files for the database to preload users information existing on the mongo db.

A feature that I would like to highlight is the use of promises and populating virtuals which enabled me to find the picture uploaded by the hairdresser (i.e. user) and save this on their portfolio page. See the code below:

```
userSchema.virtual('pictures', {
  ref: 'pictures',
  foreignField: 'creator',
  localField: '_id'
  });

function showRoute(req, res){
  Promise.all([Picture.find(), Portfolio.findById(req.params.id)])
    .then((values)=> {
      res.render('portfolios/show', {
        pictures: values[0],
        portfolio: values[1]
      });
    });
}
```
The main feature of this app was to build a platform where the public can view London hairdressers and be able to book an appointment with them if they like their work, I felt that google maps would be a fundamental user requirement. <br>
See below code used to implement this feature,
I used parseFloat which returns the value up to a point and ignore the character, which in this case would be a decimal point, i.e. returning a string into a number.

```
function initMap() {
  const venue = { 'lat': parseFloat($('#map')[0].dataset.lat, 10), 'lng': parseFloat($('#map')[0].dataset.long, 10) };
  console.log(venue);

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: venue
    });
    new google.maps.Marker({
      position: venue,
      map: map
      });
    }

    window.addEventListener('DOMContentLoaded', () => {
      if (document.getElementById('map')) initMap();
      });
```

<hr>

### What do differently
As this was my first RESTful application, my wireframes and planning were not as organised as my latest projects. Using Draw.io and Trello would have made the build of the app more streamline, and I would have been able to implement additional features in the 7-day timeframe.

<hr>

### Wins
I enjoyed building the app and picked up the concept of using the language fairly quickly.
I have successfully built multiple pages using Bulma and SASS for styling.
This app has been deployed and is functional to the public and free of errors.
<!-- or incomplete functionality. -->

<hr>

### Pages
Kept pages clean and straightforward for best user experience.

<strong>Portfolio Index Page</strong>: This page is available to the public providing an index of all stylist registered on the app
<p align="center"><img src="https://i.imgur.com/qXWtVpD.png" width="700"/></p>

<strong>Portfolio Show Page</strong>: This page provides the public with access to information about the stylist and the salon. Used Google Maps and Flickity to allow user to scroll through the hairstyles by the user.
<p align="center"><img src="https://i.imgur.com/gcuUSDN.png" width="700"/></p>
<p align="center"><img src="https://i.imgur.com/hNvx3xa.png" width="700"/></p>

<strong>Login Page</strong>: Standard login page
<p align="center"><img src="https://i.imgur.com/Zr4QyfU.png" width="700"/></p>

<strong>Register Page</strong>: Register page includes a checkbox 'Are you a hairdresser' used to create a new portfolio and a use for a future user client login access.
<p align="center"><img src="https://i.imgur.com/lPTlq6n.png" width="700"/></p>

<strong>Picture Index Page</strong>: Index page for hairstyles
<p align="center"><img src="https://i.imgur.com/IDUfe5Y.png" width="700"/></p>

<strong>Picture Show Page</strong>: Show page for hairstyle including stylist info and service/ products used
<p align="center"><img src="https://i.imgur.com/PnXlsrZ.png" width="700"/></p>

<hr>

#### planned features
- My next planned feature will be to make changes to the comment field. Currently, anyone can leave or delete a comment on the hairstylist page. I would like to amend this to allow only people who have logged on to leave and delete their comments.
- Add an input field to include the name and email of the person who leaves a comment.
- Star rating system - on the hairdresser show page
- Add a client user login and register allowing restricted access to the site so they can leave the comments and ratings.  
- Search function to enable clients to search for what look they would like to achieve.
- Dropdown options for add new hairstyle section
- Booking system
- Add a modal to the delete functions, to stop accident deleting profile or pictures
- Username to automatically be available on add new picture page
