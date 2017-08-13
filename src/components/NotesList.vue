<template>
  <div id='notes-list'>
    <div id='list-header'>
      <h2>Notes and shit</h2>
      <div class="btn-group btn-group justified" role='group'>
        <div class="btn-group" role='group'>
          <button type="button" name="button" class="btn btn-default"
            @click='toggleShowFavorites(false)' :class='{active: !showFavorites}'>
            All lol
          </button>
        </div>
        <div class="btn-group" role='group'>
          <button type="button" name="button" class="btn btn-default"
            @click='toggleShowFavorites(true)' :class='{active: showFavorites}'>
            some faves
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-group">
        <a href="#" v-for='note in filteredNotes'
          class="list-group-item" :class='{active: activeNote === note}'
          @click='updateActiveNote(note)'>
          <h4 class="list-group-item-heading">
            {{ note.text.trim().substring(0,30) }}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      showFavorites: false
    };
  },

  methods: {
    ...mapActions([
      'updateActiveNote'
    ]),
    toggleShowFavorites (status) {
      this.showFavorites = status;
    }
  },

  computed: {
    ...mapGetters({
      notes: 'notes',
      activeNote: 'activeNote'
    }),
    filteredNotes () {
      return this.showFavorites ? this.notes.filter(note => note.favorite) : this.notes;
    }
  }
};
</script>
