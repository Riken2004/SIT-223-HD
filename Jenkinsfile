pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Riken2004/SIT-223-HD', credentialsId: 'github-credentials'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Set CI=false to prevent warnings from breaking the build
                bat 'set CI=false && npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo "Deploying to Test Environment..."'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
