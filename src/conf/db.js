/**
 * @description 存储配置
 * @author myadmin
 */

const { isProd } = require('../utils/env');

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1',
};

if (isProd) {
  REDIS_CONF = {
    // 线上的redis
    port: 6379,
    host: '127.0.0.1',
  };
}

module.exports = {
  REDIS_CONF,
};