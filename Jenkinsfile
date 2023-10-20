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
    }
}
