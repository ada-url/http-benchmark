const f = require('fastify')()

console.log(`
  Node version: ${process.version}
  Ada version: ${process.versions.ada ?? 'unavailable'}
`)

f.post('/', async (request) => {
    const { url } = request.body

    if (!url) {
        throw new Error('missing url')
    }

    return {
        parsed: new URL(url).href
    }
})

f.listen({ port: 3000})
    .then(() => console.log('listening on port 3000'))
    .catch(err => console.error(err))
