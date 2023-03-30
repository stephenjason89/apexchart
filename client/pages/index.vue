<template>
    <v-container>
        <h1>Toggle apex chart to see the error</h1>

        <v-btn class="justify-center mt-16" x-large dark outlined color="green" @click="chart = !chart">
            Toggle chart
        </v-btn>
        <keep-alive>
            <component :is="component" v-if="chart" />
        </keep-alive>
    </v-container>
</template>

<script>
import Test from '~/components/Test'
// wow
export default {
    name: 'Home',
    components: {
        Test,
    },
    data: () => ({
        chart: true,
        component: 'Test',
    }),
}
</script>
