const decode = require("../shared/decode");

module.exports = function (RED) {
  function BitDecodeNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    node.bits = RED.nodes.getNode(config.bits).bits;

    node.on("input", (msg) => {
      try {
        msg.payload = decode(node.bits, msg.payload);
        node.send(msg);
      } catch (e) {
        node.error(e.message);
      }
    });
  }

  RED.nodes.registerType("bit-decode", BitDecodeNode);
};
