const visitCounter = require('express-visit-counter').Loader;

router.get('/', async function (req, res, next) {
  let visitorsAltogether = await visitCounter.getCount();
  let visitorsLogAltogether = await visitCounter.getLog();=

  res.send(`
    <b>visitors:</b> ${visitorsAltogether}<br />
  `);
});
