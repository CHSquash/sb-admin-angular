current_dir = $(shell pwd)

build:
	docker build -f Dockerfile -t b.gcr.io/rugged-cooler-143304.appspot.com/nginx-angular .

build-dist:
	docker build -f Dockerfile.dist -t angular_build .

start:
	docker run -d -p 80:80 b.gcr.io/rugged-cooler-143304.appspot.com/nginx-angular

start-dist:
	docker run -d -v $(current_dir)/app:/app/bower_components angular_build

clean:
	docker rm $$(docker ps -q -f status=exited) || echo 'true'
	docker rmi $$(docker images -q --filter "dangling=true") || echo 'true'
	docker volume rm $$(docker volume ls -qf dangling=true) || echo 'true'

push:
	gcloud docker push b.gcr.io/rugged-cooler-143304.appspot.com/nginx-angular
