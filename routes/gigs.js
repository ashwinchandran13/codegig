const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) => 
    Gig.findAll()
        .then(gigs => {
            res.render('gigs', {
                gigs
            });
        })
        .catch(err => console.log(err)));

// Add a gig
router.get('/add', (req, res) => {
    const data = {
        title: 'Simple wordpress website',
        technologies: 'wordpress, php, html, css',
        budget: '$3000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu scelerisque nulla. Integer mattis pulvinar ligula vel semper. Nullam dictum eros orci, quis vulputate nulla fringilla non. Curabitur et lorem non nulla viverra sodales. Etiam bibendum ex condimentum mi ornare, et tincidunt nulla aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus',
        contact_email: 'user2@gmail.com'
    }

    let { title, technologies, budget, description,contact_email } = data;

    // Insert into table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));

});
module.exports = router;