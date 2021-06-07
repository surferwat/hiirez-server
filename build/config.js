"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const isProd = process.env.NODE_ENV === 'production';
const config = {
    dbUser: isProd ? process.env.P_DB_USER : process.env.D_DB_USER,
    dbHost: isProd ? process.env.P_DB_HOST : process.env.D_DB_HOST,
    dbDatabase: isProd ? process.env.P_DB_DATABASE : process.env.D_DB_DATABASE,
    dbPassword: isProd ? process.env.P_DB_PASSWORD : process.env.D_DB_PASSWORD,
    dbPort: isProd ? process.env.P_DB_PORT : process.env.D_DB_PORT,
    host: isProd ? process.env.P_HOST : process.env.D_HOST,
    client: isProd ? process.env.P_CLIENT : process.env.D_CLIENT,
    s3Bucket: isProd ? process.env.P_S3_BUCKET : process.env.D_S3_BUCKET,
    awsAccessKeyId: isProd ? process.env.AWS_ACCESS_KEY_ID : process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: isProd ? process.env.AWS_SECRET_ACCESS_KEY : process.env.AWS_SECRET_ACCESS_KEY,
    awsCloudfrontApiEndpoint: isProd ? process.env.P_AWS_CLOUDFRONT_API_ENDPOINT : process.env.D_AWS_CLOUDFRONT_API_ENDPOINT,
    googleMapsStaticAPIPrivateKey: isProd ? process.env.P_GOOGLE_MAPS_STATIC_API_PRIVATE_KEY : process.env.D_GOOGLE_MAPS_STATIC_API_PRIVATE_KEY
};
exports.config = config;
//# sourceMappingURL=config.js.map