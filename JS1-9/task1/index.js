const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = function (num) {
  for (let i = 0; i < num; i ++) {
    const name = peopleWaiting.shift();
    alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
  }
}

const leaveQueueWithoutParcel = function (num) {
  for (let i = 0; i < num; i ++) {
    const name = peopleWaiting.pop();
    alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
  }
}

giveParcel(3);
leaveQueueWithoutParcel(4);