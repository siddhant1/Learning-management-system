class ReactPath {
  static scribble = '/scribble'
  static screenRecord = '/screenRecord'
  static webcam = '/webcam'
  static createLecture = '/createLecture'

  static homePath= "/";
  // static editSavingPath = (id: number | string = ':id') => `/saving/edit/${id}`;

  static navigateTo(props, path) {
    props.history.push(path)
  }
}

export default ReactPath
