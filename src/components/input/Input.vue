<script setup>
defineProps({
    Title: String,
    Type: String,
    PlaceHolder: String,
    Date: String
})

</script>

<!-- "datetime-local -->
<template>
    <div class="relative p-2 flex justify-center items-center bg-slate-100 rounded-md ">
        <span class="absolute top-0 left-1 text-gray-600 text-[0.9rem] ">{{ Title }}</span>
        <input :v-model="Date" :type="Type" class="mt-3 bg-transparent" :placeholder="PlaceHolder" />

    </div>
</template>