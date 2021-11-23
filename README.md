# Pout Perfect.


My project link: [Pout Perfect](https://niche-website-36fe3.web.app/).

## About my project
<ol>
    <li>Pout Perfect is a website that sells classic and emerging brands lipsticks.</li>
    <li>It is a responsive website made with <b>ReactJS</b>, <b>Bootstrap</b> and <b>Material-UI</b> for star-rating.</li>
    <li><b>Firebase</b> is used for hosting and authentication and <b>MongoDB is used to store data</b></li> 
    <li>The website allows the users to buy lipsticks by clicking a BUY NOW button.</li>
    <li>When the BUY NOW button is clicked the user will be directed to the Purchase page. If, however, the user is not logged in, they will be led to the login page.After logging in with valid information, the users will be redirected to the Purchase page</li>
    <li>Users will need to fill up a form on the Purchase page to buy the lipsticks.The form will have the user's name and email address by default.This means the user will not have to write them out.</li>
    <li>The website has user level and admin level.If a user logs in, he/she will have access to the Pay, Add A review and My Orders pages on Dashboard. If, however, an admin logs in, he/she will have access to the Manage All Orders, Add A Product, Manage All Products and Make Admin pages on Dashboard. A user will not see the routes admins have access to and vice versa.</li>
    <li>The routes (except Home and Explore pages) and the Dashboard itself are private routes.This means a user or an admin will only have access to them if they are logged in.</li>
    <li>A normal user can add a review, buy products and see all his/her orders.If he/she wants,he/she can delete an order.</li>
    <li>An admin can add a new product,delete a product,delete a user's order and make another user admin.
    <li>If admin clicks the Shipped button, the status will get updated from Pending to Shipped.A normal user can see the updated status as well.</li>
    <li>The website uses react-router-dom so it doesn't reload the page everytime a link on the navbar is clicked.</li>
    <li>The private routes do not take the users to the login page when they are reloaded. </li>
    <li>Dialog boxes will appear each time a button is clicked to notify the completion of the process to the users and the admin</li>
    <li>The header and footer will not disappear during navigation.</li>
</ol>