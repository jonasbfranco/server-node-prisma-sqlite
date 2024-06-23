import fastify from 'fastify'

const app = fastify()



app.get('/', () => {
    return 'Hello Jonas Server Node'
})

app.get('/users', () => {
    return 'Hello Users Get'
})

app.post('/users', () => {
    return 'Hello Users Post'
})

