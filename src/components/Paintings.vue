<template>
    <div class="row">
        <app-painting v-for="painting in visiblePaintings" :key="painting.id" :painting="painting"/>
        <app-pagination :current-page="currentPage" :number-of-pages="paginatedPainting"/>
    </div>
</template>

<script>
    import Painting from "@/components/Painting";
    import Pagination from "@/components/Pagination";

    export default {
        components: {
            appPainting: Painting,
            appPagination: Pagination,

        },
        computed: {
            paginatedPainting() {
                return Math.ceil(this.paintings.length / this.pageSize);
            },
            visiblePaintings() {
                return this.paintings.slice((this.currentPage-1) * this.pageSize,
                    ((this.currentPage-1) * this.pageSize) + this.pageSize);
            },
        },
        watch: {
            '$route'(to){
                this.currentPage = to.params.id;
            }
        },
        data() {
            return {
                currentPage: 1,
                pageSize: 9,
                paintings: [
                    {
                        id: 1, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 2, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/50614962_2053440631409467_8900251236175970304_n.jpg?alt=media&token=1fa08335-abba-4050-a432-8c2fcc1a1db6',
                    },
                    {
                        id: 3, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/51020096_2053440384742825_2170357230774255616_n.jpg?alt=media&token=7ac15fce-9be6-4b3e-b808-5d80f3f327ad',
                    },
                    {
                        id: 4, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/51051993_2053440468076150_7401365477311643648_n.jpg?alt=media&token=40da3dd5-76b2-42d2-9f0a-00d223a64d4e',
                    },
                    {
                        id: 5, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/51132403_2053440501409480_9071483937225703424_n.jpg?alt=media&token=bce68af8-c59e-463d-8fae-ef0159ea3653',
                    },
                    {
                        id: 6, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/51147734_2053440594742804_4023696487274774528_n.jpg?alt=media&token=0e322fba-45c8-4e00-b13c-751d661995d4',
                    },
                    {
                        id: 7, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/51308565_2053440438076153_6938597710538735616_n.jpg?alt=media&token=fd0b22ab-8a8e-4d15-9116-345acd1ee61c',
                    },
                    {
                        id: 8, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/72970414_2555383351215190_3229819078789038080_n.jpg?alt=media&token=feacca8d-e0c7-43c0-ba27-f38bfe190ba7',
                    },
                    {
                        id: 9, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/76722761_2557208457699346_5272910763520950272_n.jpg?alt=media&token=241bd874-904f-48de-a260-4195b2fcda5d',
                    },
                    {
                        id: 10, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/78217559_2557209337699258_2770402026457137152_n.jpg?alt=media&token=a8205fde-53f0-446d-abb8-e524f855be3c',
                    },
                    {
                        id: 11, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/78530270_2557215717698620_8194969446704480256_n.jpg?alt=media&token=a9604e9e-0811-4629-90bd-73ac3433a4cc',
                    },
                    {
                        id: 12, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 13, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 14, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 15, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 16, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 17, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 18, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 19, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                    {
                        id: 20, description: 'Maleri', price: 1000,
                        url: 'https://firebasestorage.googleapis.com/v0/b/firstfirebase-2c5b6.appspot.com/o/44108614_1899164773503721_5429242509328908288_n.jpg?alt=media&token=bc285927-2cc2-4197-b06b-1f8e043521c1',
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>