module.exports = function (RED) {
  function BitConfigNode(config) {
    RED.nodes.createNode(this, config);
    
    this.bits = config.bits;
  }

  RED.nodes.registerType("bit-config", BitConfigNode);
};
