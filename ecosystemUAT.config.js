module.exports = {
  apps: [
    {
      name: 'thumbweb',
      exec_mode: 'fork',
      max_memory_restart: '512M',
      log_date_format: 'YYYY-MM-DD HH:mm:ss SSS',
      script: 'server.js',
      out_file: '/home/deployer/.pm2/logs/thumbweb-out.log',
      error_file: '/home/deployer/.pm2/logs/thumbweb-error.log',
      env: {
        CUSTOM_ENV: 'uat',
        NODE_ENV: 'production',
        PORT: '8604'
      }
    }
  ]
}
