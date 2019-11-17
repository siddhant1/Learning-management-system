const uploadFile = async e => {
   const files = e.target
   const data = new FormData()
   data.append('file', files[0])
   data.append('upload_preset', 'Sick-fits')
   const res = await fetch(
      'https://api.cloudinary.com/v1_1/dv95rctxg/image/upload',
      {
         method: 'POST',
         body: data
      }
   ).then(d => d.json())
   return res
}
export default uploadFile
