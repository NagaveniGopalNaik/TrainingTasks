let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  reverseLinkedList(list);


  function reverseLinkedList(list){
      if(list.next){
          reverseLinkedList(list.next);
      }
      alert(list.value);
  }