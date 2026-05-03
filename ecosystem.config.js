module.exports = {
  apps: [
    {
      name: "vali-dashboard",

      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",

      instances: 1,
      exec_mode: "fork",

      watch: false,

      env: {
        NODE_ENV: "production"
      },

      error_file: "./logs/error.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",

      time: true,
      max_memory_restart: "500M"
    }
  ]
};