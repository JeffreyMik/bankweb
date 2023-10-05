pipeline {
    agent any

    environment {
        SSH_CREDENTIALS = credentials('my-ssh-key')  // Use the ID of your SSH credentials
    }

	
	
    stages {
        stage('Security test') {
            steps {
                echo 'Testing server on security'
            }
        }
	    
	stage('Clone web application repository to server') {
            steps {
                echo 'Cloning Git repository'
                sh 'rm -fr bankweb'
                sh 'git clone https://github.com/jeffreymik/bankweb.git'
            }
        }

        stage('Push repository to remote host') {
            steps {
                echo 'Pushing latest repository version to remote host'
                sh '''
                ssh-agent bash -c 'ssh-add $SSH_CREDENTIALS; \
                ssh -o StrictHostKeyChecking=no jenkins-agent@192.168.178.66 git -C /var/www/html pull'
                '''
            }
        }

        stage('Checking if website is up') {
            steps {
                echo 'Checking website is up'
		        sh 'curl -Is 192.168.178.66 | head -n 1'
            }
        }
    }
}
