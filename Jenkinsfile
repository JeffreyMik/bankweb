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
                    echo 'Creating a new docker image using Dockerfile and copying newly pulled data from Github repository'
                    sh 'sudo docker build -t webserver:latest .'
                    echo 'Starting up a new docker container running the website'
                    sh 'sudo docker run --name webserver -d -p 80:80 webserver:latest'
                }
            }
        }

        stage('Scanning website on vulnerabilities') {
            steps {
                echo 'Running Nikto to actively scan the docker container on vulnerabilities'
                script {
                    def scanResult = sh(script: 'nikto -h localhost', returnStatus: true)
                    if (scanResult == 0) {
                        echo 'No vulnerabilities found. Proceeding to deploy files.'
                        currentBuild.result = 'SUCCESS'
                    } else {
                        sh 'sudo docker stop webserver'
                        sh 'sudo docker rm webserver'
                        sh 'sudo docker image rm webserver:latest'
                        error('Vulnerabilities found. Build marked as failed.')
                    }
                }
            }
        }

        stage('Deploy Files If No Vulnerabilities') {
            when {
                expression { currentBuild.resultIsBetterOrEqualTo('SUCCESS') }
            }
            steps {
                echo 'Copying files to the remote host'
                script {
                    sh 'scp -r /home/jenkins/jenkins_dir/bankwebapp/bankweb/* jenkins-agent@192.168.178.66:/var/www/html/'
                    sh 'sudo docker stop webserver'
                    sh 'sudo docker rm webserver'
                    sh 'sudo docker image rm webserver:latest'
                }
            }
        }
    }
}