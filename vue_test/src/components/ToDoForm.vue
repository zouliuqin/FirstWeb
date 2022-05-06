<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg"> 准备做什么？ </label>
    </h2>

    <input
    ref="labelInput"
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.trim.lazy="label"
      class="input__lg"
    />
    <button class="btn btn__primary btn__lg" type="submit">添加</button>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
    },
  },
  data() {
    return {
      label: "",
    };
  },
  mounted(){
      const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
  }
};
</script>