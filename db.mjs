import { ManyLevelHost } from 'many-level'
import { Level } from 'level'
import { pipeline } from 'readable-stream'
import { createServer } from 'net'

const db = new Level('./db')
const host = new ManyLevelHost(db)

const server = createServer(function (socket) {
  // Pipe socket into host stream and vice versa
  pipeline(socket, host.createRpcStream(), socket, () => {
    // Disconnected
  })
})

server.listen(9000)
