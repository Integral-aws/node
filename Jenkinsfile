pipeline{
    agent {
        docker {
            image 'node:12'
        }
    }
    environment {
        // HOME = '//c/Users/Mou/Docker/jenkins/jenkins_home/workspace/Pipeline_Integral_Node'
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                node --version
                npm --version
                ls -l
                npm install --no-bin-links
                '''
            }
        }
        stage('Unit Testing') {
            steps {
                sh 'ls -l'
                sh 'npm run test'
            }
        }
        stage('Mutation Testing') {
            steps {
                sh 'npm run stryker'
            }
        }
        stage('Create Docker Image') {
            steps {
                sh 'echo Creando imagen...'
            }
        }
    }
}
