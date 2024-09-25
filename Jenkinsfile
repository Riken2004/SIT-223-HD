pipeline {
    agent any

    environment {
        CC_TEST_REPORTER_ID = credentials('codeclimate-test-reporter-id')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Riken2004/SIT-223-HD'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies using npm
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React project with the CI environment variable set to false
                bat 'set CI=false && npm run build'
                // Archive the build output (optional)
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        stage('Test') {
            steps {
                // Run tests defined in your project
                bat 'npm test -- --passWithNoTests'  // Allows the pipeline to continue even if no tests are found
            }
        }

        stage('Code Quality Analysis') {
            steps {
                // Perform code quality analysis using CodeClimate
                withCredentials([string(credentialsId: 'codeclimate-test-reporter-id', variable: 'CC_TEST_REPORTER_ID')]) {
                    script {
                        def workspace = pwd().replace('\\', '/').replace(' ', '\\ ')
                        bat """
                        docker run --rm -v "${workspace}:/code" codeclimate/codeclimate analyze
                        """
                    }
                }
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
            // Clean up workspace after the build
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
