class ReactPath {
   static scribble = '/pen/:id'
   static screenRecord = '/screenRecord/:id'
   static webcam = '/webcam/:id'
   static createPlaylist = '/createPlaylist'
   static newPlaylist = '/newPlaylist'
   static playVideo = '/play/:id'
   static newLesson = '/newLesson/:id'
   static landingPage = '/landingPage'
   static courseView = '/course/:id'
   static studentDashboard = '/student'
   static homePath = '/'

   //Added new routes for login, signup and forget password
   static login = '/login'
   static signup = '/signup'
   static forgetpassword = '/forgetpassword'

   // static editSavingPath = (id: number | string = ':id') => `/saving/edit/${id}`;
   static navigateTo(props, path) {
      props.history.push(path)
   }
}

export default ReactPath
