import ApiService from '~/api-service';

export default function (ctx, inject) {
  const apiService = new ApiService(ctx);
  inject('repo', apiService);
}