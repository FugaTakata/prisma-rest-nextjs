const path = require("path");

const exec = require("child_process").execSync;
const fs = require("fs");

export default async function handle(req, res) {
  res.json({
    pwd: exec("pwd").toString().split("\n"),
    "ls -la ./": exec("ls -al ./").toString().split("\n"),
    "ls -la ./.next": exec("ls -al ./.next").toString().split("\n"),
    "ls -la ./.next/server": exec("ls -al ./.next/server")
      .toString()
      .split("\n"),
    "ls -la ../": exec("ls -al ../").toString().split("\n"),
    "ls -la ../../": exec("ls -al ../../").toString().split("\n"),
    "ls -la ../../../": exec("ls -al ../../../").toString().split("\n"),
  });
}

const a = {
  pwd: ["/var/task", ""],
  "ls -la ./": [
    "total 16",
    "drwxr-xr-x  4 root  root   142 Aug  1 06:07 .",
    "drwxr-xr-x  1 12569 users 4096 Jul 22 15:53 ..",
    "-rwxr-xr-x  1 root  root    40 Aug  1 06:07 .env",
    "drwxr-xr-x  3 root  root   167 Aug  1 06:07 .next",
    "-rwxr-xr-x  1 root  root  3140 Aug  1 06:07 ___next_launcher.js",
    "drwxr-xr-x 43 root  root   741 Aug  1 06:07 node_modules",
    "-rwxr-xr-x  1 root  root   491 Aug  1 06:07 package.json",
    "-rwxr-xr-x  1 root  root  6691 Aug  1 06:07 ___vc_bridge.js",
    "",
  ],
  "ls -la ./.next": [
    "total 4",
    "drwxr-xr-x 3 root root  167 Aug  1 06:07 .",
    "drwxr-xr-x 4 root root  142 Aug  1 06:07 ..",
    "-rwxr-xr-x 1 root root   21 Aug  1 06:07 BUILD_ID",
    "-rwxr-xr-x 1 root root 1025 Aug  1 06:07 build-manifest.json",
    "-rwxr-xr-x 1 root root  312 Aug  1 06:07 prerender-manifest.json",
    "-rwxr-xr-x 1 root root    2 Aug  1 06:07 react-loadable-manifest.json",
    "-rwxr-xr-x 1 root root  245 Aug  1 06:07 routes-manifest.json",
    "drwxr-xr-x 4 root root  121 Aug  1 06:07 server",
    "",
  ],
  "ls -la ../": [
    "total 92",
    "drwxr-xr-x 1 12569 users 4096 Jul 22 15:53 .",
    "drwxr-xr-x 1 12569 users 4096 Jul 22 15:53 ..",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 adm",
    "drwxr-xr-x 4 root  root  4096 Jul  6 09:25 cache",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 db",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 empty",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 games",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 gopher",
    "drwxr-xr-x 3 root  root  4096 Jul  6 09:25 kerberos",
    "drwxr-xr-x 1 12569 users 4096 Jul 22 15:53 lang",
    "drwxr-xr-x 8 root  root  4096 Jul  6 09:25 lib",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 local",
    "lrwxrwxrwx 1 root  root    11 Jul  6 09:25 lock -> ../run/lock",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 log",
    "lrwxrwxrwx 1 root  root    10 Jul  6 09:25 mail -> spool/mail",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 nis",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 opt",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 preserve",
    "drwxr-xr-x 2 root  root  4096 Jul 23 05:59 rapid",
    "lrwxrwxrwx 1 root  root     6 Jul  6 09:25 run -> ../run",
    "drwxr-xr-x 1 12569 users 4096 Jul 22 15:53 runtime",
    "drwxr-xr-x 4 root  root  4096 Jul  6 09:25 spool",
    "drwxr-xr-x 4 root  root   142 Aug  1 06:07 task",
    "drwxr-xr-x 2 root  root  4096 Jul 19 11:27 telemetry",
    "drwxrwxrwt 2 root  root  4096 Jul  6 09:25 tmp",
    "drwxr-xr-x 2 root  root  4096 Jul 19 11:27 tracer",
    "drwxr-xr-x 2 root  root  4096 Apr  9  2019 yp",
    "",
  ],
  "ls -la ../../": [
    "total 64",
    "drwxr-xr-x  1        12569 users 4096 Jul 22 15:53 .",
    "drwxr-xr-x  1        12569 users 4096 Jul 22 15:53 ..",
    "lrwxrwxrwx  1 root         root     7 Jul  6 09:25 bin -> usr/bin",
    "dr-xr-xr-x  2 root         root  4096 Apr  9  2019 boot",
    "drwxr-xr-x  2 root         root  4096 Aug  1 04:56 dev",
    "drwxr-xr-x 29 root         root  4096 Jul 19 11:27 etc",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 home",
    "lrwxrwxrwx  1 root         root     7 Jul  6 09:25 lib -> usr/lib",
    "lrwxrwxrwx  1 root         root     9 Jul  6 09:25 lib64 -> usr/lib64",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 media",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 mnt",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 opt",
    "dr-xr-xr-x 72 root         root     0 Aug  1 06:08 proc",
    "dr-xr-x---  2 root         root  4096 Apr  9  2019 root",
    "drwxr-xr-x  2 root         root  4096 Jul 27 18:20 run",
    "lrwxrwxrwx  1 root         root     8 Jul  6 09:25 sbin -> usr/sbin",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 srv",
    "dr-xr-xr-x  2 root         root  4096 Apr  9  2019 sys",
    "drwx------  2 sbx_user1051   990 4096 Aug  1 06:08 tmp",
    "drwxr-xr-x 13 root         root  4096 Jul  6 09:25 usr",
    "drwxr-xr-x  1        12569 users 4096 Jul 22 15:53 var",
    "",
  ],
  "ls -la ../../../": [
    "total 64",
    "drwxr-xr-x  1        12569 users 4096 Jul 22 15:53 .",
    "drwxr-xr-x  1        12569 users 4096 Jul 22 15:53 ..",
    "lrwxrwxrwx  1 root         root     7 Jul  6 09:25 bin -> usr/bin",
    "dr-xr-xr-x  2 root         root  4096 Apr  9  2019 boot",
    "drwxr-xr-x  2 root         root  4096 Aug  1 04:56 dev",
    "drwxr-xr-x 29 root         root  4096 Jul 19 11:27 etc",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 home",
    "lrwxrwxrwx  1 root         root     7 Jul  6 09:25 lib -> usr/lib",
    "lrwxrwxrwx  1 root         root     9 Jul  6 09:25 lib64 -> usr/lib64",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 media",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 mnt",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 opt",
    "dr-xr-xr-x 72 root         root     0 Aug  1 06:08 proc",
    "dr-xr-x---  2 root         root  4096 Apr  9  2019 root",
    "drwxr-xr-x  2 root         root  4096 Jul 27 18:20 run",
    "lrwxrwxrwx  1 root         root     8 Jul  6 09:25 sbin -> usr/sbin",
    "drwxr-xr-x  2 root         root  4096 Apr  9  2019 srv",
    "dr-xr-xr-x  2 root         root  4096 Apr  9  2019 sys",
    "drwx------  2 sbx_user1051   990 4096 Aug  1 06:08 tmp",
    "drwxr-xr-x 13 root         root  4096 Jul  6 09:25 usr",
    "drwxr-xr-x  1        12569 users 4096 Jul 22 15:53 var",
    "",
  ],
};
