import {url_base , api_key} from './../constants/api_urls'

const getUrlByCity = city => {
      return`${url_base}?q=${city}&appid=${api_key}&units=metric`
}

export default getUrlByCity;
