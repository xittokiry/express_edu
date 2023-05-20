const fortuneCookies = [
    "победи свои страхи, или они победят тебя",
    "реками нужны истоки",
    "не бойся неведомого"
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}