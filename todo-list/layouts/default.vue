<template>
    <div class="p-3 text-gray-700">
        <nav>
            <div class="max-w-md mx-auto bg-gray-100 p-2">
                <ul>
                    <li>
                        <NuxtLink to="/" class="font-bold text-lg text-blue-600 underline">
                            Todo List
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
        <main class="mt-4">
            <div class="max-w-md mx-auto">
                <slot ></slot>
            </div>
        </main>
    </div>
</template>