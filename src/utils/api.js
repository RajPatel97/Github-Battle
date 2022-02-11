const id = "";
const secretKey = "";
const params = `client_id=${id}&client_secret=${secretKey}`;

const getErrorMsg = (message, username) => {
  if (message === "Not Found") {
    return `${username} doesn't exist`;
  }

  return message;
};

const getProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((profile) => {
      if (profile.message) {
        throw new Error(getErrorMsg(profile.message, username));
      }

      return profile;
    });
};

const getRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(getErrorMsg(repos.message, username));
      }

      return repos;
    });
};

const getStarCount = (repos) => {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
};

const calculateScore = (followers, repos) => {
  return followers * 3 + getStarCount(repos);
};

const getUserData = (player) => {
  return Promise.all([getProfile(player), getRepos(player)]).then(
    ([profile, repos]) => ({
      profile,
      score: calculateScore(profile.followers, repos),
    })
  );
};

const sortPlayers = (players) => {
  return players.sort((a, b) => b.score - a.score);
};

const battle = (players) => {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    (results) => sortPlayers(results)
  );
};

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

export { fetchPopularRepos, battle };
