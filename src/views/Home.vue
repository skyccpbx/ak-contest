<template>
    <v-app>
        <v-main class="index-wrap">
            <TopNavM class="top-navm" />
            <v-container class="fill-height v-toolbar__content">
                <div class="logo"><img src="../assets/images/logo.png" /></div>
                <v-row class="flex-column index-row" justify="center" align="center">
                    <div class="slogan" absolute dark fab bottom right>
                        <img src="../assets/images/slogan.png" />
                    </div>
                    <div class="a-links my-5">
                        <router-link class="cosplay-btn" to="/cosplay"><img src="../assets/images/cosplay-btn.png" /></router-link>
                        <router-link class="tr-btn ml-2" to="/illustration"><img src="../assets/images/tr-btn.png" /></router-link>
                    </div>
                    <p class="p-tag">
                        本次活動將邀請所有喜愛《明日方舟》的博士們，根據遊戲中的世界觀進行二創創作，獲獎的作品，不僅可以在2021年台北國際電玩展活動現場中露出，更有機會親自參與年度盛事唷~歡迎大家來展現自己的實力聚焦群眾的目光，詮釋出專屬於Arknights的魅力吧！
                    </p>
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
    name: 'Home',
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
    background: #141414;
}
.theme--dark.v-application {
    background: #141414;
    color: #ffffff;
}
.row {
    position: relative;
}
.index-wrap {
    .top-navm {
        position: absolute;
        display: none;
    }
    background: url('../assets/images/index-bg.jpg') no-repeat center top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    position: relative;

    .go-top {
        display: none;
    }
    .index-row {
        .speed-dial {
            position: absolute;
            top: auto;
            bottom: 10px;
            right: 8%;
            width: auto;
            height: auto;
        }
        margin-top: 15%;
        position: relative;
    }
    .logo {
        position: absolute;
        top: 3%;
        right: 3%;
        max-width: 14%;
    }
    .slogan,
    .a-links {
        text-align: center;
        max-width: 52%;
    }
    .a-links a {
        max-width: 49%;
        display: inline-block;
    }
    .a-links a.cosplay-btn:hover {
        background: url('../assets/images/cosplay-btn-h.png') no-repeat top center;
        -webkit-background-size: contain;
        -moz-background-size: contain;
        background-size: contain;
        transition: 0.35s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }
    .a-links a.tr-btn:hover {
        background: url('../assets/images/tr-btn-h.png') no-repeat top center;
        -webkit-background-size: contain;
        -moz-background-size: contain;
        background-size: contain;
        transition: 0.35s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }
    .a-links a.cosplay-btn:hover img,
    .a-links a.tr-btn:hover img {
        opacity: 0;
        transition: 0.35s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    }
    .p-tag {
        max-width: 50%;
        background: rgb(0 0 0 / 65%);
        padding: 1%;
        font-size: 0.92rem;
    }
}
@media (max-width: 750px) {
    body,
    html {
        max-width: 100vw;
        overflow-x: hidden;
    }
    .speed-dial {
        position: fixed;
        right: 5%;
        top: auto;
        bottom: 6vh;
        width: 48px;
        height: 110px;
        z-index: 100;
        zoom: 90%;
    }
    .v-app-bar {
        display: none;
    }
    .v-main {
        padding-top: 0px !important;
    }

    .index-wrap {
        .top-navm {
            display: block;
            height: 100%;
            background: none;
            height: auto;
            position: relative;
            top: 6px;
            left: auto;
        }
        background: url('../assets/images/index-bgm.jpg') no-repeat center top;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        position: relative;
        .index-row {
            margin-top: 48%;
            position: relative;
        }
        .go-top,
        .ff-btn {
            display: none;
        }
        .logo {
            position: absolute;
            top: 3%;
            right: auto;
            max-width: 21%;
            left: 5%;
        }
        .slogan,
        .a-links {
            text-align: center;
            max-width: 92%;
        }
        .a-links a {
            max-width: 72%;
            display: inline-block;
        }
        .tr-btn {
            margin-left: 0px !important;
        }
        .p-tag {
            max-width: 92%;
            background: rgb(0 0 0 / 65%);
            padding: 1%;
            font-size: 0.7rem;
        }
        .index-row .speed-dial {
            position: absolute;
            top: auto;
            bottom: 32%;
            right: 3%;
            zoom: 85%;
        }
    }
}
</style>
