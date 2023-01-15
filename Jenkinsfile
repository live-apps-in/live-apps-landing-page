pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t live-apps-landing-page .'
            }
        }
        stage('Stop old container') {
            steps {
                sh 'docker rm live-apps-landing-page --force'
            }
        }
        stage('Start New Container') {
            steps {
                sh 'docker run -p 3000:3000 -d --name live-apps-landing-page live-apps-landing-page'
            }
        }
    }
}