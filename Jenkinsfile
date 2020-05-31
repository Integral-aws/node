pipeline{
    agent {
        docker {
            image 'node:8'
            args '-v ${PWD}:/app -w /app'
            reuseNode true
        }
    }
    environment {
        // HOME = '//c/Users/Mou/Docker/jenkins/jenkins_home/workspace/Pipeline_Integral_Node'
        HOME = '.'
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                node --version
                npm --version
                npm install
                '''
            }
        }
        stage('Unit Testing') {
            steps {
                sh '''
                ls -l
                npm run test
                '''
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
