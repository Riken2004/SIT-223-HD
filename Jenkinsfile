pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from your GitHub repository
                git branch: 'main', url: 'https://github.com/Riken2004/SIT-223-HD', credentialsId: 'github-credentials'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use `bat` for Windows commands to install project dependencies using npm
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Use `bat` for Windows commands to build the React project
                bat 'npm run build'
                // Archive the build output (optional)
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        stage('Test') {
            steps {
                // Use `bat` for Windows commands to run tests defined in your project
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Simulate deploying the app (you can integrate Docker or AWS for actual deployment)
                bat 'echo "Deploying to Test Environment..."'
            }
        }
    }

    post {
        always {
            cleanWs() // Clean up workspace after the build
        }
    }
}
