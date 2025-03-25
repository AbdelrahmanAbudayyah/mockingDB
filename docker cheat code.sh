

docker run --rm --name mysql-container -e MYSQL_ROOT_PASSWORD=YourNewPassword -d -p 3306:3306 --hostname mysqlimage --network abood-network mysql:8

open mysql inside container : docker exec -it mysql-container mysql -u root -p



 build docker image :  docker build -t node.js .
 run docker :          docker run --rm --name ass --network abood-network node.js

 build and run compose: docker-compose up --build






 docker run --rm --name mysql-container -e MYSQL_ROOT_PASSWORD=YourNewPassword -e MYSQL_PASSWORD=mypassword -e MYSQL_DATABASE=testing -p 3306:3306 -v $(pwd)/mysql-init:/docker-entrypoint-initdb.d -d --hostname mysqlimage --network abood-network mysql:8






    to run tests in docker compose: command: npx jest player.test.js   
