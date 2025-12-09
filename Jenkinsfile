pipeline {
    agent any

    environment {
        ALLURE_RESULTS = "${env.WORKSPACE}\\allure-results"
        ALLURE_REPORT = "${env.WORKSPACE}\\allure-report"

        BROWSERSTACK_USERNAME = credentials('browserstack-username')
        BROWSERSTACK_ACCESS_KEY = credentials('browserstack-access-key')
        
        APP_PATH='bs://818b5c1f5a8ca575ae2f4897c7bde6d0e34a79d9'
    }

    stages {

        stage('Clean') {
            steps {
                echo 'Limpiando workspace'
                deleteDir()
            }
        }
        
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/henrrycoronado/ExamenFinal_QA.git'
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npx wdio wdio.browserstack.conf.js'
            } 
        }

        stage('Report') {
            steps {
                echo "Generando reporte"
                bat "npx allure-commandline generate %ALLURE_RESULTS% --clean -o %ALLURE_REPORT%"
            }
        }

        stage('Publish report') {
            steps {
                echo "Publicando reporte"
                allure includeProperties: 
                    false,
                    jdk: '',
                    results: [[path: 'allure-results']] 
            }
        }
    }

    post {
        always {
            echo "Pipeline finalizada"
        }
    }
}