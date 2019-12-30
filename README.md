
## Node.js end-point

### Steps to run the API

  

* First of all, we need to create our image

		docker build -t myapi/node 

We can use the -t parameter to assign a custom name to our image that will be useful to identify it later. In this case I choose `myapi/node`. The final `.` indicates where is ou Dockerfile, in our case, it is the root of our project.

 
* So, let's create our container with docker run.

- Use the --name option to assign a custom name to the container.

- To publish a port use the -p options as follows:

		-p host_port:container_port

- To create and manage volumes, use the -v options as follows:

		-v host_src:container_dest

- Finaly we need to indicate the image that we have just created. In our case "myapi/node".


		docker run --name myapi -p 3001:3001 -v $(pwd)/api:/usr/src/api myapi/node

  

And now you are able to access the endpoint by the address 

	http://localhost:3001?name=John

Also, you can check the logs in the terminal.


+ GET / -

+ PARAM

name - string

To run with CURL:

`curl -X GET 'http://localhost:3001/?name=John' `

  
  
  

If you have any doubt, do not hesitate to contact me.

  

Tálisson Oliveira da Costa