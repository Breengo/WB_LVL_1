const JSONToLinkList = (data) => {
  // Т.к. в JS нет такой структуры данных, создаём свою
  class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  let linkedList = new ListNode(data[0]); // Создаём первый узел
  const head = linkedList; // Т.к. список односвязный, мы не можем вернуться назад, поэтому оставляем указатель на первый узел

  for (let i = 1; i < data.length; i++) {
    linkedList.next = new ListNode(data[i]);
    linkedList = linkedList.next;
  }

  return head;
};

export default JSONToLinkList;
