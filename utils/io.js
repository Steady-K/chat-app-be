module.exports = function (io) {
  // emit() : 말하는 함수
  // on() : 듣는 함수
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);
  });
};
