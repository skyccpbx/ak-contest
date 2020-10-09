<template>
    <v-footer color="black lighten-1" padless>
        <v-container>
            <v-flex class="d-xl-flex d-lg-flex d-md-flex justify-center align-center  py-4">
                <img src="https://rescdn.imtxwy.com/ak/images/foot-logo.png" />
                <div class="link">
                    <v-btn href="http://i.txwy.tw/clause" target="_blank" text rounded>服務條款</v-btn>
                    <span class="">|</span>
                    <v-btn href="http://i.txwy.tw/secret" target="_blank" text rounded>保密規則</v-btn>
                </div>
                <img class="img-2" src="https://rescdn.imtxwy.com/wl/images/15+.png" />
            </v-flex>
            <v-col class="py-2 white--text text-center" cols="12">
                <p class="transition-swing text-caption">
                    *因遊戲內容涉及「性」- 遊戲角色穿著凸顯性特徵之服飾或裝扮但不涉及性暗示，故建議應列級別至少為「輔導十二歲級」。警語：*注意使用時間，避免沉迷於遊戲 *遊戲部分內容或服務需另行支付其他費用
                </p>
            </v-col>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({}),
}
</script>
<style lang="scss">
footer {
    color: #959595 !important;
    text-align: center;
    img {
        width: 70%;
        max-width: 500px;
        margin-right: 40px;
    }
    a,
    p {
        color: #959595 !important;
    }
    .link {
        margin-bottom: -20px !important;
    }
    .link a {
        margin: 0 -0.625rem;
    }
    .img-2 {
        margin-right: 0;
        width: 35px;
        margin-bottom: -20px;
        margin-left: 15px;
    }
}
@media (max-width: 750px) {
    footer {
        .link {
            margin-bottom: 0px !important;
        }
        .py-2 {
            padding: 0 !important;
        }
        .py-4 {
            padding: 0 !important;
        }
        .container {
            width: 100%;
            padding: 0 12px;
            margin-right: auto;
            margin-left: auto;
        }
    }
    .v-application .text-caption {
        font-size: 0.7rem !important;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: 0.0333333333em !important;
    }
}
</style>
