angularfb
=========

Bootstrap for using Angular.JS application with Facebook Login 


Installation
============

* set up the virtual host in http-vhosts.conf file (in case you're using apache)

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
* run `$ npm install` within project directory
* install foreman ` $ npm install -g foreman `  ([read more about foreman](https://github.com/NodeFly/node-foreman))
* create ***.env*** file based on ***.env.example***
* start app with `$ foreman start`

----------

Deploying to Heroku - [RTFM#1!](https://devcenter.heroku.com/articles/getting-started-with-nodejs) && [RTFM#2!](https://devcenter.heroku.com/articles/config-vars)
======

----

Adding front-end libraries
======
```sh
bower install <package-name> --save
```
----------

