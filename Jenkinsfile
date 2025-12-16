pipeline {
  agent any

  environment {
    AWS_REGION = "ap-south-1"
    ACCOUNT_ID = "529088274428"

    BACKEND_REPO  = "${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/inventory-backend"
    FRONTEND_REPO = "${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/inventory-frontend"

    AWS_ACCESS_KEY_ID     = credentials('ASIAXWMA6L76NUNXLDQD')
    AWS_SECRET_ACCESS_KEY = credentials('lmLNQeW0M9aR6Phef66UknzWyOwTH9vz4YoCK7LC')
  }

  stages {

    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Login to AWS ECR') {
      steps {
        bat '''
        aws ecr get-login-password --region %AWS_REGION% ^
        | docker login --username AWS --password-stdin %ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com
        '''
      }
    }

    stage('Build & Push Backend Image') {
      steps {
        bat '''
        cd backend
        docker build -t inventory-backend .
        docker tag inventory-backend:latest %BACKEND_REPO%:latest
        docker push %BACKEND_REPO%:latest
        '''
      }
    }

    stage('Build & Push Frontend Image') {
      steps {
        bat '''
        cd frontend
        docker build -t inventory-frontend .
        docker tag inventory-frontend:latest %FRONTEND_REPO%:latest
        docker push %FRONTEND_REPO%:latest
        '''
      }
    }
  }
}

