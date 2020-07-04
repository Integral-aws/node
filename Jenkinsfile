def COLOR_MAP = ['SUCCESS': 'good', 'FAILURE': 'danger', 'UNSTABLE': 'danger', 'ABORTED': 'danger']
pipeline {
  agent{
    kubernetes {
      cloud 'kubernetes_dev'
      yamlFile 'JenkinsPod.yml'
    }
  }
  environment {
    GIT_SHORT = sh(returnStdout: true, script: 'echo $GIT_COMMIT | cut -c1-10')
    APP_VERSION = sh(returnStdout: true, script: 'awk \'/version/{gsub(/("|",)/,"",$2);print $2};\' package.json').trim()
  }
  stages {
    stage('ESLint') {
      steps {
        container('node-12') {
          sh '''
          echo "Corriendo stage de ESLint."
          npm config set proxy "http://10.50.8.20:8080"
          npm config set https-proxy "http://10.50.8.20:8080"
          echo "Instalación de dependencias ESLint."
          npm install
          echo "Ejecución del ESLint."
          npm run eslint
          '''
        }
      }
    }
    stage('Pruebas unitarias') {
      steps {
        container('node-12') {
          sh 'npm run test'
          echo 'Terminando de ejecutar pruebas unitarias.'
        }
      }
    }
    stage('Pruebas de Mutación') {
      steps {
        container('node-12') {
          echo 'Corriendo stage de Stryker ( pruebas de mutación ).'
          sh '''
          export HTTP_PROXY="http://10.50.8.20:8080"
          export HTTPS_PROXY="http://10.50.8.20:8080"
          export http_proxy="http://10.50.8.20:8080"
          export https_proxy="http://10.50.8.20:8080"
          apk add git
          '''
          sh 'npm run stryker'
          echo 'Terminando de ejecutar pruebas de mutación.'
        }
      }
    }
    /* stage('Construcción de imagen docker') {
      steps {
        container('docker'){
          withDockerRegistry([ credentialsId: "nexus", url: "http://nexus.registry.baz.com.mx" ]) {
            sh '''
            docker build --add-host verdaccio.npm.baz.com.mx:10.54.36.91 -t nexus.registry.baz.com.mx/baz/react/compensacion:$APP_VERSION.$GIT_SHORT .
            docker push nexus.registry.baz.com.mx/baz/react/compensacion:$APP_VERSION.$GIT_SHORT
            '''
          }
        }
      }
    }
    stage('Despliegue') {
      steps {
        container('kubectl'){
          configFileProvider([configFile(fileId: 'kubectl-configuration', targetLocation: 'kubeconfig')]) {
            sh '''
            export KUBECONFIG=`pwd`/kubeconfig
            kubectl set image -n reactencabezadons deployment/compensacion compensacion=nexus.registry.baz.com.mx/baz/react/compensacion:$APP_VERSION.$GIT_SHORT
            '''
          }
        }
      }
    }
  }
  post{
    always{
      slackSend( message: "Deploy *${currentBuild.currentResult}:* - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.RUN_DISPLAY_URL}>)", teamDomain: 'bancoaztecagroup', tokenCredentialId: 'jenkins_slack_netac', color: COLOR_MAP[currentBuild.currentResult], baseUrl: 'https://bancoaztecagroup.slack.com/services/hooks/jenkins-ci/', botUser: false, channel: '#ci')
    }
  } */
}