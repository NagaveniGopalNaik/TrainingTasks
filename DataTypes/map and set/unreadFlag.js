let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let readMessage= new WeakSet();

  readMessage.add(messages[0]);
  readMessage.add(messages[1]);
  console.log(readMessage);
  readMessage.add(messages[0]);
  console.log(readMessage);

  alert(readMessage.has(messages[0]));

  messages.shift();

  alert(readMessage.has(messages[0]));