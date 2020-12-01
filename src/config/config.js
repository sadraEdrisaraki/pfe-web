var API_URL = "localhost:3001"

if(process.env.REACT_APP_ENV === 'production'){
    API_URL = "monsiteprod"
    console.log("production")
}
if(process.env.REACT_APP_ENV === 'development'){
    API_URL = "monsitedev"
    console.log("development")
}

export default API_URL