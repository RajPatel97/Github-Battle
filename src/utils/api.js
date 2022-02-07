const fetchPopularRepos = (language) => {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }

      return data.items;
    });
  //. catch is not in here because this function is not in the up layer so in an error does occurs it will not be easily managed
  //handle this in the ui layer
};

export { fetchPopularRepos };
