const testPromise = new Promise((resolve, reject) => {
  const result = Math.random()
  if (result >= 0.5) {
    resolve("Fulfilled");
  } else {
    reject("Rejected");
  }
});
testPromise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

//promise
myPromise
  .then((result) => {
    //handle success
  })
  .catch((error) => {
    //handle error
  })
  .finally(() => {
    //run once promise done
  })

//async
async function myFunction() {
  try {
    const result = await myPromise;

  } catch (error) {
    //handle error
  } finally {
    //run once promise done
  }
}