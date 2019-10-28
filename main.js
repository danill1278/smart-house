const fetchSmth = i => new Promise(
  (resolve) => setTimeout(
    () => {
      console.log(i);
      resolve();
    },
    i * 100
  )
);

const arr = [5, 3, 2, 4, 8];

///////// realisations

async function fetchDataWithFor(arr) {
  let resualtsArr = [];

  for( let i = 0; i < arr.length; i++) {
      await fetchSmth(arr[i]);
  }
}

async function fetchDataWithForOf(arr)  {
    for (let value of arr) {
      let res = await fetchSmth(value);
    }
    
}

const fetchDataWithRecursion = (arr) => {
    let count = 0;

    const recursiveFetch = (counter) => {
      if (arr[counter]) {
        fetchSmth(arr[counter]).then(() => {
          counter++
          recursiveFetch(counter);
        });
      }
    }

    recursiveFetch(count);
}

function fetchDataWithReduce(arr) {

  arr.reduce((promise, i) => {
    return promise
      .then(() => {
        return fetchSmth(i);
      });
      
  }, Promise.resolve());
  
}


// fetchDataWithFor(arr);
// fetchDataWithForOf(arr);
// fetchDataWithRecursion(arr);
fetchDataWithReduce(arr)
