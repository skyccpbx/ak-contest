<template>
    <div class="contag vote-container">
        <TopNavM class="top-navm" />
        <v-main class="about-container">
            <header class="top-banner top-banner2 text-center">
                <img class="hidden-md-and-up" src="../assets/images/top-mb.jpg" />
                <img class="hidden-sm-and-down" src="../assets/images/top-banner2.jpg" />
                <div class="slogan-vnum">
                    <v-img contain src="../assets/images/slogan.png"></v-img>
                    <span class="vnum transition-swing elevation-24">當前總投票數:{{ total }}</span>
                </div>
            </header>
            <div class="d-flex flex-md-row flex-column top-breadcrumbs transition-swing elevation-24 justify-center align-center">
                <v-img contain max-width="197px" class="tp-title" src="../assets/images/tp-title.png"></v-img>
                <v-breadcrumbs class="flex-md-row flex-column">
                    <li>
                        <a @click="fbLogin()" class="fbLogin v-breadcrumbs__item" color="#1a76f2">
                            <span>
                                登入Facebook
                                <v-icon class="notranslate text-decoration-none d-inline-block" color="#1a76f2">
                                    mdi-facebook
                                </v-icon>
                            </span>
                        </a>
                    </li>
                    <li class="v-breadcrumbs__divider">
                        <v-icon class="hidden-md-and-up" color="theme--dark ">
                            mdi-transfer-down
                        </v-icon>
                        <v-icon class="hidden-sm-and-down" color="theme--dark">
                            mdi-fast-forward
                        </v-icon>
                    </li>
                    <li><a class="v-breadcrumbs__item">成功登入後即可進行投票</a></li>
                    <li class="v-breadcrumbs__divider">
                        <v-icon class="hidden-md-and-up" color="theme--dark ">
                            mdi-transfer-down
                        </v-icon>
                        <v-icon class="hidden-sm-and-down" color="theme--dark">
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
            <v-container class="my-0">
                <v-row class="vote-row">
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
                    <v-flex class="search-box d-flex flex-md-row flex-column justify-space-between align-start">
                        <h1 @click="router_group()"><img src="../assets/images/vote-tit01.png" /></h1>

                        <div class="d-flex flex-md-row flex-column justify-end align-center searchfield">
                            <p class="mt-3 mb-0 ml-0" color="#0049dd">
                                <span v-if="$route.params.GroupID === 'cosplay'">Cosplay -競賽組當前剩餘票數：{{ currentGroupTimes }}</span>
                                <span v-else-if="$route.params.GroupID === 'illustration'">插畫 -競賽組當前剩餘票數：{{ currentGroupTimes }}</span>
                            </p>
                            <v-flex class="d-flex justify-end align-center search-field">
                                <v-text-field type="text" flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="輸入檢索編號" class="mt-2" v-model="keyWord" @keyup.enter="SearchBtn()"></v-text-field>
                                <v-btn class="mt-2" elevation="2" text @click="SearchBtn()"><img src="../assets/images/search-ico.png" /></v-btn>
                            </v-flex>
                            <v-snackbar class="mt-16 d-flex align-center justify-center" v-model="snackbar" multi-line timeout="3000" color="#B71C1C">
                                <div class="d-flex align-center justify-center">
                                    <v-icon text>mdi-alert</v-icon>
                                    <p class="ml-2 mb-0 mr-0">{{ ErrText }}</p>
                                </div>

                                <template v-slot:action="{ attrs }">
                                    <v-btn color="#fff" text v-bind="attrs" @click="snackbar = false">
                                        <v-icon top>mdi-window-close</v-icon>
                                    </v-btn>
                                </template>
                            </v-snackbar>
                        </div>
                    </v-flex>
                    <v-row class="mb-6 vote-item">
                        <v-col class="col-lg-3 col-md-4 col-6 col-vote-m transition-swing" v-for="(item, index) in VoteItems" :key="index">
                            <v-card class="mx-auto" max-width="344" v-if="VoteItems[index].ImgList">
                                <span class="item-num">NO: {{ VoteItems[index].Id }}</span>
                                <router-link :to="`/${$route.params.GroupID}/vote/${VoteItems[index].Id}`"><v-img class="thum-img" :src="VoteItems[index].ImgList.ThumImg[0]" height="200" /></router-link>
                                <div class="card-bg">
                                    <v-card-title>
                                        <span class="d-inline-block text-truncate">{{ VoteItems[index].Title }}</span>
                                    </v-card-title>
                                    <v-card-actions v-if="$route.params.GroupID !== 'amateur'">
                                        <v-btn icon color="red">
                                            <v-icon>mdi-cards-heart</v-icon>
                                        </v-btn>
                                        <span class="text-md-body-1">{{ VoteItems[index].count || 0 }}</span>

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
                    <div class="footer-loading">
                        <v-btn block color="secondary" :loading="loading" @click="nextPage()">
                            什么也没有了！@ ！@
                        </v-btn>
                    </div>

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
        // 错误提示
        ErrText: '',
        dialog: 'false',
        currentGroupTimes: 4,
        currentUserEmail: '',
        currentUser: '',
        total: 0,
        totalTimes: 0,
    }),
    async created() {
        for (let i = 0; i < 99; i++) {
            this.VoteItems.push({
                count: Math.random() * this.VoteItems.length,
            })
        }
        // 计算一共有几页
        this.totalPage = Math.ceil(this.VoteItems.length / this.pageSize)
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage
        // 获取router_groupId
        this.router_group()
        // 获取json数据
        await this.getVoteItems()
        // 添加滚动事件，检测滚动到页面底部
        window.addEventListener('scroll', this.nextPage)

        //test
        this.$store.commit('setUser', this.currentUser)
        console.log(this.$store.state.baseUrl, 'store baseurl')
        const self = this

        window.fbAsyncInit = function() {
            FB.init({
                appId: '1452974251501275',
                xfbml: true,
                autoLogAppEvents: true,
                version: 'v8.0',
            })
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    self.currentUser = response.authResponse.userID
                    self.accessToken = response.authResponse.accessToken
                    self.$store.commit('setToken', self.accessToken)
                    self.$store.commit('setUser', self.currentUser)
                    self.getUserLogs()
                } else {
                    console.log('请登录facebook(01)')
                }
            })
        }
        ;(function(d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) {
                return
            }
            js = d.createElement(s)
            js.id = id
            js.src = '//connect.facebook.net/en_US/sdk.js'
            fjs.parentNode.insertBefore(js, fjs)
        })(document, 'script', 'facebook-jssdk')
    },

    methods: {
        fbLogin(id) {
            const self = this
            FB.login(function(response) {
                if (response.authResponse) {
                    self.currentUser = response.authResponse.userID
                    self.accessToken = response.authResponse.accessToken
                    self.$store.commit('setToken', self.accessToken)
                    self.$store.commit('setUser', self.currentUser)
                    // Start(id)
                } else {
                    console.log('User cancelled login or did not fully authorize.')
                }
            })
        },
        async getVoteItems() {
            const { data } = await api.get('/data/voteitems.json')
            const begin = (this.currentPage - 1) * this.pageSize
            const end = this.currentPage * this.pageSize
            const GroupData = data.filter(item => item.GroupId == this.router_groupID)
            console.log(this.router_groupID)

            this.VoteItems = GroupData.slice(begin, end)
            this.VoteLength = GroupData

            await this.getVoteLogs()
        },
        router_group() {
            this.router_groupID = this.$route.params.GroupID
            //this.router_groupID = 'cosplay'
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
        SearchBtn() {
            var id = this.keyWord
            id = parseInt(id)
            if (isNaN(id) || id < 1 || id > this.VoteLength.length) {
                this.ErrText = '搜索不到該作品，請輸入正確的編號!'
                this.snackbar = true
                return
            }
            this.$router.push({ path: `/${this.$route.params.GroupID}/vote/${id}` })
        },
        Start(id) {
            if (!this.accessToken) {
                this.fbLogin()
                return
            }
            console.log(id)
            const currentVoteItem = this.VoteItems.find(p => p.Id == id)
            if (!currentVoteItem) {
                return
            }
            const url = this.$store.state.baseUrl + '/api/vote/v2/mrfz_cosplay?accessToken=' + this.accessToken
            const postData = { log: { groupid: this.router_groupID, itemid: id } }
            api.post(url, postData)
                .then(ret => {
                    const { data } = ret
                    if (data) {
                        const curGroup = data.group.find(p => p.id == this.router_groupID)
                        if (curGroup) {
                            this.currentGroupTimes = curGroup.times
                        }
                        for (const g of data.group) {
                            this.totalTimes += g.times
                        }
                    }
                    this.total++
                    currentVoteItem.count++
                    if (this.totalTimes <= 0 && !this.currentUserEmail) {
                        this.$refs.Dialogs.OpenDialog()
                    }
                })
                .catch(ret => {
                    if (ret.code == 10001) {
                        this.ErrText = '您今天已經投過票了!'
                        this.snackbar = true
                        if (this.totalTimes <= 0 && !this.currentUserEmail) {
                            this.$refs.Dialogs.OpenDialog()
                        }
                        return
                    }
                    if (ret.code == 10000 && !this.currentUserEmail) {
                        //投票次数用完，可以填写email
                        this.$refs.Dialogs.OpenDialog()
                        return
                    }
                })
        },
        async getVoteLogs() {
            try {
                const url = this.$store.state.baseUrl + '/api/vote/v2/mrfz_cosplay/votelogs?accessToken=' + this.accessToken
                const { data, total } = await api.get(url)
                const GroupData = data.filter(item => item.groupid == this.router_groupID)
                console.log(GroupData)
                for (const item of this.VoteItems) {
                    const log = GroupData.find(p => p.itemid == item.Id)
                    item.count = log ? log.count : 0
                }
                this.total = total
            } catch (err) {
                console.log(err)
            }
        },
        async getUserLogs() {
            if (!this.currentUser) {
                return
            }
            const url = this.$store.state.baseUrl + '/api/vote/v2/mrfz_cosplay/userlogs?accessToken=' + this.accessToken
            try {
                const { data, code, userdata } = await api.get(url)
                if (code == 0 && data) {
                    const curGroup = data.group.find(p => p.id == this.router_groupID)
                    if (curGroup) {
                        this.currentGroupTimes = curGroup.times
                    }
                    if (userdata && userdata.email) {
                        this.currentUserEmail = userdata.email
                        console.log(this.currentUserEmail)
                    }
                    for (const g of data.group) {
                        this.totalTimes += g.times
                    }
                }
                console.log(data)
            } catch (err) {
                console.log(err)
            }
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
    .v-btn:not(.v-btn--round).v-size--default {
        height: 30px;
        min-width: 64px;
        padding: 0 16px;
    }
}
.v-snack__wrapper.theme--dark {
    background-color: #333333;
    color: rgba(255, 255, 255, 1);
}
.VueStar__icon div {
    padding: 4px 14px;
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
            bottom: 65px;
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
        .fbLogin span {
            border-bottom: 1px solid #fff;
            padding-bottom: 3px;
            color: #fff;
        }
        .fbLogin span:hover {
            color: #1a76f2;
            border-bottom: 1px solid #1a76f2;
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
            width: 60%;
            text-align: left;
            .v-input {
                max-width: 45%;
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
        .VueStar__ground {
            width: auto !important;
            height: auto !important;
        }
        .card-bg {
            background: url(../assets/images/vote-item-bottom.png) no-repeat center center;
            background-size: cover;
            .v-card__title {
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                font-size: 0.9rem;
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
                font-size: 18px;
            }
            .v-btn.v-size--default {
                font-size: 0.85rem;
            }
        }
    }
    .footer-loading {
        width: 100%;
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
    .slogan-vnum {
        position: absolute;
        bottom: 40px !important;
        left: 50%;
        transform: translateX(-50%);
    }
}

@media (max-width: 750px) {
    .about-container .search-box .v-btn:not(.v-btn--round).v-size--default {
        height: auto;
        min-width: 45px;
        padding: 0;
    }
    .tp-title {
        margin-top: 10px;
    }
    .top-banner2 {
        margin-top: 60px;
    }

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
        .VueStar__icon .v-btn:not(.v-btn--round).v-size--default {
            height: 28px;
            min-width: 64px;
            padding: 0 10px !important;
        }
        .v-snack--multi-line .v-snack__wrapper {
            min-height: 48px;
        }
    }
    .about-container .top-banner .slogan-vnum .v-image {
        margin-bottom: 15px;
        max-width: 62vw;
        margin-left: -1.8vw;
    }
    .about-container .top-banner .slogan-vnum span {
        padding: 5px 12px;
        text-align: center;
        font-size: 2vh;
    }
    .vote-container {
        .top-breadcrumbs a {
            color: #fff;
            font-size: 1rem;
            font-weight: 500;
            padding: 0 0 4px;
        }
        .top-breadcrumbs {
            background: #000;
            margin-top: -8px;
            margin-bottom: -25px;
        }
        .searchfield .v-input {
            max-width: 100% !important;
        }
        .search-box {
            margin-top: -10px;
            margin-bottom: 10px;
        }
        .row {
            margin: 0 -2px;
        }
        .container {
            width: 100%;
            padding: 6px;
            margin-right: auto;
            margin-left: auto;
        }
        .col-vote-m {
            padding: 3px 3px !important;
        }
        .v-btn:not(.v-btn--round).v-size--default {
            height: 28px;
            min-width: 64px;
            padding: 0 16px;
            margin-top: 0;
        }
        .thum-img {
            height: 155px !important;
        }
        .search-field {
            width: 100%;
        }
    }
    .about-container .vote-item .like-btn {
        border: 1px solid #fff;
        border-radius: 0;
        background-color: #04040475 !important;
        font-size: 16px;
        position: relative;
        top: 0px;
        right: 3px;
        cursor: pointer;
        padding: 0 !important;
    }
    .about-container .vote-item .item-num {
        color: #000;
        width: 98%;
        display: block;
        text-align: right;
        font-weight: 500;
        padding: 0;
        margin-bottom: -7px;
        font-size: 0.8rem;
    }
    .about-container .vote-item .card-bg .v-card__title {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 0.9rem;
        word-break: break-all;
        margin-bottom: -5px;
        padding: 10px 10px 0;
    }
    .about-container .search-box .searchfield {
        width: 100%;
        text-align: left;
        align-items: flex-end !important;
        margin-top: -47px;
    }
    .about-container .search-box .v-input__control {
        min-height: 35px;
        padding: 0;
        border-radius: 0;
        border: 1px solid #93b5fb5c;
    }
    .search-field img {
        height: 37px;
    }
    footer .img-2 {
        margin-right: 0;
        width: 35px;
        margin-bottom: -20px;
        margin-left: 0;
    }
}
</style>
