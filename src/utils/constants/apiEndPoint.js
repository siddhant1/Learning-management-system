class API_END_POINTS {
   static hostedUrl = 'https://melodious-rainforest.glitch.me'
   static studentLogin = `${this.hostedUrl}/api/student/login`
   static studentSignUp = `${this.hostedUrl}/api/student`
   static teacherLogin = `${this.hostedUrl}/api/teacher/login`
   static teacherSignUp = `${this.hostedUrl}/api/teacher`
   static createPlayList = `${this.hostedUrl}/api/course`
   static getPlayList = `${this.hostedUrl}/api/course`
   static addLecture = `${this.hostedUrl}/api/lecture`
}

export default API_END_POINTS
