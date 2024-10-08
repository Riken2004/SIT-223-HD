pipeline {
    agent any

    environment {
        CC_TEST_REPORTER_ID = credentials('codeclimate-test-reporter-id')
    }

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
                bat 'set CI=false && npm run build'
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --passWithNoTests'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                withCredentials([string(credentialsId: 'codeclimate-test-reporter-id', variable: 'CC_TEST_REPORTER_ID')]) {
                    script {
                        // Ensure Docker is running before this stage
                        bat '''
                        docker run --rm -v "%cd%:/code" codeclimate/codeclimate analyze
                        '''
                    }
                }
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
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
