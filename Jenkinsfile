pipeline {
    agent any
    stages {
        stage('Pulling Github Repo') {
            steps {
                dir('/home/jenkins/jenkins_dir/bankwebapp') {
                    echo 'Removing current bankweb directory'
                    sh 'rm -fr bankweb'
                    echo 'Pulling latest commit from Github repository'
                    sh 'git clone https://github.com/jeffreymik/bankweb.git'
                }
            }
        }

        stage('Building new docker image') {
            steps {
                dir('/home/jenkins/jenkins_dir') {
                    echo 'Creating new docker image using Dockerfile and copying new pulled data from Github repository'
                    sh 'sudo docker build -t webserver:latest .'
                    echo 'Starting up new docker container running website'
                    sh 'sudo docker run --name webserver -d -p 80:80 webserver:latest'
                }
            }
        }

        stage('Scanning website on vulnerabilities') {
            steps {
                    echo 'Running Nikto to actively scan the docker container on vulnerabilities'
                    sh 'nikto -h 192.168.178.50'
            }
        }
    }
}