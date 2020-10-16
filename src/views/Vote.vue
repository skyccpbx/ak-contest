<template>
    <div class="contag vote-container">
        <TopNavM class="top-navm" />
        <v-main class="about-container">
            <header class="top-banner text-center">
                <img src="../assets/images/top-banner2.jpg" />
                <div class="slogan-vnum">
                    <v-img contain src="../assets/images/slogan.png"></v-img>
                    <span class="vnum transition-swing elevation-24">當前總投票數:{{ VoteLength.length }}{{ counter }}</span>
                </div>
            </header>
            <div class="d-flex top-breadcrumbs transition-swing elevation-24 justify-center align-center">
                <v-img contain max-width="197px" src="../assets/images/tp-title.png"></v-img>
                <v-breadcrumbs class="">
                    <li><a class="v-breadcrumbs__item">登入Facebook</a></li>
                    <li class="v-breadcrumbs__divider">
                        <v-icon color="theme--dark">
                            mdi-fast-forward
                        </v-icon>
                    </li>
                    <li><a class="v-breadcrumbs__item">成功登入後即可進行投票</a></li>
                    <li class="v-breadcrumbs__divider">
                        <v-icon color="theme--dark">
                            mdi-fast-forward
                        </v-icon>
                    </li>
                    <li>
                        <a class="v-breadcrumbs__item">
                            對自己喜愛的作品點下
                            <v-icon class="mx-2" color="red">
                                mdi-cards-heart
                            </v-icon>
                            進行投票
                        </a>
                    </li>
                </v-breadcrumbs>
            </div>
            <v-container class="mm-6">
                <v-row class="flex-column" justify="center">
                    <p class="my-8">
                        2020/12/25-2021/1/10投票期間，每個FB帳號
                        <br />
                        1) 每天參與競賽組投票，每組擁有4票，共8票。（每天00:00重置）
                        <br />
                        2) 一個作品一天只能投1票。
                        <br />
                        3) 投票後無法更改或取消投票。
                        <br />
                        每日投盡當天的8張票後，即可輸入EMAIL參與「遊戲周邊銅賞」的抽獎活動。登記次數越多獲獎機率越高！
                        <br />
                        銅賞得獎者將於2021/1/15收到主辦單位寄發之EMAIL中獎通知，該名單將同步公告於粉絲團。
                        <br />
                    </p>
                    <v-flex class="search-box d-flex justify-space-between align-start">
                        <h1><img src="../assets/images/vote-tit01.png" /></h1>

                        <div class="d-flex justify-end align-center searchfield">
                            <p class="mr-12 mt-3 mb-0 ml-0" color="#0049dd">Cosplay-競賽組當前剩餘票數：8</p>
                            <v-text-field type="text" flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="輸入檢索編號" class="mt-2" v-model="keyWord" @keyup.enter="SearchBtn()"></v-text-field>
                            <v-btn class="mt-2" elevation="2" text @click="SearchBtn()"><img src="../assets/images/search-ico.png" /></v-btn>
                            <v-snackbar class="mt-16 d-flex align-center justify-center" v-model="snackbar" multi-line timeout="3000" color="#0049dd">
                                <span class="body-1">
                                    <v-icon left>mdi-alert</v-icon>
                                    {{ text }}
                                </span>

                                <template v-slot:action="{ attrs }">
                                    <v-btn color="#fff" text v-bind="attrs" @click="snackbar = false">
                                        <v-icon top>mdi-window-close</v-icon>
                                    </v-btn>
                                </template>
                            </v-snackbar>
                        </div>
                    </v-flex>
                    <v-row class="mb-6 vote-item">
                        <v-col class="col-lg-3 col-md-4 col-6 transition-swing" v-for="(item, index) in VoteItems" :key="index">
                            <v-card class="mx-auto" max-width="344">
                                <span class="item-num">NO: {{ VoteItems[index].Id }}</span>
                                <router-link :to="`/vote/${VoteItems[index].Id}`"><v-img :src="`${VoteItems[index].ThumImg}`" height="200" /></router-link>
                                <div class="card-bg">
                                    <v-card-title>
                                        <span class="d-inline-block text-truncate">{{ VoteItems[index].Title }}</span>
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-btn icon color="red">
                                            <v-icon>mdi-cards-heart</v-icon>
                                        </v-btn>
                                        <span class="text-md-body-1">{{ VoteItems[index].Id }}{{ counter }}</span>

                                        <v-spacer></v-spacer>

                                        <vue-star class="px-3 like-btn elevation-24" animate="animate__animated animate__bounceIn" color="#ff3b3b">
                                            <v-btn class="v-btn v-btn--flat star-btn" slot="icon" @click="Start(VoteItems[index].Id)">
                                                <v-icon text left class="mr-2">mdi-thumb-up</v-icon>
                                                Like
                                            </v-btn>
                                        </vue-star>
                                    </v-card-actions>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                    <footer>
                        <v-btn block color="secondary" :loading="loading" @click="nextPage()">
                            什么也没有了！@ ！@
                        </v-btn>
                    </footer>

                    <ShareBtn />
                </v-row>
                <Dialogs ref="Dialogs" class="dialogs-components" />
            </v-container>
        </v-main>
    </div>
</template>

<script>
import TopNavM from '@/components/TopNavM'
import ShareBtn from '@/components/ShareBtn'
import Dialogs from '@/components/Dialogs'
import { api } from '@/request/api'
import VueStar from 'vue-star'
import 'animate.css'

export default {
    name: 'Vote',
    components: {
        TopNavM,
        ShareBtn,
        Dialogs,
        VueStar,
    },
    data: () => ({
        VoteItems: [], //当前页显示内容
        active: false,
        counter: 10,
        totalPage: 1, // 统共页数，默认为1
        currentPage: 1, //当前页数 ，默认为1
        pageSize: 12, // 每页显示数量
        loading: true,
        VoteLength: [],
        keyWord: '',
        // 搜索后的展示数据
        searchList: [],
        snackbar: false,
        text: '搜索不到該作品，請輸入正確的編號!',
        dialog: 'false',
    }),
    created() {
        for (let i = 0; i < 99; i++) {
            this.VoteItems.push({
                count: Math.random() * this.VoteItems.length,
            })
        }
        // 计算一共有几页
        this.totalPage = Math.ceil(this.VoteItems.length / this.pageSize)

        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage
        this.getVoteItems()
    },
    mounted() {
        // 添加滚动事件，检测滚动到页面底部
        window.addEventListener('scroll', this.nextPage)
    },
    methods: {
        async getVoteItems() {
            let { data } = await api.get('/voteitems.json')

            const begin = (this.currentPage - 1) * this.pageSize
            const end = this.currentPage * this.pageSize
            this.VoteItems = data.slice(begin, end)

            this.VoteLength = data
            //console.log(this.VoteLength)
        },
        // 下一页
        nextPage() {
            setTimeout(() => {
                this.pageSize += 2
                //console.log(this.totalPage)
                if (this.pageSize > this.VoteLength.length) {
                    this.loading = false
                    return
                }
                this.getVoteItems()
            }, 600)
        },
        SearchBtn(e) {
            var id = this.keyWord
            id = parseInt(id)
            if (isNaN(id) || id < 1 || id > this.VoteLength.length) {
                this.snackbar = true
                //alert('搜索不到該作品，請輸入正確的編號!')
                return
            }
            this.$router.push({ path: `${/vote/}${id}` })
        },
        Start(id) {
            console.log(id)
            this.counter += 1
            this.$refs.Dialogs.OpenDialog()
        },
    },
}
</script>

<style lang="scss">
input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
}
.VueStar__icon {
    width: 100%;
    z-index: 100;
}

.VueStar__icon div {
    padding: 4px 14px;
}
.VueStar__ground {
    width: auto;
    height: auto;
}
.VueStar__decoration {
    margin-top: -33px;
    margin-left: -28px;
}
.about-container {
    position: relative;
    .top-banner {
        position: relative;
        img {
            width: 100%;
        }
        .slogan-vnum {
            position: absolute;
            bottom: 35px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            .v-image {
                margin-bottom: 20px;
                max-width: 40vw;
                margin-left: -1.8vw;
            }
            span {
                width: 50vw;
                max-width: 260px;
                padding: 10px 13px;
                text-align: center;
                background: url(../assets/images/vote-tbg.png) no-repeat center center;
                background-size: cover;
                font-size: 2vh;
            }
        }
    }
    p {
        font-size: 17px;
        margin-left: 42px;
        span {
            color: #00deff;
        }
    }
    .v-speed-dial {
        padding: 4px;
        border-radius: 50%;
        background: #fff;
        z-index: 10;
    }
    .copybtn span {
        color: #fff !important;
        font-size: 16px;
    }
    .top-breadcrumbs {
        background: #000;
        margin-top: -8px;
        a {
            color: #fff;
            font-size: 1.15rem;
            font-weight: 500;
            padding: 0 2vw;
        }
        ul {
            max-width: 100%;
        }

        .v-breadcrumbs li .v-icon {
            font-size: 1.55rem;
        }
    }
    .search-box {
        .v-btn:not(.v-btn--round).v-size--default {
            height: auto;
            min-width: 80px;
            padding: 0;
        }
        .searchfield {
            width: 70%;
            text-align: left;
            .v-input {
                max-width: 35%;
            }
        }
        .body-1 {
            color: #fff;
        }
        .v-input__control {
            min-height: 42px;
            padding: 0;
            border-radius: 0;
            border: 1px solid #93b5fb5c;
        }
    }
    .vote-item {
        .v-sheet.v-card {
            border-radius: 0;
            border-top: 3px solid #0049dd;
            background: url(../assets/images/vote-item.png) no-repeat center center;
            background-size: cover;
        }
        .card-bg {
            background: url(../assets/images/vote-item-bottom.png) no-repeat center center;
            background-size: cover;
            .v-card__title {
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                font-size: 1.15rem;
                font-weight: 500;
                letter-spacing: 0;
                line-height: 1rem;
                word-break: break-all;
                margin-bottom: -16px;
                span {
                    max-width: 210px;
                }
            }
        }
        .star-btn {
            box-shadow: inherit !important;
            color: inherit !important;
        }
        .v-image {
            margin: 5px;
        }
        .item-num {
            color: #000;
            width: 98%;
            display: block;
            text-align: right;
            font-weight: 500;
            padding: 0;
            margin-bottom: -7px;
        }
        .like-btn {
            border: 1px solid #fff;
            border-radius: 0;
            background-color: #04040475 !important;
            font-size: 16px;
            position: relative;
            top: -6px;
            right: 3px;
            cursor: pointer;
            padding: 0 !important;
            .v-icon {
                font-size: 20px;
            }
        }
    }
}
@media (max-width: 1280px) {
    .about-container {
        .vote-item {
            .card-bg {
                .v-card__title span {
                    max-width: 170px;
                }
            }
            .like-btn {
                font-size: 14px;
            }
        }
    }
}
@media (max-width: 750px) {
    .about-container {
        h1 img {
            zoom: 72%;
        }
        .row {
            margin: 0;
        }
        p {
            font-size: 12px;
            margin-left: 2px;
            letter-spacing: 0em !important;
            span {
                color: #00deff;
            }
        }
        .copybtn span {
            color: #fff !important;
            font-size: 12px;
        }
        .v-btn:not(.v-btn--round).v-size--default {
            height: 28px;
            min-width: 64px;
            padding: 0 16px;
            margin-top: 5px;
        }
        .v-snack--multi-line .v-snack__wrapper {
            min-height: 48px;
        }
    }
}
</style>
