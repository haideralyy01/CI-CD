module.exports = {
  apps: [
    {
      name: "frontend",
      script: "pnpm",
      args: "run start",
      cwd: "./apps/frontend",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
    {
      name: "http-server",
      script: "pnpm",
      args: "run start",
      cwd: "./apps/backend",
      env: {
        NODE_ENV: "production",
        PORT: 8000,
      },
    },
    {
      name: "ws-server",
      script: "pnpm",
      args: "run start",
      cwd: "./apps/ws",
      env: {
        NODE_ENV: "production",
        PORT: 8080,
      },
    },
  ],
};