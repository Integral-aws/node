pipeline{
    agent {
        docker {
            image 'node:12'
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
                npm install --no-bin-links
                '''
            }
        }
        stage('Unit Testing') {
         /*   steps {
                sh 'ls -l'
                sh 'npm run mocha "tests/**/*.spec.js" --exit'
            } */
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
