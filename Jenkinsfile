pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/nishas01/bootcampnodejsAPP.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
