const encode = require("../shared/encode");

module.exports = function (RED) {
  function BitEncodeNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    node.bits = RED.nodes.getNode(config.bits).bits;

    node.on("input", (msg) => {
      try {
        msg.payload = encode(node.bits, msg.payload);
        node.send(msg);
      } catch (e) {
        node.error(e.message);
      }
    });
  }

  RED.nodes.registerType("bit-encode", BitEncodeNode);
};
