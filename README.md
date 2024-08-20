# Kinnect

This is the Frontend for Kinnect built with React Bootstrap.

![Screenshot showing responsiveness of home page](`not yet added`)

Kinnect is a place where people alike can come together to share their love of gaming. Users can share their experiences, like and write comments, follow other users and rate user profiles. User have full customisation of their profile, have space to write about themselves and what they enjoy and add a profile picture.

This is the Frontend of the application, built in React.

- The deployed version of the API is [HERE](`yet to add`).
- The deployed version of the full site built in React is [HERE](`yet to add`).
- The frontend repository is [HERE](`yet to add`).

## Wireframes

`TBA`

## User Stories

### Admin

**User Stories:**
- As a **site admin** I can **add, edit, and delete profiles from the database** so that **users are safe from spammers or account hackers**
- As a **site admin** I can **remove posts or comments if they are not appropriate or relevant** so that **the site is enjoyable and safe for all users**
- As a **site admin** I can **see lists of all user profiles, posts, likes, and comments, followers and ratings** so that **I have an overview of all activity on the site**

### Profile Management

**User Stories:**
- As a **user** I can **sign up for an account** so that I can **make and like posts, and follow other users**
- As a **user** I can **log in and out of my account** so that I can **access the site from different devices and keep my account secure**
- As a **user** I can **add a profile picture and description** so that **I can personalise my profile**
- As a **user** I can **delete my profile** so that **my personal details are not saved if I don't want to use the site anymore**

### Post Management

**User Stories:**
- As a **user** I can **add a new post** so that **I can share my interests or achievements** 
- As a **user** I can **edit my posts** so that **I can make update if i make further progress**
- As a **user** I can **delete my posts** so that **I can remove posts made in error, or that I don't want displayed on my profile anymore**
- As a **user** I can **like and unlike other users' posts** so that **I can engage with content that I enjoy**

### Ratings Management

**User Stories:**
- As a **user** I can **rate other users on their profiles** so that **express how i feel they are performing or quality of content**
- As a **user** I can **view ratings of users profiles** so that **I can see how others are viewing them**
- As a **user** I can **update my rating** so that **it it relevant depending on their recent posts and shares**

## Features

### Existing Features

- **Navigation Bar**
    - The navigation bar appears across all pages of the application, and changes depending whether the user is logged in or not.
    ![Navbar]()

- **Sign In Page**
    - The sign in page allows an existing user to sign in to the site. There is a prompt redirecting the user to the sign up page if they don't already have an account. The layout for the sign in and sign up pages are both the same for visual / stylistic consistency.
    ![Sign in page]()

- **Registration Page**
    - The registration page allows a user to create a new account. There is a prompt redirecting the user to the sign in page if they already have an account.
    ![Registration page]()

- **Home Page**
    - When the user is logged in, they are directed to the home page, where they can view: Posts from users they follow, users that they can follow, likes and comments, a link to their own profile and the navigation bar across to top.
    ![Home page]()

- **Rating**
    - The rating feature starts every new account at 5. When users view a profile, they have the option to rate it. This rating can represent how they view the persons profile in general or maybe the posts the user has published. It is a scale from 1 - 5 in scale.
    ![Rating]()

- **Post**
    - A user can post anything gaming related or acheivement related within a game so that user that follow them can view it and interact with it. Users can like or comment on the post.
    ![Post]()

- **Comment**
    - A user can leave a comment on a post. There is a form beneath each post with a free text box. Comments are displayed with the user's profile photo, a link to their profile, and a time stamp showing the date & time the comment was left.
    ![Comment]()

- **Like**
    - Users have the option to like and post that appears in their feed. When a user likes a post, they can see this as the heart icon, symbolising a like, changes colour.
    [Like]()

- **Follow**
    - Users have the ability to follow other users so that their feed can contain the posts from said users for them to view.
    [Follow]()

- **Profile Page**
    - The profile page allows a user to view their own or another user's profile. Users can edit their own profile by adding an image and a bio. The page also displays the number posts and rating that a user has, and shows a feed of their posts below their bio.
    ![Profile page]()



## Testing

*Link to TESTING.md*

## Validator Testing

## Lighthouse Testing

## Bug Fixing:

- When running tests for the Post list, i discovered an error "ERROR: test_can_list_posts (posts.tests.PostListViewTests.test_can_list_posts)". Reading through the error message allowed me to rectify the issue and traceback to the Post.views file where the error persists because the request context was not being passed to the serializer in the PostListView.
- When going back through my work, i was testing the links for 'profiles', and 'posts' before moving forward into 'comments'. I discovered that the '/posts' address was throwing out and operational error for the post.image_filter that had been added. Saving the file and reloading the page, the error persisted. I then realised that it was added after the initial migration of the posts app and so i did 'python manage.py makemigrations' and then 'python manage.py migrate' and reloaded the website and saw that it had fixed the issue.

## Unfixed Bugs


## Deployment

## Heroku Deployment

## Preparing File for Deployment

## Final Deploy

## Credits

## Media
