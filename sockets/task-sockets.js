const users = {}

module.exports = function(io){
    io.on('connection', function(socket){
        console.log('connected');

        socket.on('new-name', function(data) {
            console.log(data);

            users[data.name] = socket;
            io.emit('emit-users', Object.keys(users));
        });

        socket.on('new-message', function(newData){
            console.log(newData);
            const socket1 = users[newData.user1];
            const socket2 = users[newData.user2];
            console.log(Object.keys(users));
            socket1.emit('emit-message', newData);
            socket2.emit('emit-message', newData);
        })
    });
}