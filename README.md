Lightman : Node based CLI for the Apple Developer Center
========

Hi, Lightman!

![Lightman](http://images.paxholley.net/blog/geeks/david_lightman.jpg)

Lightman uses an inception level of javascript libraries.   [Spooky.js](https://github.com/WaterfallEngineering/SpookyJS) is the node flavor of [Casper.js](https://github.com/n1k0/casperjs), which is a higher level library for [Phantom.js](https://github.com/ariya/phantomjs)! YIKES.  Should you still want to install:


    npm install -g lightman



### Make sure to install CasperJS/PhantomJS with:  

    brew install casperjs


Lightman usage:

````
 Usage: lightman [options] <command>

  Options:

    -h, --help                       output usage information
    -V, --version                    output the version number
    -t, --team [team]                Use team
    -c, --csr [csr file]             Use csr file
    -bn, --bundlename [bundle name]  Use bundle name
    -bi, --bundleid [bundle id]      Use bundle id
    
````

Supported Commands:

* login - logs you in (saves to keychain)
* logout
* certs:create:dev - create development certificate (REQ: csr  OPTIONAL: team)
* certs:create:dist - create distribution certificate (REQ: csr  OPTIONAL: team)
* appid:create - create app id (REQ: bundlename,bundleid  OPTIONAL: team)
* appid:configure:push - configure app id for push (REQ: bundlename,csr  OPTIONAL: team)
* teams:list - list teams you belong to
 

### Other Stuff:

* I also include some shell scripts for doing things like:
  * creating a CSR
  * importing a certificate
  * exporting a p12 certificate
* Lightman was created as part of the [EverTrue](http://www.evertrue.com) 2013 winter hackathon.
* I prefer working in objective-C, this javascript stuff scares me.


# Very in development, probably won't work
