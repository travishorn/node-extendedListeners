extendedListeners
-----------------

This snippet intercepts requests on an http server and serves its own content.

Require this module and call the listen method, passing the http server object. Then, add resources using the addResource method, passing the url and the location of the file to serve.

Any request's url that matches something in the resource array will be responded to with the data in the specified file. This is a simplified solution taken from socket.io.