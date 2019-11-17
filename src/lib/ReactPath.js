class ReactPath {
   static scribble = '/pen'
   static screenRecord = '/screenRecord'
   static webcam = '/webcam'
   static createPlaylist = '/createPlaylist'
   static newPlaylist = '/newPlaylist'
   static playVideo = '/play/:id'
   static newLesson = '/newLesson'
   static landingPage = '/landingPage'
   static courseView = '/course/:id'

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
