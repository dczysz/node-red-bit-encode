function createConfigExample(configId) {
  const bitConfig = RED.nodes.node(configId)?.bits;

  if (!bitConfig) return 'No configuration selected';
  
  let exampleObj = "msg.payload = {\n";

  for (const cfg of bitConfig) {
    let value = '';
    let comment = '';

    if (cfg.type === 'boolean') {
      if (cfg.length > 1) {
        value = '[]';
        comment = `Array of ${cfg.length} boolean values`;
      } else {
        value = 'false'
        comment = 'Single boolean value';
      }
    } else {
      value = 0;
      comment = `Positive integer 0-${2 ** cfg.length - 1}`;
    }

    exampleObj += `  ${cfg.property}: ${value}, // ${comment}\n`;
  }

  exampleObj += "}";

  return exampleObj;
}

function showConfigExample(configId, containerSelector) {
  $(containerSelector).text(createConfigExample(configId));
}

function copyToClipboard(id) {
  const text = document.getElementById(id).innerText;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    return;
  }

  // Fallback
  const elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}