<template>
    <v-app>
        <v-main class="works-wrap contag high100">
            <TopNavM class="top-navm" />
            <header class="item-top hidden-md-and-up top-banner top-banner2 text-center ">
                <img class="" src="../assets/images/top-mb.jpg" />
                <div class="slogan-vnum">
                    <v-img contain src="../assets/images/slogan.png"></v-img>
                </div>
            </header>
            <v-container class="item-container">
                <v-row class="my-6 item-row" justify="center">
                    <v-flex class="d-flex justify-center align-start">
                        <h1><img src="../assets/images/vote-tit01.png" /></h1>
                        <v-spacer></v-spacer>
                        <v-btn class="mt-2 go-back" elevation="2" text @click="$router.back(-1)">❮ 返回上一頁</v-btn>
                    </v-flex>
                    <v-sheet class="mx-auto large-bg" elevation="8" max-width="1360" width="100%">
                        <v-expand-transition>
                            <v-sheet v-if="model != null">
                                <v-row class="fill-height ma-5 align-start group-img" align="center">
                                    <v-img :src="imgSrc" class="transition-swing" contain height="520" max-width="1000px" />
                                    <div class="text-wrap">
                                        <h3>
                                            作品編號
                                            <span>NO:{{ VoteItems.Id }}</span>
                                        </h3>
                                        <h2 class="my-5">{{ VoteItems.Title }}</h2>
                                        <p class="mb-10">
                                            {{ $route.params.GroupID }}
                                            {{ VoteItems.Author }}
                                            登入就送十連抽，還有五星強力幹員等你來拿！登入就送十連抽，還有五星強力幹員等你來拿！
                                        </p>
                                        <span v-if="$route.params.GroupID !== 'amateur'">
                                            <v-flex align-center justify-center class="d-flex heart">
                                                <v-icon left color="red">mdi-cards-heart</v-icon>
                                                當前票數：{{ counter }}
                                            </v-flex>
                                            <v-btn class="mt-6 mx-auto tp-btn" text @click="Start"><img src="@/assets/images/tp-btn.png" /></v-btn>
                                        </span>
                                        <v-flex align-center justify-center class="d-flex share-line mt-5 ">
                                            分享至：
                                            <v-btn text fab color="#fff" @click="fbShare()"><img src="../assets/images/facebook-ico.png" /></v-btn>
                                            <v-btn text fab color="#fff" @click="lineShare()"><img src="../assets/images/line-ico.png" /></v-btn>
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
                                </v-row>
                            </v-sheet>
                        </v-expand-transition>
                        <v-slide-group v-model="model" class="pa-4" center show-arrows mandatory v-if="VoteItems.ImgList" v-show="VoteItems.ImgList.ThumImg.length > 1">
                            <v-slide-item v-for="(item, index) in VoteItems.ImgList.ThumImg.length" :key="index" v-slot:default="{ toggle }">
                                <v-card class="ma-3 mx-5" max-width="181px" @click="toggle">
                                    <v-row class="fill-height" align="center" justify="center">
                                        <v-scale-transition>
                                            <img :src="VoteItems.ImgList.ThumImg[index]" height="130" @click="getLargeImg(VoteItems.ImgList.LargeImg[index])" />
                                        </v-scale-transition>
                                    </v-row>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                    <ShareBtn />
                </v-row>
            </v-container>
            <Dialogs ref="Dialogs" class="dialogs-components" />
        </v-main>
    </v-app>
</template>

<script>
import TopNavM from '@/components/TopNavM'
import ShareBtn from '@/components/ShareBtn'
import { api } from '@/request/api'
import Dialogs from '@/components/Dialogs'

export default {
    name: 'Item',
    components: {
        TopNavM,
        ShareBtn,
        Dialogs,
    },
    data: () => ({
        VoteItems: [], //当前页显示内容
        model: null,
        counter: 1000,
        imgSrc: '',
        snackbar: false,
        ErrText: '',
        dialog: 'false',
    }),
    created() {
        this.getVoteItems()
    },
    methods: {
        async getVoteItems() {
            let { data } = await api.get('/data/voteitems.json')
            var voteId = this.$route.params.id
            const GroupData = data.filter(item => item.GroupId == this.$route.params.GroupID)
            this.VoteItems = GroupData[voteId - 1]
            this.imgSrc = this.VoteItems.ImgList.LargeImg[0]
            //console.log(this.imgSrc)

            this.getVoteLogs()
        },
        Start() {
            const voteId = this.$route.params.id
            const groupId = this.$route.params.GroupID
            const user = this.$store.state.currentUser
            const accessToken = this.$store.state.accessToken
            if (!user && !accessToken) {
                return
            }
            const url = this.$store.state.baseUrl + '/api/vote/v2/mrfz_cosplay?accessToken=' + accessToken
            const postData = { log: { groupid: groupId, itemid: voteId } }
            api.post(url, postData)
                .then(ret => {
                    let currentGroupTimes = 4
                    let totalTiems = 0
                    const { data } = ret
                    if (data) {
                        const curGroup = data.group.find(p => p.id == groupId)
                        if (curGroup) {
                            currentGroupTimes = curGroup.times
                        }
                        for (const g of data.group) {
                            totalTiems += g.times
                        }
                    }
                    this.counter++
                    if (totalTiems <= 0 && !this.currentUserEmail) {
                        this.$refs.Dialogs.OpenDialog()
                    }
                })
                .catch(ret => {
                    if (ret.code == 10001) {
                        this.ErrText = '您今天已經投過票了!'
                        this.snackbar = true
                        return
                    }
                    if (ret.code == 10000 && !this.currentUserEmail) {
                        //投票次数用完，可以填写email
                        this.$refs.Dialogs.OpenDialog()
                        return
                    }
                })
        },
        getLargeImg(imgSrc) {
            this.imgSrc = imgSrc
            //console.log(imgSrc)
        },
        async getVoteLogs() {
            try {
                const voteId = this.$route.params.id
                const groupId = this.$route.params.GroupID
                const url = this.$store.state.baseUrl + '/api/vote/v2/mrfz_cosplay/votelogs'
                const { data, total } = await api.get(url)
                const GroupData = data.filter(item => item.groupid == groupId)
                const log = GroupData.find(p => p.itemid == voteId)
                this.counter = log ? log.count : 0
            } catch (err) {
                console.log(err)
            }
        },
        fbShare() {
            // window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, 'window', 'width=650, height=550,personalbar=0,toolbar=0,scrollbars=1,resizable=1')
            // return false

            var url = 'https://www.facebook.com/dialog/share?app_id=1516121445223682&display=popup&href=' + encodeURIComponent(location.href) + '&redirect_uri=' + encodeURIComponent(location.href)
            window.open(url)
        },
        lineShare() {
            console.log(this.BASE_URL)
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
.group-img {
    .v-image__image--contain {
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
    }
}
.go-back span {
    font-size: 1.2rem;
}
.v-snack__content p {
    color: #fff !important;
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
        .v-slide-group__content {
            justify-content: center;
            justify-items: center;
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
    .tp-btn {
        position: relative;
        right: -6px;
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

    .item-top {
        margin-top: 60px;
        position: relative;
        .slogan-vnum {
            position: absolute;
            left: 50%;
            top: 45%;
            transform: translateX(-50%) translatey(-50%);
            max-width: 80%;
        }
    }
    .group-img .v-image {
        width: 100%;
        height: 100% !important;
        margin-bottom: 10px;
    }
    .item-container {
        h1 {
            max-width: 130px;
        }
        .row {
            margin: 5px !important;
        }
    }
    .v-application .item-row {
        margin: 0 -6px !important;
    }
    .works-wrap .large-bg {
        border: 3px solid #1c5de0;
    }
    .works-wrap .large-bg .text-wrap {
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        background: #141414;
        color: #fff;
    }
    .works-wrap .large-bg h2,
    .works-wrap .large-bg p {
        color: #fff;
        padding: 0 12px;
        margin-bottom: 6px !important;
        font-size: 12px;
    }
    .works-wrap .large-bg h2 {
        font-size: 16px;
        margin-top: 10px !important;
        margin-bottom: 1px !important;
    }
    .works-wrap .large-bg .v-slide-group {
        background: #bdbdbdb5;
        border-top: 1px solid #fff;
        padding: 0 !important;
    }
    .works-wrap .large-bg .text-wrap h3 {
        background: #1c5de0;
        padding: 0.2rem 0.65rem;
        font-size: 1rem;
    }
    .works-wrap .large-bg .text-wrap .heart {
        font-size: 1rem;
        width: 100%;
        color: #fff;
        margin-bottom: -10px;
    }
    .works-wrap .large-bg .share-line {
        font-size: 1rem;
        color: #fff;
        margin-bottom: 10px;
        margin-top: 3px !important;
    }
    .v-slide-group__content .v-card {
        max-width: 120px !important;
        margin: 10px 5px !important;
        .row {
            margin: 0 !important;
        }
    }
    .v-slide-group__content .v-card img {
        height: 80px;
    }
    .v-slide-group__next,
    .v-slide-group__prev {
        align-items: center;
        display: flex;
        flex: 0 1 22px;
        justify-content: center;
        min-width: 22px;
    }
    .go-back span {
        font-size: 1rem;
        letter-spacing: 0;
    }
    .works-wrap .large-bg .text-wrap .v-btn {
        height: auto;
        display: block;
        max-width: 220px;
    }
    .works-wrap .large-bg .share-line img {
        max-width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 50%;
    }
    .works-wrap .large-bg .share-line .v-btn--fab.v-size--default {
        height: 50px;
        width: 50px;
    }
}
</style>
