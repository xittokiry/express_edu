const express = require('express')
const { engine: expressHandlebars } = require('express-handlebars')

const app = express()

//настройка механизма предствлений
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: randomFortune})
})

//пользовательская страница 404
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

//пользовательская страница 500
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

const fortunes = [
    "победи свои страхи, или они победят тебя",
    "реками нужны истоки",
    "не бойся неведомого"
]

app.listen(port, () => console.log(
    'Express запущен на http://localhost:${port} \n нажмите Ctrl+C для завершения!'
))