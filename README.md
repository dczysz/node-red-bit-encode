# node-red-bit-encode

A set of Node-RED nodes for encoding multiple positive integer or boolean values into a single positive integer, then unpacking it to retrieve the original object.

## Use Case

The need for a node like this came up when attempting to conserve PLC memory by storing multiple related integer/boolean values in a single 16-bit word.

## How to use

![Example flow](images/flow.png)

The encode and decode nodes both use a shared configuration node so all configuration is done in a single place.

The provided [example flow](examples/example.json) uses the following configuration:

![Example configuration](images/config.png)

With this configuration, an input message to the encode node should look something like this:

```js
msg.payload = {
  int: 12,             // 4 bit integer, 0-15
  bool: true,          // boolean value because `length` == 1
  bools: [true, false] // boolean array because `length` > 1
}
```

After passing the above `msg` through the encode node, it should output a `msg` with a single integer `payload` of `92`.

After passing the encoded value of `92` through the decode node (with the same configuration as the encode node!), it should output the original `msg.payload` object:

```js
msg.payload = {
  int: 12,
  bool: true,
  bools: [true, false]
}
```
