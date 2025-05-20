<script setup lang="ts">

const { updateTodoTitle } = useTodo()

const props = defineProps<{
    todo: TodoList
}>()

const title = ref(props.todo.title)

const open = ref(false)


function onUpdated() {
    updateTodoTitle(props.todo.id, title.value)
    open.value = false
}
</script>


<template>
    <UModal
        v-model:open="open"
        title="Update Title"
        :close="{
            color: 'primary',
            variant: 'outline',
            class: 'round-full'
        }"
        :ui="{
            content: 'max-w-sm'
        }"
    >
        <UButton color="secondary" size="xs">Update</UButton>
        <template #body>
            <div class="p-1">
                <form @submit.prevent="onUpdated">
                    <div class="flex gap-1">
                        <UInput v-model="title" placeholder="Enter a new title" class="w-full" />
                        <UButton type="submit">Update</UButton>
                    </div>
                </form>
            </div>
        </template>
    </UModal>
</template>