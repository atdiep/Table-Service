const axios = require("axios");

  const stringArray = [];

// user post table res to api
// 1. .get to api/reservations to get reservations
function getReservations() {
    axios.get("/api/reservations")
        .then((resArray) => {
            buildResList(resArray);
        })
};
// 2. create reservation list
function buildResList(resArray) {
    var resNumber = 1;
    res.forEach(reservation => {
       let curReservation = createHTML(reservation, resNumber);
       stringArray.push(curReservation);
       resNumber++;
    })

};

function createHTML(reservation, resNumber) {
    let HTMLstring = `<div class="card-text py-1">
            ${resNumber} | ${reservation.id}
          </div>`
    $("curRes").append(HTMLstring);
}

getReservations();
