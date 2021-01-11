import { computed, reactive  } from 'vue'
import { useStore } from 'vuex'

function useSearch () {
	const store = useStore()

	const search = reactive({
		enteredText: '',
		error: ''
	})

	function onError () {
		if (search.enteredText === '') {
			search.error = 'We cannot look up an empty string'
		}
	}

	function onSubmit (text) {
		search.enteredText = text
		store.dispatch('searchPictures', text)
	}
	
	return {
		search,
		loading: computed(() => store.getters.loading),
		pictures: computed(() => store.getters.pictures),
		onSubmit,
		onError
	}

}

export default useSearch