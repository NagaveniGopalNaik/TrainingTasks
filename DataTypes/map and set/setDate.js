let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let setDate = new WeakMap();
  setDate.set(messages[0],Date());
  console.log(setDate);