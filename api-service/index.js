export default class ApiService {
  constructor ({ $axios }) {
    this.$axios = $axios;
  }

  fetchPhotosInfo () {
    return this.$axios.get('https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=667a6ce5f358b237ec13e9d99bb659de&group_id=2309748%40N20&format=json&nojsoncallback=1');
  }
}