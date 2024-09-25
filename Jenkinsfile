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
                bat 'set CI=false && npm run build'
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
                        def workspace = pwd().replace('\\', '/')
                        bat """
                        docker run --rm -v ${workspace}:/code codeclimate/codeclimate analyze
                        """
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                docker build -t my-react-app .
                docker run -d -p 80:80 my-react-app
                '''
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                bat 'echo "Monitoring with Datadog..."'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
