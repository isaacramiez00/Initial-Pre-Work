# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we (the client) hit https://www.techtonic.com/, an http request is sent from the web browser to the DNS server.  The DNS server looks up its cache and if the domain lives in its cache, it then sends the IP address of that domain back to the client.  If it is not in the cache, and additional trip to consult with the root DNS server is needed.  Once the client receives the IP address of the domain, it then sends the request to the server hosted at that IP address.  Once the request hits the server, then the code handles the requests and sends back a response.  The response is then send back to the client (including all static assets such as html, css, js, etc).  The browser on the client side is then responsible for presenting all of that data inside the browser.

## From start to finish, how does data reach you to be rendered in the browser?

See my answer on number 1.  In terms of how the data is handled and displayed in the browser (once it is on the client side), the data is rendered in the core software component that reads the files, the browser engine. First, the data in our HTML, CSS, and Javascript files are read as raw bytes. Then, the browser engine converts the bytes to characters (our code from the files). After the engine takes the characters, it then goes through a process know as tokenization ("data structure that contains information about certain HTML/CSS/JS tags" (LogRockets.com, Ohans Emmanuel)) The browser then converts the tokes to nodes ("Separate entity without document object tree" (LogRockets.com, Ohans Emmanuel) where it finally reaches the DOM (Document Object Model; for HTML file) and CSSOM (for CSS files). In the DOM and CSSOM, the files (.html, .css, .js) are read until the scripts are finished thus, a webpage is presented in the browser.

## What code is rendered in the browser?

Code that is rendered in the browser are html, css, and javascript code.

## What is the server-side code’s main function?

The server-side codes main function is to "store, process, and deliver web content to clients." (marksheet.io)

## What is the client-side code’s main function?

The client-side codes main function is to display the content received from the server.

## What is runtime?

Runtime is the amount of time and length for a program to execute.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

The amount of instances created from the client-side assets is one per request.

## How many instances of the server-side code are available at any given time?

The amount of instances available from the server-side code varies depending on whether or not you are using a load balancer. The load balancer controls which server the request goes too. There will usually be one instance of the server side code per server.

## How many instances of the databases connected to the server application are created?

The amount of databases connected to the server application that are created depend on the amount of data and traffic the server handles. If the application or website is popular and needs to manage a lot of data, then there might be more than one database instance.
