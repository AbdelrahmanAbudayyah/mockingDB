pipeline {
    agent {
        docker {
            image 'your-docker-image'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'  // Path to your docker-compose file
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                git branch: 'main', url: 'https://github.com/AbdelrahmanAbudayyah/mockingDB'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Run Docker Compose build (builds images defined in docker-compose.yml)
                script {
                    sh 'docker-compose -f $DOCKER_COMPOSE_FILE build'
                }
            }
        }
        stage('Run Tests') {
            steps {
                // Run Docker Compose to start the container and execute tests
                script {
                    sh 'docker-compose -f $DOCKER_COMPOSE_FILE up -d'  // Start the services in detached mode
                    sh 'docker-compose -f $DOCKER_COMPOSE_FILE exec -T nnode-app npm test'  // Run tests inside the container
                }
            }
        }
        stage('Stop and Clean Up') {
            steps {
                // Stop and clean up the Docker containers after the build
                script {
                    sh 'docker-compose -f $DOCKER_COMPOSE_FILE down'
                }
            }
        }
    }
    post {
        always {
            cleanWs()  // Clean workspace after the job finishes
        }
    }
}
