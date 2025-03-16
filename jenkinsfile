pipeline {
    agent any

    environment {
        ANYPOINT_CREDENTIALS = credentials('anypoint.credentials')
    }

    stages {
        stage('Unit Test') {
            steps {
                echo "Running Unit Tests..."
                sh 'mvn clean test'
            }
        }

        stage('Deploy Standalone') {
            steps {
                echo "Deploying in Standalone mode..."
                sh 'mvn deploy -P standalone'
            }
        }

        stage('Deploy to AnyPoint') {
            steps {
                echo "Deploying to Anypoint Platform..."
                sh '''
                mvn deploy -P arm \
                -Darm.target.name=local-4.0.0-ee \
                -Danypoint.username=${ANYPOINT_CREDENTIALS_USR} \
                -Danypoint.password=${ANYPOINT_CREDENTIALS_PSW}
                '''
            }
        }

        stage('Deploy to CloudHub') {
            steps {
                echo "Deploying to CloudHub..."
                sh '''
                mvn deploy -P cloudhub \
                -Dmule.version=4.0.0 \
                -Danypoint.username=${ANYPOINT_CREDENTIALS_USR} \
                -Danypoint.password=${ANYPOINT_CREDENTIALS_PSW}
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment completed successfully!"
        }
        failure {
            echo "❌ Deployment failed! Check logs for errors."
        }
    }
}
