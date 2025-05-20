<script setup lang="ts">


const { removeTodo } = useTodo()

const props = defineProps<{
    todo: TodoList
}>()


const open = ref(false)


</script>


<template>
    <UModal v-model:open="open" :ui="{ content: 'max-w-sm'}" >
        <UButton color="error" size="xs">Delete</UButton>
        <template #content>
            <h2 class="font-bold mb-3 p-3">Are You Sure delete</h2>
            <p class="mb-3 p-3 border-amber-50">todo: {{ props.todo.title }}</p>
            <div class="flex justify-end gap-1 p-3">
                <UButton color="error" @click="removeTodo(props.todo.id)">Confirm</UButton>
                <UButton color="secondary" @click="open = false">Cancel</UButton>
            </div>
        </template>
    </UModal>
</template>