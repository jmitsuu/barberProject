<template>
    <div class="flex items-center  border-b-2 p-4 bg-slate-500 hover:bg-gray-600 transition-all cursor-pointer">
        <img src="https://picsum.photos/200/300" class="w-10 h-10 rounded-full" />
        <div class="ml-3">
            <h1 class="text-[1.3rem]">{{ userName }}</h1>
            <p class="text-[0.8rem]">{{ userAcess }}</p>
        </div>

    </div>
</template>
<script setup>
defineProps({
    userAcess: String,
    userName: String
})
</script>