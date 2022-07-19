<template>
    <v-container>
        <h1>COMPOSITION</h1>

        <v-card class="mx-auto" max-width="344">
            <v-card-text>
                <div>Example Vuetify Card</div>
                <p class="text-h4 text--primary">Refresh the page</p>
                <p>adjective</p>
                <div class="text--primary">You'll see the error upon refreshing the page</div>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="teal accent-4" @click="reveal = true">Learn More</v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%">
                    <v-card-text class="pb-0">
                        <p class="text-h4 text--primary">Origin</p>
                        <p>
                            [vue-composition-api] must call Vue.use(VueCompositionAPI) before using any
                            function.
                        </p>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                        <v-btn text color="teal accent-4" @click="reveal = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-expand-transition>
        </v-card>
        <v-btn class="justify-center mt-16" x-large dark outlined color="green" @click="$router.push('/')">
            Go back to index
        </v-btn>
    </v-container>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export const reveal = ref(false)
const { onResult } = useQuery(gql`
    query {
        company {
            ceo
        }
    }
`)
onResult(({ data }) => {
    console.log(data)
})
</script>
