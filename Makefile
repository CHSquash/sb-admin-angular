current_dir = $(shell pwd)

build:
	docker build -f Dockerfile -t angular_client .

build-dist:
	docker build -f Dockerfile.dist -t angular_build .

start:
	docker run -d -p 80:80 --link node angular_client

start-dist:
	docker run -d -v $(current_dir)/app:/app/bower_components angular_build

clean:
	docker rm $$(docker ps -q -f status=exited) || echo 'true'
	docker rmi -f $$(docker images -qa) || echo 'true'
