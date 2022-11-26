// A mock function to mimic making an async request for data
export function fetchCryptoData(name) {
  try {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    return new Promise((resolve) =>
      fetch("http://api.coincap.io/v2/markets?limit=12", requestOptions)
        .then((res) => res.json())
        .then((res) => {
          resolve({ data: res });
        })
        .catch((e) => console.log(e))
    );
  } catch (error) {
    console.log("error in fetching data: ", error);
  }
}
