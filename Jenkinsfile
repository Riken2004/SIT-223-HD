pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from your GitHub repository using credentials and the correct branch
                git branch: 'main', url: 'https://github.com/Riken2004/SIT-223-HD', credentialsId: 'github-credentials'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying to Test Environment..."'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
