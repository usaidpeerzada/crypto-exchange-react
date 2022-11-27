export function fetchTop12CryptoData() {
  try {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    return new Promise((resolve) =>
      fetch("https://api.coincap.io/v2/markets?limit=12", requestOptions)
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
export function fetchSearchCryptoData(name) {
  try {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    return new Promise((resolve) => {
      if (name) {
        fetch(
          `https://api.coincap.io/v2/markets?baseId=${name}`,
          requestOptions
        )
          .then((res) => res.json())
          .then((res) => {
            resolve({ data: res });
          })
          .catch((e) => console.log(e));
      } else {
        console.error("name not defined!");
      }
    });
  } catch (error) {
    console.log("error in fetching data: ", error);
  }
}
