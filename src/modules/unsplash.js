import { SEARCH_UNSPLASH, LOADING_IMAGES } from '@/store/types'
import { searchUnsplash } from '@/api'

const state = {
  pictures: [],
  loading: false
}

const mutations = {
	[SEARCH_UNSPLASH](state, pictures) {
		state.pictures = pictures
	},
	[LOADING_IMAGES](state, loading) {
		state.loading = loading
	}
}

const actions = {
	searchPictures: async ({commit}, query) => {
		const response = await searchUnsplash(query)
		commit(SEARCH_UNSPLASH, response.data.results)
	}
}

const getters = {
	pictures: state => state.pictures,
	loading: state => state.loading
}


export default {
  state,
  getters,
  actions,
  mutations
}