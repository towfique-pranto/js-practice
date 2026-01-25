import isSatSun from './15g.js';

const time = dayjs().add(5, "day");
      console.log(time.format("MMM D"));

      const timeM = dayjs().add(1, "month");
      console.log(timeM.format("MMM D"));

      const timeEM = dayjs().subtract(1, "month");
      console.log(timeEM.format("MMM D dddd"));

      console.log(isSatSun(time));
      console.log(isSatSun(timeM));
      console.log(isSatSun(timeEM));

