<template>
    <v-app>
        <v-main class="works-wrap">
            <TopNavM class="top-navm" />
            <v-container class="fill-height v-toolbar__content">
                <v-row class="flex-column" justify="center" align="center">
                    <h2>2020/12/25 公布作品與開放投票</h2>
                    <ShareBtn />
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import TopNavM from '@/components/TopNavM'
import ShareBtn from '@/components/ShareBtn'

export default {
    name: 'Works',
    components: {
        TopNavM,
        ShareBtn,
    },
    data: () => ({
        //transition: 'slide-y-reverse-transition',
    }),
}
</script>
<style lang="scss">
body {
    background: #000;
}
.row {
    position: relative;
}
.works-wrap {
    .top-navm {
        position: absolute;
        display: none;
    }
    background: url('../assets/images/works-bg.jpg') no-repeat center top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    position: relative;
    z-index: 2;
}
@media (max-width: 750px) {
    body,
    html {
        max-width: 100vw;
        overflow-x: hidden;
    }
    .works-wrap {
        .top-navm {
            position: absolute;
            display: block;
        }
        h2 {
            font-size: 16px;
        }
    }
}
</style>
