current_dir = $(shell pwd)

build:
	docker build -f Dockerfile -t b.gcr.io/rugged-cooler-143304.appspot.com/nginx-angular .

build-dist:
	docker build -f Dockerfile.dist -t angular_build .

build-local:
	docker build -f Dockerfile.local -t nginx_angular_local .

start:
	docker run -d -p 80:80 b.gcr.io/rugged-cooler-143304.appspot.com/nginx-angular

start-dist:
	docker run -d -v $(current_dir)/app:/app/bower_components angular_build

start-local:
	docker rm -f angular || echo "none"
	docker run -d -p 80:80 -v $(current_dir)/app:/app --name angular nginx_angular_local
	docker logs -f angular

clean:
	docker rm $$(docker ps -q -f status=exited) || echo 'true'
	docker rmi $$(docker images -q --filter "dangling=true") || echo 'true'
	docker volume rm $$(docker volume ls -qf dangling=true) || echo 'true'

push: kube-delete build
	gcloud docker push b.gcr.io/rugged-cooler-143304.appspot.com/nginx-angular
	kubectl create -f deployment.yaml
	kubectl create -f service.yaml

kube-delete:
	kubectl delete -f deployment.yaml || echo 'true'
	kubectl delete -f service.yaml || echo 'true'
	sleep 2s
