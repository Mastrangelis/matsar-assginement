const CLOUDFRONT_URL = 'https://d1ax460061ulao.cloudfront.net';

const BASE_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api'
        : 'https://api.matspar.se';

export { CLOUDFRONT_URL, BASE_URL };
