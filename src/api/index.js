import axios from 'axios'

const accessKey = 'yrp_h52hq1CtYxXHEam7Vi4Bhr6-dtB_2Dt2MAGUigs'
const unsplashCollections = `https://api.unsplash.com/search/collections?client_id=${accessKey}&query=`

export const searchUnsplash = async (query) => await axios.get(`${unsplashCollections}${query}`)