<template>
  <h1>Form input</h1>
  <v-text-field label="Tournament Name"></v-text-field>
  <v-combobox
    label="Type of Tournament"
    :items="['Classical', 'Rapid', 'Blitz']"
  ></v-combobox>
  <DatepickerComp />
</template>

<script setup></script>
