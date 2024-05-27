// const promisesOne = new Promise(function (resolve, reject) {
//   //do an asyn task
//   //DB call,network
//   setTimeout(() => {
//     console.log("Asyn task is complete");
//     resolve();
//   }, 1000);
// });
// promisesOne.then(function () {
//   console.log("promise consumed");
// });

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asyn task two resolved");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ UserName: "chai", email: "chai@example.com" });
  }, 1000);
});

PromiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Hitesh", password: 123 });
    } else {
      reject("Error something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function () {
    console.log("errorCatch");
  })
  .finally(function () {
    console.log("The promise is either resolved or rejechted");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javaScript", password: 123 });
    } else {
      reject("Error something went wrong");
    }
  }, 1000);
});

async function consumeFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumeFive();

async function getAllUser() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary" //no problem in the code just it will take time to execute
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUser();
