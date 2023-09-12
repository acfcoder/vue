app.component('app-profile', {
    props: ['result', 'isFavorite'],
    methods: {
        addFavorite(){
            this.$emit('add-favorite')
        },
        removeFavorite(){
            this.$emit('remove-favorite')
        }
    },
    template: 
   /* html */`
        <div class="result" v-if="result">
        <a
        href="#"
        v-if="isFavorite"
        v-on:click="removeFavorite"
        class="result__toggle-favorite"
        >Remove Favorite ⭐</a
        >
        <a
        href="#"
        v-else
        v-on:click="addFavorite"
        class="result__toggle-favorite"
        >Add Favorite ⭐</a
        >
        <h2 class="result__name">{{ result.name }}</h2>
        <img
        :src="result.avatar_url"
        :alt="result.name"
        class="result__avatar"
        />
        <p class="result__bio">
        {{ result.bio }}
        <br />
        <a v-bind:href="result.blog" target="_blank" class="result__blog"
            >Enlace a web</a
        >
        </p>
    </div>
    <p v-else>Waiting for search...</p>
    `
})