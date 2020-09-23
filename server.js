const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
const schema = require('./schema')
const path = require('path')

const app = express();

// Allow cross-origin
app.use(cors())

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log(`Server started on ${PORT}`) });