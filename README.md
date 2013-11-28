angularfb
=========

Facebook Login with Angular


Installation
============

* set up the virtual host on your apache http-vhosts.conf file

```sh
<VirtualHost *:80>
    ServerName appname.dev
    ProxyRequests off
    <Proxy *>
        Order allow,deny
        Allow from all
    </Proxy>
    ProxyPass / http://localhost:5000/
    ProxyPassReverse / http://localhost:5000/
    ProxyPreserveHost on
</VirtualHost>
```
* add `127.0.0.1    appname.dev` to your hosts file
* run `npm install` within project directory
* install [foreman](https://github.com/NodeFly/node-foreman) ` $ npm install -g foreman `
* create ***.env*** file based on ***example.env***
* start app by `foreman start`

----------

Adding front-end libraries
======
```sh
bower install <package-name>
```

----------

