const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const {response} = require("express");

const app = express()

app.get('/',(req, res) => {
  res.json('welcome to my API')

})

app.get('/news',(req, res) => {
    axios.get('https://www.mgm.gov.tr/tahmin/il-ve-ilceler.aspx#/')
        .then((response) =>{
            const html = response.data
            console.log(html)

        })

})

app.listen(PORT,() => console.log('server running on PORT ${PORT}'))