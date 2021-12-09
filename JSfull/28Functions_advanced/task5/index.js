export const shmoment = date => {
  const resultDate = new Date(date);
  return {
    add(key, value) {
      switch (key) {
        case 'years':
          resultDate.setFullYear(resultDate.getFullYear() + value);
          return this;
        case 'months':
          resultDate.setMonth(resultDate.getMonth() + value);
          return this;
        case 'days':
          resultDate.setDate(resultDate.getDate() + value);
          return this;
        case 'hours':
          resultDate.setHours(resultDate.getHours() + value);
          return this;
        case 'minutes':
          resultDate.setMinutes(resultDate.getMinutes() + value);
          return this;
        case 'seconds':
          resultDate.setSeconds(resultDate.getSeconds() + value);
          return this;
        case 'milliseconds':
          resultDate.setMilliseconds(resultDate.getMilliseconds() + value);
          return this;
        default:
          return null;
      }
    },
    subtract(key, value) {
      switch (key) {
        case 'years':
          resultDate.setFullYear(resultDate.getFullYear() - value);
          return this;
        case 'months':
          resultDate.setMonth(resultDate.getMonth() - value);
          return this;
        case 'days':
          resultDate.setDate(resultDate.getDate() - value);
          return this;
        case 'hours':
          resultDate.setHours(resultDate.getHours() - value);
          return this;
        case 'minutes':
          resultDate.setMinutes(resultDate.getMinutes() - value);
          return this;
        case 'seconds':
          resultDate.setSeconds(resultDate.getSeconds() - value);
          return this;
        case 'milliseconds':
          resultDate.setMilliseconds(resultDate.getMilliseconds() - value);
          return this;
        default:
          return null;
      }
    },
    result() {
      return resultDate;
    },
  };
};

const newresult = shmoment(new Date(2000, 10, 5, 11)).add('months', 2).result();

console.log(newresult);
