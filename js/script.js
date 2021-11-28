function makeCounter(count = 0) {
  let amountCallsMethods = {
    amountCallsIncrease: 0,
    amountCallsDecrease: 0,
    amountCallsGet: 0,
    amountCallsGetStatistic: 0,
  };
  const methods = {
    increase(numb) {
      amountCallsMethods.amountCallsIncrease++;
      return (count += numb);
    },
    decrease(numb) {
      amountCallsMethods.amountCallsDecrease++;
      return (count -= numb);
    },
    get() {
      amountCallsMethods.amountCallsGet++;
      return count;
    },
    getStatistic() {
      amountCallsMethods.amountCallsGetStatistic++;
      return amountCallsMethods;
    },
    setZeroCounter() {
      count = 0;
      return (amountCallsMethods = {
        amountCallsIncrease: 0,
        amountCallsDecrease: 0,
        amountCallsGet: 0,
        amountCallsGetStatistic: 0,
      });
    },
  };
  return methods;
}
const counterCalls = makeCounter();
counterCalls.increase(10);
counterCalls.increase(15);
console.log(counterCalls.get()); //25
counterCalls.increase(15);
counterCalls.increase(5);
counterCalls.increase(5);
console.log(counterCalls.get()); //50
counterCalls.decrease(10);
console.log(counterCalls.get()); //40
counterCalls.decrease(5);
counterCalls.decrease(15);
counterCalls.decrease(10);
console.log(counterCalls.get()); //10
console.log(counterCalls.get()); //10
counterCalls.getStatistic();
counterCalls.getStatistic();
counterCalls.getStatistic();
console.log(counterCalls.getStatistic()); /* {amountCallsIncrease: 5,
                                              amountCallsDecrease: 4,
                                              amountCallsGet: 5,
                                              amountCallsGetStatistic: 4} */
console.log(counterCalls.setZeroCounter()); /* {amountCallsIncrease: 0,
                                                amountCallsDecrease: 0,
                                                amountCallsGet: 0,
                                                amountCallsGetStatistic: 0} */

/* Продублировал для наглядности обнуления значения 'count' и количества
   вызовов методов объекта amountCallsMethods */

counterCalls.increase(10);
counterCalls.increase(15);
console.log(counterCalls.get()); //25
counterCalls.increase(15);
counterCalls.increase(5);
counterCalls.increase(5);
console.log(counterCalls.get()); //50
counterCalls.decrease(10);
console.log(counterCalls.get()); //40
counterCalls.decrease(5);
counterCalls.decrease(15);
counterCalls.decrease(10);
console.log(counterCalls.get()); //10
console.log(counterCalls.get()); //10
counterCalls.getStatistic();
counterCalls.getStatistic();
counterCalls.getStatistic();
console.log(counterCalls.getStatistic()); /* {amountCallsIncrease: 5,
                                              amountCallsDecrease: 4,
                                              amountCallsGet: 5,
                                              amountCallsGetStatistic: 4} */
console.log(counterCalls.setZeroCounter()); /* {amountCallsIncrease: 0,
                                                amountCallsDecrease: 0,
                                                amountCallsGet: 0,
                                                amountCallsGetStatistic: 0} */
