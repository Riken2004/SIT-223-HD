pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from your GitHub repository
                git 'https://github.com/Riken2004/SIT-223-HD'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies using npm
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React project
                sh 'npm run build'
                // Archive the build output (optional)
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        stage('Test') {
            steps {
                // Run tests defined in your project
                sh 'npm test'  // This assumes you have tests in your package.json
            }
        }

        stage('Deploy') {
            steps {
                // Simulate deploying the app (you can integrate Docker or AWS for actual deployment)
                sh 'echo "Deploying to Test Environment..."'
            }
        }
    }

    post {
        always {
            cleanWs() // Clean up workspace after the build
        }
    }
}
