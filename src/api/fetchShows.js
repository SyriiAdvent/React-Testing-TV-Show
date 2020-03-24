import axios from 'axios'

export const fetchShows = async () => {
  return await axios("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res => {
      return res
    })
    .catch(error => {
      console.log(`fetchData failed to find data`, error)
      return error
    })

    // return data
};