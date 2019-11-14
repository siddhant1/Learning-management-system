// https://siddhant1-lms-backend.glitch.me/api/lecture/

import { REMOTE_HOST } from '../../utils/constants'

const HOST = REMOTE_HOST

const getLectures = async () => {
   const axiosConfig = {
      url: `${HOST}/api/lecture/`,
      method: 'GET',
      crossDomain: true,
      dataType: 'json',
      // headers: GenUtil.getHeaders(),
      cache: false,
      processData: false
   }

   const sr = await APIServices.request(axiosConfig)
   return sr
}

export { getLectures }
