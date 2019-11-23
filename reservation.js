class Reservations {
    constructor(name, phoneNumber, email, id) {
    this.name = name,
    this.phoneNumber = phoneNumber,
    this.email = email,
    this.id = id,
    }
}

// user post table res to api
// 1. .get to api/reservations to get reservations
function getReservations() {
    axios.get("localhost:3000/api/reservations")
        .then((resArray) => {
            buildResList(resArray);
        })
}
// 2. create reservation list
function buildResList(resArray) {
    var stringArray = [];
    res.forEach(reservation => {
       const reservation = createHTML(resObj);
       stringArray.push(reservation)
        }

    })
}

function createHTML(resObj) {
    return ``
    }

}