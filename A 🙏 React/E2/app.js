// package.json is a configuration of our npm ,

const fetched = () => {
  fetch(
    "https://www.jiosaavn.com/api.php?__call=webapi.get&token=%2Ffeatured%2Fhindi-india-superhits-top-50%2FzlJfJYVuyjpxWb5,FqsjKg__&type=playlist&p=1&n=50&includeMetaTags=0&ctx=wap6dot0&api_version=4&_format=json&_marker=0"
  )
    .then((data) => data.json())
    .then((res) => console.log(res))
    .catch((er) => console.log(er));
};

fetched();
