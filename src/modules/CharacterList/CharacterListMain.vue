<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import {
  BaseCharacterCard,
  BaseText,
  BaseLoader,
} from "src/components/ui/base";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  loading: Boolean,

  characters: {
    required: true,
    type: Object,
  },

  modelValue: {
    required: true,
    type: String,
  },
});

const model = computed({
  get: () => props.modelValue,
  set: (state) => emit("update:modelValue", state),
});
</script>

<template>
  <q-page padding>
    <RouterLink to="/">
      <q-btn class="btn is-back" icon="arrow_back" label="Back to Home" />
    </RouterLink>

    <BaseText tag="h2"> Find your favorite character! </BaseText>

    <q-input
      v-model="model"
      filled
      dark
      label="Character Name *"
      hint="Name and surname to be more especifique"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      class="input"
    />

    <div v-if="loading" class="flex row justify-center">
      <BaseLoader />
    </div>

    <section v-else class="row justify-center">
      <BaseCharacterCard
        v-for="{ id, image, status, species, name } in characters"
        :key="id"
        :scr-image="image"
        :status="status"
        :species="species"
        :name="name"
        :href="`/character/${id}`"
      />
    </section>
  </q-page>
</template>

<style lang="scss" scoped>
.text-h2 {
  color: white;
  margin: 20px 0 50px;
  text-align: center;
}

.input {
  margin-bottom: 50px;
}
</style>
