import app from "./app.js"

app.listen(3000, () => {
    console.log(`Listening on port ${3000}`)
})

// app.use((req, res, next) => {
//     console.log("A request was made")
//     next()
// })

// app.use((req, res, next) => {
//     console.log("A second request was made")
//     res.send("<h1> response from the second middleware</h1>")
// })
