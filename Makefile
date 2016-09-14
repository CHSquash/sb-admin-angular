build:
	docker build -f Dockerfile -t angular_client .

start:
	docker run -d -p 80:80 --link node angular_client

clean:
	docker rm $$(docker ps -q -f status=exited)
	docker rmi -f $$(docker images -qa)
