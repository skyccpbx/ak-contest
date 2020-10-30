<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="420px">
            <v-card class="dialog-card text-center px-3">
                <v-btn class="close-btn" top color="#fff" text @click="dialog = false"><v-icon text x-large>mdi-window-close</v-icon></v-btn>
                <v-card-title>
                    <span class="headline ma-auto mt-2 mb-2"><v-img contain max-width="356px" src="../assets/images/dialog-title.png"></v-img></span>
                </v-card-title>
                <v-card-text class="pb-0">
                    <v-container class="pa-0">
                        <v-row>
                            <v-col class="pb-4" cols="12">
                                <v-form ref="formDate" v-model="valid" lazy-validation><v-text-field v-model="email" :rules="emailRules" label="請輸入您的EMAIL" required></v-text-field></v-form>
                            </v-col>
                        </v-row>
                    </v-container>
                    <p class="mb-3 gr-zl">※個人資料僅作為本活動聯繫依據</p>
                </v-card-text>
                <v-card-actions class="text-center justify-center pb-5">
                    <v-btn color="#fff" text @click="validate"><img src="../assets/images/ok-btn.png" /></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { api } from '@/request/api'
export default {
    name: 'Dialogs',
    data: () => ({
        dialog: false,
        valid: true,
        email: '',
        emailRules: [v => !!v || '電子郵件為必填項', v => /.+@.+\..+/.test(v) || '請輸入正確的郵箱！'],
    }),
    methods: {
        OpenDialog() {
            setTimeout(() => {
                this.dialog = true
            }, 300)
        },
        async validate() {
            const vret = this.$refs.formDate.validate()
            if (!vret) return
            const url = this.$store.state.baseUrl + '/api/vote/v2/mrfz_cosplay/userdata?accessToken=' + this.$store.state.accessToken
            const postData = { email: this.email }
            try {
                await api.post(url, postData)
                this.$root.$data.currentUserEmail = email
            } catch (err) {
                console.log(err)
            } finally {
                this.dialog = false
            }
        },
        reset() {
            this.$refs.formDate.reset()
        },
    },
}
</script>

<style lang="scss">
.dialog-card {
    background: url(../assets/images/dialog-bg.png) no-repeat center center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    .v-text-field__slot {
        background: #fff;
        padding: 3px;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        border-radius: 3px;
    }
    .v-input input,
    label {
        color: #000 !important;
        text-align: center;
        max-height: 100%;
        font-size: 1.1rem;
    }
    .v-text-field {
        padding-top: 0px;
        margin-top: 0px;
        //background: #fff;
    }
    .v-input__slot {
        margin-bottom: 0;
    }
    .close-btn {
        position: absolute;
        top: 2px;
        right: 0px !important;
        padding: 0 !important;
        margin: 0 !important;
        min-width: auto !important;
    }
    .v-input__slot {
        padding: 0 !important;
        margin: 0 !important;
    }
    .v-text-field .v-label {
        max-width: 100%;
        min-width: 0px;
        width: 100%;
        padding: 0;
        color: #929292 !important;
    }
    .v-messages {
        text-align: center;
        font-size: 0.86rem;
        margin-top: 10px;
        color: red !important;
    }
    .v-input .v-label {
        height: 26px;
        line-height: 26px;
    }
    .v-text-field .v-label.v-label--active {
        transform-origin: top center !important;
        color: #fff !important;
        margin-top: -12px;
    }
    .gr-zl {
        margin-top: -10px;
    }
}
.theme--dark.v-card > .v-card__text,
.theme--dark.v-card .v-card__subtitle {
    color: #fff;
}
@media (max-width: 750px) {
    .v-dialog .v-responsive__content {
        max-width: 250px;
    }
    .v-dialog > .v-card > .v-card__title {
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 0.0125em;
        padding: 16px 0 0;
    }
    .dialog-card .v-input input {
        color: #000 !important;
        text-align: center;
        max-height: 100%;
        font-size: 1rem;
        height: 32px;
    }
}
</style>
