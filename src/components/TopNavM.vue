<template>
    <v-container class="align-center">
        <a @click="$router.back(-1)" class="ff-btn">❮ 返回</a>
        <v-menu offset-y :close-on-content-click="closeOnContentClick" transition="scroll-y-transition">
            <template v-slot:activator="{ on, attrs }">
                <a class="top-m" v-bind="attrs" v-on="on"><img src="../assets/images/m-menu.png" /></a>
            </template>
            <v-list class="top-bar-list menu-mlist">
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item-title class="mr-n16">活動辦法</v-list-item-title>
                    </template>
                    <v-list-item router-link to="/illustration">
                        <span>同人二創比賽</span>
                    </v-list-item>
                    <v-list-item router-link to="/cosplay">
                        <span>COSPLAY選拔大賽</span>
                    </v-list-item>
                </v-list-group>
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item-title class="mr-n16">作品票選</v-list-item-title>
                    </template>

                    <v-list-item router-link to="/cosplay/vote">
                        <span>Cosplay-競賽組</span>
                    </v-list-item>
                    <v-list-item router-link to="/illustration/vote">
                        <span>插畫-競賽組</span>
                    </v-list-item>
                    <v-list-item router-link to="/amateur/vote">
                        <span>綜合同好組</span>
                    </v-list-item>
                </v-list-group>
                <v-list-item href="https://ak.txwy.tw/" target="_blank">
                    <span>回到官網</span>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-container>
</template>

<script>
export default {
    name: 'TopNavM',
    data: () => ({
        drawer: null,
        closeOnContentClick: false,
    }),
}
</script>

<style lang="scss">
.top-navm {
    background: #1a1b1b;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    display: none;
}
.top-m {
    position: absolute;
    right: 1%;
    z-index: 100;
    background: none;
    max-width: 52px;
    top: 8%;
}

.menu-mlist {
    border: 1px solid #fff !important;
    box-shadow: 0 !important;
}
.ff-btn {
    position: relative;
    z-index: 10;
    font-size: 22px;
    color: #ffffff !important;
    top: 16px;
    left: 20px;
    text-decoration: none;
    display: none;
}
@media (max-width: 750px) {
    .top-navm {
        display: block;
        z-index: 10;
    }
    .v-sheet.v-list {
        border-radius: 0;
        padding: 0;
    }
    .ff-btn {
        display: inline-block;
    }
    .v-list-item--link {
        border: 1px solid #fff;
        width: 220px;
        text-align: center;
        .primary--text {
            color: #fff !important;
            caret-color: #2196f3 !important;
        }
    }
    .top-bar-list .v-list-item--active,
    .top-bar-list .v-list-item:hover {
        color: #fff !important;
        opacity: 1;
    }
    .v-list-group--active .v-list-group__header,
    .v-list-group--active .v-list-group__header:hover {
        background: none !important;
    }
    .v-list-group__items {
        background: #353535;
        span {
            font-size: 15px !important;
        }
        .v-list-item--active,
        .v-list-item:hover {
            color: #fff;
            //background: #000 !important;
            opacity: 1;
        }
    }
    .v-list-item__title {
        align-self: center;
        font-size: 17px;
    }
}
</style>
