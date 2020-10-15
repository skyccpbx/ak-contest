<template>
    <v-app>
        <v-main class="works-wrap contag high100">
            <TopNavM class="top-navm" />
            <v-container class="v-toolbar__content">
                <v-row class="flex-column my-8" justify="center">
                    <v-flex class="search-box d-flex justify-center align-start">
                        <h1><img src="../assets/images/vote-tit01.png" /></h1>
                        <v-spacer></v-spacer>
                        <v-btn class="mt-2" elevation="2" text @click="$router.back(-1)">❮ 返回上一頁</v-btn>
                    </v-flex>
                    <v-sheet class="mx-auto large-bg" elevation="8" max-width="1360" width="100%">
                        <v-expand-transition>
                            <v-sheet v-if="model != null">
                                <v-row class="fill-height ma-5 align-start" align="center">
                                    <v-img :src="`${VoteItems.ThumImg}`" height="520" max-width="1000px" />
                                    <div class="text-wrap">
                                        <h3>
                                            作品編號
                                            <span>NO:{{ VoteItems.Id }}</span>
                                        </h3>
                                        <h2 class="my-5">{{ VoteItems.Title }}</h2>
                                        <p class="mb-10">{{ VoteItems.Author }} 登入就送十連抽，還有五星強力幹員等你來拿！登入就送十連抽，還有五星強力幹員等你來拿！</p>
                                        <v-flex align-center justify-center class="d-flex heart">
                                            <v-icon left color="red">mdi-cards-heart</v-icon>
                                            當前票數：{{ counter }}{{ model }}
                                        </v-flex>
                                        <v-btn class="mt-6 mx-auto" text @click="Start"><img src="@/assets/images/tp-btn.png" /></v-btn>
                                        <v-flex align-center justify-center class="d-flex share-line mt-5 ">
                                            分享至：
                                            <v-btn text fab color="#fff"><img src="../assets/images/facebook-ico.png" /></v-btn>
                                            <v-btn text fab color="#fff"><img src="../assets/images/line-ico.png" /></v-btn>
                                        </v-flex>
                                    </div>
                                </v-row>
                            </v-sheet>
                        </v-expand-transition>
                        <v-slide-group v-model="model" class="pa-4" show-arrows mandatory>
                            <v-slide-item v-for="n in 6" :key="n" v-slot:default="{ toggle }">
                                <v-card class="ma-3 mx-5" max-width="181px" @click="toggle">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-scale-transition>
                                            <img :src="`${VoteItems.ThumImg}`" height="130" />
                                        </v-scale-transition>
                                    </v-row>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                    <ShareBtn />
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import TopNavM from '@/components/TopNavM'
import ShareBtn from '@/components/ShareBtn'
import { api } from '@/request/api'

export default {
    name: 'Item',
    components: {
        TopNavM,
        ShareBtn,
    },
    data: () => ({
        VoteItems: [], //当前页显示内容
        model: null,
        counter: 1000,
    }),
    created() {
        this.getVoteItems()
    },
    methods: {
        async getVoteItems() {
            let { data } = await api.get('/voteitems.json')
            var voteId = this.$route.params.id
            this.VoteItems = data[voteId - 1]
            // console.log(voteId)
            // console.log(this.VoteItems)
        },
        Start() {
            this.counter += 1
        },
    },
}
</script>
<style lang="scss">
body {
    background: #000;
}
.row {
    position: relative;
}
.high100 {
    min-height: 100%;
}
.works-wrap {
    .top-navm {
        position: absolute;
        display: none;
    }

    background-size: cover;
    position: relative;
    z-index: 2;
    .large-bg {
        background: url(../assets/images/xl-bg.jpg) no-repeat center center;
        background-size: cover;
        border-top: 5px solid #1c5de0;
        border-bottom: 5px solid #1c5de0;
        h2,
        p {
            color: #000;
        }
        .v-sheet {
            background: 0;
        }
        .v-image {
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }
        .v-slide-group {
            background: #bdbdbdb5;
            border-top: 2px solid #fff;
            img {
                object-fit: cover;
                border: 1px solid #fff;
            }
        }
        .v-responsive__content {
            width: 100% !important;
        }
        .text-wrap {
            margin-left: 25px;
            max-width: 295px;
            width: 100%;
            h3 {
                background: #1c5de0;
                padding: 0.03rem 0.65rem;
                span {
                    float: right;
                }
            }
            .heart {
                font-size: 1.25rem;
                width: 100%;
                color: #000;
            }
            .v-btn {
                height: auto;
                display: block;
            }
            .v-btn:hover {
                border-bottom: 0;
            }
        }
        .share-line {
            font-size: 1.2rem;
            color: #000;
            img {
                max-width: 45px;
                height: 45px;
                background: #fff;
                border-radius: 50%;
            }
        }
    }
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
