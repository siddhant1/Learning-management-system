// https://siddhant1-lms-backend.glitch.me/api/lecture/

import Axios from 'axios'
import API_END_POINTS from '../../utils/constants/apiEndPoint'

const HOST = API_END_POINTS.hostedUrl

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
   const sr = await Axios.request(axiosConfig)
   return sr
}

export { getLectures }
