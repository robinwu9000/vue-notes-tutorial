<template>
  <div id="note-editor">
    <textarea class="form-control" :value='activeNoteText' @input='editNote'>
    </textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    activeNoteText: 'activeNoteText'
  }),

  methods: mapActions([
    'editNote'
  ])
};
</script>
