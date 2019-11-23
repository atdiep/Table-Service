# HotRestaurant

* Description: Basic app demonstrating Node and Express with jQuery. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.
* Live Demo: <https://hot-restaurant-fsf.herokuapp.com/>

![Hot Restaurant Image](Images/HotRestaurant.png)

## Notes

* You will NOT need a MySQL Database for this exercise.
* Current app doesn't have admin handling. We'll deal with that at a later time.
* Don't separate the JavaScript from the HTML in the client-side code. (i.e. Don't use external JavaScript. If you do, you will need an additional line of code to configure the express server to know where the JavaScript is).

## Good luck! Don't stress out

* Spend some time trying to build exposure. But don't get overwhelmed. We'll have plenty of time to come back to this.

## psuedo code

* Landing page header and buttons
    a. view tables 
        i. display rexervation number and unique ID
    b. make reservation
    c. footer api tabole link $ api wait list same for every page) 

user clicks reservation button (clienyt side)
    two links view tables and home (font awesome)
    for containing:
        a.name
        b.phone
        c.email
        d.id
        e. submit button
            i. creates JSON object and post to server

reservation page (server side)
    1.link express package
    2. assign port number
    3. 

use clicks view table (client side)
    same two links
        a. two containers
            i. waitlist
            ii. current reservation
        b. add clear table link to footer

view table (server side)
    



